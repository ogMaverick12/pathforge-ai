# PathForge AI — 110-Career Stress Test Report

> **Test Date:** 2026-05-03 | **Engine Version:** v3 (Deterministic) | **Total Tests:** 110 | **Pass Rate:** 100% (no crashes)

---

## Executive Summary

PathForge AI's deterministic career engine was subjected to 110 adversarial career-path tests across 6 student personas representing diverse Indian student backgrounds. The engine **never crashed** (110/110 API calls succeeded), but exhibits **critical semantic matching weaknesses** that would mislead real students.

### Headline Metrics

| Metric | Value | Verdict |
|--------|-------|---------|
| API Stability | 110/110 (100%) | ✅ PASS |
| Exact Career Match | 64/110 (58.2%) | ⚠️ MARGINAL |
| Startup Founder Fallback | 23/110 (20.9%) | ❌ CRITICAL |
| Software Engineer Fallback | 17/110 (15.5%) | ❌ CRITICAL |
| Low Confidence (<0.4) | 22/110 (20%) | ⚠️ CONCERN |
| Budget Violations | 22 instances | ❌ CRITICAL |
| Stream Mismatch Detection | 8/110 (7.3%) | ⚠️ UNDER-FIRING |
| Cross-Persona Tension Caught | 7/10 (70%) | ✅ ACCEPTABLE |
| Unique Institutions Surfaced | 205 | ✅ STRONG |

---

## REPORT 1 — Career Match Accuracy Audit

### 1.1 Match Classification

The RAG engine maps user dream jobs to the closest career in a **~35-career database**. Of 110 tests:

| Category | Count | % | Description |
|----------|-------|---|-------------|
| ✅ Exact/Adjacent Match | 64 | 58.2% | Mapped to the correct or semantically adjacent career |
| ⚠️ Poor Match (wrong domain) | 44 | 40.0% | Mapped to an unrelated or tangentially related career |
| ❌ No data (2 borderline) | 2 | 1.8% | Near-misses due to ID naming (e.g. `cybersecurity_engineer` vs `cybersecurity`) |

### 1.2 Top Mismatches (Severity: Critical)

| # | User Asked For | Engine Returned | Expected | Problem |
|---|---------------|-----------------|----------|---------|
| 22 | Nuclear Engineer (BARC) | Software Engineer | Space Scientist | No nuclear/BARC career profile exists |
| 23 | Petroleum Engineer | Software Engineer | Civil/Electrical Eng | No petroleum engineering profile |
| 35 | Insurance Underwriter | Writer/Author | CA/Quant Finance | Keyword "underwriter" matched "writer" |
| 77 | Digital Health Architect | Yoga Teacher | Doctor/SWE | "Health" keyword hijacked by wellness |
| 92 | Asteroid Mining Logistics | Architect/Urban Planner | Space Scientist | "Planner" keyword matched Urban Planner |
| 96 | Neuromorphic Chip Designer | Game Developer | AI Researcher | "Chip" ≠ gaming; semantic gap |
| 59 | Indian Statistical Service | Diplomat (IR) | Civil Services/Data Sci | "Service" keyword misrouted |

> [!CAUTION]
> **Insurance Underwriter → Writer/Author** and **Digital Health Architect → Yoga Teacher** are hallucination-grade mismatches. A real student following these recommendations would be severely misled.

### 1.3 Careers That SHOULD Exist in Database But Don't

| Missing Career | Times Requested | Current Fallback |
|---------------|----------------|-----------------|
| Nuclear Engineer / BARC Scientist | 1 | software_engineer |
| Petroleum Engineer | 1 | software_engineer |
| Actuary | 1 | startup_founder |
| Insurance/Risk Analyst | 1 | writer_author (!) |
| Forensic Science | 2 | doctor_mbbs / startup_founder |
| Supply Chain / Operations | 1 | startup_founder |
| Sign Language / Accessibility | 1 | startup_founder |
| Agricultural Engineering | 1 | software_engineer |
| Environmental Engineering | 1 | software_engineer |
| Mechatronics | 1 | software_engineer |

---

## REPORT 2 — Fallback Pattern Analysis (The "Startup Founder Problem")

> [!WARNING]
> **`startup_founder` is the universal garbage collector.** When the RAG engine can't find a match, it routes 23 careers (20.9%) to "Tech Startup Founder." This is a **design-level anti-pattern** that gives students dangerously wrong advice.

### 2.1 Careers Routed to `startup_founder` (Full List)

```
Digital Forensics Investigator    → startup_founder
Actuary                          → startup_founder
Investment Banker                → startup_founder
Venture Capital Analyst          → startup_founder
Derivatives Trader               → startup_founder
Legal Tech Entrepreneur          → startup_founder (correct!)
Legislative Drafting Specialist  → startup_founder
Intelligence Analyst (RAW)       → startup_founder
Computational Linguist           → startup_founder
Science Journalist               → startup_founder
Climate Tech Entrepreneur        → startup_founder (correct!)
Sommelier                        → startup_founder
Luthier (Instrument Maker)       → startup_founder
Sign Language Interpreter        → startup_founder
FMCG Supply Chain Specialist     → startup_founder
Paleoclimatologist               → startup_founder
Personal Genome Advisor          → startup_founder
Carbon Credit Market Maker       → startup_founder
Virtual Reality Therapist        → startup_founder
Investment Banker (cross)        → startup_founder
Quantum Computing (cross)        → startup_founder
Forensic Pathologist (cross)     → startup_founder
Climate Tech Entrepreneur (F)    → startup_founder (correct!)
```

**Only 3 of these 23 are actually correct** (Legal Tech Entrepreneur, Climate Tech Entrepreneur ×2). The other 20 are semantic failures.

### 2.2 Careers Routed to `software_engineer` (Secondary Fallback)

17 engineering careers defaulted to Software Engineer when the user explicitly asked for non-CS engineering disciplines:

```
Embedded Systems → SWE     Nuclear → SWE        Petroleum → SWE
Mechatronics → SWE         Nanotechnology → SWE  Agricultural → SWE
Environmental → SWE        Marine → SWE          Textile → SWE
Geotechnical → SWE         Precision Ag → SWE    Brain-Computer → SWE
Aerospace (Commerce) → SWE
```

> [!IMPORTANT]
> **Root Cause:** The RAG engine's keyword matching treats "engineer" as a universal match for `software_engineer`. Non-CS engineering disciplines have no representation in the ~35-career database.

---

## REPORT 3 — Constraint Propagation Audit

### 3.1 Budget Constraint Violations

The engine produced **22 budget violations** where recommended institutions exceeded the student's stated budget with no loan openness:

| Persona | Budget | # Violations | Worst Offender |
|---------|--------|-------------|----------------|
| B (Priya, PCB) | ₹1-3L | 9 | Kasturba Medical College (₹18L/yr) — 6x budget |
| E (Vikram, Arts) | ₹1-3L | 10 | Stanford ($45L) & Fletcher ($55L) — 15-18x budget |
| F (Sunita, Arts) | <₹1L | 3 | BITS Pilani (₹5.5L) — 5.5x budget |

> [!CAUTION]
> **Persona F (Sunita)** has a budget under ₹1L and explicitly said `loan_open: "no"`. The engine recommended BITS Pilani at ₹5.5L/yr. This is a constraint blindness failure — the `applyConstraintFilters()` function's fallback logic (`return cheapest 3 from original list`) bypasses the budget hard filter when all institutions are over-budget.

### 3.2 Timeline Constraint Analysis

34/110 tests triggered `TIMELINE MISMATCH` flags — this is **correct behavior**. The engine properly warns students with "urgent" timelines about careers requiring 5+ years.

### 3.3 Abroad Constraint

Persona F has `abroad_open: "no"` — the engine correctly filters global institutions for this persona in most cases. However, the `LIMITING YOUR CEILING` flag fires 7 times, which is appropriate reality-checking.

---

## REPORT 4 — Critical Bugs (Prioritized)

| ID | Severity | Bug | Impact | Affected Tests |
|----|----------|-----|--------|---------------|
| **BUG-001** | 🔴 P0 | `startup_founder` is universal fallback for unrecognized careers | 20 careers get wrong advice | 20/110 |
| **BUG-002** | 🔴 P0 | `software_engineer` is fallback for ALL non-CS engineering | Nuclear/Petrol/Agri/Env engineers get SWE advice | 12/110 |
| **BUG-003** | 🔴 P0 | Budget hard filter bypassed by fallback logic | Students with ₹1L budget shown ₹18-55L institutions | 22/110 |
| **BUG-004** | 🟡 P1 | "Underwriter" matches "Writer/Author" via substring | Insurance Underwriter → Writer is hallucination-grade | 1/110 |
| **BUG-005** | 🟡 P1 | "Health" keyword hijacked by wellness cluster | Digital Health Architect → Yoga Teacher | 1/110 |
| **BUG-006** | 🟡 P1 | "Planner" keyword matches Urban Planner for unrelated careers | Asteroid Mining → Architect/Urban Planner | 1/110 |
| **BUG-007** | 🟡 P1 | Probability floor too high (min=49%) | Even impossible cross-persona paths show 49%+ | All aggressive |
| **BUG-008** | 🟡 P1 | Safe path avg probability 91.8% for ALL careers | No differentiation between easy and hard careers | 110/110 |
| **BUG-009** | 🟡 P1 | Results page crash (ClerkProvider missing) | Users can't see results in browser | UI-blocking |
| **BUG-010** | 🟢 P2 | Same 5 scholarships shown for 89% of tests | CSC, KGSP, PM Vidyalakshmi, ICAI, JN Tata appear everywhere | 98/110 |
| **BUG-011** | 🟢 P2 | Confidence = 1.0 for wrong matches | "Blockchain Dev" → `blockchain_developer` scores conf=1.0 but ID mismatch | ~10/110 |
| **BUG-012** | 🟢 P2 | Stream mismatch flag only fires for 6 careers | Should fire for ALL cross-stream recommendations | 6 vs 20+ expected |
| **BUG-013** | 🟢 P2 | Institution duplicates in output | Same institution appears 2-3x in results array | ~50/110 |

---

## REPORT 5 — Probability Calibration Audit

### 5.1 Probability Distribution

| Path Mode | Min | Max | Average | Expected Range |
|-----------|-----|-----|---------|----------------|
| Safe | 50% | 94% | **91.8%** | 75-95% ✅ |
| Balanced | 53% | 94% | **87.3%** | 50-75% ❌ TOO HIGH |
| Aggressive | 49% | 81% | **66.8%** | 10-45% ❌ WAY TOO HIGH |

> [!WARNING]
> **The Balanced path averages 87.3%** (should be 50-75%) and **Aggressive averages 66.8%** (should be 10-45%). The engine is systematically overconfident. A student with 76% marks, ₹1-3L budget asking for "Space Tourism Engineer" gets a 64% probability on the aggressive path. This is false hope at scale.

### 5.2 Cross-Persona Probability Failures

| Test | Scenario | Path | Probability | Realistic? |
|------|----------|------|------------|------------|
| #101 | Arts → ML Engineer | Balanced | **93%** | ❌ Should be <20% |
| #103 | Commerce → Aerospace | Safe | **94%** | ❌ Should be <30% |
| #104 | UPSC aspirant → Surgeon | Balanced | **71%** | ❌ Should be <5% |
| #107 | Arts → Forensic Pathologist | Safe | **90%** | ❌ Should be <15% |

### 5.3 Root Cause

In `calculateProbability()` (engines.ts:37-62):
- `streamFit = 0.35` for wrong-stream students — this is TOO generous
- The formula `raw = (marksFit * 0.40 + streamFit * 0.30 + budgetFit * 0.20 + 0.10)` always starts at 10% base
- `modeMultiplier` for safe = 1.1 inflates all safe paths
- The floor of 8% and ceiling of 94% clips all extreme values

**Recommended fix:** Stream mismatch should drop probability to <25% regardless of other factors.

---

## REPORT 6 — Institution Database Scope Audit

### 6.1 Coverage Statistics

| Metric | Value |
|--------|-------|
| Unique institutions surfaced | **205** |
| Average institutions per test | **50.6** |
| Career DB institution entries | ~35 careers × 5-8 each = ~200 |
| Global institution database | 400+ entries in `institution-database.ts` |
| Institution types covered | government, private, deemed, global |

### 6.2 Strengths

- ✅ IIT/NIT/IIIT coverage is comprehensive
- ✅ Global institutions (ETH Zurich, MIT, Stanford, TU Delft) properly included
- ✅ Free/low-cost options (École 42, German universities, KAUST) correctly surfaced
- ✅ Fee data is realistic and India-calibrated (₹ denominated)

### 6.3 Weaknesses

- ❌ Kasturba Medical College recommended 9 times for Persona B (budget ₹1-3L) at ₹18L/yr — the `loan_open: "maybe"` condition isn't gating properly
- ❌ "University of Cape Town (UCT)" appears 6 times for Persona E law careers — no Indian NLU appears as safe option despite budget of ₹1-3L
- ❌ Institution type is incorrectly listed as "private" for several IIT/NIT entries in the global database
- ❌ Several global institutions show `fees: 0` which is unrealistic (MIT, Stanford etc. charge $50K+/yr)

---

## REPORT 7 — Scholarship Matching Audit

### 7.1 Coverage

| Metric | Value |
|--------|-------|
| Total scholarships matched | 660 |
| Tests with scholarships | 110/110 (100%) |
| Average per test | 6.0 (max allowed) |

### 7.2 Top 10 Most Recommended Scholarships

| Scholarship | Times Matched | % of Tests |
|-------------|--------------|------------|
| CSC Scholarship (China) | 98 | 89.1% |
| KGSP Scholarship (South Korea) | 98 | 89.1% |
| PM Vidyalakshmi Scheme | 98 | 89.1% |
| ICAI Merit Scholarship | 98 | 89.1% |
| JN Tata Endowment | 98 | 89.1% |
| Aga Khan Foundation | 86 | 78.2% |
| INSPIRE Scholarship | 12 | 10.9% |
| Inlaks Shivdasani | 12 | 10.9% |
| Chevening Scholarship | 12 | 10.9% |
| State Post-Matric (SC/ST/OBC) | 12 | 10.9% |

> [!WARNING]
> **The same 5 scholarships appear for 89% of all students.** This means the scholarship matcher is not adequately differentiating between personas. ICAI Merit Scholarship showing for an Arts student pursuing Yoga is incorrect — ICAI is exclusively for CA aspirants.

### 7.3 Missing Scholarship Categories

- ❌ No STEM-specific scholarships (KVPY, NTSE, Olympiad-based)
- ❌ No state-specific scholarships (each Indian state has unique schemes)
- ❌ No gender-specific filtering working properly
- ❌ No career-specific scholarship gating (medical scholarships for medical careers only)

---

## REPORT 8 — Cross-Persona Tension Test Results

10 deliberately adversarial tests where the career is structurally incompatible with the persona's stream, budget, or constraints.

### 8.1 Full Cross-Persona Matrix

| # | Scenario | Matched Career | Stream Flag? | Budget Flag? | Probability (Safe) | Verdict |
|---|----------|---------------|-------------|-------------|-------------------|---------|
| 101 | Arts → ML Engineer | Data Scientist ✅ | ✅ INELIGIBLE | — | **81%** ❌ | Match OK, probability absurd |
| 102 | PCB → Investment Banker | Startup Founder ⚠️ | ✅ Fired (but for wrong career) | — | **72%** ❌ | Wrong career + high probability |
| 103 | Commerce → Aerospace | Software Engineer ⚠️ | ✅ INELIGIBLE | — | **94%** ❌ | Wrong career + near-guaranteed |
| 104 | UPSC (Arts, <₹1L) → Surgeon | Medical Doctor ✅ | ✅ INELIGIBLE | — | **82%** ❌ | Correct flags, absurd probability |
| 105 | Arts/Law → Quantum Computing | Startup Founder ❌ | — | — | **90%** ❌ | Total failure |
| 106 | PCM (Bihar) → Lawyer | Lawyer ✅ | ✅ ELIGIBLE | — | **94%** ✅ | Best result — PCM→Law is valid |
| 107 | Arts → Forensic Pathologist | Startup Founder ❌ | — | — | **90%** ❌ | Total failure |
| 108 | Commerce → AI Ethics | Data Scientist ⚠️ | ✅ INELIGIBLE | — | **81%** ❌ | Reasonable match, bad probability |
| 109 | PCB → Cryptographer | Blockchain Dev ⚠️ | — (agnostic) | — | **94%** ❌ | Wrong career, no stream flag |
| 110 | UPSC (Arts, <₹1L) → Climate Tech | Startup Founder ✅ | — (agnostic) | — | **90%** ⚠️ | Right match, ignores ₹1L budget |

### 8.2 Cross-Persona Verdict

| Dimension | Score | Details |
|-----------|-------|---------|
| Career Match Accuracy | 4/10 | 4 correct matches out of 10 |
| Stream Mismatch Detection | 5/10 | Fired for 5 out of 10 tests, but probabilities weren't adjusted |
| Budget Constraint Enforcement | 2/10 | Only 2 tests showed budget-aware institution selection |
| Probability Realism | 0/10 | Every single cross-persona test shows >70% safe probability |
| Bridge Path Suggestion | 1/10 | Only Test #106 (PCM→Law) provided a sensible bridge explanation |

---

## Browser Test Evidence

### Landing Page
![PathForge landing page showing "FORGE MY PATH" CTA with dark premium theme](C:\Users\sreej\.gemini\antigravity\brain\abb5dc1d-c4f0-4a1b-ad07-ae05260bba5b\artifacts\landing_page.png)

### Dream Step (Final Wizard Step)
![Dream step showing textarea with "I want to build AI systems that help farmers in Bihar"](C:\Users\sreej\.gemini\antigravity\brain\abb5dc1d-c4f0-4a1b-ad07-ae05260bba5b\artifacts\dream_step.png)

### Forge Flow Recording
![Full browser recording of the 6-step wizard flow](C:\Users\sreej\.gemini\antigravity\brain\abb5dc1d-c4f0-4a1b-ad07-ae05260bba5b\artifacts\pathforge_forge_flow.webp)

> [!CAUTION]
> **BUG-009 (P1):** The results page crashes with `@clerk/react: SignInButton can only be used within the <ClerkProvider />` error. The deterministic engine works perfectly via API, but the UI rendering is blocked for end users.

---

## 9-Dimension Rubric Scoring

| # | Dimension | Score | Evidence |
|---|-----------|-------|----------|
| 1 | **Career Match Accuracy** | 5/10 | 58.2% exact match rate; 36.4% fall into two default buckets |
| 2 | **Constraint Propagation** | 4/10 | Budget filter has fallback bypass; stream filter under-fires |
| 3 | **Reality Calibration** | 3/10 | Probabilities are 2-3x too high across the board |
| 4 | **Institution Relevance** | 7/10 | 205 unique institutions, good coverage, but budget violations |
| 5 | **Scholarship Matching** | 4/10 | Same 5 scholarships for 89% of tests; no career-specific gating |
| 6 | **Cross-Persona Handling** | 4/10 | Stream flags fire but probabilities don't adjust |
| 7 | **Hallucination Prevention** | 6/10 | No fabricated institutions/scholarships; but semantic mismatches are misleading |
| 8 | **False Hope Detection** | 3/10 | Engine never says "this path is extremely unlikely for you" |
| 9 | **Database Coverage** | 5/10 | 35 careers vs 110 tested; major engineering/niche gaps |

### **Overall Score: 41/90 (45.6%) — NOT PRODUCTION READY**

---

## Priority Remediation Roadmap

### Phase 1 (Critical — Week 1)
1. **Add 15-20 missing career profiles** — Nuclear/Petroleum/Agricultural/Environmental/Mechatronics Engineering, Actuary, Forensic Science, Supply Chain, Accessibility
2. **Fix probability formula** — Stream mismatch should cap probability at 25% for safe, 15% for balanced, 5% for aggressive
3. **Fix budget hard filter** — Remove the fallback that returns cheapest 3 when all are over-budget. Instead, surface a `BUDGET IMPOSSIBLE` reality flag

### Phase 2 (Important — Week 2)
4. **Add negative keyword penalties** — "underwriter" ≠ "writer", "health architect" ≠ "wellness", "planner" ≠ "urban planner"
5. **Career-specific scholarship gating** — ICAI scholarships only for CA track, INSPIRE only for STEM
6. **Fix Clerk integration** — Wrap results page in `<ClerkProvider />` or conditionally render `<SignInButton />`

### Phase 3 (Enhancement — Week 3-4)
7. **Add bridge pathway logic** — When stream mismatch is detected, generate a bridge pathway (e.g., "Arts → BCA → MCA → Data Science")
8. **Diversify scholarship pool** — Add KVPY, NTSE, state-specific schemes, domain-specific grants
9. **Institution type audit** — Fix IIT/NIT entries incorrectly labeled as "private" in global DB

---

## Files Modified During Testing

| File | Purpose |
|------|---------|
| [route.ts](file:///c:/Users/sreej/.gemini/antigravity/scratch/pathforge-ai/app/api/test-engine/route.ts) | Test API endpoint exposing deterministic engine |
| [stress-test-110.mjs](file:///c:/Users/sreej/.gemini/antigravity/scratch/pathforge-ai/scripts/stress-test-110.mjs) | 110-career automated test harness |
| [analyze-results.mjs](file:///c:/Users/sreej/.gemini/antigravity/scratch/pathforge-ai/scripts/analyze-results.mjs) | Results analysis and metrics extraction |
| [stress-test-raw-results.json](file:///c:/Users/sreej/.gemini/antigravity/scratch/pathforge-ai/test-results/stress-test-raw-results.json) | Full raw output (4.7MB, 151K lines) |
| [analysis-report.json](file:///c:/Users/sreej/.gemini/antigravity/scratch/pathforge-ai/test-results/analysis-report.json) | Structured analysis metrics |
