// ============================================================
// PATHFORGE AI — 110-CAREER STRESS TEST HARNESS v2
// Tests the DETERMINISTIC engine via /api/test-engine
// ============================================================

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── PERSONA DEFINITIONS ───────────────────────────────────────
const PERSONAS = {
  A: {
    name: "Arjun Mehta", gender: "male", class_level: "12", stream: "PCM",
    city: "Patna", marks: 76, board: "Bihar Board", exam_score: null,
    trend: "stable", priorities: ["💰 High Salary", "🛡️ Job Security"],
    timeline: "urgent", constraints: ["Bihar/UP geography lock", "Must be employed within 4 years"],
    abroad_open: "if_funded", backup_openness: 4, budget: "1-3L",
    loan_open: "no", scholarship_exp: "never",
  },
  B: {
    name: "Priya Nair", gender: "female", class_level: "12", stream: "PCB",
    city: "Kochi", marks: 82, board: "Kerala Board", exam_score: null,
    trend: "stable", priorities: ["🏆 Prestige", "🛡️ Job Security"],
    timeline: "normal", constraints: ["Prefers South India", "Parents want MBBS or nothing"],
    abroad_open: "if_funded", backup_openness: 2, budget: "1-3L",
    loan_open: "maybe", scholarship_exp: "never",
  },
  C: {
    name: "Rohan Shah", gender: "male", class_level: "12", stream: "Commerce",
    city: "Ahmedabad", marks: 88, board: "Gujarat Board", exam_score: null,
    trend: "improving", priorities: ["💰 High Salary", "🏆 Prestige"],
    timeline: "normal", constraints: ["Family expects CA or MBA"],
    abroad_open: "if_funded", backup_openness: 3, budget: "3-6L",
    loan_open: "maybe", scholarship_exp: "researching",
  },
  D: {
    name: "Aisha Raza", gender: "female", class_level: "12", stream: "Arts",
    city: "Lucknow", marks: 91, board: "UP Board", exam_score: null,
    trend: "improving", priorities: ["❤️ Passion", "🏠 Stay in India"],
    timeline: "normal", constraints: ["Family prefers North India", "Safety concerns for relocation"],
    abroad_open: "if_funded", backup_openness: 4, budget: "1-3L",
    loan_open: "no", scholarship_exp: "never",
  },
  E: {
    name: "Vikram Iyer", gender: "male", class_level: "12", stream: "Arts",
    city: "Chennai", marks: 87, board: "TN Board", exam_score: null,
    trend: "improving", priorities: ["🏆 Prestige", "🌍 Travel/Global"],
    timeline: "normal", constraints: ["5-year integrated LLB acceptable", "Prefers TN or Delhi"],
    abroad_open: "if_funded", backup_openness: 3, budget: "1-3L",
    loan_open: "maybe", scholarship_exp: "researching",
  },
  F: {
    name: "Sunita Yadav", gender: "female", class_level: "Graduate", stream: "Arts",
    city: "Bhopal", marks: 72, board: "MP Board", exam_score: null,
    trend: "stable", priorities: ["🛡️ Job Security", "🏠 Stay in India"],
    timeline: "urgent", constraints: ["Must clear UPSC in 2 more attempts", "No coaching money remaining"],
    abroad_open: "no", backup_openness: 2, budget: "<1L",
    loan_open: "no", scholarship_exp: "never",
  }
};

// ── 110 CAREER TEST LIST ──────────────────────────────────────
const CAREER_TESTS = [
  // Technology & Computing (#1-10 → Persona A)
  { id: 1, career: "Machine Learning Engineer", persona: "A", domain: "Technology & Computing" },
  { id: 2, career: "Quantum Computing Researcher", persona: "A", domain: "Technology & Computing" },
  { id: 3, career: "Embedded Systems Engineer", persona: "A", domain: "Technology & Computing" },
  { id: 4, career: "Blockchain Developer", persona: "A", domain: "Technology & Computing" },
  { id: 5, career: "Cybersecurity Analyst", persona: "A", domain: "Technology & Computing" },
  { id: 6, career: "AR/VR Experience Designer", persona: "A", domain: "Technology & Computing" },
  { id: 7, career: "Robotics Engineer", persona: "A", domain: "Technology & Computing" },
  { id: 8, career: "DevOps Engineer", persona: "A", domain: "Technology & Computing" },
  { id: 9, career: "Prompt Engineer / AI Interaction Designer", persona: "A", domain: "Technology & Computing" },
  { id: 10, career: "Digital Forensics Investigator", persona: "A", domain: "Technology & Computing" },
  // Medical & Life Sciences (#11-20 → Persona B)
  { id: 11, career: "Cardiothoracic Surgeon", persona: "B", domain: "Medical & Life Sciences" },
  { id: 12, career: "Genetic Counselor", persona: "B", domain: "Medical & Life Sciences" },
  { id: 13, career: "Radiologist", persona: "B", domain: "Medical & Life Sciences" },
  { id: 14, career: "Bioinformatician", persona: "B", domain: "Medical & Life Sciences" },
  { id: 15, career: "Pharmacovigilance Specialist", persona: "B", domain: "Medical & Life Sciences" },
  { id: 16, career: "Ayurvedic Researcher (AYUSH track)", persona: "B", domain: "Medical & Life Sciences" },
  { id: 17, career: "Neuroscience Researcher", persona: "B", domain: "Medical & Life Sciences" },
  { id: 18, career: "Prosthetist & Orthotist", persona: "B", domain: "Medical & Life Sciences" },
  { id: 19, career: "Hospital Administrator", persona: "B", domain: "Medical & Life Sciences" },
  { id: 20, career: "Forensic Pathologist", persona: "B", domain: "Medical & Life Sciences" },
  // Engineering, non-CS (#21-30 → Persona A)
  { id: 21, career: "Aerospace Engineer (ISRO pathway)", persona: "A", domain: "Engineering" },
  { id: 22, career: "Nuclear Engineer (BARC pathway)", persona: "A", domain: "Engineering" },
  { id: 23, career: "Petroleum Engineer", persona: "A", domain: "Engineering" },
  { id: 24, career: "Mechatronics Engineer", persona: "A", domain: "Engineering" },
  { id: 25, career: "Nanotechnology Engineer", persona: "A", domain: "Engineering" },
  { id: 26, career: "Agricultural Engineer", persona: "A", domain: "Engineering" },
  { id: 27, career: "Environmental Engineer", persona: "A", domain: "Engineering" },
  { id: 28, career: "Marine Engineer", persona: "A", domain: "Engineering" },
  { id: 29, career: "Textile Engineer", persona: "A", domain: "Engineering" },
  { id: 30, career: "Geotechnical Engineer", persona: "A", domain: "Engineering" },
  // Finance & Economics (#31-40 → Persona C)
  { id: 31, career: "Actuary", persona: "C", domain: "Finance & Economics" },
  { id: 32, career: "Quantitative Analyst (Quant)", persona: "C", domain: "Finance & Economics" },
  { id: 33, career: "Investment Banker", persona: "C", domain: "Finance & Economics" },
  { id: 34, career: "Chartered Accountant", persona: "C", domain: "Finance & Economics" },
  { id: 35, career: "Insurance Underwriter", persona: "C", domain: "Finance & Economics" },
  { id: 36, career: "Venture Capital Analyst", persona: "C", domain: "Finance & Economics" },
  { id: 37, career: "Microfinance Specialist", persona: "C", domain: "Finance & Economics" },
  { id: 38, career: "Derivatives Trader", persona: "C", domain: "Finance & Economics" },
  { id: 39, career: "ESG / Sustainability Analyst", persona: "C", domain: "Finance & Economics" },
  { id: 40, career: "Forensic Accountant", persona: "C", domain: "Finance & Economics" },
  // Law & Policy (#41-50 → Persona E)
  { id: 41, career: "Constitutional Lawyer", persona: "E", domain: "Law & Policy" },
  { id: 42, career: "Intellectual Property Attorney", persona: "E", domain: "Law & Policy" },
  { id: 43, career: "International Arbitration Lawyer", persona: "E", domain: "Law & Policy" },
  { id: 44, career: "Policy Analyst (Think Tank)", persona: "E", domain: "Law & Policy" },
  { id: 45, career: "Cyber Law Specialist", persona: "E", domain: "Law & Policy" },
  { id: 46, career: "Environmental Lawyer", persona: "E", domain: "Law & Policy" },
  { id: 47, career: "Legal Tech Entrepreneur", persona: "E", domain: "Law & Policy" },
  { id: 48, career: "Human Rights Lawyer", persona: "E", domain: "Law & Policy" },
  { id: 49, career: "Judicial Services Officer (Judge)", persona: "E", domain: "Law & Policy" },
  { id: 50, career: "Legislative Drafting Specialist", persona: "E", domain: "Law & Policy" },
  // Government & Civil Services (#51-60 → Persona F)
  { id: 51, career: "IAS Officer (UPSC)", persona: "F", domain: "Government & Civil Services" },
  { id: 52, career: "Indian Foreign Service (IFS) Officer", persona: "F", domain: "Government & Civil Services" },
  { id: 53, career: "Intelligence Analyst (RAW track)", persona: "F", domain: "Government & Civil Services" },
  { id: 54, career: "DRDO Scientist", persona: "F", domain: "Government & Civil Services" },
  { id: 55, career: "Indian Revenue Service (IRS)", persona: "F", domain: "Government & Civil Services" },
  { id: 56, career: "Urban Planner (Municipal Corp)", persona: "F", domain: "Government & Civil Services" },
  { id: 57, career: "Election Commission Officer", persona: "F", domain: "Government & Civil Services" },
  { id: 58, career: "CAG Auditor", persona: "F", domain: "Government & Civil Services" },
  { id: 59, career: "Indian Statistical Service (ISS)", persona: "F", domain: "Government & Civil Services" },
  { id: 60, career: "Public Health Officer (NHMS)", persona: "F", domain: "Government & Civil Services" },
  // Arts, Media & Communication (#61-70 → Persona D)
  { id: 61, career: "Computational Linguist", persona: "D", domain: "Arts, Media & Communication" },
  { id: 62, career: "Science Journalist", persona: "D", domain: "Arts, Media & Communication" },
  { id: 63, career: "Documentary Filmmaker", persona: "D", domain: "Arts, Media & Communication" },
  { id: 64, career: "UX Researcher", persona: "D", domain: "Arts, Media & Communication" },
  { id: 65, career: "Music Technology Engineer (Audio DSP)", persona: "D", domain: "Arts, Media & Communication" },
  { id: 66, career: "Architectural Visualizer", persona: "D", domain: "Arts, Media & Communication" },
  { id: 67, career: "Graphic Novelist (Commercial)", persona: "D", domain: "Arts, Media & Communication" },
  { id: 68, career: "Brand Strategist", persona: "D", domain: "Arts, Media & Communication" },
  { id: 69, career: "Podcast Network Producer", persona: "D", domain: "Arts, Media & Communication" },
  { id: 70, career: "Data Journalist", persona: "D", domain: "Arts, Media & Communication" },
  // Emerging & Interdisciplinary (#71-80 → Persona A)
  { id: 71, career: "Space Tourism Engineer", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 72, career: "Synthetic Biology Designer", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 73, career: "Climate Tech Entrepreneur", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 74, career: "Neuromarketing Analyst", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 75, career: "Human-Computer Interaction Researcher", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 76, career: "Precision Agriculture Technologist", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 77, career: "Digital Health Architect", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 78, career: "Longevity / Anti-Aging Researcher", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 79, career: "AI Ethics Auditor", persona: "A", domain: "Emerging & Interdisciplinary" },
  { id: 80, career: "Ocean Data Scientist", persona: "A", domain: "Emerging & Interdisciplinary" },
  // Niche & Uncommon (#81-90 → Persona A)
  { id: 81, career: "Sommelier", persona: "A", domain: "Niche & Uncommon" },
  { id: 82, career: "Luthier (Instrument Maker)", persona: "A", domain: "Niche & Uncommon" },
  { id: 83, career: "Ethical Hacker / Bug Bounty Hunter", persona: "A", domain: "Niche & Uncommon" },
  { id: 84, career: "Antarctic Field Researcher", persona: "A", domain: "Niche & Uncommon" },
  { id: 85, career: "Sign Language Interpreter", persona: "A", domain: "Niche & Uncommon" },
  { id: 86, career: "Cryptographer (Pure Math track)", persona: "A", domain: "Niche & Uncommon" },
  { id: 87, career: "FMCG Supply Chain Specialist", persona: "A", domain: "Niche & Uncommon" },
  { id: 88, career: "Paleoclimatologist", persona: "A", domain: "Niche & Uncommon" },
  { id: 89, career: "Heritage Conservation Architect", persona: "A", domain: "Niche & Uncommon" },
  { id: 90, career: "Competitive Intelligence Analyst", persona: "A", domain: "Niche & Uncommon" },
  // Futuristic & Speculative (#91-100 → Persona A)
  { id: 91, career: "Brain-Computer Interface Engineer", persona: "A", domain: "Futuristic & Speculative" },
  { id: 92, career: "Asteroid Mining Logistics Planner", persona: "A", domain: "Futuristic & Speculative" },
  { id: 93, career: "AI Policy Legislator", persona: "A", domain: "Futuristic & Speculative" },
  { id: 94, career: "Personal Genome Advisor", persona: "A", domain: "Futuristic & Speculative" },
  { id: 95, career: "Digital-Physical Infrastructure Architect", persona: "A", domain: "Futuristic & Speculative" },
  { id: 96, career: "Neuromorphic Chip Designer", persona: "A", domain: "Futuristic & Speculative" },
  { id: 97, career: "Carbon Credit Market Maker", persona: "A", domain: "Futuristic & Speculative" },
  { id: 98, career: "Virtual Reality Therapist", persona: "A", domain: "Futuristic & Speculative" },
  { id: 99, career: "Lab-Grown Food Scientist", persona: "A", domain: "Futuristic & Speculative" },
  { id: 100, career: "Exoplanet Atmospheric Researcher", persona: "A", domain: "Futuristic & Speculative" },
  // Cross-Persona Stress Tests (#101-110)
  { id: 101, career: "Machine Learning Engineer", persona: "D", domain: "Cross-Persona", crossTest: "Arts student (no math) → ML Engineer" },
  { id: 102, career: "Investment Banker", persona: "B", domain: "Cross-Persona", crossTest: "PCB student (NEET 420) → Investment Banker" },
  { id: 103, career: "Aerospace Engineer", persona: "C", domain: "Cross-Persona", crossTest: "Commerce student → Aerospace Engineer" },
  { id: 104, career: "Cardiothoracic Surgeon", persona: "F", domain: "Cross-Persona", crossTest: "UPSC aspirant (₹60K/yr) → Cardiothoracic Surgeon" },
  { id: 105, career: "Quantum Computing Researcher", persona: "E", domain: "Cross-Persona", crossTest: "Law student → Quantum Computing Researcher" },
  { id: 106, career: "Constitutional Lawyer", persona: "A", domain: "Cross-Persona", crossTest: "PCM student (Bihar) → Constitutional Lawyer" },
  { id: 107, career: "Forensic Pathologist", persona: "D", domain: "Cross-Persona", crossTest: "Arts student → Forensic Pathologist" },
  { id: 108, career: "AI Ethics Auditor", persona: "C", domain: "Cross-Persona", crossTest: "Commerce student → AI Ethics Auditor" },
  { id: 109, career: "Cryptographer (Pure Math)", persona: "B", domain: "Cross-Persona", crossTest: "PCB student → Cryptographer" },
  { id: 110, career: "Climate Tech Entrepreneur", persona: "F", domain: "Cross-Persona", crossTest: "UPSC aspirant → Climate Tech Entrepreneur" },
];

const API_URL = 'http://localhost:3000/api/test-engine';

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runAllTests() {
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("PATHFORGE AI — 110-CAREER STRESS TEST (Deterministic Engine)");
  console.log("═══════════════════════════════════════════════════════════════");
  console.log(`Start time: ${new Date().toISOString()}`);
  console.log(`Endpoint: ${API_URL}`);
  console.log(`Total tests: ${CAREER_TESTS.length}`);
  console.log();

  const results = [];
  let completed = 0;

  for (const testCase of CAREER_TESTS) {
    const persona = PERSONAS[testCase.persona];
    const profile = {
      ...persona,
      dream_job: testCase.career,
      deep_dream: `I want to become a ${testCase.career}. This is my passion and I want to understand the complete pathway, institutions, and financial requirements for this career.`,
    };

    const result = {
      testId: testCase.id,
      career: testCase.career,
      persona: testCase.persona,
      personaName: persona.name,
      personaStream: persona.stream,
      personaBudget: persona.budget,
      personaCity: persona.city,
      domain: testCase.domain,
      crossTest: testCase.crossTest || null,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const data = await response.json();
        result.status = "SUCCESS";
        result.matchedCareerId = data.careerId;
        result.matchedCareerName = data.careerName;
        result.careerType = data.careerType;
        result.confidence = data.confidence;
        result.confidenceLabel = data.confidenceLabel;
        result.streamEligibility = data.streamEligibility;
        result.pathCount = data.paths?.length || 0;
        result.paths = (data.paths || []).map(p => ({
          id: p.id,
          careerTarget: p.careerTarget,
          probability: p.probability,
          institution: p.institution?.name,
          institutionFee: p.institution?.fees_per_year,
          institutionType: p.institution?.type,
          salaryEntry: p.salaryEntry,
          salaryMid: p.salaryMid,
          timeline: p.timeline,
        }));
        result.realityFlagCount = data.realityFlags?.length || 0;
        result.realityFlags = data.realityFlags || [];
        result.scholarshipCount = data.scholarships?.length || 0;
        result.scholarships = (data.scholarships || []).map(s => ({
          name: s.scholarship?.name,
          amount: s.scholarship?.amount,
          tier: s.tier,
          matchReason: s.matchReason,
        }));
        result.institutionCount = data.institutions?.length || 0;
        result.institutions = (data.institutions || []).map(i => ({
          name: i.name,
          tier: i.tier,
          fees: i.fees_per_year,
          type: i.type,
          city: i.city,
        }));
        result.hasExamRoadmap = !!data.examRoadmap;
        result.hasPortfolioRoadmap = !!data.portfolioRoadmap;
        result.skillDomainCount = data.skillDomains?.length || 0;
        result.careerDescription = data.careerDescription;
        result.honestTruth = data.honestTruth;
        // Full raw output for deep analysis
        result.rawOutput = data;
      } else {
        result.status = "API_ERROR";
        result.error = `HTTP ${response.status}`;
        const body = await response.text();
        result.errorBody = body.substring(0, 500);
      }
    } catch (e) {
      result.status = "NETWORK_ERROR";
      result.error = e.message;
    }

    results.push(result);
    completed++;

    // Progress logging
    const tag = result.status === "SUCCESS"
      ? `✓ Matched: "${result.matchedCareerName}" (conf: ${result.confidence?.toFixed(2)})`
      : `✗ ${result.error}`;
    console.log(`  [${String(completed).padStart(3)}/${CAREER_TESTS.length}] #${String(testCase.id).padStart(3)} "${testCase.career}" (${testCase.persona}) → ${tag}`);

    // Small delay to not overwhelm server
    await sleep(50);
  }

  // Save raw results
  const outputDir = join(__dirname, '..', 'test-results');
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, 'stress-test-raw-results.json');
  writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Raw results saved to: ${outputPath}`);

  // ── SUMMARY STATISTICS ──────────────────────────────────────
  const successful = results.filter(r => r.status === "SUCCESS");
  const failed = results.filter(r => r.status !== "SUCCESS");

  console.log("\n═══════════════════════════════════════════════════════════════");
  console.log("QUICK SUMMARY");
  console.log("═══════════════════════════════════════════════════════════════");
  console.log(`  Total: ${results.length} | Success: ${successful.length} | Failed: ${failed.length}`);

  // Career match accuracy
  const exactMatches = successful.filter(r =>
    r.matchedCareerName?.toLowerCase().includes(r.career.toLowerCase().split(' ')[0]) ||
    r.career.toLowerCase().includes(r.matchedCareerName?.toLowerCase().split(' ')[0] || '')
  );
  console.log(`  Exact/Close career matches: ${exactMatches.length}/${successful.length}`);

  // Low confidence results
  const lowConf = successful.filter(r => r.confidence < 0.3);
  console.log(`  Low confidence results (<0.3): ${lowConf.length}`);

  // Stream mismatch detections
  const streamMismatch = successful.filter(r => r.streamEligibility?.status === "INELIGIBLE");
  console.log(`  Stream mismatch detected: ${streamMismatch.length}`);

  // Cross-persona results
  const crossResults = successful.filter(r => r.crossTest);
  console.log(`  Cross-persona tests: ${crossResults.length}`);
  crossResults.forEach(r => {
    console.log(`    #${r.testId}: ${r.crossTest} → Matched "${r.matchedCareerName}" (conf: ${r.confidence?.toFixed(2)}, stream: ${r.streamEligibility?.status})`);
  });

  // Career ID frequency (shows if system defaults too often)
  const careerIdFreq = {};
  successful.forEach(r => {
    careerIdFreq[r.matchedCareerId] = (careerIdFreq[r.matchedCareerId] || 0) + 1;
  });
  const sorted = Object.entries(careerIdFreq).sort((a, b) => b[1] - a[1]);
  console.log(`\n  Most frequently matched career IDs (top 10):`);
  sorted.slice(0, 10).forEach(([id, count]) => {
    console.log(`    ${id}: ${count} times`);
  });

  return results;
}

// ── MAIN ──────────────────────────────────────────────────────
runAllTests().then(() => {
  console.log("\n═══════════════════════════════════════════════════════════════");
  console.log("ALL 110 TESTS COMPLETE. Check test-results/ for full data.");
  console.log("═══════════════════════════════════════════════════════════════");
  process.exit(0);
}).catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
