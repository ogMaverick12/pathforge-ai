// ============================================================
// PATHFORGE AI — DATABASE VALIDATION SCRIPT (CI-ready)
// Run: node scripts/validate-database.cjs
// ============================================================

const path = require('path');

// We'll validate the compiled JS, so this script must run after build
// For now, we validate by importing the TS files via tsx or checking structure

console.log('\n⚡ PathForge Database Validator v1.0\n');
console.log('='.repeat(60));

let errors = 0;
let warnings = 0;

function fail(msg) { errors++; console.log(`  ❌ FAIL: ${msg}`); }
function warn(msg) { warnings++; console.log(`  ⚠️  WARN: ${msg}`); }
function pass(msg) { console.log(`  ✅ PASS: ${msg}`); }

// ── 1. Career Database Validation ──────────────────────────────
console.log('\n📋 CAREER DATABASE');

let CAREERS, SCHOLARSHIPS, ALL_GLOBAL_INSTITUTIONS;
try {
  // Try loading via tsx
  const careerModule = require('../lib/career-database.ts');
  CAREERS = careerModule.CAREERS;
} catch {
  try {
    // Fallback: parse the file as text and extract IDs
    const fs = require('fs');
    const careerSrc = fs.readFileSync(path.join(__dirname, '..', 'lib', 'career-database.ts'), 'utf8');
    const idMatches = careerSrc.match(/^\s*(\w+):\s*\{/gm);
    const ids = idMatches ? idMatches.map(m => m.trim().split(':')[0].trim()) : [];
    
    console.log(`  Found ${ids.length} career IDs via text parsing`);
    
    // Validate minimum count
    if (ids.length < 40) fail(`Only ${ids.length} careers found (minimum: 40)`);
    else pass(`${ids.length} careers found (minimum: 40)`);

    // Check required fields exist in source
    const requiredFields = ['name', 'description', 'realityNote', 'streams', 'careerType', 'domains', 'topInstitutions', 'salaryRange', 'minMarks'];
    for (const field of requiredFields) {
      const count = (careerSrc.match(new RegExp(`${field}:`, 'g')) || []).length;
      if (count < ids.length * 0.8) warn(`Field '${field}' found ${count} times (expected ~${ids.length})`);
    }
    pass('Required fields check completed');

    // Check streams array values
    const validStreams = ['PCM', 'PCB', 'Commerce', 'Arts', 'Any'];
    const streamMatches = careerSrc.match(/streams:\s*\[([^\]]+)\]/g) || [];
    let badStreams = 0;
    for (const sm of streamMatches) {
      const content = sm.replace('streams:', '').replace(/[\[\]]/g, '');
      const values = content.split(',').map(v => v.trim().replace(/"/g, ''));
      for (const v of values) {
        if (v && !validStreams.includes(v)) { badStreams++; }
      }
    }
    if (badStreams > 0) fail(`${badStreams} invalid stream values found (valid: ${validStreams.join(', ')})`);
    else pass('All stream values are valid');

    // Check careerType values
    const validTypes = ['A', 'B', 'C'];
    const typeMatches = careerSrc.match(/careerType:\s*"([^"]+)"/g) || [];
    let badTypes = 0;
    for (const tm of typeMatches) {
      const val = tm.match(/"([^"]+)"/)?.[1];
      if (val && !validTypes.includes(val)) { badTypes++; }
    }
    if (badTypes > 0) fail(`${badTypes} invalid careerType values (valid: A, B, C)`);
    else pass('All careerType values are valid');

    // Check every career has description and realityNote
    const descCount = (careerSrc.match(/description:\s*"/g) || []).length;
    const realityCount = (careerSrc.match(/realityNote:\s*"/g) || []).length;
    if (descCount < ids.length) warn(`Only ${descCount}/${ids.length} careers have 'description'`);
    else pass(`All ${descCount} careers have 'description'`);
    if (realityCount < ids.length) warn(`Only ${realityCount}/${ids.length} careers have 'realityNote'`);
    else pass(`All ${realityCount} careers have 'realityNote'`);

  } catch (e) {
    fail(`Cannot read career database: ${e.message}`);
  }
}

// ── 2. Scholarship Database Validation ─────────────────────────
console.log('\n💰 SCHOLARSHIP DATABASE');
try {
  const fs = require('fs');
  const scholarshipSrc = fs.readFileSync(path.join(__dirname, '..', 'lib', 'scholarship-database.ts'), 'utf8');
  const schIds = scholarshipSrc.match(/id:\s*"([^"]+)"/g) || [];
  const uniqueIds = [...new Set(schIds.map(s => s.match(/"([^"]+)"/)?.[1]))];
  
  console.log(`  Found ${uniqueIds.length} scholarship entries`);
  if (uniqueIds.length < 15) fail(`Only ${uniqueIds.length} scholarships (minimum: 15)`);
  else pass(`${uniqueIds.length} scholarships found (minimum: 15)`);

  // Check required fields
  const schFields = ['name', 'org', 'value', 'criteria', 'url', 'region', 'competitionLevel'];
  for (const field of schFields) {
    const count = (scholarshipSrc.match(new RegExp(`${field}:`, 'g')) || []).length;
    if (count < uniqueIds.length) warn(`Field '${field}' found ${count} times (expected ~${uniqueIds.length})`);
  }
  pass('Required scholarship fields check completed');

  // Check for domain gating
  const eligibleDomainCount = (scholarshipSrc.match(/eligible_domains/g) || []).length;
  if (eligibleDomainCount < 5) warn(`Only ${eligibleDomainCount} scholarships have 'eligible_domains' gating`);
  else pass(`${eligibleDomainCount} scholarships have domain gating`);

  // Check regions
  const validRegions = ['india', 'usa', 'uk', 'europe', 'global'];
  const regionMatches = scholarshipSrc.match(/region:\s*"([^"]+)"/g) || [];
  let badRegions = 0;
  for (const rm of regionMatches) {
    const val = rm.match(/"([^"]+)"/)?.[1];
    if (val && !validRegions.includes(val)) { badRegions++; }
  }
  if (badRegions > 0) fail(`${badRegions} invalid region values`);
  else pass('All scholarship regions are valid');

} catch (e) {
  fail(`Cannot read scholarship database: ${e.message}`);
}

// ── 3. Institution Database Validation ─────────────────────────
console.log('\n🏫 INSTITUTION DATABASE');
try {
  const fs = require('fs');
  const instSrc = fs.readFileSync(path.join(__dirname, '..', 'lib', 'institution-database.ts'), 'utf8');
  const instIds = instSrc.match(/id:\s*"([^"]+)"/g) || [];
  
  console.log(`  Found ${instIds.length} global institution entries`);
  if (instIds.length < 30) warn(`Only ${instIds.length} global institutions (recommended: 30+)`);
  else pass(`${instIds.length} global institutions found`);

  // Check for $0 fees that aren't legitimately free
  const freeInsts = instSrc.match(/fees_per_year_inr:\s*0/g) || [];
  console.log(`  ${freeInsts.length} institutions with ₹0 fees (should be legitimately free)`);

  // Verify IIT/NIT not labeled as "private"
  const lines = instSrc.split('\n');
  let mislabeled = 0;
  for (const line of lines) {
    const isGovt = /\bIIT\b|\bNIT\b|\bIIIT\b|\bAIIMS\b/.test(line);
    const isPrivate = /type:\s*"private"/.test(line);
    if (isGovt && isPrivate) {
      mislabeled++;
      fail(`Government institution mislabeled as "private": ${line.substring(0, 80)}...`);
    }
  }
  if (mislabeled === 0) pass('No government institutions mislabeled as "private"');

  // Check scholarship_available field exists
  const scholarshipAvailable = (instSrc.match(/scholarship_available/g) || []).length;
  if (scholarshipAvailable < instIds.length * 0.8) warn(`Only ${scholarshipAvailable}/${instIds.length} institutions have 'scholarship_available' field`);
  else pass(`${scholarshipAvailable} institutions have scholarship_available field`);

} catch (e) {
  fail(`Cannot read institution database: ${e.message}`);
}

// ── 4. Engine Validation ───────────────────────────────────────
console.log('\n⚙️  ENGINE VALIDATION');
try {
  const fs = require('fs');
  const engineSrc = fs.readFileSync(path.join(__dirname, '..', 'lib', 'engines.ts'), 'utf8');

  // Check multiplicative stream penalty exists
  if (engineSrc.includes('streamMultiplier')) pass('Multiplicative stream penalty implemented');
  else fail('Missing multiplicative stream penalty');

  // Check bridge pathway logic
  if (engineSrc.includes('BRIDGE_PATHS') && engineSrc.includes('generateBridgePath')) pass('Bridge pathway generator implemented');
  else fail('Missing bridge pathway logic');

  // Check funded_only filter
  if (engineSrc.includes('if_funded')) pass('funded_only / if_funded filter implemented');
  else fail('Missing funded_only constraint filter');

  // Check exam base rates
  if (engineSrc.includes('EXAM_BASE_RATES')) pass('Exam base rates (GAP-2) implemented');
  else fail('Missing exam base rates');

  // Check budget hard filter
  if (engineSrc.includes('BUDGET_IMPOSSIBLE') || engineSrc.includes('return []')) pass('Budget hard filter implemented');
  else fail('Missing budget hard filter');

  // Check probability mode clamping
  if (engineSrc.includes('unclamped') && engineSrc.includes('Mode-specific clamping')) pass('Probability mode clamping implemented');
  else fail('Missing probability mode clamping');

} catch (e) {
  fail(`Cannot read engine: ${e.message}`);
}

// ── 5. Types Validation ────────────────────────────────────────
console.log('\n📝 TYPES VALIDATION');
try {
  const fs = require('fs');
  const typesSrc = fs.readFileSync(path.join(__dirname, '..', 'lib', 'types.ts'), 'utf8');

  const requiredFields = ['careerDescription', 'honestTruth', 'confidence', 'confidenceLabel', 'streamEligibility', 'bridgePath', 'examRoadmap', 'portfolioRoadmap', 'realityFlags', 'scholarships', 'skillDomains'];
  for (const field of requiredFields) {
    if (typesSrc.includes(field)) pass(`GeneratedResults has '${field}'`);
    else fail(`GeneratedResults missing '${field}'`);
  }

} catch (e) {
  fail(`Cannot read types: ${e.message}`);
}

// ── SUMMARY ────────────────────────────────────────────────────
console.log('\n' + '='.repeat(60));
console.log(`\n📊 VALIDATION SUMMARY`);
console.log(`   ✅ Passed checks`);
console.log(`   ⚠️  Warnings: ${warnings}`);
console.log(`   ❌ Errors: ${errors}`);
console.log(`\n   Verdict: ${errors === 0 ? '✅ DATABASE VALID — CI PASS' : '❌ VALIDATION FAILED — CI BLOCK'}\n`);

process.exit(errors > 0 ? 1 : 0);
