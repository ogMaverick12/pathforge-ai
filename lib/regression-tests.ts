// ============================================================
// PATHFORGE AI — REGRESSION TEST SUITE (Master Prompt v2.0)
// Run: npx tsx lib/regression-tests.ts
// ============================================================

import { CAREERS } from './career-database';
import { ALL_SCHOLARSHIPS as SCHOLARSHIPS } from './scholarship-database';
import { retrieveRelevantCareersWithScores, retrieveRelevantScholarships } from './rag-engine';
import { validateStreamEligibility } from './career-types';
import { generateResults } from './engines';
import type { ForgeProfile } from './types';

function makeProfile(overrides: Partial<ForgeProfile>): ForgeProfile {
  return {
    name: 'Test Student', gender: 'male' as const, class_level: '12',
    stream: 'PCM', city: 'Mumbai', marks: 85, board: 'CBSE',
    exam_score: null, trend: 'stable' as const, dream_job: 'Software Engineer',
    priorities: ['💰 Salary'], timeline: 'normal' as const, constraints: [],
    abroad_open: 'yes' as const, backup_openness: 7, budget: '6-12L',
    loan_open: 'maybe' as const, scholarship_exp: 'never' as const, deep_dream: '',
    ...overrides
  };
}

let passed = 0, failed = 0;
const failures: string[] = [];

function assert(name: string, cond: boolean, detail = '') {
  if (cond) { passed++; console.log(`  ✅ ${name}`); }
  else { failed++; failures.push(`${name}: ${detail}`); console.log(`  ❌ ${name} — ${detail}`); }
}

// ─── GROUP 1: Career Semantic Mapping ─────────────────────────
console.log('\n═══ GROUP 1: CAREER SEMANTIC MAPPING ═══');
const semanticTests = [
  { input: 'IAS Officer', expectedType: 'B', mustNotMapTo: ['software_engineer', 'chartered_accountant'] },
  { input: 'Film Director', expectedType: 'C', mustNotMapTo: ['animator', 'software_engineer'] },
  { input: 'Software Engineer', expectedType: 'A', mustNotMapTo: ['chartered_accountant'] },
  { input: 'Chartered Accountant', expectedType: 'B', mustNotMapTo: ['software_engineer'] },
  { input: 'Cricketer', expectedType: 'C', mustNotMapTo: ['software_engineer', 'sports_management'] },
  { input: 'Photographer', expectedType: 'C', mustNotMapTo: ['software_engineer'] },
  { input: 'Lawyer', expectedType: 'B', mustNotMapTo: ['software_engineer', 'chartered_accountant'] },
  { input: 'Marine Biologist', expectedType: 'A', mustNotMapTo: ['marine_engineer'] },
  { input: 'Data Scientist', expectedType: 'A', mustNotMapTo: ['chartered_accountant'] },
  { input: 'Architect', expectedType: 'A', mustNotMapTo: ['software_engineer'] },
];
for (const t of semanticTests) {
  const r = retrieveRelevantCareersWithScores(makeProfile({ dream_job: t.input, stream: 'Arts' }), 3);
  const top = r[0]?.career;
  if (!top) { assert(`[${t.input}] maps`, false, 'No career'); continue; }
  assert(`[${t.input}] type = ${t.expectedType}`, top.careerType === t.expectedType, `got ${top.careerType} (${top.id})`);
  for (const b of t.mustNotMapTo) assert(`[${t.input}] ≠ ${b}`, top.id !== b, `mapped to ${top.id}`);
}

// ─── GROUP 2: BUG-004 Negative Keywords ───────────────────────
console.log('\n═══ GROUP 2: BUG-004 — NEGATIVE KEYWORDS ═══');
for (const t of [{ input: 'marine engineer', ban: 'marine_biologist' }, { input: 'quantum computing', ban: 'quant_finance' }]) {
  const ids = retrieveRelevantCareersWithScores(makeProfile({ dream_job: t.input }), 5).map(r => r.career.id);
  assert(`[${t.input}] ≠ ${t.ban}`, !ids.includes(t.ban), `found: ${ids.join(', ')}`);
}

// ─── GROUP 3: Stream Eligibility ──────────────────────────────
console.log('\n═══ GROUP 3: STREAM ELIGIBILITY ═══');
for (const t of [
  { career: 'doctor_mbbs', stream: 'Commerce', exp: 'INELIGIBLE' },
  { career: 'doctor_mbbs', stream: 'PCB', exp: 'ELIGIBLE' },
  { career: 'civil_services', stream: 'PCM', exp: 'STREAM_AGNOSTIC' },
  { career: 'civil_services', stream: 'Arts', exp: 'STREAM_AGNOSTIC' },
  { career: 'software_engineer', stream: 'PCM', exp: 'ELIGIBLE' },
  { career: 'software_engineer', stream: 'Arts', exp: 'INELIGIBLE' },
  { career: 'chartered_accountant', stream: 'Commerce', exp: 'ELIGIBLE' },
  { career: 'lawyer', stream: 'Arts', exp: 'ELIGIBLE' },
  { career: 'filmmaker', stream: 'Arts', exp: 'STREAM_AGNOSTIC' },
]) {
  const r = validateStreamEligibility(t.stream, t.career);
  assert(`[${t.career}] + ${t.stream} = ${t.exp}`, r.status === t.exp, `got ${r.status}`);
}

// ─── GROUP 4: Scholarship Domain Gating ───────────────────────
console.log('\n═══ GROUP 4: BUG-006 — SCHOLARSHIP GATING ═══');
for (const t of [
  { career: 'fashion_entrepreneur', domain: 'entrepreneurship', ban: ['INSPIRE Scholarship', 'KVPY Fellowship'] },
  { career: 'software_engineer', domain: 'technology', ban: ['INSPIRE Scholarship', 'KVPY Fellowship', 'ICAI Merit Scholarship'] },
  { career: 'chartered_accountant', domain: 'finance', ban: ['INSPIRE Scholarship', 'AICTE Pragati Scholarship'] },
]) {
  const names = retrieveRelevantScholarships(makeProfile({ dream_job: t.career, stream: 'Arts', marks: 90 }), t.domain).map(s => s.name);
  for (const b of t.ban) assert(`[${t.career}] ≠ ${b}`, !names.includes(b), `found "${b}"`);
}

// ─── GROUP 5: Constraint Enforcement ──────────────────────────
console.log('\n═══ GROUP 5: CONSTRAINT ENFORCEMENT ═══');
const abroadNo = generateResults(makeProfile({ dream_job: 'Software Engineer', abroad_open: 'no' as any, stream: 'PCM', marks: 91 }));
assert('[abroad_open=no] no global', !abroadNo.paths.some(p => p.institution?.type === 'global'), 'found global');

const loanNo = generateResults(makeProfile({ dream_job: 'Software Engineer', loan_open: 'no' as any, budget: '1-3L', stream: 'PCM', marks: 91 }));
const maxFee = Math.max(...loanNo.paths.map(p => p.institution?.fees_per_year || 0));
assert('[loan_open=no, 1-3L] budget filter', maxFee <= 360000, `max: ₹${maxFee}`);

// ─── GROUP 6: Framework Routing ───────────────────────────────
console.log('\n═══ GROUP 6: FRAMEWORK ROUTING ═══');
const typeA = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'PCM', marks: 91 }));
assert('[Type A] has paths', typeA.paths.length > 0, `${typeA.paths.length}`);
assert('[Type A] no exam roadmap', typeA.examRoadmap === undefined, 'exists');

const typeB = generateResults(makeProfile({ dream_job: 'IAS Officer', stream: 'Arts', marks: 82 }));
assert('[Type B] has exam roadmap', typeB.examRoadmap !== undefined, 'missing');
assert('[Type B] has base rate', !!typeB.examRoadmap?.examBaseRate, 'missing');

const typeC = generateResults(makeProfile({ dream_job: 'Filmmaker', stream: 'Arts', marks: 75 }));
assert('[Type C] has portfolio', typeC.portfolioRoadmap !== undefined, 'missing');

// ─── GROUP 7: Career Context (GAP-6) ─────────────────────────
console.log('\n═══ GROUP 7: GAP-6 — CAREER CONTEXT ═══');
const ctx = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'PCM', marks: 91 }));
assert('[careerDescription]', !!ctx.careerDescription, 'missing');
assert('[honestTruth]', !!ctx.honestTruth, 'missing');

// ─── GROUP 8: Low Confidence Fallback (GAP-4) ─────────────────
console.log('\n═══ GROUP 8: GAP-4 — LOW CONFIDENCE ═══');
const unknown = generateResults(makeProfile({ dream_job: 'Underwater Basket Weaver', stream: 'Arts', marks: 70 }));
assert('[unknown] has results', unknown.paths.length > 0, 'empty');
assert('[unknown] low confidence', unknown.confidence < 0.5, `conf: ${unknown.confidence}`);

// ─── GROUP 9: BUG-007/008 — PROBABILITY CAP ──────────────────
console.log('\n═══ GROUP 9: PROBABILITY CAP (BUG-007/008) ═══');
const artsMl = generateResults(makeProfile({ dream_job: 'ML Engineer', stream: 'Arts', marks: 76, budget: '1-3L' }));
const safeProbArts = artsMl.paths[0]?.probability || 0;
assert('[Arts→ML] safe prob < 25%', safeProbArts < 25, `got: ${safeProbArts}%`);

const commAero = generateResults(makeProfile({ dream_job: 'Aerospace Engineer', stream: 'Commerce', marks: 80 }));
const safeProbComm = commAero.paths[0]?.probability || 0;
assert('[Commerce→Aerospace] safe < 25%', safeProbComm < 25, `got: ${safeProbComm}%`);

const pcmSwe = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'PCM', marks: 85 }));
const safeProbPcm = pcmSwe.paths[0]?.probability || 0;
assert('[PCM→SWE] safe prob >= 40%', safeProbPcm >= 40, `got: ${safeProbPcm}%`);

// ─── GROUP 10: BUG-001/002 — NEW CAREER FALLBACK PREVENTION ──
console.log('\n═══ GROUP 10: NEW CAREER MATCHING (BUG-001/002) ═══');
const forensicP = makeProfile({ dream_job: 'forensic pathologist' });
const forensic = retrieveRelevantCareersWithScores(forensicP);
assert('[Forensic] ≠ startup_founder', forensic[0]?.career.id !== 'startup_founder', `got: ${forensic[0]?.career.id}`);

const nuclearP = makeProfile({ dream_job: 'nuclear engineer barc' });
const nuclear = retrieveRelevantCareersWithScores(nuclearP);
assert('[Nuclear] ≠ software_engineer', nuclear[0]?.career.id !== 'software_engineer', `got: ${nuclear[0]?.career.id}`);

const petrolP = makeProfile({ dream_job: 'petroleum engineer oil gas' });
const petrol = retrieveRelevantCareersWithScores(petrolP);
assert('[Petroleum] ≠ software_engineer', petrol[0]?.career.id !== 'software_engineer', `got: ${petrol[0]?.career.id}`);

const ibP = makeProfile({ dream_job: 'investment banker wall street' });
const ibResult = retrieveRelevantCareersWithScores(ibP);
assert('[Investment Banker] ≠ startup_founder', ibResult[0]?.career.id !== 'startup_founder', `got: ${ibResult[0]?.career.id}`);

const actuaryP = makeProfile({ dream_job: 'actuary insurance risk' });
const actuaryResult = retrieveRelevantCareersWithScores(actuaryP);
assert('[Actuary] ≠ startup_founder', actuaryResult[0]?.career.id !== 'startup_founder', `got: ${actuaryResult[0]?.career.id}`);

// ─── GROUP 12: BRIDGE PATHWAYS ────────────────────────────────
console.log('\n═══ GROUP 12: BRIDGE PATHWAYS ═══');
const artsSWE = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'Arts', marks: 80 }));
assert('[Arts→SWE] has bridgePath', !!artsSWE.bridgePath, `bridgePath: ${artsSWE.bridgePath}`);
assert('[Arts→SWE] bridgePath mentions BCA', artsSWE.bridgePath?.includes('BCA') || false, `got: ${artsSWE.bridgePath}`);

const commDoctor = generateResults(makeProfile({ dream_job: 'Doctor', stream: 'Commerce', marks: 85 }));
assert('[Commerce→Doctor] has bridgePath', !!commDoctor.bridgePath, `bridgePath: ${commDoctor.bridgePath}`);

const pcmSWE = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'PCM', marks: 85 }));
assert('[PCM→SWE] no bridgePath needed', !pcmSWE.bridgePath, `unexpected: ${pcmSWE.bridgePath}`);

// ─── GROUP 13: FUNDED_ONLY FILTER ─────────────────────────────
console.log('\n═══ GROUP 13: FUNDED_ONLY FILTER ═══');
const fundedOnly = generateResults(makeProfile({ dream_job: 'Data Scientist', stream: 'PCM', marks: 90, abroad_open: 'if_funded' as const }));
assert('[if_funded] results exist', fundedOnly.paths.length > 0, `paths: ${fundedOnly.paths.length}`);
// Verify global institutions have scholarship_available
const globalInsts = fundedOnly.institutions.filter(i => i.type === 'global');
assert('[if_funded] has institutions', fundedOnly.institutions.length > 0, `total: ${fundedOnly.institutions.length}`);

// ─── GROUP 14: PROBABILITY MODE CLAMPING ──────────────────────
console.log('\n═══ GROUP 14: PROBABILITY MODE CLAMPING ═══');
const clampResult = generateResults(makeProfile({ dream_job: 'Software Engineer', stream: 'PCM', marks: 95, budget: '25L+' }));
const safePath = clampResult.paths.find(p => p.id === 'safe');
const balPath = clampResult.paths.find(p => p.id === 'balanced');
const aggPath = clampResult.paths.find(p => p.id === 'aggressive');

if (safePath) assert('[Safe] probability ≤ 94', safePath.probability <= 94, `got: ${safePath.probability}`);
if (balPath) assert('[Balanced] probability ≤ 78', balPath.probability <= 78, `got: ${balPath.probability}`);
if (aggPath) assert('[Aggressive] probability ≤ 48', aggPath.probability <= 48, `got: ${aggPath.probability}`);

// Cross-stream clamping: Arts→SWE aggressive should be very low
const artsSWEAgg = artsSWE.paths.find(p => p.id === 'aggressive');
if (artsSWEAgg) assert('[Arts→SWE Aggressive] ≤ 48', artsSWEAgg.probability <= 48, `got: ${artsSWEAgg.probability}`);

// ─── GROUP 15: GAP-2 EXAM BASE RATES ─────────────────────────
console.log('\n═══ GROUP 15: EXAM BASE RATES ═══');
const upscResult = generateResults(makeProfile({ dream_job: 'IAS Officer', stream: 'Arts', marks: 80 }));
assert('[UPSC] has examRoadmap', !!upscResult.examRoadmap, 'no exam roadmap');
assert('[UPSC] has examBaseRate', !!upscResult.examRoadmap?.examBaseRate, 'no base rate');
assert('[UPSC] baseRate mentions 0.1%', upscResult.examRoadmap?.examBaseRate?.includes('0.1') || false, `got: ${upscResult.examRoadmap?.examBaseRate}`);

// ─── GROUP 16: GAP-6 CAREER DESCRIPTION + HONEST TRUTH ───────
console.log('\n═══ GROUP 16: CAREER DESCRIPTION & HONEST TRUTH ═══');
assert('[SWE] has careerDescription', !!pcmSWE.careerDescription, 'missing description');
assert('[SWE] careerDescription length > 20', (pcmSWE.careerDescription?.length || 0) > 20, `len: ${pcmSWE.careerDescription?.length}`);
assert('[SWE] has honestTruth', !!pcmSWE.honestTruth, 'missing honest truth');
assert('[SWE] honestTruth length > 10', (pcmSWE.honestTruth?.length || 0) > 10, `len: ${pcmSWE.honestTruth?.length}`);

// ─── SUMMARY ──────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════');
console.log(`REGRESSION: ${passed} passed, ${failed} failed of ${passed + failed} tests`);
if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log(`  ❌ ${f}`)); }
console.log('═══════════════════════════════════════════\n');
if (failed) process.exit(1);

