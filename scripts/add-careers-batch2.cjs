const fs = require('fs');
const f = 'lib/career-database.ts';
let src = fs.readFileSync(f,'utf8');

const careers = `
  nuclear_engineer: {
    id: "nuclear_engineer", category: "Engineering", careerType: "B", domain: "science_research",
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
    realityNote: "BARC hires ~150-200 engineers annually through OCES/DGFS. GATE score is mandatory. The work is secure (government) but salaries are lower than private sector. International nuclear jobs (IAEA, Westinghouse, EDF) pay 3-5x more.", confidence: 0.7
  },

  supply_chain_manager: {
    id: "supply_chain_manager", category: "Business", careerType: "A", domain: "business",
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
    realityNote: "Supply chain is booming post-COVID. Amazon, Flipkart, Reliance, and D2C brands are hiring aggressively. Starting salaries at FMCG companies (HUL, P&G, Nestle) are ₹15-25L for MBA grads. International supply chain roles (Dubai, Singapore) pay 2-3x.", confidence: 0.8
  },

  biomedical_engineer: {
    id: "biomedical_engineer", category: "Engineering", careerType: "A", domain: "healthcare",
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
    realityNote: "Biomedical engineering in India has a reputation problem: many graduates end up in IT, not medical devices. The key is to target companies like Siemens Healthineers, GE Healthcare, or MedTech startups. MS abroad (Johns Hopkins, MIT) dramatically improves career options.", confidence: 0.7
  },

  petroleum_engineer: {
    id: "petroleum_engineer", category: "Engineering", careerType: "A", domain: "science_research",
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
    realityNote: "India's petroleum sector is dominated by PSUs (ONGC, IOCL, GAIL). GATE score is the primary hiring criterion. International oil companies (Shell, BP, Schlumberger) pay 3-5x more. The industry is cyclical — oil price crashes cause mass layoffs. Green energy transition is a long-term career risk.", confidence: 0.75
  },

  statistician: {
    id: "statistician", category: "Science", careerType: "A", domain: "science_research",
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
    realityNote: "ISI graduates are among the highest-paid in India — they get recruited by Google, Goldman Sachs, and top quant firms at ₹25-50L. The ISS (Indian Statistical Service) via UPSC is a prestigious Group A government service. Pure academic statistics requires a PhD and patience.", confidence: 0.8
  },
`;

src = src.replace(/\n};\s*$/, '\n' + careers + '\n};\n');
fs.writeFileSync(f, src);
console.log('Batch 2: 5 careers added (nuclear, supply_chain, biomedical, petroleum, statistician)');
