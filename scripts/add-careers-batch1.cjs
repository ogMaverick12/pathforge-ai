const fs = require('fs');
const f = 'lib/career-database.ts';
let src = fs.readFileSync(f,'utf8');

const careers = `
  // ── STRESS TEST EXPANSION: 10 Missing Careers (BUG-001/002 fix) ──

  actuary: {
    id: "actuary", category: "Finance", careerType: "B", domain: "finance",
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
    realityNote: "Only ~300 qualified actuaries exist in India. The qualification takes 5-7 years of exams while working. Dropout rate is >80%. But qualified actuaries earn ₹25-60 LPA easily.", confidence: 0.85
  },

  forensic_scientist: {
    id: "forensic_scientist", category: "Science", careerType: "A", domain: "science_research",
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
    realityNote: "Government forensic lab jobs are limited (~500 vacancies/year across India). Private forensic consulting is growing but small. The best-paid path is digital forensics/cybercrime at Big 4 consulting firms (₹15-30L).", confidence: 0.75
  },

  mechanical_engineer: {
    id: "mechanical_engineer", category: "Engineering", careerType: "A", domain: "technology",
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
    realityNote: "Core mechanical jobs in India pay ₹3-6L at entry (non-IT). The real money is in: (1) German automobile companies (₹15-30L), (2) switching to product management/consulting after IIT (₹25-50L), (3) MS in Robotics/AI abroad. Pure core mechanical is a passion choice, not a salary-maximizing one.", confidence: 0.8
  },

  investment_banker: {
    id: "investment_banker", category: "Finance", careerType: "A", domain: "finance",
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
    realityNote: "Investment banking in India is brutally competitive. Only 50-100 analysts are hired annually by top banks (Goldman, Morgan Stanley, JP Morgan India). The path: IIM-A/B/C → Summer internship → PPO. Work hours: 80-100/week for first 3 years. The payoff is extraordinary but the lifestyle cost is extreme.", confidence: 0.7
  },

  environmental_engineer: {
    id: "environmental_engineer", category: "Engineering", careerType: "A", domain: "science_research",
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
    realityNote: "Environmental engineering in India is still a niche field. Government jobs (CPCB/SPCB) pay ₹8-15L. The real growth is in ESG consulting at Big 4 firms (₹20-40L) and international NGOs. Agricultural engineering has massive impact potential but low salaries unless you build an AgriTech startup.", confidence: 0.7
  },
`;

src = src.replace(/\n};\s*$/, '\n' + careers + '\n};\n');
fs.writeFileSync(f, src);
console.log('Batch 1: 5 careers added (actuary, forensic, mechanical, investment_banker, environmental)');
