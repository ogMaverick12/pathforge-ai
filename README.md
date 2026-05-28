# ⚡ PathForge AI — Career Intelligence Engine

> Stop guessing your future. PathForge evaluates your grades, goals, budget, and reality to generate three ranked career paths with real institutions and scholarship intelligence.

**Official Product of Vi-Bit Technologies.**

---

## Tech Stack

| Layer          | Technology                                  |
|----------------|---------------------------------------------|
| Framework      | Next.js 16 (App Router, Turbopack)          |
| Language       | TypeScript (strict)                         |
| Database       | Prisma + Supabase (PostgreSQL)              |
| Auth           | Clerk Authentication                        |
| AI Engine      | NVIDIA NIM (Llama-3.1-70b-Instruct)         |
| RAG Engine     | Custom TF-IDF + Semantic Keywords + Intent  |
| State          | Zustand with `persist` middleware           |
| Styling        | Vanilla CSS (design system in globals.css)  |
| Fonts          | Bebas Neue · DM Sans · JetBrains Mono       |

---

## Engine Stats

| Metric | Value |
|--------|-------|
| Career Database | **100 careers** (39 core + 61 expansion) |
| Scholarship Database | **74 scholarships** (India + international) |
| Adversarial Tests | **61 tests** — 100% pass rate |
| Regression Tests | **78 tests** — 100% pass rate |
| Quality Score | **90/90** across 10 dimensions |

---

## Architecture

```
app/
├── api/                      ← Backend API routes (AI generation, RAG)
├── forge/
│   ├── page.tsx              ← 6-step wizard with integrated branding
│   └── results/page.tsx      ← AI-powered career report
├── dashboard/                ← User persistence & tracking
├── layout.tsx                ← Global layout with top-left brand anchor
└── globals.css               ← Full design system (ember/dark forge aesthetic)

lib/
├── career-database.ts        ← 39 core career profiles
├── careers-expansion-data.ts ← 61 expansion career profiles
├── scholarship-database.ts   ← 74 scholarship entries
├── scholarships-expansion-data.ts ← Expansion scholarship data
├── engines.ts                ← Probability calculator, scholarship matcher
├── rag-engine.ts             ← TF-IDF + semantic keyword matching + intent
├── tfidf-engine.ts           ← TF-IDF similarity engine
├── regression-tests.ts       ← 78 regression tests
└── types.ts                  ← TypeScript type definitions

scripts/
├── adversarial-tests.ts      ← 61 adversarial stress tests
├── generate-careers.cjs      ← Career data generator
├── generate-scholarships.cjs ← Scholarship data generator
└── validate-database.cjs     ← Database integrity validator

prisma/
└── schema.prisma             ← Database schema for career paths & users

public/
└── icons/                    ← PathForge AI & Vi-Bit official icons
```

---

## Getting Started

### 1. Environment Configuration
Create a `.env.local` file with the following keys:
```env
# AI Intelligence
NVIDIA_API_KEY=your_key_here

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

# Database
DATABASE_URL="your_supabase_pooler_url"
DIRECT_URL="your_supabase_direct_url"
```

### 2. Installation & Database Setup
```bash
npm install
npx prisma generate
npx prisma db push
```

### 3. Development
```bash
npm run dev    # → http://localhost:3000
```

### 4. Run Tests
```bash
# Adversarial stress tests (61 tests)
npx tsx scripts/adversarial-tests.ts

# Regression tests (78 tests)
npx tsx lib/regression-tests.ts
```

---

## Core Engines

### 1. RAG Career Matcher
Four-layer matching pipeline:
- **Exact match** — career name/alias lookup
- **Semantic keywords** — 280+ keyword → career mappings
- **TF-IDF similarity** — cosine similarity against career corpus
- **Intent classification** — maps dreams to action intents (build, heal, create, etc.)

### 2. Multi-Factor Probability Calculator
Weighted scoring: marks fit (40%) + stream fit (30%) + budget fit (20%) + base (10%) + trend bonus ± exam difficulty modifier ± low-marks penalty.

### 3. Scholarship Intelligence
74 scholarships with eligibility matching, region filtering (hard filter for `abroad=no`), and budget-aware ranking.

### 4. Anti-Hallucination Guard
Negative keyword system prevents cross-domain confusion (e.g., "underwriter" ≠ "writer", "marine engineer" ≠ "marine biologist"). 10 dedicated adversarial tests verify collision prevention.

### 5. Reality Check Engine
Generates specific flags for:
- Marks gaps (low marks for competitive exams)
- Stream mismatches (Arts → MBBS)
- Income reality (volatile careers like esports, acting)
- Budget constraints

---

## Deployment (Vercel)

PathForge AI is optimized for Vercel.

1. **Connect GitHub**: Push your code and import the repository.
2. **Environment Variables**: Add all keys from your `.env.local` to the Vercel project settings.
3. **Build Settings**: The app is configured with a `postinstall` script to automatically generate the Prisma client on every deployment.

---

## Privacy & Persistence

PathForge AI supports persistent career memory via **Clerk** and **Supabase**. Your data is securely stored and accessible across devices. Local-only mode stores profiles in `localStorage` under `pathforge-v3-store`.

---

**Built by Vi-Bit Technologies.** ⚡
*Solving problems smarter, faster, and better.*
