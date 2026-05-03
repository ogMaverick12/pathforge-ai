// ============================================================
// PATHFORGE AI — CORE INTELLIGENCE ENGINES (v3)
// ============================================================

import { CAREERS, type CareerProfile, type InstitutionData } from './career-database';
import { SCHOLARSHIPS, type Scholarship } from './scholarship-database';
import { ALL_GLOBAL_INSTITUTIONS } from './institution-database';
import type { ForgeProfile, GeneratedResults, CareerPath, RealityFlag, ScholarshipMatch } from './types';

export function getInstitutions(careerId: string) {
  const career = CAREERS[careerId];
  if (!career) return [];
  const base = [...career.topInstitutions];
  const globalInsts = ALL_GLOBAL_INSTITUTIONS.filter(i => i.careers.includes(careerId));
  for (const g of globalInsts) {
    if (!base.find(b => b.name === g.name)) {
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

// ─── PROBABILITY CALCULATOR ───────────────────────────────────────────────────
export function calculateProbability(profile: ForgeProfile, careerId: string, mode: "safe" | "balanced" | "aggressive"): number {
  const career = CAREERS[careerId];
  if (!career) return 30;

  const targetMarks = mode === "safe" ? career.minMarks : mode === "balanced" ? (career.minMarks + career.minMarksStretch) / 2 : career.minMarksStretch;

  const marksFit = Math.min(profile.marks / targetMarks, 1);
  const streamFit = career.streams.includes(profile.stream) ? 1.0 : 0.35;

  const budgetMap: Record<string, number> = {
    "<1L": 50000, "1-3L": 200000, "3-6L": 450000, "6-12L": 900000,
    "12-25L": 1850000, "25L+": 4000000, "full_scholarship": 0
  };
  const budget = budgetMap[profile.budget] || 200000;
  const allInsts = getInstitutions(careerId);
  const sortedInstitutions = [...allInsts].sort((a,b) => a.fees_per_year - b.fees_per_year);
  const minInstitutionFee = sortedInstitutions[0]?.fees_per_year || 200000;
  const budgetFit = profile.budget === "full_scholarship" ? 0.7 : Math.min(budget / (minInstitutionFee * 4), 1);

  const trendBonus = profile.trend === "improving" ? 0.08 : profile.trend === "declining" ? -0.12 : 0;
  const abroadPenalty = career.globalScope && profile.abroad_open === "no" ? -0.1 : 0;
  const modeMultiplier = mode === "safe" ? 1.1 : mode === "balanced" ? 1.0 : 0.75;

  const raw = ((marksFit * 0.40) + (streamFit * 0.30) + (budgetFit * 0.20) + 0.10 + trendBonus + abroadPenalty) * modeMultiplier;
  return Math.min(Math.max(Math.round(raw * 100), 8), 94);
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

  // Fallback: if all filtered out, return cheapest 3 from original list
  return filtered.length > 0 ? filtered : [...institutions].sort((a, b) => a.fees_per_year - b.fees_per_year).slice(0, 3);
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

    allInstitutions = [...allInstitutions, ...availableInstitutions];

    const prob = calculateProbability(profile, cId, modes[index]);

    let rationale = "";
    if (index === 0) {
       rationale = `Given your ${profile.marks}% in ${profile.stream}, ${c.name} is the most mathematically secure path within your interest area.`;
    } else if (index === 1) {
       rationale = `A pivot to ${c.name} offers higher leverage. It uses similar foundational skills but offers a different trajectory.`;
    } else {
       rationale = `Based on your deep aspirations, ${c.name} represents the maximum realization of that dream.`;
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
    paths,
    examRoadmap,
    portfolioRoadmap,
    realityFlags,
    scholarships,
    skillDomains: career.domains,
    institutions: allInstitutions
  };
}
