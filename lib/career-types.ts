// ============================================================
// PATHFORGE AI — CAREER TYPE SYSTEM (Master Prompt v2.0)
// ============================================================

export type CareerType = "A" | "B" | "C";
// A = Institution-Dependent (SAFE/BALANCED/DREAM)
// B = Exam-Dependent (Phased roadmap, clearing probability)
// C = Portfolio/Skill-Dependent (Skill path, milestones)

// ── STREAM ELIGIBILITY MATRIX ─────────────────────────────────
interface StreamRule {
  eligible: string[];
  agnostic: boolean;
  reason_if_ineligible: string;
}

const STREAM_ELIGIBILITY: Record<string, StreamRule> = {
  engineering_jee: {
    eligible: ["PCM"],
    agnostic: false,
    reason_if_ineligible: "Engineering via JEE requires PCM (Physics, Chemistry, Mathematics) at Class 12 level. This is a regulatory requirement by AICTE/UGC."
  },
  mbbs_neet: {
    eligible: ["PCB"],
    agnostic: false,
    reason_if_ineligible: "NMC regulations require PCB (Physics, Chemistry, Biology) at Class 12 for MBBS/BDS/BAMS/BHMS/BVSc admission via NEET."
  },
  pharmacy: {
    eligible: ["PCM", "PCB"],
    agnostic: false,
    reason_if_ineligible: "B.Pharm requires PCM or PCB at Class 12 level."
  },
  ca_cs_cma: {
    eligible: ["Commerce", "PCM", "PCB", "Arts"],
    agnostic: false,
    reason_if_ineligible: "CA/CS/CMA is open to Commerce, Science, and Arts streams (Arts may need bridging courses)."
  },
  upsc_civil_services: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  nda_army: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  nda_navy_airforce: {
    eligible: ["PCM"],
    agnostic: false,
    reason_if_ineligible: "NDA for Navy and Air Force (Flying/Technical branch) requires PCM at Class 12."
  },
  law_llb: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: false,
    reason_if_ineligible: "Law via CLAT is open to all streams."
  },
  design_nift_nid: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  film_creative: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  hotel_management: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: false,
    reason_if_ineligible: "Hotel Management accepts all streams."
  },
  commerce_general: {
    eligible: ["Commerce", "PCM", "Arts"],
    agnostic: false,
    reason_if_ineligible: "This career typically requires Commerce or related background."
  },
  sports_portfolio: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  arts_general: {
    eligible: ["Arts", "Commerce", "PCM", "PCB", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  },
  science_research: {
    eligible: ["PCM", "PCB"],
    agnostic: false,
    reason_if_ineligible: "Science research careers typically require PCM or PCB at Class 12."
  },
  any_stream: {
    eligible: ["PCM", "PCB", "Commerce", "Arts", "Vocational"],
    agnostic: true,
    reason_if_ineligible: ""
  }
};

// ── CAREER → STREAM RULE MAPPING ──────────────────────────────
const CAREER_STREAM_MAP: Record<string, string> = {
  software_engineer: "engineering_jee",
  data_scientist: "engineering_jee",
  ai_ml_engineer: "engineering_jee",
  cybersecurity: "engineering_jee",
  cloud_architect: "engineering_jee",
  game_developer: "engineering_jee",
  civil_engineer: "engineering_jee",
  mechanical_engineer: "engineering_jee",
  marine_engineer: "engineering_jee",
  doctor_mbbs: "mbbs_neet",
  pharmacist: "pharmacy",
  chartered_accountant: "ca_cs_cma",
  company_secretary: "ca_cs_cma",
  cost_accountant: "ca_cs_cma",
  actuary: "ca_cs_cma",
  investment_banker: "commerce_general",
  quant_finance: "engineering_jee",
  civil_services: "upsc_civil_services",
  defence_officer: "nda_army",
  lawyer: "law_llb",
  architect: "design_nift_nid",
  fashion_designer: "design_nift_nid",
  interior_designer: "design_nift_nid",
  ux_designer: "any_stream",
  filmmaker: "film_creative",
  animator: "film_creative",
  photographer: "film_creative",
  musician: "film_creative",
  stand_up_comedian: "film_creative",
  journalist: "arts_general",
  psychologist: "any_stream",
  sports_management: "any_stream",
  cricketer: "sports_portfolio",
  athlete: "sports_portfolio",
  marine_biologist: "science_research",
  biotechnologist: "science_research",
  astrophysicist: "science_research",
  environmental_scientist: "science_research",
  chef: "any_stream",
  hotel_manager: "hotel_management",
  pilot: "engineering_jee",
  fashion_entrepreneur: "any_stream",
  startup_founder: "any_stream",
  youtuber: "any_stream",
  teacher: "any_stream",
  yoga_wellness: "any_stream",
};

// ── PUBLIC API ────────────────────────────────────────────────
export function validateStreamEligibility(stream: string, careerId: string): { status: string; reason: string } {
  const ruleKey = CAREER_STREAM_MAP[careerId] || "any_stream";
  const rule = STREAM_ELIGIBILITY[ruleKey];

  if (!rule) return { status: "STREAM_AGNOSTIC", reason: "No stream restriction found." };

  if (rule.agnostic) return { status: "STREAM_AGNOSTIC", reason: `${careerId} accepts all academic streams.` };

  if (rule.eligible.includes(stream)) return { status: "ELIGIBLE", reason: `Your ${stream} stream is compatible.` };

  return { status: "INELIGIBLE", reason: rule.reason_if_ineligible };
}

export function getStreamAlternatives(stream: string, careerId: string): string[] {
  const alternatives: string[] = [];
  for (const [cId, ruleKey] of Object.entries(CAREER_STREAM_MAP)) {
    if (cId === careerId) continue;
    const rule = STREAM_ELIGIBILITY[ruleKey];
    if (rule && (rule.agnostic || rule.eligible.includes(stream))) {
      alternatives.push(cId);
    }
    if (alternatives.length >= 5) break;
  }
  return alternatives;
}
