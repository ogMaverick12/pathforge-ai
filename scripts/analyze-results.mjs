// ============================================================
// PATHFORGE AI — STRESS TEST RESULTS ANALYZER
// Analyzes raw results and produces 9-dimension evaluation
// ============================================================

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results = JSON.parse(readFileSync(join(__dirname, '..', 'test-results', 'stress-test-raw-results.json'), 'utf-8'));

// ── ANALYSIS FUNCTIONS ─────────────────────────────────────────

// 1. Career Match Accuracy
function analyzeMatchAccuracy() {
  const analysis = { exact: [], close: [], poor: [], fallback: [] };
  
  const EXPECTED_MATCHES = {
    "Machine Learning Engineer": ["data_scientist", "ai_researcher", "software_engineer"],
    "Quantum Computing Researcher": ["ai_researcher", "data_scientist", "space_scientist"],
    "Embedded Systems Engineer": ["software_engineer", "electrician_electrical_engineer"],
    "Blockchain Developer": ["blockchain_web3", "software_engineer"],
    "Cybersecurity Analyst": ["cybersecurity", "software_engineer"],
    "AR/VR Experience Designer": ["game_developer", "ui_ux_designer", "software_engineer"],
    "Robotics Engineer": ["software_engineer", "electrician_electrical_engineer", "space_scientist"],
    "DevOps Engineer": ["cloud_devops", "software_engineer"],
    "Prompt Engineer / AI Interaction Designer": ["ai_researcher", "data_scientist", "software_engineer"],
    "Digital Forensics Investigator": ["cybersecurity", "software_engineer"],
    "Cardiothoracic Surgeon": ["doctor_mbbs"],
    "Genetic Counselor": ["doctor_mbbs", "psychologist"],
    "Radiologist": ["doctor_mbbs"],
    "Bioinformatician": ["data_scientist", "doctor_mbbs"],
    "Pharmacovigilance Specialist": ["pharmacist", "doctor_mbbs"],
    "Ayurvedic Researcher (AYUSH track)": ["doctor_mbbs", "pharmacist"],
    "Neuroscience Researcher": ["research_scientist", "doctor_mbbs", "psychologist"],
    "Prosthetist & Orthotist": ["doctor_mbbs"],
    "Hospital Administrator": ["doctor_mbbs"],
    "Forensic Pathologist": ["doctor_mbbs", "research_scientist"],
    "Aerospace Engineer (ISRO pathway)": ["space_scientist"],
    "Nuclear Engineer (BARC pathway)": ["space_scientist", "research_scientist"],
    "Petroleum Engineer": ["civil_engineer", "electrician_electrical_engineer"],
    "Mechatronics Engineer": ["software_engineer", "electrician_electrical_engineer"],
    "Nanotechnology Engineer": ["research_scientist"],
    "Agricultural Engineer": ["civil_engineer", "research_scientist"],
    "Environmental Engineer": ["civil_engineer", "research_scientist"],
    "Marine Engineer": ["marine_biologist", "civil_engineer"],
    "Textile Engineer": ["fashion_entrepreneur"],
    "Geotechnical Engineer": ["civil_engineer"],
    "Actuary": ["quant_finance", "chartered_accountant", "data_scientist"],
    "Quantitative Analyst (Quant)": ["quant_finance", "data_scientist"],
    "Investment Banker": ["quant_finance", "chartered_accountant", "startup_founder"],
    "Chartered Accountant": ["chartered_accountant"],
    "Insurance Underwriter": ["chartered_accountant", "quant_finance"],
    "Venture Capital Analyst": ["startup_founder", "quant_finance"],
    "Microfinance Specialist": ["chartered_accountant", "social_worker"],
    "Derivatives Trader": ["quant_finance", "data_scientist"],
    "ESG / Sustainability Analyst": ["data_scientist", "chartered_accountant"],
    "Forensic Accountant": ["chartered_accountant"],
    "Constitutional Lawyer": ["lawyer"],
    "Intellectual Property Attorney": ["lawyer"],
    "International Arbitration Lawyer": ["lawyer"],
    "Policy Analyst (Think Tank)": ["diplomat_international_relations", "civil_services", "lawyer"],
    "Cyber Law Specialist": ["lawyer", "cybersecurity"],
    "Environmental Lawyer": ["lawyer"],
    "Legal Tech Entrepreneur": ["startup_founder", "lawyer"],
    "Human Rights Lawyer": ["lawyer", "social_worker"],
    "Judicial Services Officer (Judge)": ["lawyer", "civil_services"],
    "Legislative Drafting Specialist": ["lawyer", "civil_services"],
    "IAS Officer (UPSC)": ["civil_services"],
    "Indian Foreign Service (IFS) Officer": ["diplomat_international_relations"],
    "Intelligence Analyst (RAW track)": ["civil_services", "diplomat_international_relations"],
    "DRDO Scientist": ["space_scientist", "research_scientist"],
    "Indian Revenue Service (IRS)": ["civil_services", "chartered_accountant"],
    "Urban Planner (Municipal Corp)": ["architect", "civil_engineer"],
    "Election Commission Officer": ["civil_services"],
    "CAG Auditor": ["chartered_accountant", "civil_services"],
    "Indian Statistical Service (ISS)": ["data_scientist", "civil_services"],
    "Public Health Officer (NHMS)": ["doctor_mbbs", "civil_services"],
    "Computational Linguist": ["data_scientist", "ai_researcher"],
    "Science Journalist": ["writer_author"],
    "Documentary Filmmaker": ["performing_artist", "writer_author"],
    "UX Researcher": ["ui_ux_designer"],
    "Music Technology Engineer (Audio DSP)": ["performing_artist", "software_engineer"],
    "Architectural Visualizer": ["architect", "ui_ux_designer"],
    "Graphic Novelist (Commercial)": ["writer_author", "ui_ux_designer"],
    "Brand Strategist": ["startup_founder", "ui_ux_designer"],
    "Podcast Network Producer": ["performing_artist", "writer_author"],
    "Data Journalist": ["data_scientist", "writer_author"],
    "Space Tourism Engineer": ["space_scientist"],
    "Synthetic Biology Designer": ["research_scientist", "doctor_mbbs"],
    "Climate Tech Entrepreneur": ["startup_founder"],
    "Neuromarketing Analyst": ["data_scientist", "psychologist"],
    "Human-Computer Interaction Researcher": ["ui_ux_designer", "data_scientist"],
    "Precision Agriculture Technologist": ["data_scientist", "research_scientist"],
    "Digital Health Architect": ["doctor_mbbs", "software_engineer"],
    "Longevity / Anti-Aging Researcher": ["research_scientist", "doctor_mbbs"],
    "AI Ethics Auditor": ["data_scientist", "ai_researcher", "lawyer"],
    "Ocean Data Scientist": ["marine_biologist", "data_scientist"],
    "Sommelier": ["yoga_wellness_instructor"],
    "Luthier (Instrument Maker)": ["performing_artist"],
    "Ethical Hacker / Bug Bounty Hunter": ["cybersecurity"],
    "Antarctic Field Researcher": ["research_scientist", "marine_biologist"],
    "Sign Language Interpreter": ["teacher_educator", "social_worker"],
    "Cryptographer (Pure Math track)": ["data_scientist", "cybersecurity", "quant_finance"],
    "FMCG Supply Chain Specialist": ["product_manager", "startup_founder"],
    "Paleoclimatologist": ["research_scientist", "marine_biologist"],
    "Heritage Conservation Architect": ["architect"],
    "Competitive Intelligence Analyst": ["data_scientist", "product_manager"],
    "Brain-Computer Interface Engineer": ["ai_researcher", "research_scientist"],
    "Asteroid Mining Logistics Planner": ["space_scientist"],
    "AI Policy Legislator": ["lawyer", "civil_services", "data_scientist"],
    "Personal Genome Advisor": ["doctor_mbbs", "research_scientist"],
    "Digital-Physical Infrastructure Architect": ["cloud_devops", "architect"],
    "Neuromorphic Chip Designer": ["ai_researcher", "software_engineer"],
    "Carbon Credit Market Maker": ["chartered_accountant", "startup_founder"],
    "Virtual Reality Therapist": ["psychologist", "game_developer"],
    "Lab-Grown Food Scientist": ["research_scientist"],
    "Exoplanet Atmospheric Researcher": ["space_scientist", "research_scientist"],
  };

  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    const expected = EXPECTED_MATCHES[r.career];
    if (!expected) {
      analysis.close.push(r);
      continue;
    }
    if (expected.includes(r.matchedCareerId)) {
      analysis.exact.push(r);
    } else {
      // Check if ANY of the 3 paths match
      const pathIds = (r.rawOutput?.paths || []).map(p => {
        // Extract career ID from careerTarget
        const allCareers = Object.values(r.rawOutput?.institutions || {});
        return p.careerTarget;
      });
      analysis.poor.push({ ...r, expected: expected.join("|") });
    }
  }

  return analysis;
}

// 2. Fallback/Default Analysis
function analyzeFallbacks() {
  const fallbacks = {
    startup_founder: [],
    software_engineer: [],
    other: [],
  };
  
  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    if (r.matchedCareerId === "startup_founder") fallbacks.startup_founder.push(r);
    else if (r.matchedCareerId === "software_engineer") fallbacks.software_engineer.push(r);
  }
  
  return fallbacks;
}

// 3. Confidence Distribution
function analyzeConfidence() {
  const buckets = { high: [], good: [], low: [] };
  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    if (r.confidence >= 0.7) buckets.high.push(r);
    else if (r.confidence >= 0.4) buckets.good.push(r);
    else buckets.low.push(r);
  }
  return buckets;
}

// 4. Stream Eligibility Analysis
function analyzeStreamEligibility() {
  const streamResults = { eligible: [], ineligible: [], agnostic: [] };
  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    const status = r.streamEligibility?.status;
    if (status === "ELIGIBLE") streamResults.eligible.push(r);
    else if (status === "INELIGIBLE") streamResults.ineligible.push(r);
    else streamResults.agnostic.push(r);
  }
  return streamResults;
}

// 5. Budget Constraint Analysis
function analyzeBudgetConstraints() {
  const violations = [];
  for (const r of results) {
    if (r.status !== "SUCCESS" || !r.paths) continue;
    for (const p of r.paths) {
      if (p.institutionFee && r.personaBudget === "<1L" && p.institutionFee > 100000) {
        violations.push({ testId: r.testId, career: r.career, persona: r.persona, institution: p.institution, fee: p.institutionFee, budget: r.personaBudget });
      }
      if (p.institutionFee && r.personaBudget === "1-3L" && p.institutionFee > 300000) {
        violations.push({ testId: r.testId, career: r.career, persona: r.persona, institution: p.institution, fee: p.institutionFee, budget: r.personaBudget });
      }
    }
  }
  return violations;
}

// 6. Cross-Persona Analysis
function analyzeCrossPersona() {
  return results.filter(r => r.crossTest).map(r => ({
    testId: r.testId,
    crossTest: r.crossTest,
    matchedCareer: r.matchedCareerName,
    confidence: r.confidence,
    streamStatus: r.streamEligibility?.status,
    streamReason: r.streamEligibility?.reason,
    realityFlags: r.realityFlags?.map(f => `[${f.type}] ${f.title}`).join("; "),
    pathProbabilities: r.paths?.map(p => `${p.id}:${p.probability}%`).join(", "),
    hasStreamMismatchFlag: r.realityFlags?.some(f => f.title?.includes("STREAM MISMATCH")),
    hasBudgetGapFlag: r.realityFlags?.some(f => f.title?.includes("BUDGET GAP")),
    hasTimelineFlag: r.realityFlags?.some(f => f.title?.includes("TIMELINE")),
  }));
}

// 7. Reality Flag Coverage
function analyzeRealityFlags() {
  const flagTypes = {};
  let totalFlags = 0;
  let testsWithNoFlags = 0;
  
  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    const flags = r.realityFlags || [];
    totalFlags += flags.length;
    if (flags.length === 0) testsWithNoFlags++;
    
    for (const f of flags) {
      flagTypes[f.title] = (flagTypes[f.title] || 0) + 1;
    }
  }
  
  return { flagTypes, totalFlags, testsWithNoFlags, avgFlags: (totalFlags / results.length).toFixed(2) };
}

// 8. Probability Distribution
function analyzeProbabilities() {
  const probs = { safe: [], balanced: [], aggressive: [] };
  for (const r of results) {
    if (r.status !== "SUCCESS" || !r.paths) continue;
    for (const p of r.paths) {
      if (probs[p.id]) probs[p.id].push(p.probability);
    }
  }
  
  const stats = {};
  for (const [mode, vals] of Object.entries(probs)) {
    if (vals.length === 0) continue;
    stats[mode] = {
      min: Math.min(...vals),
      max: Math.max(...vals),
      avg: (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1),
      count: vals.length,
    };
  }
  return stats;
}

// 9. Scholarship Analysis
function analyzeScholarships() {
  let totalScholarships = 0;
  let testsWithScholarships = 0;
  const scholarshipNames = {};
  
  for (const r of results) {
    if (r.status !== "SUCCESS") continue;
    const scholarships = r.scholarships || [];
    totalScholarships += scholarships.length;
    if (scholarships.length > 0) testsWithScholarships++;
    for (const s of scholarships) {
      scholarshipNames[s.name] = (scholarshipNames[s.name] || 0) + 1;
    }
  }
  
  return { totalScholarships, testsWithScholarships, avgPerTest: (totalScholarships / results.length).toFixed(2), topScholarships: Object.entries(scholarshipNames).sort((a, b) => b[1] - a[1]).slice(0, 10) };
}

// 10. Institution Diversity
function analyzeInstitutions() {
  const uniqueInstitutions = new Set();
  let totalInstitutions = 0;
  
  for (const r of results) {
    if (r.status !== "SUCCESS" || !r.institutions) continue;
    for (const i of r.institutions) {
      uniqueInstitutions.add(i.name);
      totalInstitutions++;
    }
  }
  
  return { unique: uniqueInstitutions.size, total: totalInstitutions, avgPerTest: (totalInstitutions / results.length).toFixed(1) };
}

// ── RUN ALL ANALYSES ──────────────────────────────────────────
const matchAccuracy = analyzeMatchAccuracy();
const fallbacks = analyzeFallbacks();
const confidence = analyzeConfidence();
const streams = analyzeStreamEligibility();
const budget = analyzeBudgetConstraints();
const crossPersona = analyzeCrossPersona();
const realityFlags = analyzeRealityFlags();
const probabilities = analyzeProbabilities();
const scholarships = analyzeScholarships();
const institutions = analyzeInstitutions();

// ── OUTPUT ────────────────────────────────────────────────────
const report = {
  summary: {
    total_tests: results.length,
    successful: results.filter(r => r.status === "SUCCESS").length,
    failed: results.filter(r => r.status !== "SUCCESS").length,
    exact_matches: matchAccuracy.exact.length,
    poor_matches: matchAccuracy.poor.length,
  },
  match_accuracy: {
    exact_count: matchAccuracy.exact.length,
    poor_matches: matchAccuracy.poor.map(r => ({
      testId: r.testId,
      career: r.career,
      persona: r.persona,
      got: r.matchedCareerId,
      expected: r.expected,
    })),
  },
  fallback_analysis: {
    startup_founder_count: fallbacks.startup_founder.length,
    startup_founder_careers: fallbacks.startup_founder.map(r => r.career),
    software_engineer_count: fallbacks.software_engineer.length,
    software_engineer_careers: fallbacks.software_engineer.map(r => r.career),
  },
  confidence_distribution: {
    high: confidence.high.length,
    good: confidence.good.length,
    low: confidence.low.length,
    low_confidence_details: confidence.low.map(r => ({
      testId: r.testId, career: r.career, confidence: r.confidence, matched: r.matchedCareerName,
    })),
  },
  stream_eligibility: {
    eligible: streams.eligible.length,
    ineligible: streams.ineligible.length,
    agnostic: streams.agnostic.length,
    ineligible_details: streams.ineligible.map(r => ({
      testId: r.testId, career: r.career, persona: r.persona, stream: r.personaStream, matched: r.matchedCareerName,
    })),
  },
  budget_violations: budget,
  cross_persona: crossPersona,
  reality_flags: realityFlags,
  probability_distribution: probabilities,
  scholarships: scholarships,
  institutions: institutions,
};

const outputPath = join(__dirname, '..', 'test-results', 'analysis-report.json');
writeFileSync(outputPath, JSON.stringify(report, null, 2));
console.log("Analysis complete. Report saved to:", outputPath);
console.log(JSON.stringify(report.summary, null, 2));
console.log("\nFallback analysis:");
console.log(`  startup_founder defaults: ${report.fallback_analysis.startup_founder_count}`);
console.log(`  software_engineer defaults: ${report.fallback_analysis.software_engineer_count}`);
console.log("\nConfidence distribution:");
console.log(`  High (>=0.7): ${report.confidence_distribution.high}`);
console.log(`  Good (0.4-0.7): ${report.confidence_distribution.good}`);
console.log(`  Low (<0.4): ${report.confidence_distribution.low}`);
console.log("\nStream eligibility:");
console.log(`  Eligible: ${report.stream_eligibility.eligible}`);
console.log(`  Ineligible: ${report.stream_eligibility.ineligible}`);
console.log(`  Agnostic: ${report.stream_eligibility.agnostic}`);
console.log("\nBudget violations:", report.budget_violations.length);
console.log("\nProbability stats:", JSON.stringify(report.probability_distribution, null, 2));
console.log("\nScholarships:", JSON.stringify(report.scholarships, null, 2));
console.log("\nInstitutions:", JSON.stringify(report.institutions, null, 2));
console.log("\nReality flags:", JSON.stringify(report.reality_flags, null, 2));
