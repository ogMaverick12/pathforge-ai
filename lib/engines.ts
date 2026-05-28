// ============================================================
// PATHFORGE AI — CORE INTELLIGENCE ENGINES (v4)
// ============================================================

import { CAREERS, type CareerProfile, type InstitutionData } from './career-database';
import { ALL_SCHOLARSHIPS as SCHOLARSHIPS, type Scholarship } from './scholarship-database';
import { ALL_GLOBAL_INSTITUTIONS } from './institution-database';
import type { ForgeProfile, GeneratedResults, CareerPath, RealityFlag, ScholarshipMatch } from './types';

export function getInstitutions(careerId: string) {
  const career = CAREERS[careerId];
  if (!career) return [];
  const base = [...career.topInstitutions];
  const globalInsts = ALL_GLOBAL_INSTITUTIONS.filter(i => i.careers.includes(careerId));
  for (const g of globalInsts) {
    if (!base.find(b => b.name.toLowerCase() === g.name.toLowerCase())) {
      base.push({
        name: g.name,
        tier: g.tier,
        city: g.city,
        state: g.country,
        fees_per_year: g.fees_per_year_inr,
        cutoff_description: g.cutoff_description,
        placement_median: "₹" + Math.round(g.placement_median_inr / 100000) + "L",
        type: g.type
      });
    }
  }
  return base;
}

import { retrieveRelevantCareers } from './rag-engine';

// The old levenshtein and analyzeDream functions have been moved to rag-engine.ts

// ─── PROBABILITY CALCULATOR (v2 — BUG-007/008 fix) ───────────────────────────
// Stream mismatch is now MULTIPLICATIVE (hard cap) not additive.
// Arts→ML Engineer: was 93%, now ~12%. Commerce→Aerospace: was 94%, now ~15%.
export function calculateProbability(profile: ForgeProfile, careerId: string, mode: "safe" | "balanced" | "aggressive"): number {
  const career = CAREERS[careerId];
  if (!career) return 15;

  const targetMarks = mode === "safe" ? career.minMarks : mode === "balanced" ? (career.minMarks + career.minMarksStretch) / 2 : career.minMarksStretch;

  const marksFit = Math.min(profile.marks / targetMarks, 1);

  // Stream match: MULTIPLICATIVE cap — wrong stream hard-caps total probability
  const streamMatch = career.streams.includes(profile.stream);
  const streamMultiplier = streamMatch ? 1.0 : 0.20;

  const budgetMap: Record<string, number> = {
    "<1L": 50000, "1-3L": 200000, "3-6L": 450000, "6-12L": 900000,
    "12-25L": 1850000, "25L+": 4000000, "full_scholarship": 0
  };
  const budget = budgetMap[profile.budget] || 200000;
  const allInsts = getInstitutions(careerId);
  const sortedInstitutions = [...allInsts].sort((a,b) => a.fees_per_year - b.fees_per_year);
  const minInstitutionFee = sortedInstitutions[0]?.fees_per_year || 200000;
  const budgetFit = profile.budget === "full_scholarship" ? 0.7 : Math.min(budget / (minInstitutionFee * 4), 1);

  const trendBonus = profile.trend === "improving" ? 0.05 : profile.trend === "declining" ? -0.10 : 0;
  const abroadPenalty = career.globalScope && profile.abroad_open === "no" ? -0.08 : 0;
  const modeMultiplier = mode === "safe" ? 1.0 : mode === "balanced" ? 0.85 : 0.55;

  // Extra penalty for extremely low marks — marks=0 should give near-floor probability
  const lowMarksPenalty = profile.marks < 30 ? (0.3 + (profile.marks / 30) * 0.7) : 1.0;

  // Base probability from marks + budget + trend (stream is multiplicative, not additive)
  const baseProbability = (marksFit * 0.50) + (budgetFit * 0.25) + 0.08 + trendBonus + abroadPenalty;
  const raw = baseProbability * streamMultiplier * modeMultiplier * lowMarksPenalty;
  const unclamped = Math.min(Math.max(Math.round(raw * 100), 3), 94);

  // Mode-specific clamping: safe=higher range, aggressive=lower range
  if (mode === "safe") return Math.min(Math.max(unclamped, 8), 94);
  if (mode === "balanced") return Math.min(Math.max(unclamped, 5), 78);
  return Math.min(Math.max(unclamped, 3), 48); // aggressive
}

// ─── REALITY CHECK ENGINE ─────────────────────────────────────────────────────
export function generateRealityFlags(profile: ForgeProfile, careerId: string): RealityFlag[] {
  const career = CAREERS[careerId];
  if (!career) return [];
  const flags: RealityFlag[] = [];
  const budgetMap: Record<string, number> = { "<1L": 50000, "1-3L": 200000, "3-6L": 450000, "6-12L": 900000, "12-25L": 1850000, "25L+": 4000000, "full_scholarship": 0 };
  const budget = budgetMap[profile.budget] || 200000;

  if (profile.marks < career.minMarks - 10) {
    flags.push({
      type: "warning",
      title: "MARKS GAP",
      message: `${career.name} typically requires ${career.minMarks}%+ consistently. You're at ${profile.marks}%. This is a 12–18 month remediation project before you're competitive.`
    });
  }

  if (!career.streams.includes(profile.stream)) {
    flags.push({
      type: "danger",
      title: "STREAM MISMATCH",
      message: `${career.name} is almost exclusively for ${career.streams.join("/")} students. Your ${profile.stream} stream creates a structural barrier — not impossible, but you need to understand the bridge path.`
    });
  }

  const allInsts = getInstitutions(careerId);
  if (budget < 200000 && allInsts.every(i => i.fees_per_year > 200000)) {
    flags.push({
      type: "warning",
      title: "BUDGET GAP",
      message: `Your stated budget is under ₹2L/year. The target institutions cost ₹${Math.round(allInsts[0].fees_per_year / 100000)}L/year. PathForge has identified scholarships below — a loan + scholarship strategy is essential.`
    });
  }

  if (profile.timeline === "urgent" && career.timeline > 4) {
    flags.push({
      type: "warning",
      title: "TIMELINE MISMATCH",
      message: `${career.name} is a ${career.timeline}-year minimum commitment. Your 'urgent' timeline expectation needs recalibration. In 2-3 years, you'll be mid-training, not employed.`
    });
  }

  if (careerId === "cricketer") {
    flags.push({
      type: "danger",
      title: "SURVIVAL ODDS",
      message: "India produces 300,000+ competitive cricketers yearly. ~300 reach Ranji. ~15 break into international cricket annually. PathForge will generate a mandatory parallel career path."
    });
  }

  if (profile.marks < 60 && (careerId === "software_engineer" || careerId === "data_scientist")) {
    flags.push({
      type: "warning",
      title: "SELF-LEARNING REQUIRED",
      message: "At your current marks, premium college placement is unlikely. However, self-taught developers at top product companies exist — it requires 2x more portfolio discipline than college route."
    });
  }

  if (profile.abroad_open === "no" && career.globalScope) {
    flags.push({
      type: "warning",
      title: "LIMITING YOUR CEILING",
      message: `${career.name} has significantly higher earning potential internationally. By ruling out abroad options, you're capping your salary ceiling at the India median. Consider keeping abroad as a future option.`
    });
  }

  // ── DIVERSITY EXPANSION FLAGS ──────────────────────────────────────────────
  if (careerId === "esports_professional") {
    flags.push({
      type: "danger",
      title: "INCOME REALITY CHECK",
      message: "Less than 0.1% of gamers earn a living wage from competition. Treat gaming as the niche, content creation as the business. A YouTube channel about your game journey starts generating income in 12–18 months — competitive winnings may never."
    });
  }

  if (careerId === "nurse" && profile.abroad_open !== "no") {
    flags.push({
      type: "warning",
      title: "10X SALARY AVAILABLE ABROAD",
      message: "Nursing in India pays ₹20–30K/month. Australia, UK, and Canada pay ₹60–90L/year for the same role. NCLEX (USA) or NMC OSCE (UK) is a 6–12 month investment with life-changing financial return. PathForge strongly recommends the international pathway."
    });
  }

  if (careerId === "yoga_wellness_instructor") {
    flags.push({
      type: "warning",
      title: "THE GLOBAL OPPORTUNITY",
      message: "Indian yoga teachers are uniquely positioned globally — authenticity premium is real. European and American studios pay ₹30–80L for Indian teachers with proper certification and English fluency. The domestic market is oversaturated at the entry level."
    });
  }

  if (["marine_biologist", "space_scientist", "research_scientist"].includes(careerId) && profile.abroad_open !== "no") {
    flags.push({
      type: "warning",
      title: "FUNDED PHD = FREE EDUCATION",
      message: "PhD programs at MIT, ETH Zurich, Max Planck, and KAUST are FULLY FUNDED with stipends of $20,000–40,000/year. You are paid to learn. The trick is getting in — which requires exceptional undergraduate research. Start your research career now."
    });
  }

  if (careerId === "diplomat_international_relations" && profile.stream !== "Arts") {
    flags.push({
      type: "warning",
      title: "LANGUAGE IS YOUR SUPERPOWER",
      message: "IFS officers with rare language proficiency (Mandarin, Arabic, Russian, Swahili) are assigned to critical postings and advance faster. Starting a second language in Class 11/12 gives you a 6-year head start on most IFS aspirants."
    });
  }

  if (profile.abroad_open === "yes" || profile.abroad_open === "if_funded" || profile.abroad_open === "only_abroad") {
    flags.push({
      type: "success",
      title: "FREE EDUCATION EXISTS",
      message: "École 42 (software): completely free, no degree required. University of Oslo: free for all nationalities. KAUST (research): free + $20K/year stipend. German universities: €1,000/year. These are legitimate, prestigious options PathForge has matched for you."
    });
  }

  return flags;
}

// ─── SCHOLARSHIP MATCHER ──────────────────────────────────────────────────────
export function matchScholarships(profile: ForgeProfile): ScholarshipMatch[] {
  const budgetMap: Record<string, number> = { "<1L": 50000, "1-3L": 200000, "3-6L": 450000, "6-12L": 900000, "12-25L": 1850000, "25L+": 4000000, "full_scholarship": 0 };
  const budget = budgetMap[profile.budget] || 200000;
  const isLowBudget = budget < 450000 || profile.budget === "full_scholarship";
  const isAbroadOpen = profile.abroad_open === "yes" || profile.abroad_open === "if_funded" || profile.abroad_open === "only_abroad";

  let eligibleScholarships = SCHOLARSHIPS;
  if (profile.abroad_open === "only_abroad") {
    eligibleScholarships = eligibleScholarships.filter(s => s.region !== "india");
  } else if (profile.abroad_open === "no") {
    // Hard filter: abroad=no means ONLY India scholarships, zero leakage
    eligibleScholarships = eligibleScholarships.filter(s => s.region === "india");
  }

  const matches: ScholarshipMatch[] = [];

  for (const s of eligibleScholarships) {
    let score = 0;

    // Hard disqualifiers
    if (s.criteria.streams && !s.criteria.streams.includes(profile.stream)) continue;
    if (s.criteria.minMarks && profile.marks < s.criteria.minMarks - 10) continue;
    if (s.criteria.abroadRequired && !isAbroadOpen) continue;
    if (s.criteria.maxIncome !== undefined && s.criteria.maxIncome !== null && budget > s.criteria.maxIncome * 2) continue;
    if (s.criteria.gender && (profile as any).gender && (profile as any).gender !== 'prefer_not_to_say' && s.criteria.gender !== (profile as any).gender) continue;

    // Scoring
    if (s.criteria.streams?.includes(profile.stream)) score += 25;
    if (s.criteria.minMarks && profile.marks >= s.criteria.minMarks) score += 30;
    else if (s.criteria.minMarks && profile.marks >= s.criteria.minMarks - 5) score += 15;
    if (isLowBudget && s.matchFactors.includes("low_budget")) score += 25;
    if (isAbroadOpen && s.matchFactors.includes("abroad_open")) score += 20;
    if (profile.trend === "improving") score += 5;
    if (s.competitionLevel === "low") score += 10;
    else if (s.competitionLevel === "moderate") score += 5;

    const tier: "high" | "moderate" | "reach" = score >= 60 ? "high" : score >= 35 ? "moderate" : "reach";

    matches.push({ scholarship: s, score, tier, matchReason: generateMatchReason(profile, s) });
  }

  return matches.sort((a, b) => b.score - a.score).slice(0, 6);
}

function generateMatchReason(profile: ForgeProfile, s: Scholarship): string {
  const reasons: string[] = [];
  if (s.criteria.streams?.includes(profile.stream)) reasons.push(`${profile.stream} stream matches`);
  if (s.criteria.minMarks && profile.marks >= s.criteria.minMarks) reasons.push(`${profile.marks}% exceeds ${s.criteria.minMarks}% threshold`);
  if (s.matchFactors.includes("low_budget")) reasons.push("financial need profile aligns");
  if (s.matchFactors.includes("abroad_open")) reasons.push("study abroad interest matches");
  return reasons.join(" · ") || "General eligibility match";
}

// ─── MILESTONE GENERATOR ──────────────────────────────────────────────────────
function generateMilestones(profile: ForgeProfile, careerId: string, mode: string): { name: string; contingency?: string }[] {
  const career = CAREERS[careerId];
  if (!career) return [];
  const classNum = parseInt(profile.class_level) || 11;
  const baseMonth = classNum >= 11 ? 3 : 6;

  let examRequired = career.examRequired;
  if (profile.abroad_open === "only_abroad" && examRequired && (examRequired.includes("JEE") || examRequired.includes("NEET") || examRequired.includes("UPSC"))) {
    examRequired = "SAT / AP / International Requirements";
  }

  const milestones = [];

  milestones.push({ 
    name: examRequired ? `Month ${baseMonth}: Begin structured ${examRequired} preparation` : `Month ${baseMonth}: Start building portfolio/skills`,
    contingency: examRequired ? "If mock scores are low, pivot to portfolio-based entry routes." : undefined
  });

  if (classNum <= 12) {
    milestones.push({ 
      name: `Month ${baseMonth + 5}: First mock test target — score ${mode === "safe" ? "70th" : mode === "balanced" ? "85th" : "95th"} percentile`
    });
    
    milestones.push({ 
      name: `Year 1 (College): Complete undergraduate domain foundation (${career.domains[0]?.name || "Core Skills"})`,
      contingency: career.domains[0]?.contingency
    });

    milestones.push({ 
      name: `Year ${Math.ceil(career.timeline / 2)} (College): First internship/practical experience`,
      contingency: "If unable to secure internship, contribute heavily to Open Source or indie projects."
    });

    milestones.push({ 
      name: `Year ${career.timeline}: ${mode === "aggressive" ? "Target top companies directly post-B.Tech" : "Undergrad Graduation + entry placement"}`
    });
  } else {
    // For older students or college grads
    milestones.push({ 
      name: `Year 1: Complete postgraduate/advanced domain foundation (${career.domains[0]?.name || "Core Skills"})`,
      contingency: career.domains[0]?.contingency
    });

    milestones.push({ 
      name: `Year 2: Advanced research, thesis, or senior internship`,
      contingency: "If unable to secure internship, focus on high-impact projects or certifications."
    });

    milestones.push({ 
      name: `Year ${career.timeline}: ${mode === "aggressive" ? "Target top companies directly" : "Graduation + senior placement"}`
    });
  }

  return milestones;
}


// ─── CONSTRAINT HARD FILTERS (GAP-5) ──────────────────────────────────────────
function applyConstraintFilters(institutions: InstitutionData[], profile: ForgeProfile): InstitutionData[] {
  let filtered = [...institutions];

  // abroad_open: "no" → remove ALL foreign institutions
  if (profile.abroad_open === "no") {
    filtered = filtered.filter(i => i.type !== "global");
  }

  // abroad_open: "if_funded" → only show global institutions with verified scholarships
  if (profile.abroad_open === "if_funded") {
    filtered = filtered.filter(i => {
      if (i.type !== "global") return true; // domestic always OK
      // Check if this global institution has scholarship_available flag
      const globalInst = ALL_GLOBAL_INSTITUTIONS.find(g => g.name.toLowerCase() === i.name.toLowerCase());
      return globalInst?.scholarship_available === true;
    });
  }

  // loan_open: "no" → remove institutions exceeding budget
  if (profile.loan_open === "no") {
    const budgetMap: Record<string, number> = {
      "<1L": 100000, "1-3L": 300000, "3-6L": 600000, "6-12L": 1200000,
      "12-25L": 2500000, "25L+": 5000000, "full_scholarship": 0
    };
    const maxBudget = budgetMap[profile.budget] || 600000;
    const tolerance = maxBudget <= 300000 ? 1.0 : 1.2;
    filtered = filtered.filter(i => i.fees_per_year <= maxBudget * tolerance);
  }

  // BUG-003 FIX: When ALL institutions exceed budget AND loan_open = "no",
  // return EMPTY — do NOT fall back to cheapest 3 (that bypasses the hard filter).
  if (filtered.length === 0 && profile.loan_open === "no") {
    return []; // Hard filter: no affordable options exist
  }
  
  // For loan_open = "yes" or "maybe", fall back to cheapest 3
  return filtered.length > 0 ? filtered : [...institutions].sort((a, b) => a.fees_per_year - b.fees_per_year).slice(0, 3);
}

// ─── BRIDGE PATHWAY GENERATOR ─────────────────────────────────────────────────
// When stream mismatch is detected, generate a concrete re-routing plan
const BRIDGE_PATHS: Record<string, Record<string, string>> = {
  // Arts stream → STEM/Commerce careers
  "Arts": {
    "software_engineer": "Arts → BCA (3yr) → MCA (2yr) → Software Development",
    "data_scientist": "Arts → B.Sc Statistics/Math (3yr) → M.Sc Data Science (2yr) → Industry",
    "ai_ml_researcher": "Arts → BCA (3yr) → M.Tech AI (2yr) → Research",
    "doctor_mbbs": "Arts → NIOS PCB recertification (1yr) → NEET → MBBS (5.5yr)",
    "aerospace_engineer": "Arts → Diploma in Engineering (3yr) → B.Tech Lateral Entry (3yr)",
    "mechanical_engineer": "Arts → Polytechnic Diploma (3yr) → B.Tech Lateral (3yr)",
    "civil_engineer": "Arts → Polytechnic Diploma (3yr) → B.Tech Lateral (3yr)",
    "chartered_accountant": "Arts → CA Foundation (direct entry) → Articleship → CA Final",
    "nuclear_engineer": "Arts → B.Sc Physics (3yr) → GATE → M.Tech Nuclear (2yr)",
  },
  // Commerce stream → STEM careers
  "Commerce": {
    "software_engineer": "Commerce → BCA/B.Sc CS (3yr) → MCA/M.Sc CS (2yr) → Industry",
    "data_scientist": "Commerce → B.Sc Statistics (3yr) → M.Sc Data Science (2yr)",
    "doctor_mbbs": "Commerce → NIOS PCB (1yr) → NEET → MBBS (5.5yr)",
    "aerospace_engineer": "Commerce → Polytechnic (3yr) → B.Tech Lateral Entry (3yr)",
    "mechanical_engineer": "Commerce → Polytechnic (3yr) → B.Tech Lateral Entry (3yr)",
    "ai_ml_researcher": "Commerce → BCA (3yr) → M.Tech AI/ML (2yr) → Research",
  },
  // PCB stream → non-medical careers
  "PCB": {
    "software_engineer": "PCB → B.Sc (3yr) → MCA (2yr) OR self-taught dev route",
    "chartered_accountant": "PCB → CA Foundation (direct) → Articleship → CA Final",
    "lawyer": "PCB → CLAT/LSAT → 5yr Integrated LLB",
    "data_scientist": "PCB → B.Sc Biostatistics (3yr) → M.Sc Data Science (2yr)",
    "aerospace_engineer": "PCB → B.Sc Physics (3yr) → GATE → M.Tech (2yr)",
  },
  // PCM stream → medical/arts careers
  "PCM": {
    "doctor_mbbs": "PCM → NEET (Biology self-study) — some PCM students clear NEET",
    "lawyer": "PCM → CLAT/LSAT → 5yr Integrated LLB (stream-agnostic)",
    "journalist": "PCM → BA Journalism (3yr) or direct PG Diploma in Journalism",
    "psychologist": "PCM → BA Psychology (3yr) → MA → Clinical training",
  },
};

function generateBridgePath(profile: ForgeProfile, careerId: string): string | undefined {
  const career = CAREERS[careerId];
  if (!career) return undefined;
  if (career.streams.includes(profile.stream)) return undefined; // No bridge needed
  return BRIDGE_PATHS[profile.stream]?.[careerId] ||
    `${profile.stream} → Foundation degree in ${career.streams[0]} domain (3yr) → Specialization in ${career.name} (2yr)`;
}

// ─── EXAM BASE RATES (GAP-2) ─────────────────────────────────────────────────
const EXAM_BASE_RATES: Record<string, string> = {
  "UPSC Civil Services Examination": "< 0.1% final selection rate (~10 lakh applicants, ~1000 selected)",
  "NEET-UG": "~10% get government medical seats (~20 lakh applicants)",
  "JEE Advanced": "~2.5% qualify from JEE Mains (~10 lakh → ~25,000)",
  "JEE Mains": "~25% qualify for JEE Advanced counselling",
  "CLAT": "~5% get top NLU seats (~60,000 applicants, ~3000 NLU seats)",
  "CA Final": "~10-15% pass rate per attempt",
  "CA Foundation": "~30-35% pass rate per attempt",
  "GATE": "~15-17% qualify (varies by branch)",
  "NDA": "~3-4% selection rate (~4.5 lakh applicants, ~400 selected per cycle)",
  "CAT": "~1% get IIM-A/B/C calls (~2.5 lakh applicants)",
  "NEET-PG": "~50% qualify, ~15% get government seats",
  "UGC NET": "~6-8% qualify for Assistant Professor",
  "NIFT Entrance": "~5% selection rate",
  "NID DAT": "~3% selection rate",
};

// ─── PHASE 2: ROI CALCULATOR ──────────────────────────────────────────────────
// Returns 5-year, 10-year, 20-year ROI based on career salary data vs total investment
export function calculateROI(profile: ForgeProfile, careerId: string): { investmentTotal: string; roi5yr: string; roi10yr: string; roi20yr: string; breakEvenYears: number; verdict: string } {
  const career = CAREERS[careerId];
  if (!career) return { investmentTotal: 'N/A', roi5yr: 'N/A', roi10yr: 'N/A', roi20yr: 'N/A', breakEvenYears: 0, verdict: 'Unknown' };

  const budgetMap: Record<string, number> = { '<1L': 50000, '1-3L': 200000, '3-6L': 450000, '6-12L': 900000, '12-25L': 1850000, '25L+': 4000000, 'full_scholarship': 0 };
  const yearlyBudget = budgetMap[profile.budget] || 200000;
  const totalInvestment = yearlyBudget * career.timeline;

  // Parse salary ranges (extract numeric LPA values)
  const parseSalary = (s: string): number => {
    const match = s.match(/(\d+(?:\.\d+)?)/g);
    if (!match) return 300000;
    const vals = match.map(Number);
    return (vals.reduce((a, b) => a + b, 0) / vals.length) * 100000; // avg LPA → annual
  };

  const entryPay = parseSalary(career.salaryRange.entry);
  const midPay = parseSalary(career.salaryRange.mid);
  const seniorPay = parseSalary(career.salaryRange.senior);

  // 5yr: entry pay * 3 working years (after timeline)
  const workingYrs5 = Math.max(5 - career.timeline, 1);
  const earnings5yr = entryPay * workingYrs5;
  const roi5yr = totalInvestment > 0 ? ((earnings5yr - totalInvestment) / totalInvestment * 100) : 0;

  // 10yr: entry (2yr) + mid (remaining)
  const workingYrs10 = Math.max(10 - career.timeline, 1);
  const earnings10yr = entryPay * Math.min(workingYrs10, 2) + midPay * Math.max(workingYrs10 - 2, 0);
  const roi10yr = totalInvestment > 0 ? ((earnings10yr - totalInvestment) / totalInvestment * 100) : 0;

  // 20yr: entry (2yr) + mid (8yr) + senior (remaining)
  const workingYrs20 = Math.max(20 - career.timeline, 1);
  const earnings20yr = entryPay * Math.min(workingYrs20, 2) + midPay * Math.min(Math.max(workingYrs20 - 2, 0), 8) + seniorPay * Math.max(workingYrs20 - 10, 0);
  const roi20yr = totalInvestment > 0 ? ((earnings20yr - totalInvestment) / totalInvestment * 100) : 0;

  // Break-even: years until cumulative earnings exceed investment
  let cumulative = 0;
  let breakEven = career.timeline;
  for (let y = 1; y <= 20; y++) {
    cumulative += y <= 2 ? entryPay : y <= 10 ? midPay : seniorPay;
    if (cumulative >= totalInvestment && breakEven === career.timeline) {
      breakEven = career.timeline + y;
      break;
    }
  }

  const fmt = (n: number) => n >= 10000000 ? `₹${(n / 10000000).toFixed(1)}Cr` : `₹${(n / 100000).toFixed(1)}L`;
  const verdict = roi10yr > 500 ? 'Excellent' : roi10yr > 200 ? 'Good' : roi10yr > 50 ? 'Moderate' : 'Low';

  return {
    investmentTotal: fmt(totalInvestment),
    roi5yr: `${Math.round(roi5yr)}%`,
    roi10yr: `${Math.round(roi10yr)}%`,
    roi20yr: `${Math.round(roi20yr)}%`,
    breakEvenYears: breakEven,
    verdict
  };
}

// ─── PHASE 2: EXAM DIFFICULTY MODIFIER ────────────────────────────────────────
// Adjusts probability based on specific exam difficulty tiers
// Source: NTA, UPSC, ICAI, NID, NIFT annual reports (2023-2025 averages)
const EXAM_DIFFICULTY: Record<string, number> = {
  // Ultra-competitive (pass rate <3%)
  'UPSC Civil Services Examination': 0.30, // ~0.1% selection rate (2024: 1M applicants, 1000 selected)
  'IAS': 0.30,
  // Very hard (pass rate 3-15%)
  'JEE Advanced': 0.40,       // ~2.5% selection from JEE Mains qualifiers
  'NID DAT': 0.40,            // ~3% acceptance rate
  'CAT': 0.42,                // ~5% score 99+ percentile
  'CA Final': 0.45,           // ~10-15% pass rate per attempt (ICAI 2024)
  'ICRB Exam / GATE': 0.38,  // ISRO recruitment: <2% selection
  // Hard (pass rate 15-35%)
  'NIFT Entrance': 0.48,     // ~8% acceptance
  'CLAT': 0.55,              // ~15% qualify for top 5 NLUs
  'NDA': 0.50,               // ~3% final selection from 5L+ applicants
  'NDA / CDS / AFCAT': 0.50,
  'GATE': 0.55,              // ~17% qualify
  'UGC NET': 0.50,           // ~6-8% qualify
  'CA Foundation': 0.65,     // ~30-40% pass rate (ICAI)
  // Moderate (pass rate 35-60%)
  'NEET-UG': 0.60,           // ~50% qualify, but top college cutoffs much harder
  'NEET-PG': 0.60,           // ~50% qualify
  'JEE Mains': 0.70,         // ~25% qualify for counselling
  'IMU-CET': 0.65,           // ~40% qualify
  // Expansion career exams
  'IAI Actuarial Exams': 0.40, // ~10% per paper
  'CTET / State TET': 0.65,   // ~30% qualify
  'RBI Grade B': 0.35,        // ~1% selection rate
  'SSC CGL': 0.45,            // ~2% final selection
  'Indian Forest Service': 0.32, // ~0.5% selection
  'JEST / TIFR': 0.45,        // ~5% selection for research
  'CUCET': 0.70,              // ~40% qualify
  'Defence (CDS)': 0.48,      // ~3% final selection including SSB
};

function applyExamDifficulty(baseProbability: number, examRequired: string | null): number {
  if (!examRequired) return baseProbability;
  const modifier = EXAM_DIFFICULTY[examRequired];
  if (!modifier) return baseProbability;
  // Blend: 60% base probability + 40% exam difficulty factor
  return Math.round(baseProbability * 0.6 + baseProbability * modifier * 0.4);
}

// ─── PHASE 3: GEOGRAPHIC CONSTRAINT PROPAGATION ───────────────────────────────
// Matches state-level scholarships to user's location
export function matchStateScholarships(profile: ForgeProfile): ScholarshipMatch[] {
  const userState = ((profile as any).state || '').toLowerCase().trim();
  if (!userState) return [];

  // State name → scholarship ID prefix mapping
  const stateKeys: Record<string, string[]> = {
    'andhra pradesh': ['ap_'], 'arunachal pradesh': ['arunachal_'], 'assam': ['assam_'],
    'bihar': ['bihar_'], 'chhattisgarh': ['cg_'], 'goa': ['goa_'],
    'gujarat': ['gujarat_'], 'haryana': ['haryana_'], 'himachal pradesh': ['hp_'],
    'jharkhand': ['jharkhand_'], 'karnataka': ['karnataka_'], 'kerala': ['kerala_'],
    'madhya pradesh': ['mp_'], 'maharashtra': ['mh_'], 'manipur': ['manipur_'],
    'meghalaya': ['meghalaya_'], 'mizoram': ['mizoram_'], 'nagaland': ['nagaland_'],
    'odisha': ['odisha_'], 'punjab': ['punjab_'], 'rajasthan': ['rajasthan_'],
    'sikkim': ['sikkim_'], 'tamil nadu': ['tn_'], 'telangana': ['telangana_'],
    'tripura': ['tripura_'], 'uttar pradesh': ['up_'], 'uttarakhand': ['uttarakhand_'],
    'west bengal': ['wb_'], 'jammu and kashmir': ['jk_'], 'jammu & kashmir': ['jk_'],
  };

  const prefixes = stateKeys[userState] || [];
  if (prefixes.length === 0) return [];

  return SCHOLARSHIPS
    .filter(s => prefixes.some(p => s.id.startsWith(p)))
    .filter(s => {
      if (s.criteria.minMarks && profile.marks < s.criteria.minMarks - 10) return false;
      if (s.criteria.gender && (profile as any).gender && s.criteria.gender !== (profile as any).gender) return false;
      return true;
    })
    .map(s => ({
      scholarship: s,
      score: 80, // State scholarships get high relevance by default
      tier: 'high' as const,
      matchReason: `You're from ${userState} — this is your state's dedicated scholarship`
    }));
}

// ─── FRAMEWORK B: EXAM ROADMAP BUILDER ────────────────────────────────────────
import type { ExamRoadmap, ExamPhase, PortfolioRoadmap } from './types';
import { validateStreamEligibility } from './career-types';
import { retrieveRelevantCareersWithScores, retrieveRelevantScholarships } from './rag-engine';

function buildExamRoadmap(career: CareerProfile, profile: ForgeProfile): ExamRoadmap | undefined {
  if (career.careerType !== "B" || !career.examRequired) return undefined;
  
  const phases: ExamPhase[] = career.domains.map((d, i) => ({
    name: d.name,
    duration: `${d.timeMonths} months`,
    subjects: d.skills,
    resources: [d.topResource],
    milestone: `Complete ${d.name} phase`
  }));

  const baseRate = EXAM_BASE_RATES[career.examRequired] || "National statistics not available";
  
  return {
    examName: career.examRequired,
    eligibility: career.streams.includes(profile.stream) 
      ? `Your ${profile.stream} stream is eligible` 
      : `${career.examRequired} typically requires: ${career.streams.join(", ")}`,
    attempts: career.examRequired.includes("UPSC") ? "6 attempts (General), 9 (OBC), unlimited (SC/ST) until age 32/35/37" 
      : career.examRequired.includes("CA") ? "Unlimited attempts" 
      : "As per exam rules",
    phases,
    clearingProbability: calculateProbability(profile, career.id, "balanced"),
    examBaseRate: baseRate,
    backupPlan: career.domains.find(d => d.contingency)?.contingency || "Consider adjacent careers if exam doesn't work out within 3 attempts.",
    topCoaching: [career.domains[0]?.topResource || "Self-study recommended"],
    selfStudyResources: career.domains.map(d => d.topResource),
    realityNote: career.realityNote
  };
}

// ─── FRAMEWORK C: PORTFOLIO ROADMAP BUILDER ───────────────────────────────────
function buildPortfolioRoadmap(career: CareerProfile): PortfolioRoadmap | undefined {
  if (career.careerType !== "C") return undefined;
  
  return {
    trainingInstitutions: career.topInstitutions.slice(0, 3).map(i => ({
      name: i.name, type: i.type, cost: `₹${Math.round(i.fees_per_year / 1000)}K/year`
    })),
    skillAcquisitionPath: career.domains.map(d => ({
      skill: d.name,
      duration: `${d.timeMonths} months`,
      resource: d.topResource,
      deliverable: `${d.name} portfolio piece`
    })),
    portfolioMilestones: career.domains.map((d, i) => `Month ${career.domains.slice(0, i + 1).reduce((a, c) => a + c.timeMonths, 0)}: Complete ${d.name}`),
    communityEntryPoints: [`Join ${career.name} communities`, "Build online presence", "Network with industry professionals"],
    incomeReality: career.salaryRange.entry,
    timelineMonths: career.domains.reduce((a, d) => a + d.timeMonths, 0)
  };
}

// ─── MAIN RESULTS GENERATOR (v2.1 — All 7 GAPs fixed) ────────────────────────
export function generateResults(profile: ForgeProfile): GeneratedResults {
  // ── Step 1: Retrieve with confidence scores ──
  const scoredResults = retrieveRelevantCareersWithScores(profile, 3);
  
  // ── Step 2: Handle low-confidence / no results (GAP-4) ──
  let mainCareerId: string;
  let confidence: number;
  
  if (scoredResults.length === 0 || scoredResults[0].score < 10) {
    // Try broader search using deep_dream
    const broadResults = profile.deep_dream 
      ? retrieveRelevantCareersWithScores({ ...profile, dream_job: profile.deep_dream }, 3) 
      : [];
    
    if (broadResults.length > 0 && broadResults[0].score >= 10) {
      mainCareerId = broadResults[0].career.id;
      confidence = 0.3;
    } else {
      // True fallback — pick closest match but flag as low confidence
      mainCareerId = scoredResults[0]?.career.id || "software_engineer";
      confidence = 0.1;
    }
  } else {
    mainCareerId = scoredResults[0].career.id;
    confidence = Math.min(scoredResults[0].score / 100, 1.0);
  }

  const career = CAREERS[mainCareerId];
  if (!career) {
    return generateResults({ ...profile, dream_job: "software engineer" });
  }

  // ── Step 3: Stream eligibility ──
  const streamResult = validateStreamEligibility(profile.stream, mainCareerId);

  // ── Step 4: Get institutions with constraint filters (GAP-5) ──
  const distinctCareerIds = scoredResults.length > 0 
    ? scoredResults.map(r => r.career.id) 
    : [mainCareerId];

  const paths: CareerPath[] = [];
  const labels = ["SAFE", "BALANCED", "DREAM"];
  const taglines = ["The Logical Anchor", "The High-Leverage Pivot", "The Dream Execution"];
  const modes: ("safe" | "balanced" | "aggressive")[] = ["safe", "balanced", "aggressive"];
  const colors: ("success" | "ember" | "heat")[] = ["success", "ember", "heat"];
  
  let allInstitutions: InstitutionData[] = [];

  distinctCareerIds.forEach((cId, index) => {
    const c = CAREERS[cId];
    if (!c) return;

    let availableInstitutions = getInstitutions(cId);
    
    // Apply constraint hard filters (GAP-5)
    availableInstitutions = applyConstraintFilters(availableInstitutions, profile);
    
    if (profile.abroad_open === "only_abroad") {
      const globalOnly = availableInstitutions.filter(i => i.type === "global");
      if (globalOnly.length > 0) availableInstitutions = globalOnly;
    }

    const sortedByFees = [...availableInstitutions].sort((a,b) => a.fees_per_year - b.fees_per_year);
    
    let targetInst;
    if (index === 0) {
      targetInst = availableInstitutions.filter(i => i.tier >= 2).sort((a,b) => a.fees_per_year - b.fees_per_year)[0] || sortedByFees[sortedByFees.length - 1] || sortedByFees[0];
    } else if (index === 1) {
      targetInst = availableInstitutions.filter(i => i.tier <= 2)[0] || availableInstitutions[0];
    } else {
      targetInst = availableInstitutions[0];
    }

    // Guard: if ALL institutions were filtered out, use a placeholder
    if (!targetInst) {
      const allRaw = getInstitutions(cId);
      targetInst = allRaw[0] || { name: 'Self-Study / Online Route', tier: 1, city: 'Online', state: 'India', fees_per_year: 0, cutoff_description: 'Open', placement_median: 'Varies', type: 'domestic' as const };
    }

    allInstitutions = [...allInstitutions, ...availableInstitutions];

    const prob = applyExamDifficulty(
      calculateProbability(profile, cId, modes[index]),
      CAREERS[cId]?.examRequired || null
    );

    // Calculate ROI for this path
    const roi = calculateROI(profile, cId);

    let rationale = "";
    if (index === 0) {
       rationale = `Given your ${profile.marks}% in ${profile.stream}, ${c.name} is the most mathematically secure path within your interest area. ROI: ${roi.roi10yr} over 10 years.`;
    } else if (index === 1) {
       rationale = `A pivot to ${c.name} offers higher leverage. ROI: ${roi.roi10yr} over 10 years. Break-even in ~${roi.breakEvenYears} years.`;
    } else {
       rationale = `Based on your deep aspirations, ${c.name} represents the maximum realization of that dream. Investment: ${roi.investmentTotal}, ROI verdict: ${roi.verdict}.`;
    }

    paths.push({
      id: modes[index],
      label: labels[index],
      tagline: taglines[index],
      probability: prob,
      careerTarget: c.name,
      primaryRoute: `${targetInst.name} → ${c.name}`,
      institution: targetInst,
      timeline: `${c.timeline} years`,
      salaryEntry: c.salaryRange.entry,
      salaryMid: c.salaryRange.mid,
      rationale: rationale,
      milestones: generateMilestones(profile, cId, modes[index]),
      risks: [c.realityNote, `Probability: ${prob}%`],
      color: colors[index]
    });
  });

  // ── Step 5: Build reality flags ──
  const realityFlags = generateRealityFlags(profile, mainCareerId);
  
  // Add low confidence flag (GAP-4)
  if (confidence < 0.3) {
    realityFlags.unshift({
      type: "info",
      title: "LOW CONFIDENCE — CAREER NOT FULLY MAPPED",
      message: `We couldn't find a precise match for "${profile.dream_job}". The results below are our best approximation. Try being more specific about your dream career.`
    });
  }

  // ── Step 6: Build framework-specific roadmaps ──
  const examRoadmap = buildExamRoadmap(career, profile);
  const portfolioRoadmap = buildPortfolioRoadmap(career);

  // ── Step 7: Match scholarships with domain gating ──
  const scholarships = matchScholarships(profile);

  // ── Step 7b: Merge state-level scholarships (Phase 3) ──
  const stateScholarships = matchStateScholarships(profile);
  const mergedScholarships = [...scholarships];
  for (const ss of stateScholarships) {
    if (!mergedScholarships.find(m => m.scholarship.id === ss.scholarship.id)) {
      mergedScholarships.push(ss);
    }
  }
  // Re-sort and cap at 8 (expanded from 6 to accommodate state matches)
  mergedScholarships.sort((a, b) => b.score - a.score);

  // ── Step 8: Generate bridge pathway if stream mismatch ──
  const bridgePath = generateBridgePath(profile, mainCareerId);

  return {
    careerId: mainCareerId,
    careerName: career.name,
    careerType: career.careerType,
    careerDescription: career.description,
    honestTruth: career.realityNote,
    confidence,
    confidenceLabel: confidence >= 0.7 ? "High" : confidence >= 0.4 ? "Good" : "Low",
    streamEligibility: { 
      status: streamResult.status as "ELIGIBLE" | "INELIGIBLE" | "STREAM_AGNOSTIC", 
      reason: streamResult.reason 
    },
    bridgePath,
    paths,
    examRoadmap,
    portfolioRoadmap,
    realityFlags,
    scholarships: mergedScholarships.slice(0, 8),
    skillDomains: career.domains,
    institutions: allInstitutions
  };
}
