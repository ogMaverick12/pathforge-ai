// ============================================================
// PATHFORGE AI — CAREER DATABASE (v4 — Master Prompt v2.0)
// ============================================================

import type { CareerType } from './career-types';

export interface CareerProfile {
  id: string;
  name: string;
  aliases: string[];
  category: "Technical" | "Financial" | "Entrepreneurial" | "Hybrid" | "Creative" | "Research" | "Government" | "Other";
  // ── Master Prompt v2.0 fields ──
  careerType: CareerType;
  domain: string;
  semantic_tags: string[];
  keywords_negative: string[];
  streams: string[];
  minMarks: number;
  minMarksStretch: number;
  domains: SkillDomain[];
  topInstitutions: InstitutionData[];
  salaryRange: { entry: string; mid: string; senior: string };
  timeline: number;
  globalScope: boolean;
  examRequired: string | null;
  roiScore: number;
  stressScore: number;
  description: string;
  realityNote: string;
}

export interface SkillDomain {
  name: string;
  skills: string[];
  topResource: string;
  timeMonths: number;
  contingency?: string;
}

export interface InstitutionData {
  name: string;
  tier: 1 | 2 | 3;
  city: string;
  state: string;
  fees_per_year: number;
  cutoff_description: string;
  placement_median: string;
  type: "government" | "private" | "deemed" | "global";
}

export const CAREERS: Record<string, CareerProfile> = {
  software_engineer: {
    id: "software_engineer",
    category: "Technical",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["software","coding","programming","tech","developer","engineer"],
    keywords_negative: ["hardware","mechanical","civil engineer"],
    name: "Software Engineer",
    aliases: ["swe", "software developer", "coder", "programmer", "developer",
               "google", "microsoft", "amazon", "faang", "tech", "coding", "web developer", "backend", "frontend", "full stack"],
    streams: ["PCM"],
    minMarks: 70,
    minMarksStretch: 55,
    domains: [
      { name: "CS Foundations", skills: ["DSA", "OS", "DBMS", "Networks", "Math"], topResource: "CLRS / Striver's DSA Sheet", timeMonths: 6 },
      { name: "Development", skills: ["React", "Node.js", "System Design", "APIs"], topResource: "The Odin Project + roadmap.sh", timeMonths: 4 },
      { name: "Career Ops", skills: ["Resume", "LinkedIn", "Open Source", "Interviews"], topResource: "Exponent + Neetcode", timeMonths: 3 }
    ],
    topInstitutions: [
      { name: "IIT Bombay", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 200", placement_median: "₹28L", type: "government" },
      { name: "IIT Delhi", tier: 1, city: "Delhi", state: "Delhi", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 100", placement_median: "₹30L", type: "government" },
      { name: "NIT Trichy", tier: 1, city: "Tiruchirappalli", state: "Tamil Nadu", fees_per_year: 180000, cutoff_description: "JEE Main Top 5000", placement_median: "₹12L", type: "government" },
      { name: "BITS Pilani", tier: 1, city: "Pilani", state: "Rajasthan", fees_per_year: 550000, cutoff_description: "BITSAT 360+", placement_median: "₹14L", type: "deemed" },
      { name: "IIIT Hyderabad", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 300000, cutoff_description: "JEE Main + UGEE", placement_median: "₹16L", type: "deemed" },
      { name: "VIT Vellore", tier: 2, city: "Vellore", state: "Tamil Nadu", fees_per_year: 200000, cutoff_description: "VITEEE", placement_median: "₹7L", type: "private" },
      { name: "MIT (USA)", tier: 1, city: "Cambridge", state: "Massachusetts", fees_per_year: 4200000, cutoff_description: "Top 1% global applicant", placement_median: "₹1.2Cr", type: "global" }
    ],
    salaryRange: { entry: "₹6–20 LPA", mid: "₹22–50 LPA",
    senior: "₹60–200 LPA" },
    timeline: 4,
    globalScope: true,
    examRequired: "JEE Main / JEE Advanced",
    roiScore: 9,
    stressScore: 7,
    description: "Build software products used by millions. The most in-demand technical career globally.",
    realityNote: "The gap between 'learning to code' and 'getting hired at a top company' is 2–3 years of consistent, deliberate practice. Most people underestimate this."
  },

  doctor_mbbs: {
    id: "doctor_mbbs",
    category: "Research",
    careerType: "B",
    domain: "healthcare",
    semantic_tags: ["medicine","doctor","mbbs","hospital","surgery","physician"],
    keywords_negative: ["veterinary","ayurveda","homeopathy"],
    name: "Medical Doctor (MBBS)",
    aliases: ["doctor", "physician", "mbbs", "medicine", "medical", "surgeon", "neet", "aiims", "doctor mbbs", "cardiologist", "dermatologist", "ortho"],
    streams: ["PCB"],
    minMarks: 85,
    minMarksStretch: 75,
    domains: [
      { name: "NEET Preparation", skills: ["Physics", "Chemistry", "Biology", "MCQ Strategy"], topResource: "Aakash / Allen + PW NEET", timeMonths: 18 },
      { name: "Clinical Foundation", skills: ["Anatomy", "Physiology", "Biochemistry"], topResource: "Gray's Anatomy + Robbins", timeMonths: 12 },
      { name: "Specialization Prep", skills: ["PG Entrance Strategy", "Clinical Rotations"], topResource: "Marrow App", timeMonths: 24 }
    ],
    topInstitutions: [
      { name: "AIIMS New Delhi", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 1628, cutoff_description: "NEET Top 50 rank", placement_median: "₹12L (PG)", type: "government" },
      { name: "JIPMER", tier: 1, city: "Puducherry", state: "Puducherry", fees_per_year: 5000, cutoff_description: "NEET Top 200", placement_median: "₹10L (PG)", type: "government" },
      { name: "Maulana Azad Medical College", tier: 1, city: "Delhi", state: "Delhi", fees_per_year: 12000, cutoff_description: "NEET Top 600", placement_median: "₹10L", type: "government" },
      { name: "Armed Forces Medical College", tier: 1, city: "Pune", state: "Maharashtra", fees_per_year: 56000, cutoff_description: "NEET Top 1000 + Defence", placement_median: "₹15L", type: "government" },
      { name: "Kasturba Medical College", tier: 2, city: "Manipal", state: "Karnataka", fees_per_year: 1800000, cutoff_description: "NEET 600+", placement_median: "₹14L", type: "private" }
    ],
    salaryRange: { entry: "₹6–12 LPA", mid: "₹20–60 LPA",
    senior: "₹60–300 LPA" },
    timeline: 6,
    globalScope: false,
    examRequired: "NEET-UG",
    roiScore: 7,
    stressScore: 9,
    description: "Diagnose and treat patients. One of the most respected professions in India.",
    realityNote: "MBBS is 5.5 years, then 1 year internship, then PG (3 years) if you want to specialize. You're looking at 10+ years before peak earning. This is a vocation, not a career."
  },

  chartered_accountant: {
    id: "chartered_accountant",
    category: "Financial",
    careerType: "B",
    domain: "finance",
    semantic_tags: ["accounting","audit","taxation","finance","ca"],
    keywords_negative: ["software","coding","engineering"],
    name: "Chartered Accountant (CA)",
    aliases: ["ca", "chartered accountant", "finance", "accountant", "cfa", "icai", "audit", "taxation"],
    streams: ["Commerce", "PCM", "Arts"],
    minMarks: 60,
    minMarksStretch: 50,
    domains: [
      { name: "CA Foundation", skills: ["Accounts", "Maths", "Economics", "Business Law"], topResource: "ICAI Study Material + ICAI CoE", timeMonths: 8 },
      { name: "CA Intermediate", skills: ["Advanced Accounts", "Taxation", "Audit", "Cost Accounting"], topResource: "ICAI + CA Wallah", timeMonths: 18 },
      { name: "CA Final", skills: ["SFM", "Advanced Taxation", "Strategic Management"], topResource: "ICAI + Sripal Jain", timeMonths: 18 }
    ],
    topInstitutions: [
      { name: "ICAI (All India)", tier: 1, city: "Pan-India", state: "All India", fees_per_year: 25000, cutoff_description: "ICAI Exams — pass rate ~10%", placement_median: "₹7–12L", type: "government" },
      { name: "Articleship at Big 4", tier: 1, city: "Metro cities", state: "Multiple", fees_per_year: 0, cutoff_description: "CA Intermediate cleared", placement_median: "₹8L post-qualification", type: "private" }
    ],
    salaryRange: { entry: "₹5–8 LPA", mid: "₹15–35 LPA",
    senior: "₹40–150 LPA" },
    timeline: 5,
    globalScope: true,
    examRequired: "CA Foundation → Intermediate → Final (ICAI)",
    roiScore: 8,
    stressScore: 8,
    description: "Financial experts who audit, tax, and advise companies. One of India's most stable professions.",
    realityNote: "CA pass rates are brutal (~10% in Finals). Most people take 2–3 attempts. The 3-year articleship is unpaid or poorly paid. The grind is real."
  },

  data_scientist: {
    id: "data_scientist",
    category: "Technical",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["data","analytics","machine learning","statistics","python","big data"],
    keywords_negative: ["data entry","database admin"],
    name: "Data Scientist / ML Engineer",
    aliases: ["data science", "machine learning", "ml", "ai", "artificial intelligence", "data analyst", "nlp", "deep learning", "chatgpt", "openai", "ai engineer", "ml engineer", "ai ml engineer"],
    streams: ["PCM", "Commerce"],
    minMarks: 75,
    minMarksStretch: 65,
    domains: [
      { name: "Mathematics", skills: ["Linear Algebra", "Statistics", "Probability", "Calculus"], topResource: "3Blue1Brown + Khan Academy", timeMonths: 4 },
      { name: "Programming & ML", skills: ["Python", "Pandas", "Sklearn", "PyTorch", "SQL"], topResource: "fast.ai + Kaggle", timeMonths: 6 },
      { name: "Specialization", skills: ["NLP", "Computer Vision", "MLOps", "Research Papers"], topResource: "Andrej Karpathy's lectures", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (M.Tech AI)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "GATE DA / CS", placement_median: "₹32L", type: "government" },
      { name: "IISc Bangalore", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 50000, cutoff_description: "GATE Top 100", placement_median: "₹28L", type: "government" },
      { name: "IIIT Hyderabad (CLD)", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 300000, cutoff_description: "PGEE exam", placement_median: "₹22L", type: "deemed" }
    ],
    salaryRange: { entry: "₹8–18 LPA", mid: "₹25–60 LPA",
    senior: "₹70–250 LPA" },
    timeline: 4,
    globalScope: true,
    examRequired: "JEE / GATE for postgrad",
    roiScore: 9,
    stressScore: 6,
    description: "Build AI systems that power search, recommendations, and automation at scale.",
    realityNote: "'Data science' is now a crowded field. The real money is in ML Engineering (building production systems) — which requires strong software engineering skills, not just notebooks."
  },

  game_developer: {
    id: "game_developer",
    category: "Other",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["gaming","game design","unity","unreal","game dev"],
    keywords_negative: ["gamer","esports player","game tester"],
    name: "Game Developer",
    aliases: ["game dev", "game designer", "game development", "unity", "unreal", "gaming", "indie dev", "esports"],
    streams: ["PCM"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "Programming", skills: ["C#/C++", "Unity/Unreal", "OOP", "Game Physics"], topResource: "Unity Learn + Brackeys", timeMonths: 6 },
      { name: "Game Design", skills: ["Level Design", "Systems Thinking", "UX", "Narrative"], topResource: "Game Design Unlocked + GDC Vault", timeMonths: 4 },
      { name: "Portfolio", skills: ["3 Shipped Games", "Itch.io", "Game Jams", "Networking"], topResource: "Ludum Dare jams", timeMonths: 8 }
    ],
    topInstitutions: [
      { name: "MAAC (Multiple cities)", tier: 2, city: "Pan-India", state: "Multiple", fees_per_year: 150000, cutoff_description: "Portfolio + Interview", placement_median: "₹4L entry", type: "private" },
      { name: "Symbiosis Centre for Design", tier: 2, city: "Pune", state: "Maharashtra", fees_per_year: 350000, cutoff_description: "Design Aptitude Test", placement_median: "₹6L", type: "private" },
      { name: "Self-taught + Portfolio", tier: 1, city: "Remote", state: "Global", fees_per_year: 0, cutoff_description: "3+ shipped games", placement_median: "₹6–30L", type: "private" }
    ],
    salaryRange: { entry: "₹3–7 LPA", mid: "₹10–30 LPA",
    senior: "₹40–120 LPA" },
    timeline: 3,
    globalScope: true,
    examRequired: null,
    roiScore: 6,
    stressScore: 7,
    description: "Design and build interactive experiences. India's gaming industry is growing 30% annually.",
    realityNote: "Indian game studios pay poorly entry-level. The global path (indie or international studio) requires an extraordinary portfolio. Self-publishing a successful game on Steam/mobile is the highest-ROI route — and the hardest."
  },

  lawyer: {
    id: "lawyer",
    category: "Other",
    careerType: "B",
    domain: "law_government",
    semantic_tags: ["law","legal","court","justice","litigation","contracts","corporate law"],
    keywords_negative: ["crime fiction","law enforcement","police"],
    name: "Lawyer / Advocate",
    aliases: ["lawyer", "advocate", "law", "llb", "clat", "legal", "barrister", "attorney", "judge", "corporate law", "criminal lawyer"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Foundation", skills: ["Constitutional Law", "Legal Reasoning", "CLAT Prep"], topResource: "LegalEdge + Career Launcher CLAT", timeMonths: 12 },
      { name: "Practice", skills: ["Contract Law", "Criminal", "Corporate Law", "Mooting"], topResource: "Manupatra + SCC Online", timeMonths: 24 },
      { name: "Specialization", skills: ["Corporate/IPR/Criminal/Constitutional"], topResource: "NLSIU library + Internships", timeMonths: 24 }
    ],
    topInstitutions: [
      { name: "NLS Bangalore", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 180000, cutoff_description: "CLAT Top 300", placement_median: "₹18L", type: "government" },
      { name: "NALSAR Hyderabad", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 150000, cutoff_description: "CLAT Top 500", placement_median: "₹15L", type: "government" },
      { name: "NUJS Kolkata", tier: 1, city: "Kolkata", state: "West Bengal", fees_per_year: 120000, cutoff_description: "CLAT Top 700", placement_median: "₹12L", type: "government" }
    ],
    salaryRange: { entry: "₹4–10 LPA", mid: "₹15–50 LPA",
    senior: "₹80–500 LPA" },
    timeline: 5,
    globalScope: true,
    examRequired: "CLAT (5-year integrated LLB)",
    roiScore: 7,
    stressScore: 8,
    description: "Represent clients, draft policy, fight cases. India needs 1.5M more lawyers.",
    realityNote: "Unless you're at a NLU or top private college, early years in law are brutal financially. Junior lawyers at small firms often earn ₹10–15K/month. The ceiling is enormous but the floor is very low."
  },

  architect: {
    id: "architect",
    category: "Creative",
    careerType: "A",
    domain: "design",
    semantic_tags: ["architecture","building","design","construction","urban planning"],
    keywords_negative: ["software architect","cloud architect","enterprise architect"],
    name: "Architect",
    aliases: ["architect", "architecture", "nata", "b.arch", "building design", "urban design", "interior design"],
    streams: ["PCM", "Arts"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Design Foundation", skills: ["Sketching", "AutoCAD", "Revit", "Design Theory"], topResource: "NATA prep + DesignBoom", timeMonths: 8 },
      { name: "Technical", skills: ["Structures", "Building Materials", "Environmental Design"], topResource: "Neufert + Francis DK Ching", timeMonths: 12 },
      { name: "Portfolio", skills: ["3D Rendering", "SketchUp", "Rhino", "Competition entries"], topResource: "ArchDaily + Archinect", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "SPA Delhi", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 50000, cutoff_description: "JEE Main Arch Paper + NATA", placement_median: "₹5L", type: "government" },
      { name: "CEPT Ahmedabad", tier: 1, city: "Ahmedabad", state: "Gujarat", fees_per_year: 200000, cutoff_description: "NATA + CEPT Entrance", placement_median: "₹6L", type: "deemed" },
      { name: "IIT Kharagpur (Arch)", tier: 1, city: "Kharagpur", state: "West Bengal", fees_per_year: 220000, cutoff_description: "JEE Advanced + AAT", placement_median: "₹8L", type: "government" }
    ],
    salaryRange: { entry: "₹3–7 LPA", mid: "₹10–25 LPA",
    senior: "₹40–120 LPA" },
    timeline: 5,
    globalScope: true,
    examRequired: "NATA + JEE (Paper 2)",
    roiScore: 6,
    stressScore: 7,
    description: "Design the built environment — from homes to entire cities.",
    realityNote: "Architecture is a 5-year degree followed by 2 years of unpaid/low-paid apprenticeship before you can register as an architect. The creative fulfillment is real; the early income is painful."
  },

  cricketer: {
    id: "cricketer",
    category: "Other",
    careerType: "C",
    domain: "education_sports",
    semantic_tags: ["cricket","sports","batting","bowling","ipl","bcci"],
    keywords_negative: ["sports management","sports journalism","cricket commentary"],
    name: "Professional Cricketer",
    aliases: ["cricket", "cricketer", "bcci", "ipl", "ranji", "sports", "athlete", "cricket player", "batsman", "bowler"],
    streams: ["PCM", "PCB", "Commerce", "Arts"],
    minMarks: 40,
    minMarksStretch: 30,
    domains: [
      { name: "Technical Game", skills: ["Batting/Bowling/Fielding", "Fitness", "Mental Strength"], topResource: "State Academy + Personal Coach", timeMonths: 36 },
      { name: "Structure Pipeline", skills: ["U-19 trials", "District team", "State team"], topResource: "BCCI pathway docs + SAI", timeMonths: 48 },
      { name: "Backup Career", skills: ["Sports Management", "Commentary", "Coaching License"], topResource: "PGDM Sports + BCCI Level 1 coaching", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "NCA Bangalore", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 0, cutoff_description: "BCCI selection via state boards", placement_median: "₹15L+ (Ranji)", type: "government" },
      { name: "SAI Training Centres", tier: 1, city: "Multiple", state: "Multiple", fees_per_year: 0, cutoff_description: "National talent search", placement_median: "Stipend during training", type: "government" }
    ],
    salaryRange: { entry: "₹3L (Ranji)", mid: "₹50L+ (IPL)",
    senior: "₹10Cr+ (International)" },
    timeline: 8,
    globalScope: false,
    examRequired: null,
    roiScore: 5,
    stressScore: 10,
    description: "Represent your state and country. The BCCI pipeline is the only legitimate path.",
    realityNote: "India produces 300,000 cricketers per year. ~300 make it to Ranji. ~15 per year break into international cricket. This is the hardest career path in this list. A mandatory backup plan is non-negotiable — PathForge will generate one."
  },

// ═══════════════════════════════════════════════════════════════
// TECHNOLOGY (EXPANDED)
// ═══════════════════════════════════════════════════════════════

  cybersecurity_engineer: {
    id: "cybersecurity_engineer",
    category: "Other",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["cybersecurity","hacking","security","infosec","pentesting"],
    keywords_negative: ["physical security","security guard"],
    name: "Cybersecurity Engineer / Ethical Hacker",
    aliases: ["cybersecurity", "ethical hacker", "hacker", "security", "pentester", "infosec", "cyber", "bug bounty", "ceh"],
    streams: ["PCM", "Commerce"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Networking & OS", skills: ["TCP/IP", "Linux", "Windows Server", "Firewalls", "VPNs"], topResource: "TryHackMe + HackTheBox", timeMonths: 4 },
      { name: "Offensive Security", skills: ["Penetration testing", "Exploit development", "OWASP Top 10", "Burp Suite"], topResource: "OffSec OSCP certification", timeMonths: 6 },
      { name: "Defensive & Compliance", skills: ["SIEM", "Incident response", "SOC operations", "ISO 27001"], topResource: "CompTIA Security+ + CEH", timeMonths: 4 }
    ],
    topInstitutions: [
      { name: "IIT Madras (Cybersecurity)", tier: 1, city: "Chennai", state: "Tamil Nadu", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹18L", type: "government" },
      { name: "CDAC (Multiple cities)", tier: 2, city: "Pan India", state: "Multiple", fees_per_year: 80000, cutoff_description: "C-CAT entrance", placement_median: "₹8L", type: "government" },
      { name: "Carnegie Mellon (INI)", tier: 1, city: "Pittsburgh", state: "Pennsylvania", fees_per_year: 5500000, cutoff_description: "GRE + strong CS background", placement_median: "₹1.5Cr", type: "global" },
      { name: "Georgia Tech (Cybersecurity MS)", tier: 1, city: "Atlanta", state: "Georgia", fees_per_year: 3000000, cutoff_description: "GRE + CS background", placement_median: "₹1.2Cr", type: "global" },
      { name: "Royal Holloway (Cybersecurity)", tier: 2, city: "London", state: "England", fees_per_year: 2500000, cutoff_description: "CS degree + English", placement_median: "₹40L", type: "global" },
      { name: "SANS Technology Institute", tier: 1, city: "Remote/USA", state: "Multiple", fees_per_year: 1500000, cutoff_description: "Professional + GIAC certifications", placement_median: "₹80L (USA)", type: "global" }
    ],
    salaryRange: { entry: "₹8–18 LPA", mid: "₹25–60 LPA",
    senior: "₹80–200 LPA" },
    timeline: 3,
    globalScope: true,
    examRequired: "CEH / OSCP certifications + degree",
    roiScore: 9,
    stressScore: 7,
    description: "Protect systems, find vulnerabilities, and defend against attacks. Fastest-growing tech specialization.",
    realityNote: "India has a 3 million cybersecurity professional shortage by 2025. Bug bounty programs at Google, Microsoft pay ₹5–50L per valid vulnerability. Certifications matter more than degrees here."
  },

  cloud_architect: {
    id: "cloud_architect",
    category: "Other",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["cloud","aws","azure","devops","infrastructure"],
    keywords_negative: ["meteorology","weather"],
    name: "Cloud Architect / DevOps Engineer",
    aliases: ["cloud", "devops", "aws", "azure", "google cloud", "cloud engineer", "site reliability", "sre", "infrastructure"],
    streams: ["PCM"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Cloud Platforms", skills: ["AWS/Azure/GCP", "Containerization", "Kubernetes", "Terraform"], topResource: "AWS Solutions Architect cert + A Cloud Guru", timeMonths: 6 },
      { name: "DevOps Practices", skills: ["CI/CD pipelines", "Docker", "Jenkins", "GitOps", "Monitoring"], topResource: "The DevOps Handbook + Linux Foundation", timeMonths: 4 },
      { name: "Architecture Design", skills: ["Microservices", "Serverless", "Database design", "Cost optimization"], topResource: "AWS Well-Architected Framework", timeMonths: 4 }
    ],
    topInstitutions: [
      { name: "IIT (any) + AWS Certification", tier: 1, city: "Pan India", state: "Multiple", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹22L", type: "government" },
      { name: "NIT + Cloud Certs", tier: 2, city: "Pan India", state: "Multiple", fees_per_year: 180000, cutoff_description: "JEE Main", placement_median: "₹14L", type: "government" },
      { name: "University of Washington (Cloud MS)", tier: 1, city: "Seattle", state: "Washington", fees_per_year: 4500000, cutoff_description: "GRE + CS background", placement_median: "₹1.3Cr", type: "global" },
      { name: "Delft University (Netherlands)", tier: 1, city: "Delft", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "CS degree + English", placement_median: "₹60L", type: "global" }
    ],
    salaryRange: { entry: "₹10–20 LPA", mid: "₹30–70 LPA",
    senior: "₹1–2Cr" },
    timeline: 3,
    globalScope: true,
    examRequired: "AWS/Azure/GCP certification + degree",
    roiScore: 9,
    stressScore: 6,
    description: "Design and manage cloud infrastructure for companies at scale.",
    realityNote: "Cloud architect is the highest-paying non-management tech role in India. AWS/Azure/GCP certs often matter more than which college you attended."
  },

  ui_ux_designer: {
    id: "ui_ux_designer",
    category: "Other",
    careerType: "C",
    domain: "design",
    semantic_tags: ["ux","ui","user experience","design","figma","prototype"],
    keywords_negative: ["graphic design","fashion design"],
    name: "UI/UX Designer / Product Designer",
    aliases: ["ux", "ui", "ux designer", "ui designer", "product design", "user experience", "human computer interaction", "hci", "interaction design"],
    streams: ["Arts", "Commerce", "PCM"],
    minMarks: 50,
    minMarksStretch: 40,
    domains: [
      { name: "Design Thinking", skills: ["User research", "Personas", "Journey mapping", "Usability testing"], topResource: "IDEO Design Thinking + NN/g courses", timeMonths: 4 },
      { name: "Visual & Interaction Design", skills: ["Figma", "Prototyping", "Design systems", "Accessibility"], topResource: "Shift Nudge + Refactoring UI", timeMonths: 5 },
      { name: "Portfolio", skills: ["3 case studies", "Dribbble/Behance", "Design critiques", "Internships"], topResource: "Read.cv + Layers.to community", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "NID Ahmedabad (Interaction Design)", tier: 1, city: "Ahmedabad", state: "Gujarat", fees_per_year: 200000, cutoff_description: "NID entrance", placement_median: "₹10L", type: "government" },
      { name: "MIT Institute of Design (Pune)", tier: 2, city: "Pune", state: "Maharashtra", fees_per_year: 350000, cutoff_description: "Portfolio + aptitude test", placement_median: "₹7L", type: "private" },
      { name: "Interaction Design Foundation (Online)", tier: 2, city: "Remote", state: "Global", fees_per_year: 15000, cutoff_description: "Open enrollment", placement_median: "₹8L (self-placed)", type: "global" },
      { name: "Copenhagen Institute of Interaction Design", tier: 1, city: "Copenhagen", state: "Denmark", fees_per_year: 1800000, cutoff_description: "Portfolio + interview", placement_median: "₹45L", type: "global" },
      { name: "School of Visual Arts NYC (MFA Design)", tier: 1, city: "New York", state: "New York", fees_per_year: 4500000, cutoff_description: "Portfolio + statement", placement_median: "₹50L", type: "global" }
    ],
    salaryRange: { entry: "₹5–12 LPA", mid: "₹18–45 LPA",
    senior: "₹60–150 LPA" },
    timeline: 3,
    globalScope: true,
    examRequired: "Portfolio-based (no formal exam)",
    roiScore: 8,
    stressScore: 5,
    description: "Design how people interact with software. Every app, website, and digital product needs UX.",
    realityNote: "UX without a strong portfolio is worthless. 3 excellent case studies beat a degree from a mediocre design school every time. Start designing real things immediately."
  },

  blockchain_developer: {
    id: "blockchain_developer",
    category: "Other",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["blockchain","crypto","web3","smart contracts","ethereum"],
    keywords_negative: ["cryptocurrency trading","bitcoin mining"],
    name: "Blockchain Developer / Web3 Engineer",
    aliases: ["blockchain", "web3", "crypto", "defi", "nft", "solidity", "ethereum", "smart contracts"],
    streams: ["PCM"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Blockchain Fundamentals", skills: ["Cryptography", "Consensus mechanisms", "Ethereum", "Bitcoin protocol"], topResource: "MIT OpenCourseWare Blockchain + Mastering Bitcoin", timeMonths: 4 },
      { name: "Smart Contract Dev", skills: ["Solidity", "Hardhat", "Foundry", "DeFi protocols", "Security auditing"], topResource: "CryptoZombies + Alchemy University", timeMonths: 5 },
      { name: "Web3 Ecosystem", skills: ["IPFS", "Layer 2 solutions", "DAO governance", "Token economics"], topResource: "Ethereum.org docs + Paradigm research", timeMonths: 3 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (Blockchain club pathway)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹25L+", type: "government" },
      { name: "Alchemy University (Online)", tier: 2, city: "Remote", state: "Global", fees_per_year: 0, cutoff_description: "Open enrollment", placement_median: "₹20L (self-placed)", type: "global" },
      { name: "University of Nicosia (Cyprus)", tier: 2, city: "Nicosia", state: "Cyprus", fees_per_year: 600000, cutoff_description: "Strong CS background", placement_median: "₹30L", type: "global" }
    ],
    salaryRange: { entry: "₹12–25 LPA", mid: "₹40–100 LPA",
    senior: "₹1–5Cr (token compensation)" },
    timeline: 2,
    globalScope: true,
    examRequired: null,
    roiScore: 8,
    stressScore: 7,
    description: "Build decentralized applications and financial protocols on blockchain networks.",
    realityNote: "Web3 salaries are among the highest in tech but the industry is volatile — companies rise and collapse with crypto markets. Never take 100% token compensation. The skills transfer to fintech and security regardless."
  },

  esports_professional: {
    id: "esports_professional",
    category: "Other",
    careerType: "C",
    domain: "education_sports",
    semantic_tags: ["esports","gaming","competitive gaming","streaming","valorant","csgo"],
    keywords_negative: ["game developer","game designer"],
    name: "Esports Professional / Content Creator",
    aliases: ["esports", "gaming", "streamer", "youtuber", "content creator", "twitch", "youtube gaming", "pro gamer", "esports player"],
    streams: ["PCM", "PCB", "Commerce", "Arts"],
    minMarks: 35,
    minMarksStretch: 25,
    domains: [
      { name: "Elite Game Performance", skills: ["Top 0.1% ranked gameplay", "Game-specific mechanics", "Mental performance", "Coaching"], topResource: "Coaching from Challengers/GMs + VOD review", timeMonths: 24 },
      { name: "Content & Brand", skills: ["Streaming setup", "Video editing", "Thumbnail design", "Community building"], topResource: "Streamlabs + YouTube Creator Academy", timeMonths: 12 },
      { name: "Business of Gaming", skills: ["Brand deals", "Merchandise", "Esports org networking", "Legal basics"], topResource: "StreamScheme + Esports Observer", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "Indian Esports Federation (ESFI)", tier: 2, city: "Pan India", state: "Multiple", fees_per_year: 0, cutoff_description: "National ranking qualifications", placement_median: "₹3–50L (prize + brand)", type: "government" },
      { name: "Staffordshire University (Esports)", tier: 2, city: "Stoke-on-Trent", state: "England", fees_per_year: 1500000, cutoff_description: "Portfolio + gaming credentials", placement_median: "₹18L", type: "global" },
      { name: "Full Sail University (Game Design)", tier: 2, city: "Orlando", state: "Florida", fees_per_year: 3000000, cutoff_description: "Application + portfolio", placement_median: "₹20L", type: "global" },
      { name: "Self-built audience (YouTube/Twitch)", tier: 1, city: "Remote", state: "Global", fees_per_year: 0, cutoff_description: "100K+ subscribers / consistent viewership", placement_median: "₹5–500L (highly variable)", type: "private" }
    ],
    salaryRange: { entry: "₹0–5L (building phase)", mid: "₹10–100L (monetized creator)",
    senior: "₹1Cr+ (top tier)" },
    timeline: 3,
    globalScope: true,
    examRequired: null,
    roiScore: 4,
    stressScore: 8,
    description: "Compete professionally in games or build a gaming content brand. India's esports market is ₹11,000Cr and growing.",
    realityNote: "Pro gaming careers peak at age 22–26 for most games. 99% of aspiring pro gamers never earn a living wage from competition alone. Content creation (streaming/YouTube) is the financially sustainable path — treat esports as the niche and content as the business."
  },

// ═══════════════════════════════════════════════════════════════
// HEALTHCARE (EXTREME EXPANSION)
// ═══════════════════════════════════════════════════════════════

  nurse: {
    id: "nurse",
    category: "Research",
    careerType: "A",
    domain: "healthcare",
    semantic_tags: ["nursing","patient care","hospital","healthcare","bsc nursing"],
    keywords_negative: ["doctor","surgeon"],
    name: "Nurse / Nursing Professional",
    aliases: ["nurse", "nursing", "bsc nursing", "anm", "gnm", "healthcare nurse", "icu nurse", "midwife"],
    streams: ["PCB"],
    minMarks: 50,
    minMarksStretch: 40,
    domains: [
      { name: "Clinical Nursing", skills: ["Anatomy", "Pharmacology", "Patient assessment", "IV therapy", "ICU skills"], topResource: "NCLEX study materials + Indian Nursing Council syllabus", timeMonths: 18 },
      { name: "Specialization", skills: ["Critical care", "Oncology nursing", "Pediatric nursing", "Mental health nursing"], topResource: "American Association of Critical-Care Nurses", timeMonths: 12 },
      { name: "Global Licensing", skills: ["NCLEX-RN (USA)", "NMC OSCE (UK)", "IELTS/OET", "HAAD (UAE)"], topResource: "Archer Review + NMC prep courses", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "AIIMS (B.Sc Nursing)", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 15000, cutoff_description: "AIIMS Nursing entrance", placement_median: "₹5L India / ₹40L abroad", type: "government" },
      { name: "CMC Vellore (Nursing)", tier: 1, city: "Vellore", state: "Tamil Nadu", fees_per_year: 80000, cutoff_description: "CMC entrance exam", placement_median: "₹4L India / ₹45L abroad", type: "private" },
      { name: "Johns Hopkins (Nursing, USA)", tier: 1, city: "Baltimore", state: "Maryland", fees_per_year: 5000000, cutoff_description: "Strong science GPA + TOEFL", placement_median: "₹1.2Cr (USA)", type: "global" },
      { name: "University of Toronto (Nursing)", tier: 1, city: "Toronto", state: "Canada", fees_per_year: 2800000, cutoff_description: "Science UG + IELTS 7.0", placement_median: "₹80L (Canada)", type: "global" },
      { name: "University of Melbourne (Nursing)", tier: 1, city: "Melbourne", state: "Australia", fees_per_year: 3200000, cutoff_description: "Science background + IELTS 7.0", placement_median: "₹90L (Australia)", type: "global" },
      { name: "NMC-registered UK programs", tier: 2, city: "Multiple UK", state: "England", fees_per_year: 2500000, cutoff_description: "Science + OET/IELTS", placement_median: "₹60L (UK NHS)", type: "global" }
    ],
    salaryRange: { entry: "₹3–6 LPA (India) / ₹50–80 LPA (abroad)", mid: "₹8–15 LPA (India) / ₹80–120 LPA (abroad)",
    senior: "₹20L (India) / ₹150L+ (abroad)" },
    timeline: 4,
    globalScope: true,
    examRequired: "NCLEX-RN (USA) / NMC OSCE (UK) / IELTS",
    roiScore: 8,
    stressScore: 8,
    description: "Provide frontline patient care. The global nursing shortage means Indian nurses are in extreme demand abroad.",
    realityNote: "Nursing in India is criminally underpaid (₹15–25K/month in many states). The real opportunity is abroad — Australia, Canada, UK, and UAE all actively recruit Indian nurses. NCLEX or NMC qualification transforms the career financially."
  },

  veterinarian: {
    id: "veterinarian",
    category: "Other",
    careerType: "B",
    domain: "healthcare",
    semantic_tags: ["veterinary","animal","pet","vet","animal doctor"],
    keywords_negative: ["human medicine","mbbs"],
    name: "Veterinarian / Animal Doctor",
    aliases: ["vet", "veterinarian", "veterinary", "animal doctor", "bvsc", "wildlife vet", "zoo vet"],
    streams: ["PCB"],
    minMarks: 70,
    minMarksStretch: 60,
    domains: [
      { name: "Veterinary Science", skills: ["Animal anatomy", "Pharmacology", "Surgery", "Diagnostics"], topResource: "VCAAH entrance materials + Merck Vet Manual", timeMonths: 24 },
      { name: "Specialization", skills: ["Small animals", "Large animals", "Wildlife", "Exotic animals", "Aquatic"], topResource: "WSAVA guidelines + internships at zoos/wildlife reserves", timeMonths: 18 },
      { name: "Clinical Practice", skills: ["Clinic management", "Pathology", "Vaccination protocols"], topResource: "VIN (Veterinary Information Network)", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IVRI Bareilly", tier: 1, city: "Bareilly", state: "Uttar Pradesh", fees_per_year: 30000, cutoff_description: "ICAR AIEEA entrance", placement_median: "₹6L", type: "government" },
      { name: "Madras Veterinary College", tier: 1, city: "Chennai", state: "Tamil Nadu", fees_per_year: 20000, cutoff_description: "Tamil Nadu VETA entrance", placement_median: "₹5L", type: "government" },
      { name: "Royal Veterinary College London", tier: 1, city: "London", state: "England", fees_per_year: 4500000, cutoff_description: "A-levels AAB science + UCAT", placement_median: "₹55L (UK)", type: "global" },
      { name: "University of Sydney (Vet Science)", tier: 1, city: "Sydney", state: "Australia", fees_per_year: 4800000, cutoff_description: "High ATAR + science prerequisites", placement_median: "₹65L (Australia)", type: "global" },
      { name: "Utrecht University (Veterinary)", tier: 1, city: "Utrecht", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "Science background + lottery system", placement_median: "₹50L (Netherlands)", type: "global" }
    ],
    salaryRange: { entry: "₹4–8 LPA", mid: "₹15–35 LPA",
    senior: "₹50–100 LPA (specialist/abroad)" },
    timeline: 6,
    globalScope: true,
    examRequired: "ICAR AIEEA (India) / State vet entrance",
    roiScore: 6,
    stressScore: 7,
    description: "Treat and care for animals — companion, livestock, and wildlife. Fastest growing with pet industry boom.",
    realityNote: "India's pet industry is growing 20% annually. Urban veterinary practice is becoming lucrative. Wildlife and zoo veterinary jobs are extremely scarce but deeply fulfilling."
  },

  ayurveda_practitioner: {
    id: "ayurveda_practitioner",
    category: "Other",
    careerType: "B",
    domain: "healthcare",
    semantic_tags: ["ayurveda","bams","traditional medicine","herbal","wellness"],
    keywords_negative: ["allopathy","mbbs"],
    name: "Ayurveda Practitioner / BAMS Doctor",
    aliases: ["ayurveda", "bams", "ayurvedic doctor", "traditional medicine", "naturopathy", "homeopathy"],
    streams: ["PCB"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "Ayurvedic Sciences", skills: ["Sanskrit basics", "Dravyaguna", "Panchakarma", "Nadi pariksha"], topResource: "CCIM syllabus + Ashtanga Hridayam", timeMonths: 24 },
      { name: "Modern Integration", skills: ["Biomedical sciences", "Clinical diagnosis", "Research methodology"], topResource: "AYUSH research council materials", timeMonths: 18 },
      { name: "Wellness Business", skills: ["Retreat management", "Product formulation", "Export regulations", "Global wellness market"], topResource: "Himalaya, Dabur business models + WHO traditional medicine guidelines", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "BHU (IMS) Varanasi - Ayurveda", tier: 1, city: "Varanasi", state: "Uttar Pradesh", fees_per_year: 25000, cutoff_description: "NEET + BHU entrance", placement_median: "₹5L India / ₹30L abroad", type: "government" },
      { name: "KLE Ayurveda College", tier: 2, city: "Belgaum", state: "Karnataka", fees_per_year: 100000, cutoff_description: "NEET merit", placement_median: "₹4L", type: "private" },
      { name: "Manipal (Ayurveda)", tier: 2, city: "Manipal", state: "Karnataka", fees_per_year: 200000, cutoff_description: "NEET + Manipal entrance", placement_median: "₹5L", type: "private" },
      { name: "Middlesex University (Ayurveda - UK)", tier: 2, city: "London", state: "England", fees_per_year: 2000000, cutoff_description: "Science background + interview", placement_median: "₹35L (UK wellness)", type: "global" }
    ],
    salaryRange: { entry: "₹3–6 LPA", mid: "₹12–40 LPA",
    senior: "₹80L+ (own retreat/international)" },
    timeline: 5,
    globalScope: true,
    examRequired: "NEET (for admission to BAMS)",
    roiScore: 6,
    stressScore: 6,
    description: "Practice India's ancient healing system. Global wellness industry valued at $4.5 trillion is adopting Ayurveda rapidly.",
    realityNote: "Domestic BAMS salaries are very low. The opportunity is in global wellness — Ayurveda retreats in Europe, USA, and Middle East pay premium rates. Product development (Himalaya, Kama Ayurveda model) is the highest-ROI path."
  },

  pharmacist: {
    id: "pharmacist",
    category: "Other",
    careerType: "A",
    domain: "healthcare",
    semantic_tags: ["pharmacy","medicine","drugs","pharmaceutical","b.pharm"],
    keywords_negative: ["drug dealer","chemist shop"],
    name: "Pharmacist / Pharmaceutical Scientist",
    aliases: ["pharmacist", "pharmacy", "pharma", "drug development", "pharmaceutical", "bpharm", "mpharm"],
    streams: ["PCB", "PCM"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Pharmaceutical Sciences", skills: ["Pharmacology", "Pharmaceutical chemistry", "Drug formulation", "Quality control"], topResource: "GPAT study materials + Lachman & Lieberman", timeMonths: 18 },
      { name: "Clinical/Hospital Pharmacy", skills: ["Drug interactions", "Clinical rounds", "Patient counseling"], topResource: "ASHP guidelines + hospital internship", timeMonths: 12 },
      { name: "Industry/Research", skills: ["FDA/CDSCO regulations", "Clinical trials", "GMP", "R&D process"], topResource: "ICH guidelines + Pharma industry certifications", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "BITS Pilani (Pharmacy)", tier: 1, city: "Pilani", state: "Rajasthan", fees_per_year: 400000, cutoff_description: "BITSAT 300+", placement_median: "₹8L", type: "deemed" },
      { name: "JSS College of Pharmacy (Ooty)", tier: 1, city: "Ooty", state: "Tamil Nadu", fees_per_year: 150000, cutoff_description: "KCET/merit", placement_median: "₹6L", type: "private" },
      { name: "University of Groningen (Pharmacy)", tier: 1, city: "Groningen", state: "Netherlands", fees_per_year: 1100000, cutoff_description: "Science background + English B2", placement_median: "₹45L (Netherlands)", type: "global" },
      { name: "University College London (Pharmacy)", tier: 1, city: "London", state: "England", fees_per_year: 3800000, cutoff_description: "A-levels AAB Chemistry required", placement_median: "₹50L (UK)", type: "global" },
      { name: "University of Toronto (Pharmacy)", tier: 1, city: "Toronto", state: "Canada", fees_per_year: 3000000, cutoff_description: "Strong science UG + PCAT", placement_median: "₹80L (Canada)", type: "global" }
    ],
    salaryRange: { entry: "₹5–10 LPA", mid: "₹18–40 LPA",
    senior: "₹60–120 LPA" },
    timeline: 4,
    globalScope: true,
    examRequired: "GPAT (India postgrad) / PCAT (Canada)",
    roiScore: 7,
    stressScore: 6,
    description: "Develop, dispense, and manage medicines. India is the world's pharmacy — global career options are massive.",
    realityNote: "India produces the world's generic drugs. Pharma R&D roles at Sun Pharma, Cipla, Dr. Reddy's pay well. The highest value is in regulatory affairs and clinical research for MNCs."
  },

  occupational_therapist: {
    id: "occupational_therapist",
    category: "Other",
    careerType: "A",
    domain: "healthcare",
    semantic_tags: ["occupational therapy","rehabilitation","therapy","patient recovery"],
    keywords_negative: ["physiotherapy","physical therapy"],
    name: "Occupational Therapist",
    aliases: ["occupational therapy", "ot", "occupational therapist", "rehabilitation", "sensory integration"],
    streams: ["PCB"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "OT Sciences", skills: ["Anatomy", "Kinesiology", "Neurological rehab", "Sensory processing"], topResource: "Willard & Spackman's OT textbook", timeMonths: 18 },
      { name: "Pediatric/Adult OT", skills: ["Sensory integration", "Hand therapy", "ADL training", "Assistive technology"], topResource: "AOTA continuing education", timeMonths: 12 },
      { name: "Global Practice", skills: ["NBCOT certification (USA)", "HCPC registration (UK)", "AHPRA (Australia)"], topResource: "NBCOT prep + OT-specific licensing boards", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "AIIMS (BOT)", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 15000, cutoff_description: "AIIMS paramedical entrance", placement_median: "₹5L India / ₹60L abroad", type: "government" },
      { name: "University of Southern California (OT)", tier: 1, city: "Los Angeles", state: "California", fees_per_year: 5000000, cutoff_description: "Strong science GPA + GRE", placement_median: "₹1Cr (USA)", type: "global" },
      { name: "University of Queensland (OT)", tier: 1, city: "Brisbane", state: "Australia", fees_per_year: 3500000, cutoff_description: "Science UG + IELTS", placement_median: "₹85L (Australia)", type: "global" }
    ],
    salaryRange: { entry: "₹3–5 LPA (India) / ₹60–80 LPA (abroad)", mid: "₹10–20 LPA (India) / ₹90–120 LPA (abroad)",
    senior: "₹30L+ (India)" },
    timeline: 4,
    globalScope: true,
    examRequired: "State BOT entrance (India) / NBCOT (USA)",
    roiScore: 7,
    stressScore: 5,
    description: "Help people regain independence in daily life after injury, illness, or disability.",
    realityNote: "Like physio, OT in India pays poorly. Australia and Canada have critical shortages of OTs — salary premium is 10–15x India. AHPRA registration process is challenging but well worth it."
  },

// ═══════════════════════════════════════════════════════════════
// CREATIVE (EXTREME EXPANSION)
// ═══════════════════════════════════════════════════════════════

  animator: {
    id: "animator",
    category: "Other",
    careerType: "C",
    domain: "creative_media",
    semantic_tags: ["animation","3d","2d","vfx","motion graphics","cartoon"],
    keywords_negative: ["live action","photography"],
    name: "Animator / VFX Artist",
    aliases: ["animator", "animation", "vfx", "visual effects", "3d animation", "2d animation", "motion graphics", "cgi", "pixar", "dreamworks"],
    streams: ["Arts", "Commerce", "PCM"],
    minMarks: 45,
    minMarksStretch: 35,
    domains: [
      { name: "Animation Fundamentals", skills: ["12 principles of animation", "Drawing", "Rigging", "Character design"], topResource: "Richard Williams' Animator's Survival Kit", timeMonths: 8 },
      { name: "Tools", skills: ["Maya/Blender/Cinema 4D", "After Effects", "Nuke (VFX)", "Substance Painter"], topResource: "CG Spectrum + AnimationMentor", timeMonths: 8 },
      { name: "Portfolio & Industry", skills: ["Demoreel", "Film festival submissions", "Studio networking"], topResource: "ArtStation + Vimeo Staff Picks", timeMonths: 8 }
    ],
    topInstitutions: [
      { name: "MAAC (Multiple cities)", tier: 2, city: "Pan India", state: "Multiple", fees_per_year: 150000, cutoff_description: "Portfolio + aptitude", placement_median: "₹5L", type: "private" },
      { name: "Arena Animation", tier: 2, city: "Pan India", state: "Multiple", fees_per_year: 100000, cutoff_description: "Portfolio test", placement_median: "₹4L", type: "private" },
      { name: "Vancouver Film School (VFS)", tier: 1, city: "Vancouver", state: "Canada", fees_per_year: 3500000, cutoff_description: "Portfolio + interview", placement_median: "₹50L (Canada)", type: "global" },
      { name: "School of Visual Arts (NYC)", tier: 1, city: "New York", state: "New York", fees_per_year: 5000000, cutoff_description: "Portfolio + statement", placement_median: "₹55L", type: "global" },
      { name: "Ringling College of Art + Design", tier: 1, city: "Sarasota", state: "Florida", fees_per_year: 4500000, cutoff_description: "Portfolio + application", placement_median: "₹60L (Pixar/Disney recruits)", type: "global" },
      { name: "Gobelins (Paris)", tier: 1, city: "Paris", state: "France", fees_per_year: 1000000, cutoff_description: "Portfolio + competitive exam — very selective", placement_median: "₹45L", type: "global" },
      { name: "Filmakademie Baden-Württemberg", tier: 1, city: "Ludwigsburg", state: "Germany", fees_per_year: 200000, cutoff_description: "Portfolio + interview + some German", placement_median: "₹40L", type: "global" }
    ],
    salaryRange: { entry: "₹3–8 LPA", mid: "₹15–45 LPA",
    senior: "₹70–200 LPA (Hollywood VFX)" },
    timeline: 3,
    globalScope: true,
    examRequired: "Portfolio-based",
    roiScore: 6,
    stressScore: 7,
    description: "Bring characters and worlds to life. India's VFX industry serves Hollywood — Bollywood is secondary.",
    realityNote: "Indian VFX studios (Prime Focus, DNEG, Reliance) work on Hollywood films but pay Indian salaries. Moving to Vancouver, London, or LA (with a work permit) multiplies compensation 5–8x. The portfolio is everything — a Ringling or Gobelins degree opens Pixar, ILM, Weta doors directly."
  },

  photographer: {
    id: "photographer",
    category: "Other",
    careerType: "C",
    domain: "creative_media",
    semantic_tags: ["photography","camera","photo","portrait","wedding photography"],
    keywords_negative: ["videography","cinematography"],
    name: "Professional Photographer",
    aliases: ["photographer", "photography", "photojournalist", "wedding photographer", "fashion photographer", "wildlife photographer", "commercial photographer"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 40,
    minMarksStretch: 30,
    domains: [
      { name: "Technical Photography", skills: ["Exposure triangle", "Lighting", "Composition", "Post-processing (Lightroom/Photoshop)"], topResource: "David Hobby's Strobist + Sean Tucker's YouTube", timeMonths: 6 },
      { name: "Specialization", skills: ["Wedding/Portrait/Wildlife/Fashion/Architectural/Food — pick one niche"], topResource: "Jasmine Star (wedding) / Art Wolfe (wildlife)", timeMonths: 12 },
      { name: "Business", skills: ["Client acquisition", "Pricing", "Contracts", "Agency relationships", "Stock photography"], topResource: "Photography Business Academy + Shutterstock contributor", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "Delhi College of Photography", tier: 2, city: "New Delhi", state: "Delhi", fees_per_year: 100000, cutoff_description: "Portfolio + application", placement_median: "₹4L", type: "private" },
      { name: "Royal College of Art (Photography MA)", tier: 1, city: "London", state: "England", fees_per_year: 3500000, cutoff_description: "Portfolio + interview", placement_median: "₹30L", type: "global" },
      { name: "ICP New York", tier: 1, city: "New York", state: "New York", fees_per_year: 4000000, cutoff_description: "Portfolio + statement", placement_median: "₹35L", type: "global" },
      { name: "EFET (Paris)", tier: 2, city: "Paris", state: "France", fees_per_year: 1500000, cutoff_description: "Portfolio + French B1", placement_median: "₹28L", type: "global" },
      { name: "Self-built portfolio + online", tier: 1, city: "Remote", state: "Global", fees_per_year: 0, cutoff_description: "Strong portfolio + business skills", placement_median: "₹3–50L (varies wildly)", type: "private" }
    ],
    salaryRange: { entry: "₹2–5 LPA", mid: "₹10–40 LPA",
    senior: "₹80L+ (commercial/fashion)" },
    timeline: 3,
    globalScope: true,
    examRequired: "Portfolio-based",
    roiScore: 5,
    stressScore: 6,
    description: "Create images that tell stories, sell products, and document history.",
    realityNote: "Photography is highly competitive and income is very unequal — top wedding/commercial photographers earn ₹30–80L, average ones earn ₹3–5L. Stock photography income is dying. Niche specialization and business skills matter more than artistic talent alone."
  },

  interior_designer: {
    id: "interior_designer",
    category: "Other",
    careerType: "C",
    domain: "design",
    semantic_tags: ["interior design","home decor","space design","furniture"],
    keywords_negative: ["architecture","civil engineering"],
    name: "Interior Designer",
    aliases: ["interior designer", "interior design", "interior decoration", "space design", "architectural design", "home design"],
    streams: ["Arts", "PCM"],
    minMarks: 50,
    minMarksStretch: 40,
    domains: [
      { name: "Design Foundation", skills: ["Space planning", "Color theory", "Materials knowledge", "Technical drawing"], topResource: "Francis DK Ching + AutoCAD basics", timeMonths: 6 },
      { name: "Software & Visualization", skills: ["AutoCAD", "SketchUp", "3ds Max", "V-Ray rendering", "Revit"], topResource: "Udemy AutoCAD + Chaos V-Ray tutorials", timeMonths: 5 },
      { name: "Project Management", skills: ["Client management", "Contractor coordination", "Budgeting", "Procurement"], topResource: "IIDA resources + real project internship", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "Pearl Academy (Interior Design)", tier: 2, city: "Delhi/Mumbai", state: "Multiple", fees_per_year: 400000, cutoff_description: "Aptitude + portfolio", placement_median: "₹5L", type: "private" },
      { name: "Sir JJ School of Art (Mumbai)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 30000, cutoff_description: "State entrance + portfolio", placement_median: "₹5L", type: "government" },
      { name: "Pratt Institute (Interior Design)", tier: 1, city: "New York", state: "New York", fees_per_year: 5500000, cutoff_description: "Portfolio + application", placement_median: "₹50L", type: "global" },
      { name: "Domus Academy (Milan)", tier: 1, city: "Milan", state: "Italy", fees_per_year: 2500000, cutoff_description: "Portfolio + interview", placement_median: "₹40L", type: "global" },
      { name: "Aalto University (Interior Architecture)", tier: 1, city: "Helsinki", state: "Finland", fees_per_year: 500000, cutoff_description: "Portfolio + English", placement_median: "₹45L (Scandinavia)", type: "global" }
    ],
    salaryRange: { entry: "₹3–7 LPA", mid: "₹15–40 LPA",
    senior: "₹60L+ (luxury/commercial)" },
    timeline: 4,
    globalScope: true,
    examRequired: "Portfolio-based / IIFT (some colleges)",
    roiScore: 7,
    stressScore: 6,
    description: "Design spaces where people live and work. India's real estate boom is creating massive demand.",
    realityNote: "Interior design in India is bifurcated — luxury residential (₹20L+ budgets) pays very well; middle market is commoditized. Building a portfolio of high-end projects takes 5+ years of strategic networking."
  },

  architect_urban_planner: {
    id: "architect_urban_planner",
    category: "Other",
    careerType: "A",
    domain: "design",
    semantic_tags: ["urban planning","city planning","town planning","infrastructure"],
    keywords_negative: ["software architecture","cloud computing"],
    name: "Architect / Urban Planner",
    aliases: ["architect", "architecture", "urban planner", "urban design", "b.arch", "m.arch", "urban planning", "landscape architect"],
    streams: ["PCM", "Arts"],
    minMarks: 60,
    minMarksStretch: 50,
    domains: [
      { name: "Architecture Core", skills: ["Design studio", "Structures", "Environmental systems", "History & theory"], topResource: "Francis DK Ching + Neufert + precedent studies", timeMonths: 24 },
      { name: "Technical Tools", skills: ["AutoCAD", "Revit", "Rhino + Grasshopper", "SketchUp", "Lumion rendering"], topResource: "Rhino tutorials + BIM certification", timeMonths: 12 },
      { name: "Portfolio & Practice", skills: ["Design competition entries", "Internship at top firm", "Thesis project"], topResource: "ArchDaily + Archinect + competition platforms", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "SPA Delhi", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 50000, cutoff_description: "JEE Main Arch Paper + NATA", placement_median: "₹6L", type: "government" },
      { name: "CEPT Ahmedabad", tier: 1, city: "Ahmedabad", state: "Gujarat", fees_per_year: 200000, cutoff_description: "CEPT entrance + NATA", placement_median: "₹7L", type: "deemed" },
      { name: "IIT Kharagpur (Architecture)", tier: 1, city: "Kharagpur", state: "West Bengal", fees_per_year: 220000, cutoff_description: "JEE Advanced + AAT", placement_median: "₹9L", type: "government" },
      { name: "ETH Zurich (Architecture)", tier: 1, city: "Zurich", state: "Switzerland", fees_per_year: 200000, cutoff_description: "Portfolio + admission exam", placement_median: "₹1Cr (Switzerland)", type: "global" },
      { name: "Architectural Association (AA) London", tier: 1, city: "London", state: "England", fees_per_year: 3500000, cutoff_description: "Portfolio + interview — extremely selective", placement_median: "₹55L", type: "global" },
      { name: "Delft University (Architecture)", tier: 1, city: "Delft", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "Portfolio + bachelor degree", placement_median: "₹55L (Netherlands)", type: "global" },
      { name: "Tokyo University (Architecture)", tier: 1, city: "Tokyo", state: "Japan", fees_per_year: 600000, cutoff_description: "Portfolio + Japanese N2", placement_median: "₹50L (Japan)", type: "global" },
      { name: "Harvard GSD (M.Arch)", tier: 1, city: "Cambridge", state: "Massachusetts", fees_per_year: 6000000, cutoff_description: "Portfolio + GRE + statement", placement_median: "₹80L", type: "global" }
    ],
    salaryRange: { entry: "₹3–8 LPA", mid: "₹15–35 LPA",
    senior: "₹60L+ (own practice/international)" },
    timeline: 5,
    globalScope: true,
    examRequired: "NATA + JEE Paper 2 (India) / Portfolio (global)",
    roiScore: 6,
    stressScore: 7,
    description: "Shape the built environment from buildings to entire cities. Every city in India needs architects.",
    realityNote: "Architecture is a 5-year degree followed by 2 years of low-paid practice before you can register. Studios like BIG, Zaha Hadid, Bjarke Ingels are dream employers but require exceptional portfolios + international degrees."
  },

  writer_author: {
    id: "writer_author",
    category: "Other",
    careerType: "C",
    domain: "creative_media",
    semantic_tags: ["writing","author","novelist","content writer","screenwriter"],
    keywords_negative: ["typing","data entry"],
    name: "Writer / Author / Content Strategist",
    aliases: ["writer", "author", "novelist", "content writer", "copywriter", "screenwriter", "content creator", "blogger", "poet"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 45,
    minMarksStretch: 35,
    domains: [
      { name: "Craft of Writing", skills: ["Narrative structure", "Voice development", "Genre mastery", "Editing"], topResource: "On Writing by Stephen King + MasterClass", timeMonths: 12 },
      { name: "Professional Writing", skills: ["Copywriting", "Content strategy", "SEO writing", "Technical writing"], topResource: "Copyhackers + Content Marketing Institute", timeMonths: 6 },
      { name: "Publishing & Platform", skills: ["Literary agents", "Self-publishing", "Substack", "Brand building"], topResource: "Jane Friedman blog + QueryTracker", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "Ashoka University (Creative Writing)", tier: 1, city: "Sonepat", state: "Haryana", fees_per_year: 1200000, cutoff_description: "Strong academics + writing sample", placement_median: "₹6L", type: "private" },
      { name: "St. Xavier's College Mumbai (English Literature)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 50000, cutoff_description: "HSC marks 85%+", placement_median: "₹5L", type: "private" },
      { name: "Iowa Writers' Workshop (MFA)", tier: 1, city: "Iowa City", state: "Iowa", fees_per_year: 3000000, cutoff_description: "Writing sample — most competitive MFA globally", placement_median: "₹25L (writing-based)", type: "global" },
      { name: "NYU Creative Writing (MFA)", tier: 1, city: "New York", state: "New York", fees_per_year: 5000000, cutoff_description: "Writing sample + statement", placement_median: "₹28L", type: "global" },
      { name: "University of East Anglia (MA Creative Writing)", tier: 1, city: "Norwich", state: "England", fees_per_year: 2000000, cutoff_description: "Writing sample + degree", placement_median: "₹22L", type: "global" },
      { name: "Self-published / Substack path", tier: 2, city: "Remote", state: "Global", fees_per_year: 0, cutoff_description: "Consistent high-quality writing + audience", placement_median: "₹2–80L (highly variable)", type: "private" }
    ],
    salaryRange: { entry: "₹2–6 LPA", mid: "₹12–35 LPA",
    senior: "₹1Cr+ (bestselling author/brand)" },
    timeline: 3,
    globalScope: true,
    examRequired: "Portfolio/writing sample (MFA programs)",
    roiScore: 5,
    stressScore: 6,
    description: "Tell stories, build brands with words, and shape culture through language.",
    realityNote: "Salaried content writing in India pays poorly (₹3–8L for most roles). Top copywriters, UX writers at tech companies, and technical writers at MNCs earn ₹20–50L. Fiction writing is a passion project until it isn't — most successful authors took 10 years."
  },

  performing_artist: {
    id: "performing_artist",
    category: "Creative",
    careerType: "C",
    domain: "creative_media",
    semantic_tags: ["acting","theater","drama","dance","music","performance"],
    keywords_negative: ["sports","athletics"],
    name: "Performing Artist (Theatre/Dance/Classical Arts)",
    aliases: ["actor", "theatre", "dance", "classical dance", "bharatanatyam", "kathak", "odissi", "classical music", "carnatic", "hindustani", "performing arts", "musician", "music", "singer", "producer", "band", "filmmaker", "film director", "director", "film"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 35,
    minMarksStretch: 25,
    domains: [
      { name: "Performance Craft", skills: ["10,000 hours of practice in chosen art form", "Stage presence", "Improvisation"], topResource: "Guru-shishya parampara + Natya Shastra", timeMonths: 48 },
      { name: "Contemporary Application", skills: ["Fusion choreography", "Contemporary theatre", "Film acting"], topResource: "FTII acting course + National School of Drama", timeMonths: 18 },
      { name: "Industry Navigation", skills: ["Casting", "Agents", "Production companies", "OTT auditions"], topResource: "NSD audition prep + acting workshops (Barry John)", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "National School of Drama (NSD)", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 20000, cutoff_description: "Audition — extremely competitive", placement_median: "₹4L (highly variable)", type: "government" },
      { name: "Sangeet Natak Akademi affiliated institutions", tier: 2, city: "Multiple", state: "Multiple", fees_per_year: 15000, cutoff_description: "Classical performance audition", placement_median: "Performance-based", type: "government" },
      { name: "London Academy of Music & Dramatic Art (LAMDA)", tier: 1, city: "London", state: "England", fees_per_year: 3500000, cutoff_description: "Audition — among world's best acting schools", placement_median: "₹30L (UK theatre)", type: "global" },
      { name: "Juilliard School", tier: 1, city: "New York", state: "New York", fees_per_year: 5500000, cutoff_description: "Audition — top 1% globally accepted", placement_median: "₹40L (NYC performing arts)", type: "global" },
      { name: "NIDA (Australia)", tier: 1, city: "Sydney", state: "Australia", fees_per_year: 3000000, cutoff_description: "Audition — very selective", placement_median: "₹35L (Australia)", type: "global" }
    ],
    salaryRange: { entry: "₹1–4 LPA", mid: "₹10–50 LPA",
    senior: "₹1Cr+ (film/OTT)" },
    timeline: 5,
    globalScope: true,
    examRequired: "Audition-based",
    roiScore: 4,
    stressScore: 9,
    description: "Embody characters, move audiences, and carry forward cultural traditions through performance.",
    realityNote: "The performing arts have no guaranteed income path. Most classical artists sustain themselves through teaching, cultural grants, and government positions. Film/OTT success is lottery-like. Cultural preservation roles (Akademi, cultural centers) provide stability."
  },

// ═══════════════════════════════════════════════════════════════
// EDUCATION & SOCIAL IMPACT
// ═══════════════════════════════════════════════════════════════

  teacher_educator: {
    id: "teacher_educator",
    category: "Other",
    careerType: "A",
    domain: "education_sports",
    semantic_tags: ["teaching","education","professor","school","tutor"],
    keywords_negative: ["student","learner"],
    name: "Teacher / Educator / EdTech Professional",
    aliases: ["teacher", "educator", "teaching", "professor", "edtech", "education", "b.ed", "tutor", "coaching"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "Teaching Craft", skills: ["Pedagogy", "Curriculum design", "Classroom management", "Assessment design"], topResource: "B.Ed curriculum + Teaching Channel", timeMonths: 12 },
      { name: "Specialization", skills: ["Subject mastery + teaching methodology for that subject"], topResource: "NCERT + CBSE teacher training", timeMonths: 12 },
      { name: "EdTech/Scale", skills: ["Online course creation", "Learning management systems", "Video production", "MOOC platforms"], topResource: "Teachable + Coursera Instructor Program", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "TISS (M.A. Education)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 50000, cutoff_description: "TISSNET", placement_median: "₹7L", type: "government" },
      { name: "Azim Premji University", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 80000, cutoff_description: "Application + interview", placement_median: "₹6L", type: "private" },
      { name: "Harvard Graduate School of Education", tier: 1, city: "Cambridge", state: "Massachusetts", fees_per_year: 5500000, cutoff_description: "Strong profile + GRE", placement_median: "₹45L", type: "global" },
      { name: "UCL Institute of Education", tier: 1, city: "London", state: "England", fees_per_year: 3000000, cutoff_description: "Teaching experience + degree", placement_median: "₹38L", type: "global" },
      { name: "University of Melbourne (Education)", tier: 1, city: "Melbourne", state: "Australia", fees_per_year: 3200000, cutoff_description: "Degree + IELTS", placement_median: "₹55L (Australia teaching)", type: "global" }
    ],
    salaryRange: { entry: "₹3–8 LPA", mid: "₹10–30 LPA",
    senior: "₹50L+ (EdTech/International school)" },
    timeline: 3,
    globalScope: true,
    examRequired: "B.Ed (India) / CTET / State TET",
    roiScore: 6,
    stressScore: 5,
    description: "Shape the next generation. International school teaching + EdTech are making this profession financially viable.",
    realityNote: "Government school teaching in India pays ₹35–60K/month with pension. International schools (DPS, Oberoi, Pathways) pay ₹8–15L. EdTech instructors at BYJU's/Unacademy/PhysicsWallah earn based on views — top educators earn ₹50L+. Teaching abroad (Middle East, Singapore, UK) pays 3–5x India."
  },

  social_worker: {
    id: "social_worker",
    category: "Other",
    careerType: "C",
    domain: "law_government",
    semantic_tags: ["social work","ngo","community","welfare","nonprofit"],
    keywords_negative: ["software engineer","social media"],
    name: "Social Worker / Development Professional",
    aliases: ["social worker", "ngo", "development", "social work", "community development", "msw", "nonprofit", "un", "unicef", "world bank"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "Social Work Foundation", skills: ["Social policy", "Community organizing", "Counseling basics", "Research methods"], topResource: "TISS MSW curriculum + NASW standards", timeMonths: 12 },
      { name: "Development Specialization", skills: ["Project management", "M&E (Monitoring & Evaluation)", "Grant writing", "Stakeholder engagement"], topResource: "PM4NGOs + UNDP learning portal", timeMonths: 12 },
      { name: "International Development", skills: ["UN system", "Development economics", "Humanitarian response", "SDG frameworks"], topResource: "SDG Academy + Harvard Kennedy School online", timeMonths: 8 }
    ],
    topInstitutions: [
      { name: "TISS Mumbai (MSW)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 50000, cutoff_description: "TISSNET + interview", placement_median: "₹6L", type: "government" },
      { name: "Delhi School of Social Work", tier: 2, city: "New Delhi", state: "Delhi", fees_per_year: 20000, cutoff_description: "DU entrance + interview", placement_median: "₹5L", type: "government" },
      { name: "London School of Economics (Social Policy)", tier: 1, city: "London", state: "England", fees_per_year: 4000000, cutoff_description: "Strong UG + statement", placement_median: "₹35L", type: "global" },
      { name: "Columbia School of Social Work", tier: 1, city: "New York", state: "New York", fees_per_year: 5500000, cutoff_description: "GRE + interview", placement_median: "₹40L (UN/UNICEF route)", type: "global" },
      { name: "Graduate Institute Geneva", tier: 1, city: "Geneva", state: "Switzerland", fees_per_year: 1500000, cutoff_description: "Strong UG + language", placement_median: "₹60L (UN system)", type: "global" }
    ],
    salaryRange: { entry: "₹3–6 LPA (India NGO)", mid: "₹12–30 LPA (international NGO/INGO)",
    senior: "₹60L+ (UN/World Bank)" },
    timeline: 4,
    globalScope: true,
    examRequired: "TISSNET / State social work entrance",
    roiScore: 5,
    stressScore: 7,
    description: "Solve systemic problems — poverty, health, education, rights. The UN and World Bank pay extremely well.",
    realityNote: "Indian NGO salaries are very low (₹15–30K for most roles). The path to UN/World Bank/bilateral aid agencies requires international postgrad education + 5+ years experience. The Geneva/New York route pays ₹60–150L and is accessible with the right credentials."
  },

// ═══════════════════════════════════════════════════════════════
// TRADES & VOCATIONAL (OFTEN IGNORED)
// ═══════════════════════════════════════════════════════════════

  fashion_entrepreneur: {
    id: "fashion_entrepreneur",
    category: "Other",
    careerType: "C",
    domain: "entrepreneurship",
    semantic_tags: ["fashion","clothing","brand","startup","boutique","apparel"],
    keywords_negative: ["fashion model","modeling"],
    name: "Fashion Entrepreneur / Textile Business",
    aliases: ["fashion business", "clothing brand", "textile", "garment", "fashion entrepreneur", "boutique", "ethnic wear", "handloom"],
    streams: ["Commerce", "Arts", "Vocational"],
    minMarks: 45,
    minMarksStretch: 35,
    domains: [
      { name: "Product Knowledge", skills: ["Textile types", "Garment construction basics", "Quality control", "Sourcing"], topResource: "Textile industry training + factory visits", timeMonths: 8 },
      { name: "Business & E-commerce", skills: ["Brand building", "Meesho/Myntra/Amazon selling", "Social media", "Pricing strategy"], topResource: "Meesho seller academy + NIFT entrepreneurship programs", timeMonths: 6 },
      { name: "Scaling", skills: ["GST/export regulations", "D2C strategy", "Warehouse management", "Customer service"], topResource: "FICCI + AEPC export guidance", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "NIFT Entrepreneurship Cell", tier: 1, city: "Multiple", state: "Multiple", fees_per_year: 200000, cutoff_description: "NIFT entrance", placement_median: "Self-determined", type: "government" },
      { name: "National Institute of Fashion Technology (E-cell)", tier: 1, city: "Pan India", state: "Multiple", fees_per_year: 200000, cutoff_description: "NIFT entrance", placement_median: "Own business", type: "government" },
      { name: "Indian School of Design & Innovation (ISDI)", tier: 2, city: "Mumbai", state: "Maharashtra", fees_per_year: 500000, cutoff_description: "Portfolio + aptitude", placement_median: "₹5L + own business potential", type: "private" },
      { name: "FICCI (Export training)", tier: 2, city: "New Delhi", state: "Delhi", fees_per_year: 50000, cutoff_description: "Industry participant", placement_median: "Export business", type: "private" }
    ],
    salaryRange: { entry: "₹2–8 LPA (starting business)", mid: "₹20–100 LPA (scaled brand)",
    senior: "₹1Cr+ (successful brand exit)" },
    timeline: 3,
    globalScope: true,
    examRequired: null,
    roiScore: 7,
    stressScore: 8,
    description: "Build a fashion brand from scratch. India's textile industry is the 2nd largest globally and deeply underrepresented in brand creation.",
    realityNote: "India manufactures for the world but brands very little. The opportunity is enormous — Fabindia, Manyavar, FabAlley all built ₹1000Cr+ businesses from Indian textiles. E-commerce (Meesho, Myntra) dramatically reduces the capital required to start."
  },

  electrician_electrical_engineer: {
    id: "electrician_electrical_engineer",
    category: "Other",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["electrical","wiring","power","circuits","electrical engineering"],
    keywords_negative: ["electronics","computer science"],
    name: "Electrical Engineer / Renewable Energy Engineer",
    aliases: ["electrical engineer", "electrical", "power systems", "renewable energy", "solar", "wind energy", "ev", "electric vehicles", "power engineer"],
    streams: ["PCM"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Electrical Engineering Core", skills: ["Circuit theory", "Power systems", "Machines", "Control systems"], topResource: "NPTEL Electrical Engineering + Sadiku's textbook", timeMonths: 12 },
      { name: "Renewable Energy", skills: ["Solar PV design", "Wind turbines", "Battery storage", "Smart grids"], topResource: "IRENA training + MNRE guidelines", timeMonths: 8 },
      { name: "EV & New Technologies", skills: ["Battery management systems", "Motor drives", "Charging infrastructure"], topResource: "SAE EV courses + ISRO/BHEL training", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "IIT Madras (Electrical Engg)", tier: 1, city: "Chennai", state: "Tamil Nadu", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹18L", type: "government" },
      { name: "NIT Warangal (EE)", tier: 1, city: "Warangal", state: "Telangana", fees_per_year: 150000, cutoff_description: "JEE Main Top 5000 EE", placement_median: "₹10L", type: "government" },
      { name: "TU Delft (Electrical Engg)", tier: 1, city: "Delft", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "Strong EE background + English B2", placement_median: "₹70L (Netherlands)", type: "global" },
      { name: "KTH Royal Institute (Stockholm)", tier: 1, city: "Stockholm", state: "Sweden", fees_per_year: 1500000, cutoff_description: "EE degree + Swedish/English", placement_median: "₹65L (Sweden)", type: "global" },
      { name: "UNSW Sydney (Renewable Energy)", tier: 1, city: "Sydney", state: "Australia", fees_per_year: 3000000, cutoff_description: "EE/Physics background + IELTS", placement_median: "₹55L (Australia)", type: "global" }
    ],
    salaryRange: { entry: "₹6–12 LPA", mid: "₹18–40 LPA",
    senior: "₹60–150 LPA" },
    timeline: 4,
    globalScope: true,
    examRequired: "JEE Main/Advanced (India)",
    roiScore: 8,
    stressScore: 6,
    description: "Power the world. India's renewable energy sector needs 200,000+ engineers in the next decade.",
    realityNote: "EV and renewable energy are creating the biggest electrical engineering boom since the grid was built. Tata Motors, Ola Electric, ReNew Power, and Adani Green all desperately need qualified electrical engineers."
  },

  civil_engineer: {
    id: "civil_engineer",
    category: "Technical",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["civil engineering","construction","bridges","roads","structural"],
    keywords_negative: ["civil services","ias","upsc"],
    name: "Civil Engineer / Infrastructure Developer",
    aliases: ["civil engineer", "civil", "construction", "structural engineer", "infrastructure", "roads", "bridges", "smart cities"],
    streams: ["PCM"],
    minMarks: 65,
    minMarksStretch: 55,
    domains: [
      { name: "Structural & Geotech", skills: ["Structural analysis", "Soil mechanics", "Foundation design", "Earthquake engineering"], topResource: "NPTEL Civil + IS codes", timeMonths: 12 },
      { name: "Project Management", skills: ["AutoCAD", "Revit BIM", "MS Project", "Contract management", "CPWD norms"], topResource: "PMI PMBOK + NICMAR courses", timeMonths: 8 },
      { name: "Specialization", skills: ["Transportation", "Water resources", "Environmental engineering", "Smart infrastructure"], topResource: "ASCE resources + state PWD internship", timeMonths: 8 }
    ],
    topInstitutions: [
      { name: "IIT Roorkee (Civil)", tier: 1, city: "Roorkee", state: "Uttarakhand", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹12L", type: "government" },
      { name: "NIT Trichy (Civil)", tier: 1, city: "Tiruchirappalli", state: "Tamil Nadu", fees_per_year: 150000, cutoff_description: "JEE Main", placement_median: "₹8L", type: "government" },
      { name: "Imperial College (Civil Engineering)", tier: 1, city: "London", state: "England", fees_per_year: 4000000, cutoff_description: "A-levels AAA Math+Physics", placement_median: "₹60L (UK infra)", type: "global" },
      { name: "ETH Zurich (Civil Engineering)", tier: 1, city: "Zurich", state: "Switzerland", fees_per_year: 200000, cutoff_description: "Strong Engg background", placement_median: "₹90L (Switzerland)", type: "global" },
      { name: "University of Melbourne (Civil)", tier: 1, city: "Melbourne", state: "Australia", fees_per_year: 3500000, cutoff_description: "Strong Engg background + IELTS", placement_median: "₹65L (Australia)", type: "global" }
    ],
    salaryRange: { entry: "₹5–10 LPA", mid: "₹15–40 LPA",
    senior: "₹60L+ (project director/abroad)" },
    timeline: 4,
    globalScope: true,
    examRequired: "JEE Main/Advanced (India) / GATE (PSU jobs)",
    roiScore: 7,
    stressScore: 7,
    description: "Build India's roads, bridges, metro systems, and smart cities. PMGSY, Smart Cities Mission need thousands.",
    realityNote: "Civil engineering in India pays poorly at entry level (₹4–6L in most firms). GATE → PSU (NHAI, NHPC, ONGC) route gives ₹10–15L with stability. Government infrastructure boom (₹100L Cr NIP) is creating unprecedented demand."
  },

// ═══════════════════════════════════════════════════════════════
// INTERNATIONAL CAREERS (UNIQUE PATHS)
// ═══════════════════════════════════════════════════════════════

  diplomat_international_relations: {
    id: "diplomat_international_relations",
    category: "Hybrid",
    careerType: "B",
    domain: "law_government",
    semantic_tags: ["diplomacy","foreign affairs","embassy","international relations","ifs"],
    keywords_negative: ["domestic politics","local government"],
    name: "Diplomat / International Relations Professional",
    aliases: ["diplomat", "ifs", "foreign service", "international relations", "united nations", "diplomacy", "embassy", "foreign affairs"],
    streams: ["Arts", "Commerce", "PCM", "PCB"],
    minMarks: 75,
    minMarksStretch: 65,
    domains: [
      { name: "International Studies", skills: ["International law", "Diplomatic history", "Geopolitics", "Foreign policy analysis"], topResource: "JNU IAS program + ICWA publications", timeMonths: 18 },
      { name: "Languages", skills: ["English mastery + 2 foreign languages (French/Mandarin/Spanish/Arabic strongly preferred)"], topResource: "Alliance Française + Goethe Institut + CIEE language programs", timeMonths: 24 },
      { name: "UPSC/UN Pathway", skills: ["UPSC IFS exam prep", "UN YPP exam", "Model UN", "Think tank internships"], topResource: "Vision IAS + CFR internships + UN YPP preparation", timeMonths: 18 }
    ],
    topInstitutions: [
      { name: "JNU (School of International Studies)", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 5000, cutoff_description: "JNU entrance — very competitive", placement_median: "₹8L (academic/policy)", type: "government" },
      { name: "LBSNAA (IFS training)", tier: 1, city: "Mussoorie", state: "Uttarakhand", fees_per_year: 0, cutoff_description: "UPSC CSE IFS rank — top 25–30 per year", placement_median: "₹12L + diplomatic privileges", type: "government" },
      { name: "Graduate Institute Geneva (IR)", tier: 1, city: "Geneva", state: "Switzerland", fees_per_year: 1500000, cutoff_description: "Strong IR background + language", placement_median: "₹60L (UN/ICRC)", type: "global" },
      { name: "Fletcher School (Tufts)", tier: 1, city: "Medford", state: "Massachusetts", fees_per_year: 5500000, cutoff_description: "GRE + IR experience", placement_median: "₹50L", type: "global" },
      { name: "Sciences Po Paris", tier: 1, city: "Paris", state: "France", fees_per_year: 1000000, cutoff_description: "Competitive entrance exam + French", placement_median: "₹45L", type: "global" },
      { name: "LSE (IR MSc)", tier: 1, city: "London", state: "England", fees_per_year: 4000000, cutoff_description: "Strong IR/social science UG", placement_median: "₹40L", type: "global" }
    ],
    salaryRange: { entry: "₹10L (IFS) + diplomatic perks", mid: "₹18L + housing/travel",
    senior: "₹30L+ (Ambassador level)" },
    timeline: 6,
    globalScope: true,
    examRequired: "UPSC CSE IFS / UN YPP / Academic route",
    roiScore: 7,
    stressScore: 8,
    description: "Represent India or work in multilateral institutions shaping global policy.",
    realityNote: "IFS takes only 25–30 officers per year from millions of aspirants. The UN pathway requires international postgrad + exceptional experience + often a second passport or significant luck. Sciences Po and Graduate Institute Geneva produce the most UN professionals globally."
  },

  marine_biologist: {
    id: "marine_biologist",
    category: "Research",
    careerType: "A",
    domain: "science_research",
    semantic_tags: ["marine biology","ocean","sea life","coral","deep sea","aquatic","oceanography"],
    keywords_negative: ["marine engineer","marine engineering","navy","shipping","merchant navy","naval architecture"],
    name: "Marine Biologist / Ocean Scientist",
    aliases: ["marine biology", "marine biologist", "oceanography", "ocean science", "marine ecology", "coral reef", "deep sea"],
    streams: ["PCB", "PCM"],
    minMarks: 70,
    minMarksStretch: 60,
    domains: [
      { name: "Marine Science Foundation", skills: ["Marine ecology", "Oceanography", "Marine taxonomy", "SCUBA diving (PADI Advanced)"], topResource: "Thurman's Introductory Oceanography + PADI certification", timeMonths: 12 },
      { name: "Research Skills", skills: ["Field sampling", "Statistical analysis (R/Python)", "GIS for ocean science", "Scientific writing"], topResource: "Ocean Data View + GBIF + field stations", timeMonths: 18 },
      { name: "Conservation & Policy", skills: ["Marine protected areas", "Fisheries management", "Climate impact assessment"], topResource: "IUCN marine resources + WWF marine program", timeMonths: 10 }
    ],
    topInstitutions: [
      { name: "CMFRI Kochi (Marine Fisheries)", tier: 1, city: "Kochi", state: "Kerala", fees_per_year: 30000, cutoff_description: "ICAR AIEEA", placement_median: "₹6L", type: "government" },
      { name: "NIO Goa (National Institute of Oceanography)", tier: 1, city: "Goa", state: "Goa", fees_per_year: 20000, cutoff_description: "CSIR NET + research position", placement_median: "₹8L", type: "government" },
      { name: "University of Bergen (Marine Biology)", tier: 1, city: "Bergen", state: "Norway", fees_per_year: 100000, cutoff_description: "Science degree + English B2", placement_median: "₹60L (Norway)", type: "global" },
      { name: "James Cook University (Marine Biology)", tier: 1, city: "Cairns", state: "Australia", fees_per_year: 3000000, cutoff_description: "Science UG + IELTS", placement_median: "₹40L", type: "global" },
      { name: "Woods Hole Oceanographic Institution", tier: 1, city: "Woods Hole", state: "Massachusetts", fees_per_year: 0, cutoff_description: "Funded PhD + research publications", placement_median: "₹60L (post-PhD)", type: "global" },
      { name: "Scripps Institution of Oceanography (UCSD)", tier: 1, city: "San Diego", state: "California", fees_per_year: 0, cutoff_description: "Funded PhD — strong research record needed", placement_median: "₹65L (post-PhD)", type: "global" }
    ],
    salaryRange: { entry: "₹4–8 LPA (India research)", mid: "₹15–40 LPA",
    senior: "₹60L+ (international/industry)" },
    timeline: 6,
    globalScope: true,
    examRequired: "CSIR NET / ICAR (India research) / GRE (global PhD)",
    roiScore: 6,
    stressScore: 6,
    description: "Study and protect ocean ecosystems. Climate change has made marine science one of the most critical fields.",
    realityNote: "Marine biology jobs are scarce and competitive. The academic route (PhD → post-doc → faculty) takes 10+ years. Industry roles in fisheries management, aquaculture, and environmental consulting are more financially viable. Norway and Australia have the best paid marine science careers globally."
  },

  space_scientist: {
    id: "space_scientist",
    category: "Research",
    careerType: "A",
    domain: "science_research",
    semantic_tags: ["space","isro","nasa","astrophysics","rocket","satellite"],
    keywords_negative: ["astrology","horoscope"],
    name: "Space Scientist / Aerospace Engineer",
    aliases: ["space", "aerospace", "rocket scientist", "isro", "nasa", "spacecraft", "satellite", "astrophysics", "aerospace engineer"],
    streams: ["PCM"],
    minMarks: 85,
    minMarksStretch: 75,
    domains: [
      { name: "Aerospace Engineering", skills: ["Orbital mechanics", "Propulsion", "Structures", "Avionics", "Thermodynamics"], topResource: "MIT OpenCourseWare Aerospace + Sutton's Rocket Propulsion", timeMonths: 18 },
      { name: "Advanced Physics/Math", skills: ["Differential equations", "Fluid mechanics", "Astrodynamics", "Control systems"], topResource: "NPTEL + Vallado's Fundamentals of Astrodynamics", timeMonths: 18 },
      { name: "Space Systems", skills: ["Satellite design", "Ground station operations", "Mission design", "Space law"], topResource: "ISRO virtual learning + SpaceX/Blue Origin open resources", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIT Bombay/Madras/Kharagpur (Aerospace)", tier: 1, city: "Multiple", state: "Multiple", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 500 (Aerospace)", placement_median: "₹18L", type: "government" },
      { name: "IISc Bangalore (Aerospace)", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 50000, cutoff_description: "GATE + research position", placement_median: "₹20L", type: "government" },
      { name: "MIT (Aerospace, USA)", tier: 1, city: "Cambridge", state: "Massachusetts", fees_per_year: 5800000, cutoff_description: "Top 0.5% + exceptional profile", placement_median: "₹1.5Cr (NASA/SpaceX)", type: "global" },
      { name: "Caltech (Aeronautics)", tier: 1, city: "Pasadena", state: "California", fees_per_year: 5500000, cutoff_description: "Top 0.5% STEM globally", placement_median: "₹1.4Cr", type: "global" },
      { name: "TU Delft (Aerospace)", tier: 1, city: "Delft", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "Strong engineering UG", placement_median: "₹70L (ESA/Airbus)", type: "global" },
      { name: "Skoltech (Moscow)", tier: 2, city: "Moscow", state: "Russia", fees_per_year: 0, cutoff_description: "Funded MS + Russian", placement_median: "₹25L", type: "global" }
    ],
    salaryRange: { entry: "₹8–15 LPA (ISRO)", mid: "₹25–60 LPA",
    senior: "₹1Cr+ (SpaceX/NASA/ESA)" },
    timeline: 5,
    globalScope: true,
    examRequired: "JEE Advanced (India) / GRE (global)",
    roiScore: 8,
    stressScore: 7,
    description: "Design rockets, satellites, and space missions. India's space sector is opening to private players rapidly.",
    realityNote: "ISRO salaries are government-grade (₹8–15L). The new Indian space startups (Skyroot, Agnikul, Pixxel) pay market rates. SpaceX/NASA are attainable with the right US degree — they specifically recruit international talent. The new Indian Space Policy (2023) makes this a generational opportunity."
  },

  yoga_wellness_instructor: {
    id: "yoga_wellness_instructor",
    category: "Other",
    careerType: "C",
    domain: "healthcare",
    semantic_tags: ["yoga","wellness","meditation","fitness","holistic health"],
    keywords_negative: ["gym trainer","bodybuilding"],
    name: "Yoga Teacher / Wellness Professional",
    aliases: ["yoga", "yoga teacher", "wellness", "meditation", "mindfulness", "ayurveda wellness", "health coach", "yoga instructor"],
    streams: ["Arts", "PCB", "Commerce", "PCM"],
    minMarks: 35,
    minMarksStretch: 25,
    domains: [
      { name: "Yoga & Philosophy", skills: ["200-hour YTT", "Asana precision", "Yoga philosophy (Patanjali)", "Pranayama", "Sanskrit basics"], topResource: "Yoga Alliance 200HR RYT certification", timeMonths: 6 },
      { name: "Specialization", skills: ["500-hour advanced", "Yin/Restorative/Ashtanga/Iyengar", "Yoga therapy (IAYT)"], topResource: "Iyengar Yoga Certified Training / BKS Iyengar texts", timeMonths: 12 },
      { name: "Business & International", skills: ["Studio management", "Retreat hosting", "Online teaching", "Export of wellness"], topResource: "Mindbody software + international retreat platforms", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "Morarji Desai National Institute of Yoga", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 15000, cutoff_description: "Entrance + physical aptitude", placement_median: "₹5L India / ₹30L abroad", type: "government" },
      { name: "Kaivalyadhama (Lonavala)", tier: 1, city: "Lonavala", state: "Maharashtra", fees_per_year: 80000, cutoff_description: "Application + physical assessment", placement_median: "₹6L India / ₹35L global", type: "private" },
      { name: "Yoga Alliance 200HR (Online/Goa/Rishikesh)", tier: 2, city: "Multiple", state: "Multiple", fees_per_year: 50000, cutoff_description: "Physical practice baseline", placement_median: "₹4L India / ₹30–80L abroad", type: "private" },
      { name: "Kripalu (USA)", tier: 1, city: "Stockbridge", state: "Massachusetts", fees_per_year: 800000, cutoff_description: "Application + 200HR YTT", placement_median: "₹40L (USA wellness)", type: "global" }
    ],
    salaryRange: { entry: "₹2–5 LPA (India)", mid: "₹15–40 LPA (international/online)",
    senior: "₹1Cr+ (luxury retreats/brand)" },
    timeline: 2,
    globalScope: true,
    examRequired: "Yoga Alliance RYT 200/500",
    roiScore: 6,
    stressScore: 3,
    description: "Teach the world's fastest-growing wellness practice. Indian yoga teachers are in global demand.",
    realityNote: "Yoga teaching in India pays very poorly (₹15–30K/month at most studios). The opportunity is global — European, American, and Australian yoga teachers earn ₹30–80L. Online teaching on Insight Timer, YouTube, and retreat platforms dramatically changes the economics."
  },

  sports_management: {
    id: "sports_management",
    category: "Other",
    careerType: "A",
    domain: "education_sports",
    semantic_tags: ["sports management","sports business","event management","sports marketing"],
    keywords_negative: ["playing sports","athlete","cricketer"],
    name: "Sports Manager / Sports Business Professional",
    aliases: ["sports management", "sports marketing", "sports business", "ipl manager", "sports agent", "sports analytics", "esports management"],
    streams: ["Commerce", "Arts", "PCM"],
    minMarks: 55,
    minMarksStretch: 45,
    domains: [
      { name: "Business Foundation", skills: ["Marketing", "Finance basics", "Event management", "Contracts & IP"], topResource: "Symbiosis Sports Management + NASSCOM", timeMonths: 8 },
      { name: "Sports Industry Knowledge", skills: ["Sports media rights", "Athlete management", "Sponsorship", "Analytics"], topResource: "Sportz Interactive + SGFI industry", timeMonths: 10 },
      { name: "Specialization", skills: ["Esports management / Cricket administration / Football / Olympics"], topResource: "IOC certification + BCCI administration courses", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "TISS (Sports Management)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 80000, cutoff_description: "TISSNET", placement_median: "₹8L", type: "government" },
      { name: "Symbiosis (Sports Management)", tier: 2, city: "Pune", state: "Maharashtra", fees_per_year: 350000, cutoff_description: "SNAP + PI", placement_median: "₹7L", type: "private" },
      { name: "Johan Cruyff Institute (Netherlands)", tier: 1, city: "Amsterdam", state: "Netherlands", fees_per_year: 1200000, cutoff_description: "Application + sport background", placement_median: "₹40L (European sport)", type: "global" },
      { name: "IMG Academy / Lagardere Sports programs", tier: 2, city: "Bradenton / Global", state: "Florida", fees_per_year: 1500000, cutoff_description: "Application + industry experience", placement_median: "₹35L", type: "global" },
      { name: "Columbia (Sports Management MBA)", tier: 1, city: "New York", state: "New York", fees_per_year: 7000000, cutoff_description: "GMAT 700+ + work experience", placement_median: "₹80L (NBA/NFL/IPL)", type: "global" }
    ],
    salaryRange: { entry: "₹5–10 LPA", mid: "₹18–50 LPA",
    senior: "₹80L–2Cr (senior sports exec)" },
    timeline: 4,
    globalScope: true,
    examRequired: "TISSNET / CAT / SNAP",
    roiScore: 7,
    stressScore: 7,
    description: "Run the business of sport — IPL teams, Olympic committees, esports organizations, athlete representation.",
    realityNote: "Sports management in India is exploding with IPL, ISL, Pro Kabaddi, and esports. The highest-paying roles are in media rights negotiations, franchise management, and athlete marketing — all require a combination of sport passion and sharp business acumen."
  },

  // ═══════════════════════════════════════════════════════════════
  // PATHFORGE v5 — HIGH-GROWTH CAREER ADDITIONS
  // ═══════════════════════════════════════════════════════════════

  startup_founder: {
    id: "startup_founder",
    category: "Entrepreneurial",
    careerType: "C",
    domain: "entrepreneurship",
    semantic_tags: ["startup","entrepreneur","business","founder","venture"],
    keywords_negative: ["employee","job seeker"],
    name: "Tech Startup Founder / Entrepreneur",
    aliases: ["startup", "founder", "entrepreneur", "ceo", "build company", "own business", "unicorn",
              "y combinator", "venture", "vc", "saas", "bootstrapped", "elon musk", "startup founder",
              "start a company", "my own company", "business owner", "tech entrepreneur", "disrupt"],
    streams: ["PCM", "Commerce", "Arts"],
    minMarks: 60,
    minMarksStretch: 40,
    domains: [
      { name: "Technical Foundation", skills: ["Programming (MVP)", "No-code tools", "Cloud (AWS/GCP)", "Product analytics"], topResource: "Y Combinator Startup School (free) + The Lean Startup", timeMonths: 6, contingency: "If coding is a barrier, learn no-code tools (Bubble, Webflow) first to validate ideas." },
      { name: "Business & Growth", skills: ["Business models", "Unit economics", "Fundraising", "Sales", "GTM strategy"], topResource: "Paul Graham Essays + Startupschool.org", timeMonths: 8 },
      { name: "Execution & Leadership", skills: ["Hiring", "Team management", "Legal (incorporation)", "Pitch decks", "Financial modeling"], topResource: "How to Start a Startup (Stanford CS183) + Founder podcasts", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (+ e-cell)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 200", placement_median: "₹28L", type: "government" },
      { name: "ISB Hyderabad (MBA)", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 3750000, cutoff_description: "GMAT 720+ / CAT 99+", placement_median: "₹32L", type: "private" },
      { name: "BITS Pilani (+ startup culture)", tier: 1, city: "Pilani", state: "Rajasthan", fees_per_year: 550000, cutoff_description: "BITSAT 360+", placement_median: "₹14L", type: "deemed" },
      { name: "Stanford University (USA)", tier: 1, city: "Stanford", state: "California", fees_per_year: 4500000, cutoff_description: "Top 0.1% global", placement_median: "₹2Cr+", type: "global" },
      { name: "Y Combinator (Accelerator)", tier: 1, city: "San Francisco", state: "California", fees_per_year: 0, cutoff_description: "Strong idea + prototype", placement_median: "₹2Cr+ (funding)", type: "global" }
    ],
    salaryRange: { entry: "₹0–5 LPA (bootstrapping)", mid: "₹30–200 LPA (funded startup CEO)", senior: "₹1Cr–100Cr+ (successful exit)" },
    timeline: 6,
    globalScope: true,
    examRequired: null,
    roiScore: 10,
    stressScore: 10,
    description: "Build a technology company from scratch. The highest-risk, highest-reward career path — with potential for generational wealth and massive impact.",
    realityNote: "90% of startups fail. The median founder salary in year 1–3 is ₹0. But the top 10% of founders create more wealth than any other career path. The key differentiator is NOT the idea — it's execution speed, customer obsession, and the ability to recruit great people. Start building while in college."
  },

  product_manager: {
    id: "product_manager",
    category: "Technical",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["product management","pm","product owner","roadmap","agile"],
    keywords_negative: ["project manager","construction manager"],
    name: "Product Manager",
    aliases: ["product manager", "pm", "product lead", "apm", "associate product manager", "tech pm",
              "product management", "product owner", "product strategy", "build products"],
    streams: ["PCM", "Commerce", "Arts"],
    minMarks: 75,
    minMarksStretch: 60,
    domains: [
      { name: "Product Thinking", skills: ["User research", "Problem framing", "PRDs", "Wireframing", "A/B testing"], topResource: "Inspired (Marty Cagan) + Product School", timeMonths: 4 },
      { name: "Technical Literacy", skills: ["SQL", "Basic coding", "APIs", "System design basics", "Data analytics"], topResource: "Mode Analytics + CS50", timeMonths: 6 },
      { name: "Execution & Leadership", skills: ["Roadmap planning", "Stakeholder management", "Metrics (North Star)", "Go-to-market"], topResource: "Lenny's Newsletter + Reforge", timeMonths: 4 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (CS → PM)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 200", placement_median: "₹28L", type: "government" },
      { name: "IIM Ahmedabad (MBA → PM)", tier: 1, city: "Ahmedabad", state: "Gujarat", fees_per_year: 2800000, cutoff_description: "CAT 99.5+ percentile", placement_median: "₹32L", type: "government" },
      { name: "BITS Pilani", tier: 1, city: "Pilani", state: "Rajasthan", fees_per_year: 550000, cutoff_description: "BITSAT 360+", placement_median: "₹14L", type: "deemed" },
      { name: "Carnegie Mellon (MSPM)", tier: 1, city: "Pittsburgh", state: "Pennsylvania", fees_per_year: 5000000, cutoff_description: "GRE 330+ + tech background", placement_median: "₹1.5Cr", type: "global" },
      { name: "IIIT Hyderabad", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 300000, cutoff_description: "JEE Main + UGEE", placement_median: "₹16L", type: "deemed" }
    ],
    salaryRange: { entry: "₹12–25 LPA", mid: "₹35–80 LPA", senior: "₹1–3 Cr (VP Product / CPO)" },
    timeline: 4,
    globalScope: true,
    examRequired: "JEE Main / CAT (for MBA route)",
    roiScore: 9,
    stressScore: 7,
    description: "Own the vision, strategy, and execution of technology products. PMs sit at the intersection of engineering, design, and business.",
    realityNote: "APM programs at Google, Microsoft, and Razorpay are insanely competitive (<1% acceptance). The best path is: get a CS/engineering degree, ship a side project, then lateral into PM. An MBA from IIM-A/B/C is an alternative entry if you come from a non-tech background."
  },

  ai_researcher: {
    id: "ai_researcher",
    category: "Research",
    careerType: "A",
    domain: "technology",
    semantic_tags: ["artificial intelligence","ai","deep learning","neural networks","research"],
    keywords_negative: ["ai artist","ai tool user"],
    name: "AI/ML Researcher",
    aliases: ["ai researcher", "machine learning", "deep learning", "artificial intelligence researcher",
              "ml engineer", "agi", "neural networks", "nlp", "computer vision", "reinforcement learning",
              "ai scientist", "research scientist ai", "llm", "large language model"],
    streams: ["PCM"],
    minMarks: 85,
    minMarksStretch: 70,
    domains: [
      { name: "Math Foundations", skills: ["Linear algebra", "Probability", "Calculus", "Optimization", "Statistics"], topResource: "3Blue1Brown + MIT OCW 18.06", timeMonths: 6, contingency: "If math feels weak, start with Khan Academy before jumping into proofs." },
      { name: "ML/DL Core", skills: ["PyTorch", "Transformers", "CNNs", "GANs", "RL", "NLP"], topResource: "Fast.ai + CS229 (Stanford) + Andrej Karpathy's lectures", timeMonths: 8 },
      { name: "Research Skills", skills: ["Paper reading", "Experiment design", "LaTeX", "Conference submissions", "Reproducibility"], topResource: "Papers with Code + arXiv + research internships", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (CS + AI)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 200", placement_median: "₹28L", type: "government" },
      { name: "IISc Bangalore", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 50000, cutoff_description: "KVPY / JEE Advanced / GATE", placement_median: "₹18L", type: "government" },
      { name: "CMU (ML Dept)", tier: 1, city: "Pittsburgh", state: "Pennsylvania", fees_per_year: 5000000, cutoff_description: "Top 0.5% globally", placement_median: "₹2Cr+", type: "global" },
      { name: "Stanford (CS/AI)", tier: 1, city: "Stanford", state: "California", fees_per_year: 4500000, cutoff_description: "Top 0.1% global", placement_median: "₹2.5Cr+", type: "global" },
      { name: "IIIT Hyderabad (ML Lab)", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 300000, cutoff_description: "JEE Main + UGEE", placement_median: "₹22L", type: "deemed" }
    ],
    salaryRange: { entry: "₹15–30 LPA", mid: "₹50–120 LPA", senior: "₹1.5–5 Cr (Principal Researcher / AI Lab Lead)" },
    timeline: 6,
    globalScope: true,
    examRequired: "JEE Advanced / GATE / GRE",
    roiScore: 10,
    stressScore: 8,
    description: "Push the frontiers of artificial intelligence. Build systems that learn, reason, and create — the most transformative technology of the century.",
    realityNote: "AI research at DeepMind/OpenAI/Google Brain requires a PhD from a top-5 program. But ML Engineering roles at startups are accessible with a strong B.Tech + portfolio. The field is moving so fast that self-taught researchers with strong GitHub profiles can break in. Publish a paper, even if small, before applying to PhD programs."
  },

  quant_finance: {
    id: "quant_finance",
    category: "Financial",
    careerType: "A",
    domain: "finance",
    semantic_tags: ["quantitative","trading","algorithms","finance","hedge fund","derivatives"],
    keywords_negative: ["accounting","ca","banking clerk","insurance","quantum computing","quantum physics","quantum mechanics","quantum"],
    name: "Quantitative Finance Analyst",
    aliases: ["quant", "quantitative analyst", "quantitative finance", "algorithmic trading", "algo trading",
              "hedge fund", "wall street", "trading", "financial engineer", "quant trader",
              "high frequency trading", "hft", "derivatives", "options trading", "quant researcher"],
    streams: ["PCM", "Commerce"],
    minMarks: 90,
    minMarksStretch: 75,
    domains: [
      { name: "Quantitative Foundations", skills: ["Stochastic calculus", "Linear algebra", "Probability theory", "Time series", "Numerical methods"], topResource: "MIT OCW 18.S096 + Shreve's Stochastic Calculus for Finance", timeMonths: 8, contingency: "If the math level feels extreme, start with Khan Academy calculus and build up." },
      { name: "Programming & Systems", skills: ["Python (NumPy/Pandas)", "C++", "SQL", "Algorithmic thinking", "Low-latency systems"], topResource: "QuantConnect + Kaggle competitions + LeetCode", timeMonths: 6 },
      { name: "Finance Domain", skills: ["Options pricing", "Risk management", "Portfolio theory", "Market microstructure", "Backtesting"], topResource: "Hull's Options book + QuantLib + CFA L1", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (Math/CS)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 200", placement_median: "₹28L", type: "government" },
      { name: "IIT Kanpur (Math + Stats)", tier: 1, city: "Kanpur", state: "Uttar Pradesh", fees_per_year: 220000, cutoff_description: "JEE Advanced Top 1000", placement_median: "₹20L", type: "government" },
      { name: "ISI Kolkata (Statistics)", tier: 1, city: "Kolkata", state: "West Bengal", fees_per_year: 30000, cutoff_description: "ISI Admission Test (legendary difficulty)", placement_median: "₹25L", type: "government" },
      { name: "MIT (MFin)", tier: 1, city: "Cambridge", state: "Massachusetts", fees_per_year: 7000000, cutoff_description: "GMAT 750+ / exceptional quant", placement_median: "₹3Cr+", type: "global" },
      { name: "Princeton (ORFE)", tier: 1, city: "Princeton", state: "New Jersey", fees_per_year: 5500000, cutoff_description: "Top 0.1% globally", placement_median: "₹3Cr+", type: "global" }
    ],
    salaryRange: { entry: "₹20–50 LPA", mid: "₹80–200 LPA", senior: "₹3–10 Cr+ (Portfolio Manager / Partner)" },
    timeline: 5,
    globalScope: true,
    examRequired: "JEE Advanced / ISI Entrance / GRE",
    roiScore: 10,
    stressScore: 10,
    description: "Use advanced mathematics, statistics, and programming to trade financial markets. The highest-paying career path for math prodigies.",
    realityNote: "Quant finance is the most intellectually demanding career on this list. Tower Research, Citadel, Jane Street, and DE Shaw recruit from IIT+ISI and pay ₹50L+ to freshers. But the wash-out rate is brutal — if your math isn't IMO/ISI level, consider the data science route which uses similar skills with broader opportunity."
  },

  civil_services: {
    id: "civil_services",
    category: "Government",
    careerType: "B",
    domain: "law_government",
    semantic_tags: ["ias","ips","upsc","civil services","government","administration","bureaucracy"],
    keywords_negative: ["civil engineer","construction","building"],
    name: "IAS/IPS Officer (Civil Services)",
    aliases: ["ias", "ips", "civil services", "upsc", "collector", "bureaucrat", "government officer",
              "district magistrate", "dm", "commissioner", "administrator", "public administration",
              "ifs officer", "irs officer", "civil servant", "government job"],
    streams: ["PCM", "Commerce", "Arts"],
    minMarks: 70,
    minMarksStretch: 55,
    domains: [
      { name: "UPSC Foundation", skills: ["NCERT mastery (6–12)", "Current affairs", "Essay writing", "Ethics", "Indian polity"], topResource: "Vision IAS / Vajiram & Ravi + The Hindu daily", timeMonths: 12, contingency: "If prelims are difficult, consider state PSC exams as backup — similar career, lower competition." },
      { name: "Optional Subject", skills: ["Deep mastery of one optional", "Answer writing", "Previous year analysis"], topResource: "Toppers' notes + optional subject coaching", timeMonths: 8 },
      { name: "Interview & Personality", skills: ["Current affairs articulation", "Governance case studies", "DAF preparation", "Mock interviews"], topResource: "Shankar IAS Academy + mock interview panels", timeMonths: 4 }
    ],
    topInstitutions: [
      { name: "LBSNAA Mussoorie (Training)", tier: 1, city: "Mussoorie", state: "Uttarakhand", fees_per_year: 0, cutoff_description: "UPSC CSE Final Selection", placement_median: "₹12L + perks", type: "government" },
      { name: "St. Stephen's College (Delhi University)", tier: 1, city: "Delhi", state: "Delhi", fees_per_year: 30000, cutoff_description: "DU Cutoff 98%+", placement_median: "₹6L (academic)", type: "government" },
      { name: "JNU (Political Science / IR)", tier: 1, city: "Delhi", state: "Delhi", fees_per_year: 20000, cutoff_description: "JNUEE", placement_median: "₹5L (academic)", type: "government" },
      { name: "Hindu College (Delhi University)", tier: 1, city: "Delhi", state: "Delhi", fees_per_year: 25000, cutoff_description: "DU Cutoff 97%+", placement_median: "₹5L (academic)", type: "government" },
      { name: "Presidency University Kolkata", tier: 2, city: "Kolkata", state: "West Bengal", fees_per_year: 15000, cutoff_description: "Merit-based", placement_median: "₹4L (academic)", type: "government" }
    ],
    salaryRange: { entry: "₹10–14 LPA (IAS probationer)", mid: "₹20–30 LPA + perks (Joint Secretary)", senior: "₹30–50 LPA + perks (Cabinet Secretary level)" },
    timeline: 5,
    globalScope: false,
    examRequired: "UPSC Civil Services Examination",
    roiScore: 7,
    stressScore: 9,
    description: "Govern India at the highest level. IAS/IPS officers run districts, shape policy, and lead the administrative machinery of the world's largest democracy.",
    realityNote: "UPSC CSE has a ~0.1% selection rate. The average successful candidate takes 2.5 attempts. You MUST have a backup career plan. Many toppers combine UPSC prep with a law degree (from NLS/NALSAR) or an MBA — so that if UPSC doesn't work out by attempt 3, you have a premium career to fall back on. Never make UPSC your only plan."
  },

  // ── STRESS TEST EXPANSION: 10 Missing Careers (BUG-001/002 fix) ──

  actuary: {
    id: "actuary", category: "Financial", careerType: "B", domain: "finance",
    semantic_tags: ["actuarial","risk","insurance","statistics","probability","mortality"],
    keywords_negative: ["acting","actor","startup"],
    name: "Actuary / Risk Analyst",
    aliases: ["actuary","actuarial science","risk analyst","insurance analyst","underwriter","insurance underwriter","risk management"],
    streams: ["Commerce","PCM"], minMarks: 80, minMarksStretch: 70,
    domains: [
      { name: "Mathematics", skills: ["Probability","Statistics","Financial Mathematics","Stochastic Modelling"], topResource: "IAI CT series + Coaching (ACET prep)", timeMonths: 12 },
      { name: "Actuarial Exams", skills: ["CT1-CT8","CA1-CA3","ST series"], topResource: "Institute of Actuaries of India (IAI)", timeMonths: 36 },
      { name: "Industry", skills: ["Life Insurance","General Insurance","Pension Consulting","ERM"], topResource: "Internship at Willis Towers Watson / Milliman", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IGNOU (B.Sc Actuarial Science)", tier: 2, city: "New Delhi", state: "Delhi", fees_per_year: 15000, cutoff_description: "Open admission", placement_median: "Self-placed via IAI", type: "government" },
      { name: "Bishop Heber College", tier: 2, city: "Trichy", state: "Tamil Nadu", fees_per_year: 50000, cutoff_description: "Merit-based", placement_median: "₹6-8L", type: "private" },
      { name: "Amity University", tier: 3, city: "Noida", state: "UP", fees_per_year: 250000, cutoff_description: "50%+", placement_median: "₹5-7L", type: "private" },
      { name: "London School of Economics", tier: 1, city: "London", state: "UK", fees_per_year: 3500000, cutoff_description: "Top academics + IELTS 7.0", placement_median: "₹50-80L", type: "global" }
    ],
    salaryRange: { entry: "₹6-12 LPA", mid: "₹25-60 LPA", senior: "₹1-3 Cr (Chief Actuary)" },
    timeline: 5, globalScope: true, examRequired: "IAI ACET + CT/CA/ST series (15+ exams)", roiScore: 9, stressScore: 8,
    description: "Use mathematics to quantify risk for insurance, pension, and financial companies.",
    realityNote: "Only ~300 qualified actuaries exist in India. The qualification takes 5-7 years of exams while working. Dropout rate is >80%. But qualified actuaries earn ₹25-60 LPA easily."
  },

  forensic_scientist: {
    id: "forensic_scientist", category: "Research", careerType: "A", domain: "science_research",
    semantic_tags: ["forensic","crime","investigation","dna","toxicology","pathology","ballistics"],
    keywords_negative: ["startup","founder","entrepreneur"],
    name: "Forensic Scientist / Crime Investigator",
    aliases: ["forensic science","forensics","crime scene","forensic pathologist","digital forensics","cyber forensics","crime investigation","cbi","ballistics"],
    streams: ["PCB","PCM"], minMarks: 65, minMarksStretch: 55,
    domains: [
      { name: "Core Sciences", skills: ["Chemistry","Biology","Physics","Toxicology"], topResource: "B.Sc Forensic Science curriculum", timeMonths: 36 },
      { name: "Specialization", skills: ["DNA Analysis","Ballistics","Digital Forensics","Questioned Documents"], topResource: "LNJN NICFS or GFSU", timeMonths: 24 },
      { name: "Field Work", skills: ["Crime Scene Management","Evidence Collection","Court Testimony"], topResource: "State FSL internship", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "Gujarat Forensic Sciences University (GFSU)", tier: 1, city: "Gandhinagar", state: "Gujarat", fees_per_year: 120000, cutoff_description: "Entrance exam", placement_median: "₹5-8L", type: "government" },
      { name: "LNJN National Institute of Criminology", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 30000, cutoff_description: "PG entrance", placement_median: "₹6-10L (govt labs)", type: "government" },
      { name: "Osmania University", tier: 2, city: "Hyderabad", state: "Telangana", fees_per_year: 25000, cutoff_description: "Merit-based", placement_median: "₹4-6L", type: "government" },
      { name: "University of Lausanne", tier: 1, city: "Lausanne", state: "Switzerland", fees_per_year: 200000, cutoff_description: "Academic merit", placement_median: "₹30-50L", type: "global" }
    ],
    salaryRange: { entry: "₹4-8 LPA", mid: "₹12-25 LPA", senior: "₹30-50 LPA (Director FSL)" },
    timeline: 4, globalScope: true, examRequired: "State FSL recruitment exams / UGC NET", roiScore: 6, stressScore: 7,
    description: "Apply science to solve crimes — from DNA analysis to digital forensics and toxicology.",
    realityNote: "Government forensic lab jobs are limited (~500 vacancies/year across India). Private forensic consulting is growing but small. The best-paid path is digital forensics/cybercrime at Big 4 consulting firms (₹15-30L)."
  },

  mechanical_engineer: {
    id: "mechanical_engineer", category: "Technical", careerType: "A", domain: "technology",
    semantic_tags: ["mechanical","manufacturing","automobile","robotics","thermal","design","cad","hvac"],
    keywords_negative: ["software","coding","programming"],
    name: "Mechanical / Automobile Engineer",
    aliases: ["mechanical engineer","automobile engineer","automotive","manufacturing","industrial engineer","mechatronics","robotics engineer","embedded systems","thermal engineer","hvac"],
    streams: ["PCM"], minMarks: 70, minMarksStretch: 55,
    domains: [
      { name: "Core Mechanical", skills: ["Thermodynamics","Fluid Mechanics","Strength of Materials","Machine Design"], topResource: "B.Tech Mechanical at IIT/NIT", timeMonths: 48 },
      { name: "Modern Tools", skills: ["CAD/CAM (SolidWorks/CATIA)","FEA (ANSYS)","3D Printing","PLC Programming"], topResource: "NPTEL + Industry certifications", timeMonths: 12 },
      { name: "Industry", skills: ["Manufacturing Processes","Quality Control","Supply Chain","Lean/Six Sigma"], topResource: "Internship at Tata Motors/L&T/Bosch", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (Mechanical)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced top 2000", placement_median: "₹20-30L", type: "government" },
      { name: "IIT Madras (Mechanical)", tier: 1, city: "Chennai", state: "Tamil Nadu", fees_per_year: 220000, cutoff_description: "JEE Advanced top 3000", placement_median: "₹18-25L", type: "government" },
      { name: "NIT Trichy (Mechanical)", tier: 1, city: "Trichy", state: "Tamil Nadu", fees_per_year: 150000, cutoff_description: "JEE Mains top 5%", placement_median: "₹12-18L", type: "government" },
      { name: "TU Munich", tier: 1, city: "Munich", state: "Germany", fees_per_year: 100000, cutoff_description: "8.0+ CGPA + IELTS 6.5", placement_median: "₹40-60L", type: "global" }
    ],
    salaryRange: { entry: "₹5-12 LPA", mid: "₹15-35 LPA", senior: "₹50L-1Cr (VP Engineering)" },
    timeline: 4, globalScope: true, examRequired: "JEE Mains/Advanced or State CET", roiScore: 7, stressScore: 6,
    description: "Design, build, and optimize machines, vehicles, and manufacturing systems.",
    realityNote: "Core mechanical jobs in India pay ₹3-6L at entry (non-IT). The real money is in: (1) German automobile companies (₹15-30L), (2) switching to product management/consulting after IIT (₹25-50L), (3) MS in Robotics/AI abroad. Pure core mechanical is a passion choice, not a salary-maximizing one."
  },

  investment_banker: {
    id: "investment_banker", category: "Financial", careerType: "A", domain: "finance",
    semantic_tags: ["investment banking","mergers","acquisitions","ipo","private equity","venture capital","wall street","dealmaking"],
    keywords_negative: ["retail banking","bank clerk","sbi po"],
    name: "Investment Banker / PE-VC Analyst",
    aliases: ["investment banker","investment banking","ib","mergers and acquisitions","m&a","private equity","venture capital","vc","pe","hedge fund","wall street","dealmaker","derivatives trader"],
    streams: ["Commerce","PCM"], minMarks: 85, minMarksStretch: 75,
    domains: [
      { name: "Finance Foundations", skills: ["Financial Modelling","Valuation (DCF/Comps)","Accounting","Corporate Finance"], topResource: "Wall Street Prep / Breaking Into Wall Street", timeMonths: 6 },
      { name: "Deal Skills", skills: ["M&A Process","IPO Execution","LBO Modelling","Due Diligence"], topResource: "IIM/ISB placement prep + CFA L1", timeMonths: 12 },
      { name: "Industry", skills: ["Sector Analysis","Pitch Books","Client Management","Networking"], topResource: "Internship at Goldman/Morgan Stanley/Kotak IB", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIM Ahmedabad", tier: 1, city: "Ahmedabad", state: "Gujarat", fees_per_year: 2300000, cutoff_description: "CAT 99.5%+", placement_median: "₹35L", type: "private" },
      { name: "SRCC (B.Com Hons)", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 25000, cutoff_description: "98%+ in Class 12", placement_median: "₹12-18L", type: "government" },
      { name: "ISB Hyderabad", tier: 1, city: "Hyderabad", state: "Telangana", fees_per_year: 3700000, cutoff_description: "GMAT 720+ / 2yr work exp", placement_median: "₹35-40L", type: "private" },
      { name: "Wharton (UPenn)", tier: 1, city: "Philadelphia", state: "USA", fees_per_year: 6000000, cutoff_description: "SAT 1500+ / GMAT 740+", placement_median: "₹1.5Cr", type: "global" }
    ],
    salaryRange: { entry: "₹12-25 LPA", mid: "₹40-100 LPA", senior: "₹1-5 Cr (MD/Partner)" },
    timeline: 4, globalScope: true, examRequired: "CAT/GMAT for MBA route; CFA recommended", roiScore: 10, stressScore: 10,
    description: "Advise companies on mergers, acquisitions, IPOs, and capital raising. The highest-paying finance career.",
    realityNote: "Investment banking in India is brutally competitive. Only 50-100 analysts are hired annually by top banks (Goldman, Morgan Stanley, JP Morgan India). The path: IIM-A/B/C → Summer internship → PPO. Work hours: 80-100/week for first 3 years. The payoff is extraordinary but the lifestyle cost is extreme."
  },

  environmental_engineer: {
    id: "environmental_engineer", category: "Technical", careerType: "A", domain: "science_research",
    semantic_tags: ["environment","pollution","sustainability","climate","water treatment","waste management","renewable energy","green"],
    keywords_negative: ["software","coding","startup"],
    name: "Environmental / Agricultural Engineer",
    aliases: ["environmental engineer","agricultural engineer","sustainability","climate engineer","water engineer","renewable energy","green tech","precision agriculture","agritech","agricultural scientist"],
    streams: ["PCM","PCB"], minMarks: 65, minMarksStretch: 55,
    domains: [
      { name: "Environmental Science", skills: ["Water Treatment","Air Quality","Waste Management","EIA"], topResource: "B.Tech Environmental Eng at IIT/NIT", timeMonths: 48 },
      { name: "Sustainability", skills: ["Renewable Energy","Carbon Accounting","ESG Frameworks","Climate Modelling"], topResource: "TERI + GRIHA certification", timeMonths: 12 },
      { name: "AgriTech", skills: ["Precision Agriculture","Soil Science","Irrigation Design","Drone Mapping"], topResource: "IARI / ICAR research programs", timeMonths: 24 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (EnvSE)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹15-25L", type: "government" },
      { name: "IARI New Delhi", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 30000, cutoff_description: "ICAR AIEEA", placement_median: "₹8-12L", type: "government" },
      { name: "IIT Kharagpur (Agri Eng)", tier: 1, city: "Kharagpur", state: "West Bengal", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹15-20L", type: "government" },
      { name: "ETH Zurich (Environmental Eng)", tier: 1, city: "Zurich", state: "Switzerland", fees_per_year: 150000, cutoff_description: "Top academics", placement_median: "₹50-70L", type: "global" }
    ],
    salaryRange: { entry: "₹4-10 LPA", mid: "₹15-35 LPA", senior: "₹40-80 LPA (ESG Director)" },
    timeline: 4, globalScope: true, examRequired: "JEE / ICAR AIEEA / GATE", roiScore: 6, stressScore: 5,
    description: "Solve humanity's biggest challenges: clean water, renewable energy, sustainable agriculture, and climate change.",
    realityNote: "Environmental engineering in India is still a niche field. Government jobs (CPCB/SPCB) pay ₹8-15L. The real growth is in ESG consulting at Big 4 firms (₹20-40L) and international NGOs. Agricultural engineering has massive impact potential but low salaries unless you build an AgriTech startup."
  },


  nuclear_engineer: {
    id: "nuclear_engineer", category: "Technical", careerType: "B", domain: "science_research",
    semantic_tags: ["nuclear","atomic","reactor","barc","radiation","fission","fusion","isotope"],
    keywords_negative: ["software","coding","web"],
    name: "Nuclear Engineer / BARC Scientist",
    aliases: ["nuclear engineer","barc","atomic energy","nuclear physicist","reactor engineer","nuclear science","radiation","nuclear power"],
    streams: ["PCM"], minMarks: 80, minMarksStretch: 70,
    domains: [
      { name: "Nuclear Physics", skills: ["Quantum Mechanics","Nuclear Physics","Reactor Theory","Radiation Safety"], topResource: "B.Tech Engineering Physics / M.Sc Physics", timeMonths: 48 },
      { name: "BARC Training", skills: ["OCES/DGFS program","Reactor Design","Nuclear Fuel Cycle"], topResource: "BARC Training School (1 year)", timeMonths: 12 },
      { name: "Research", skills: ["Monte Carlo Simulation","Health Physics","Waste Management"], topResource: "IGCAR / RRCAT labs", timeMonths: 24 }
    ],
    topInstitutions: [
      { name: "IIT Kanpur (Engineering Physics)", tier: 1, city: "Kanpur", state: "UP", fees_per_year: 220000, cutoff_description: "JEE Advanced top 2000", placement_median: "₹18-25L", type: "government" },
      { name: "BARC Training School", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 0, cutoff_description: "GATE score + BARC written test", placement_median: "₹10-15L (govt scale)", type: "government" },
      { name: "ICT Mumbai", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 150000, cutoff_description: "JEE Mains / MHT-CET", placement_median: "₹12-18L", type: "government" },
      { name: "MIT (Nuclear Science & Eng)", tier: 1, city: "Cambridge", state: "USA", fees_per_year: 5500000, cutoff_description: "Top 1% globally", placement_median: "₹80L-1Cr", type: "global" }
    ],
    salaryRange: { entry: "₹10-15 LPA (BARC)", mid: "₹20-35 LPA", senior: "₹40-60 LPA (Director BARC)" },
    timeline: 5, globalScope: true, examRequired: "GATE → BARC OCES/DGFS written test + interview", roiScore: 7, stressScore: 7,
    description: "Design nuclear reactors, manage atomic energy programs, and advance India's nuclear capabilities at BARC/IGCAR.",
    realityNote: "BARC hires ~150-200 engineers annually through OCES/DGFS. GATE score is mandatory. The work is secure (government) but salaries are lower than private sector. International nuclear jobs (IAEA, Westinghouse, EDF) pay 3-5x more."
  },

  supply_chain_manager: {
    id: "supply_chain_manager", category: "Entrepreneurial", careerType: "A", domain: "business",
    semantic_tags: ["supply chain","logistics","operations","procurement","warehouse","inventory","shipping","fmcg"],
    keywords_negative: ["software","coding","blockchain"],
    name: "Supply Chain / Operations Manager",
    aliases: ["supply chain","logistics","operations manager","procurement","warehouse manager","fmcg supply chain","operations research","inventory","shipping"],
    streams: ["Commerce","PCM","Arts"], minMarks: 60, minMarksStretch: 50,
    domains: [
      { name: "Operations", skills: ["Inventory Management","Lean/Six Sigma","ERP (SAP)","Demand Forecasting"], topResource: "MBA Operations at IIM/NITIE", timeMonths: 24 },
      { name: "Logistics", skills: ["Warehouse Design","Last Mile Delivery","Cold Chain","Cross-border Trade"], topResource: "IIFT / Industry internship", timeMonths: 12 },
      { name: "Analytics", skills: ["Supply Chain Analytics","Python/R","Linear Programming","Network Optimization"], topResource: "ISB AMPBA / Coursera specialization", timeMonths: 6 }
    ],
    topInstitutions: [
      { name: "NITIE Mumbai (now IIM Mumbai)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 1000000, cutoff_description: "CAT 97%+", placement_median: "₹25-30L", type: "government" },
      { name: "IIM Bangalore (Operations)", tier: 1, city: "Bangalore", state: "Karnataka", fees_per_year: 2300000, cutoff_description: "CAT 99%+", placement_median: "₹35L", type: "private" },
      { name: "IIFT New Delhi", tier: 1, city: "New Delhi", state: "Delhi", fees_per_year: 1200000, cutoff_description: "IIFT entrance exam", placement_median: "₹25L", type: "government" },
      { name: "MIT Sloan (SCM)", tier: 1, city: "Cambridge", state: "USA", fees_per_year: 5500000, cutoff_description: "GMAT 720+", placement_median: "₹1.2Cr", type: "global" }
    ],
    salaryRange: { entry: "₹6-12 LPA", mid: "₹20-45 LPA", senior: "₹60L-1.5Cr (VP Supply Chain)" },
    timeline: 3, globalScope: true, examRequired: "CAT/GMAT for MBA; CSCP/CPIM certifications recommended", roiScore: 8, stressScore: 6,
    description: "Optimize the movement of goods from factory to customer — the backbone of every business.",
    realityNote: "Supply chain is booming post-COVID. Amazon, Flipkart, Reliance, and D2C brands are hiring aggressively. Starting salaries at FMCG companies (HUL, P&G, Nestle) are ₹15-25L for MBA grads. International supply chain roles (Dubai, Singapore) pay 2-3x."
  },

  biomedical_engineer: {
    id: "biomedical_engineer", category: "Technical", careerType: "A", domain: "healthcare",
    semantic_tags: ["biomedical","medical devices","prosthetics","bioinformatics","health tech","implants"],
    keywords_negative: ["software only","web development"],
    name: "Biomedical Engineer / MedTech",
    aliases: ["biomedical engineer","biomedical engineering","medical devices","prosthetics","health tech","bioinformatics","clinical engineer","medical technology","medtech"],
    streams: ["PCM","PCB"], minMarks: 70, minMarksStretch: 60,
    domains: [
      { name: "Biomedical Core", skills: ["Biomechanics","Medical Imaging","Biomaterials","Physiology"], topResource: "B.Tech Biomedical at IIT/VIT", timeMonths: 48 },
      { name: "Devices & Diagnostics", skills: ["Medical Device Design","FDA/CDSCO Regulations","Signal Processing","Embedded Systems"], topResource: "Industry internship at Siemens/GE/Philips Healthcare", timeMonths: 12 },
      { name: "Research", skills: ["Tissue Engineering","Neural Interfaces","Drug Delivery Systems"], topResource: "IIT Bombay/AIIMS collaborative research", timeMonths: 24 }
    ],
    topInstitutions: [
      { name: "IIT Bombay (Biomedical Eng)", tier: 1, city: "Mumbai", state: "Maharashtra", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹15-25L", type: "government" },
      { name: "VIT Vellore (Biomedical)", tier: 2, city: "Vellore", state: "Tamil Nadu", fees_per_year: 200000, cutoff_description: "VITEEE", placement_median: "₹6-10L", type: "private" },
      { name: "SCTIMST Trivandrum", tier: 1, city: "Trivandrum", state: "Kerala", fees_per_year: 50000, cutoff_description: "Entrance exam", placement_median: "₹8-15L", type: "government" },
      { name: "Johns Hopkins (BME)", tier: 1, city: "Baltimore", state: "USA", fees_per_year: 5500000, cutoff_description: "Top academics + GRE", placement_median: "₹80L-1Cr", type: "global" }
    ],
    salaryRange: { entry: "₹5-10 LPA", mid: "₹15-35 LPA", senior: "₹50-80 LPA (Director R&D MedTech)" },
    timeline: 4, globalScope: true, examRequired: "JEE / GATE for IITs; GRE for abroad", roiScore: 7, stressScore: 5,
    description: "Bridge engineering and medicine — design medical devices, prosthetics, and diagnostic equipment.",
    realityNote: "Biomedical engineering in India has a reputation problem: many graduates end up in IT, not medical devices. The key is to target companies like Siemens Healthineers, GE Healthcare, or MedTech startups. MS abroad (Johns Hopkins, MIT) dramatically improves career options."
  },

  petroleum_engineer: {
    id: "petroleum_engineer", category: "Technical", careerType: "A", domain: "science_research",
    semantic_tags: ["petroleum","oil","gas","drilling","refinery","ongc","exploration","reservoir"],
    keywords_negative: ["software","coding","web"],
    name: "Petroleum / Mining Engineer",
    aliases: ["petroleum engineer","oil and gas","mining engineer","drilling engineer","reservoir engineer","ongc","petroleum","crude oil","refinery","geologist","geology"],
    streams: ["PCM"], minMarks: 70, minMarksStretch: 55,
    domains: [
      { name: "Petroleum Core", skills: ["Reservoir Engineering","Drilling Technology","Production Engineering","Well Logging"], topResource: "B.Tech Petroleum Eng at ISM Dhanbad", timeMonths: 48 },
      { name: "Geoscience", skills: ["Geology","Geophysics","Seismic Interpretation","Petrophysics"], topResource: "IIT ISM Dhanbad / UPES", timeMonths: 24 },
      { name: "Industry", skills: ["ONGC/IOCL operations","Offshore Safety (BOSIET)","EOR Techniques"], topResource: "GATE → ONGC/IOCL placement", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "IIT (ISM) Dhanbad", tier: 1, city: "Dhanbad", state: "Jharkhand", fees_per_year: 220000, cutoff_description: "JEE Advanced", placement_median: "₹12-20L", type: "government" },
      { name: "UPES Dehradun", tier: 2, city: "Dehradun", state: "Uttarakhand", fees_per_year: 350000, cutoff_description: "UPESEAT / JEE Mains", placement_median: "₹8-12L", type: "private" },
      { name: "Rajiv Gandhi Institute of Petroleum Technology", tier: 2, city: "Jais", state: "UP", fees_per_year: 200000, cutoff_description: "JEE Mains", placement_median: "₹10-15L", type: "government" },
      { name: "Texas A&M (Petroleum Eng)", tier: 1, city: "College Station", state: "USA", fees_per_year: 4000000, cutoff_description: "GRE 320+", placement_median: "₹70-90L", type: "global" }
    ],
    salaryRange: { entry: "₹8-15 LPA (ONGC/IOCL)", mid: "₹20-50 LPA", senior: "₹60L-1.5Cr (VP Exploration)" },
    timeline: 4, globalScope: true, examRequired: "JEE / GATE (for ONGC/IOCL PSU recruitment)", roiScore: 8, stressScore: 7,
    description: "Extract oil, gas, and minerals from the earth. One of the highest-paying engineering disciplines globally.",
    realityNote: "India's petroleum sector is dominated by PSUs (ONGC, IOCL, GAIL). GATE score is the primary hiring criterion. International oil companies (Shell, BP, Schlumberger) pay 3-5x more. The industry is cyclical — oil price crashes cause mass layoffs. Green energy transition is a long-term career risk."
  },

  statistician: {
    id: "statistician", category: "Research", careerType: "A", domain: "science_research",
    semantic_tags: ["statistics","indian statistical service","iss","survey","census","econometrics","biostatistics"],
    keywords_negative: ["startup","social media"],
    name: "Statistician / Indian Statistical Service",
    aliases: ["statistician","indian statistical service","iss","biostatistician","survey statistician","econometrician","statistical analyst","census","demographer","computational linguist","science journalist"],
    streams: ["PCM","Commerce"], minMarks: 70, minMarksStretch: 60,
    domains: [
      { name: "Statistical Theory", skills: ["Probability Theory","Mathematical Statistics","Sampling Theory","Multivariate Analysis"], topResource: "ISI Kolkata B.Stat/M.Stat", timeMonths: 36 },
      { name: "Applied Stats", skills: ["Biostatistics","Econometrics","Time Series","Survey Design"], topResource: "ISI / CMI / IIT coursework", timeMonths: 24 },
      { name: "Government/Industry", skills: ["Census Methods","Official Statistics","R/Python/SAS","Report Writing"], topResource: "ISS exam prep / NSSO internship", timeMonths: 12 }
    ],
    topInstitutions: [
      { name: "Indian Statistical Institute (ISI) Kolkata", tier: 1, city: "Kolkata", state: "West Bengal", fees_per_year: 15000, cutoff_description: "ISI entrance exam — top 2%", placement_median: "₹15-30L", type: "government" },
      { name: "Chennai Mathematical Institute (CMI)", tier: 1, city: "Chennai", state: "Tamil Nadu", fees_per_year: 100000, cutoff_description: "CMI entrance exam", placement_median: "₹12-25L", type: "private" },
      { name: "University of Hyderabad (Statistics)", tier: 2, city: "Hyderabad", state: "Telangana", fees_per_year: 20000, cutoff_description: "CUET PG", placement_median: "₹6-10L", type: "government" },
      { name: "Stanford (Statistics)", tier: 1, city: "Stanford", state: "USA", fees_per_year: 5500000, cutoff_description: "Top 1% globally", placement_median: "₹1Cr+", type: "global" }
    ],
    salaryRange: { entry: "₹8-15 LPA", mid: "₹20-40 LPA", senior: "₹50-80 LPA (Chief Statistician)" },
    timeline: 4, globalScope: true, examRequired: "ISS exam (UPSC) / ISI entrance / UGC NET", roiScore: 8, stressScore: 5,
    description: "Apply mathematical statistics to solve real-world problems in government, healthcare, finance, and technology.",
    realityNote: "ISI graduates are among the highest-paid in India — they get recruited by Google, Goldman Sachs, and top quant firms at ₹25-50L. The ISS (Indian Statistical Service) via UPSC is a prestigious Group A government service. Pure academic statistics requires a PhD and patience."
  },

};
