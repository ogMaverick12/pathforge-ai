// ============================================================
// PATHFORGE AI — SCHOLARSHIP DATABASE (v4 — 70+ Real Scholarships)
// ============================================================

import { SCHOLARSHIPS_EXPANSION } from './scholarships-expansion-data';

export interface Scholarship {
  id: string;
  name: string;
  org: string;
  value: string;
  renewable: string;
  criteria: {
    streams?: string[];
    minMarks?: number;
    maxIncome?: number | null;
    classLevel?: string[];
    abroadRequired?: boolean;
    gender?: "female" | "male";
  };
  eligible_domains?: string[];
  ineligible_domains?: string[];
  matchFactors: string[];
  url: string;
  deadline: string;
  competitionLevel: "low" | "moderate" | "high" | "elite";
  region: "india" | "usa" | "uk" | "europe" | "global";
  description: string;
}

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "inspire",
    name: "INSPIRE Scholarship",
    org: "DST, Govt of India",
    value: "₹80,000/year",
    renewable: "5 years",
    criteria: { streams: ["PCM", "PCB"], minMarks: 80, classLevel: ["11", "12", "Dropper"] },
    eligible_domains: ["science_research", "healthcare"],
    ineligible_domains: ["technology", "finance", "creative_media", "law_government", "entrepreneurship", "education_sports"],
    matchFactors: ["science_stream", "high_marks", "india_study"],
    url: "https://inspire-dst.gov.in",
    deadline: "October (tentative)",
    competitionLevel: "moderate",
    region: "india",
    description: "For top 1% students in class 12 science boards pursuing natural/basic sciences."
  },
  {
    id: "kvpy",
    name: "KVPY Fellowship",
    org: "Indian Institute of Science",
    value: "₹5,000–7,000/month",
    renewable: "5 years",
    criteria: { streams: ["PCM", "PCB"], minMarks: 85, classLevel: ["11", "12"] },
    eligible_domains: ["science_research"],
    ineligible_domains: ["technology", "finance", "creative_media", "law_government", "education_sports"],
    matchFactors: ["science_stream", "high_marks", "research_interest"],
    url: "https://kvpy.iisc.ac.in",
    deadline: "August",
    competitionLevel: "high",
    region: "india",
    description: "For students pursuing basic sciences (B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S.)."
  },
  {
    id: "pm_vidyalakshmi",
    name: "PM Vidyalakshmi Scheme",
    org: "Ministry of Education, India",
    value: "Full tuition loan with 3% interest subsidy",
    renewable: "Full course duration",
    criteria: { minMarks: 60, maxIncome: 800000 },
    matchFactors: ["low_budget", "india_study", "loan_open"],
    url: "https://www.vidyalakshmi.co.in",
    deadline: "Rolling / Post-admission",
    competitionLevel: "low",
    region: "india",
    description: "Central government education loan portal covering top 860 institutions."
  },
  {
    id: "aicte_pragati",
    name: "AICTE Pragati Scholarship",
    org: "AICTE, Govt of India",
    value: "₹50,000/year",
    renewable: "4 years",
    criteria: { streams: ["PCM"], minMarks: 60, maxIncome: 800000, gender: "female" },
    matchFactors: ["female_student", "engineering_stream", "low_budget"],
    url: "https://www.aicte-pragati-saksham-gov.in",
    deadline: "December",
    competitionLevel: "moderate",
    region: "india",
    description: "For girl students in technical education (B.Tech/Diploma). 4000 scholarships awarded."
  },
  {
    id: "iit_fee_waiver",
    name: "IIT Need-Based Fee Waiver",
    org: "IITs (all campuses)",
    value: "Full tuition waiver + ₹1,000/month stipend",
    renewable: "Full B.Tech duration",
    criteria: { streams: ["PCM"], minMarks: 90, maxIncome: 500000 },
    matchFactors: ["iit_target", "low_budget", "high_marks"],
    url: "https://www.iitsystem.ac.in",
    deadline: "Post-admission",
    competitionLevel: "low",
    region: "india",
    description: "Any IIT student with family income under ₹5L gets full fee waiver automatically."
  },
  {
    id: "jn_tata",
    name: "JN Tata Endowment",
    org: "JN Tata Endowment Trust",
    value: "₹10–20L (loan scholarship)",
    renewable: "1 year (renewable)",
    criteria: { minMarks: 75, abroadRequired: true },
    matchFactors: ["abroad_open", "postgrad_target", "high_achiever"],
    url: "https://www.jntataendowment.org",
    deadline: "March",
    competitionLevel: "high",
    region: "global",
    description: "For Indian students pursuing higher education abroad. 150 scholars selected annually."
  },
  {
    id: "inlaks",
    name: "Inlaks Shivdasani Scholarship",
    org: "Inlaks Shivdasani Foundation",
    value: "Up to $100,000 (covers tuition + living)",
    renewable: "Full program",
    criteria: { minMarks: 80, abroadRequired: true, maxIncome: null },
    matchFactors: ["abroad_open", "elite_academics", "global_dream"],
    url: "https://www.inlaksfoundation.org",
    deadline: "April",
    competitionLevel: "elite",
    region: "global",
    description: "For exceptional Indian students (under 30) admitted to top global universities."
  },
  {
    id: "chevening",
    name: "Chevening Scholarship",
    org: "UK Government (FCDO)",
    value: "Full funding (UK Masters)",
    renewable: "1 year (Masters)",
    criteria: { minMarks: 75, abroadRequired: true },
    matchFactors: ["uk_target", "leadership_profile", "abroad_open"],
    url: "https://www.chevening.org",
    deadline: "November",
    competitionLevel: "elite",
    region: "uk",
    description: "UK's flagship scholarship for future global leaders. 1,800 scholars/year worldwide."
  },
  {
    id: "gates_cambridge",
    name: "Gates Cambridge Scholarship",
    org: "Bill & Melinda Gates Foundation",
    value: "Full funding (Cambridge Postgrad)",
    renewable: "Full program",
    criteria: { minMarks: 90, abroadRequired: true },
    matchFactors: ["cambridge_target", "research_interest", "elite_academics"],
    url: "https://www.gatescambridge.org",
    deadline: "October",
    competitionLevel: "elite",
    region: "uk",
    description: "For outstanding postgrad students at University of Cambridge. One of the world's most competitive."
  },
  {
    id: "daad",
    name: "DAAD Scholarship (Germany)",
    org: "German Academic Exchange Service",
    value: "€850–1,200/month + benefits",
    renewable: "Full program duration",
    criteria: { minMarks: 70, abroadRequired: true },
    matchFactors: ["germany_open", "postgrad_target", "abroad_open"],
    url: "https://www.daad.in",
    deadline: "October–December",
    competitionLevel: "high",
    region: "europe",
    description: "For Indian students pursuing Masters/PhD in Germany. Many programs are fully English-medium."
  },
  {
    id: "fulbright_nehru",
    name: "Fulbright-Nehru Fellowship",
    org: "USIEF",
    value: "Full funding (USA Masters/Research)",
    renewable: "Full program",
    criteria: { minMarks: 80, abroadRequired: true },
    matchFactors: ["usa_target", "research_interest", "abroad_open", "postgrad_target"],
    url: "https://www.usief.org.in",
    deadline: "July",
    competitionLevel: "elite",
    region: "usa",
    description: "The US government's flagship scholarship. Covers Masters and Research at US universities."
  },
  {
    id: "aga_khan",
    name: "Aga Khan Foundation Scholarship",
    org: "Aga Khan Foundation",
    value: "50% grant + 50% loan (full cost)",
    renewable: "Full program",
    criteria: { minMarks: 75, maxIncome: 500000, abroadRequired: true },
    matchFactors: ["low_budget", "abroad_open", "postgrad_target"],
    url: "https://www.akdn.org/our-agencies/aga-khan-foundation/scholarships",
    deadline: "March",
    competitionLevel: "high",
    region: "global",
    description: "For outstanding students with exceptional promise but limited financial means."
  },
  {
    id: "mext_japan",
    name: "MEXT Scholarship (Japan)",
    org: "Japanese Government (MEXT)",
    value: "Full tuition + ¥117,000/month + flights",
    renewable: "Full program (2–5 years)",
    criteria: { minMarks: 75, abroadRequired: true },
    matchFactors: ["japan_interest", "research_interest", "abroad_open"],
    url: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-scholarship.html",
    deadline: "April (via Embassy)",
    competitionLevel: "high",
    region: "global",
    description: "Japanese government's flagship scholarship. Covers tuition, living, and flights for research/UG/PG students."
  },
  {
    id: "csc_china",
    name: "CSC Scholarship (China)",
    org: "China Scholarship Council",
    value: "Full tuition + ¥2,500–3,500/month + insurance",
    renewable: "Full program",
    criteria: { minMarks: 70, abroadRequired: true },
    matchFactors: ["china_interest", "research_interest", "abroad_open", "low_budget"],
    url: "https://www.campuschina.org",
    deadline: "January–April",
    competitionLevel: "moderate",
    region: "global",
    description: "Fully funded scholarship for international students at Chinese universities including Peking, Tsinghua."
  },
  {
    id: "erasmus_mundus",
    name: "Erasmus Mundus Joint Masters",
    org: "European Union",
    value: "€1,400/month + tuition waiver + travel",
    renewable: "Full Masters (1–2 years)",
    criteria: { minMarks: 75, abroadRequired: true },
    matchFactors: ["europe_open", "abroad_open", "postgrad_target"],
    url: "https://erasmus-plus.ec.europa.eu",
    deadline: "October–January",
    competitionLevel: "high",
    region: "europe",
    description: "Study in 2+ European countries with full EU funding. 100+ joint Masters programs available."
  },
  {
    id: "kgsp_korea",
    name: "KGSP Scholarship (South Korea)",
    org: "Korean Government",
    value: "Full tuition + ₩900,000/month + flights + insurance",
    renewable: "Full program (4–6 years incl. Korean language)",
    criteria: { minMarks: 70, abroadRequired: true },
    matchFactors: ["korea_interest", "abroad_open", "low_budget"],
    url: "https://www.studyinkorea.go.kr",
    deadline: "February–March",
    competitionLevel: "moderate",
    region: "global",
    description: "Korean government scholarship covering Korean language training + UG/PG at top Korean universities including KAIST, SNU."
  },
  // ── GAP-3: India-Specific Scholarships ──────────────────────
  {
    id: "ntse",
    name: "NTSE (National Talent Search Examination)",
    org: "NCERT, Govt of India",
    value: "₹1,250/month (UG), ₹2,000/month (PG)",
    renewable: "Until PhD completion",
    criteria: { minMarks: 75, classLevel: ["10"] },
    matchFactors: ["high_marks", "india_study", "merit_based"],
    url: "https://ncert.nic.in/ntse.php",
    deadline: "November",
    competitionLevel: "high",
    region: "india",
    description: "India's most prestigious school-level scholarship. Stage I (state) + Stage II (national). Funds all the way through PhD."
  },
  {
    id: "csss",
    name: "Central Sector Scheme of Scholarships (CSSS)",
    org: "Ministry of Education, India",
    value: "₹10,000–20,000/year",
    renewable: "3 years (UG)",
    criteria: { minMarks: 80, maxIncome: 800000 },
    matchFactors: ["high_marks", "low_income", "india_study"],
    url: "https://scholarships.gov.in",
    deadline: "October",
    competitionLevel: "moderate",
    region: "india",
    description: "For students above 80th percentile in Class 12 boards with family income below ₹8 LPA."
  },
  {
    id: "pmss_defence",
    name: "Prime Minister's Scholarship Scheme (PMSS)",
    org: "Ministry of Defence, India",
    value: "₹2,500/month (boys), ₹3,000/month (girls)",
    renewable: "Duration of course",
    criteria: { minMarks: 60 },
    matchFactors: ["defence_background", "india_study"],
    url: "https://ksb.gov.in/PMSS.htm",
    deadline: "October",
    competitionLevel: "moderate",
    region: "india",
    description: "For wards/widows of ex-servicemen and ex-coast guard personnel pursuing professional degrees."
  },
  {
    id: "aicte_pragati",
    name: "AICTE Pragati Scholarship",
    org: "AICTE, Govt of India",
    value: "₹50,000/year",
    renewable: "4 years",
    criteria: { gender: "female", minMarks: 60, maxIncome: 800000 },
    eligible_domains: ["technology", "design"],
    ineligible_domains: ["finance", "law_government", "creative_media", "education_sports", "science_research"],
    matchFactors: ["female_student", "engineering", "low_income"],
    url: "https://www.aicte-india.org/schemes/students-development-schemes",
    deadline: "December",
    competitionLevel: "moderate",
    region: "india",
    description: "For girl students in AICTE-approved technical institutions. Covers tuition + ₹2,000/month."
  },
  {
    id: "icai_merit",
    name: "ICAI Merit Scholarship",
    org: "Institute of Chartered Accountants of India",
    value: "₹2,500/month",
    renewable: "Duration of CA course",
    criteria: { streams: ["Commerce", "PCM", "Arts"], minMarks: 55 },
    eligible_domains: ["finance"],
    ineligible_domains: ["technology", "creative_media", "healthcare", "education_sports", "science_research"],
    matchFactors: ["ca_aspirant", "merit_based"],
    url: "https://www.icai.org",
    deadline: "Ongoing (per attempt)",
    competitionLevel: "high",
    region: "india",
    description: "For CA students who clear Foundation/Intermediate in first attempt with top rank."
  },
  {
    id: "dst_wise",
    name: "DST WISE Fellowship (Women Scientists)",
    org: "DST, Govt of India",
    value: "₹55,000/month (PhD), ₹40,000/month (Post-Doc)",
    renewable: "3 years",
    criteria: { gender: "female", minMarks: 60 },
    eligible_domains: ["science_research", "technology", "healthcare"],
    ineligible_domains: ["finance", "law_government", "creative_media"],
    matchFactors: ["female_student", "research_interest", "science_stream"],
    url: "https://dst.gov.in/scientific-programmes/scientific-engineering-research/women-scientists-programs",
    deadline: "September",
    competitionLevel: "high",
    region: "india",
    description: "For women scientists who had a career break. Supports re-entry into S&T research."
  },
  {
    id: "nlu_merit",
    name: "NLU Merit-cum-Means Scholarship",
    org: "National Law Universities",
    value: "Full tuition waiver + stipend",
    renewable: "5 years (BA-LLB)",
    criteria: { minMarks: 75 },
    eligible_domains: ["law_government"],
    ineligible_domains: ["technology", "finance", "creative_media", "healthcare", "science_research"],
    matchFactors: ["clat_rank", "law_aspirant", "merit_based"],
    url: "https://consortiumofnlus.ac.in",
    deadline: "May (after CLAT)",
    competitionLevel: "elite",
    region: "india",
    description: "Top CLAT rankers at NLUs get full tuition waiver. Available at NLSIU, NALSAR, NLU-D, NUJS etc."
  },
  {
    id: "state_post_matric",
    name: "State Post-Matric Scholarship (SC/ST/OBC)",
    org: "State Governments of India",
    value: "Full tuition + maintenance allowance",
    renewable: "Duration of course",
    criteria: { minMarks: 50 },
    matchFactors: ["reserved_category", "low_income", "india_study"],
    url: "https://scholarships.gov.in",
    deadline: "Varies by state (Aug–Nov)",
    competitionLevel: "low",
    region: "india",
    description: "Available in all Indian states for SC/ST/OBC students. Covers tuition, maintenance, and book allowance."
  }
];

// Merge expansion scholarships
export const ALL_SCHOLARSHIPS = [...SCHOLARSHIPS, ...SCHOLARSHIPS_EXPANSION];
