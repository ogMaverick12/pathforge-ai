// AUTO-GENERATED — do not edit manually
// Run: node scripts/generate-careers.cjs > lib/careers-expansion-data.ts

import type { CareerProfile } from './career-database';

export const CAREERS_EXPANSION: Record<string, CareerProfile> = {
  radiologist: {
      "id": "radiologist",
      "name": "Radiologist",
      "aliases": [
          "radiology",
          "x-ray",
          "mri",
          "ct scan",
          "imaging",
          "diagnostic radiology"
      ],
      "streams": [
          "PCB"
      ],
      "careerType": "B",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 88,
      "minMarksStretch": 78,
      "timeline": 9,
      "globalScope": false,
      "examRequired": "NEET-UG",
      "roiScore": 7,
      "stressScore": 8,
      "description": "Interpret medical images (X-ray, MRI, CT) to diagnose diseases. High-demand specialty with excellent work-life balance.",
      "realityNote": "Radiology is 5.5yr MBBS + 3yr MD Radiology. Seats are extremely limited — only ~800 MD Radiology seats in India. Private college fees can exceed ₹1Cr.",
      "semantic_tags": [
          "radiology",
          "imaging",
          "diagnostic",
          "mri",
          "ct"
      ],
      "keywords_negative": [
          "photographer",
          "photography"
      ],
      "domains": [
          {
              "name": "NEET Preparation",
              "skills": [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "MCQ Strategy"
              ],
              "topResource": "Allen/Aakash + PW",
              "timeMonths": 18
          },
          {
              "name": "Clinical Foundation",
              "skills": [
                  "Anatomy",
                  "Physiology",
                  "Pathology",
                  "Radiology basics"
              ],
              "topResource": "Robbins + Radiopaedia",
              "timeMonths": 24
          },
          {
              "name": "Specialization",
              "skills": [
                  "MRI Physics",
                  "CT Protocols",
                  "Interventional Radiology"
              ],
              "topResource": "Defined Radiology + AIIMS material",
              "timeMonths": 36
          }
      ],
      "topInstitutions": [
          {
              "name": "AIIMS New Delhi",
              "tier": 1,
              "city": "New Delhi",
              "state": "Delhi",
              "fees_per_year": 1628,
              "cutoff_description": "NEET Top 50",
              "placement_median": "₹15L",
              "type": "government"
          },
          {
              "name": "CMC Vellore",
              "tier": 1,
              "city": "Vellore",
              "state": "Tamil Nadu",
              "fees_per_year": 70000,
              "cutoff_description": "NEET Top 500",
              "placement_median": "₹12L",
              "type": "private"
          },
          {
              "name": "KEM Hospital",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 25000,
              "cutoff_description": "NEET Top 800",
              "placement_median": "₹12L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹8-15 LPA",
          "mid": "₹25-60 LPA",
          "senior": "₹80-300 LPA"
      }
  },
  dentist: {
      "id": "dentist",
      "name": "Dentist (BDS)",
      "aliases": [
          "dental",
          "bds",
          "dental surgeon",
          "orthodontist",
          "dentistry",
          "teeth"
      ],
      "streams": [
          "PCB"
      ],
      "careerType": "B",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 5,
      "globalScope": false,
      "examRequired": "NEET-UG",
      "roiScore": 6,
      "stressScore": 5,
      "description": "Diagnose and treat dental conditions. Growing demand in cosmetic dentistry and orthodontics.",
      "realityNote": "BDS has poor ROI compared to MBBS. Most dentists earn ₹3-5L initially. The market is oversaturated in urban India with 300+ dental colleges.",
      "semantic_tags": [
          "dental",
          "dentistry",
          "oral",
          "teeth"
      ],
      "keywords_negative": [
          "data",
          "dental insurance"
      ],
      "domains": [
          {
              "name": "NEET Preparation",
              "skills": [
                  "Physics",
                  "Chemistry",
                  "Biology"
              ],
              "topResource": "Allen/Aakash",
              "timeMonths": 18
          },
          {
              "name": "Dental Sciences",
              "skills": [
                  "Oral Anatomy",
                  "Prosthodontics",
                  "Orthodontics"
              ],
              "topResource": "BDS curriculum",
              "timeMonths": 48
          },
          {
              "name": "Practice Setup",
              "skills": [
                  "Clinic Management",
                  "Patient Relations",
                  "Equipment"
              ],
              "topResource": "Dental associations",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "Maulana Azad Dental College",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 15000,
              "cutoff_description": "NEET Top 5000",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "Manipal MCODS",
              "tier": 1,
              "city": "Manipal",
              "state": "Karnataka",
              "fees_per_year": 800000,
              "cutoff_description": "NEET 550+",
              "placement_median": "₹8L",
              "type": "private"
          },
          {
              "name": "Government Dental College",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 20000,
              "cutoff_description": "NEET Top 8000",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-8 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹30-80 LPA"
      }
  },
  physiotherapist: {
      "id": "physiotherapist",
      "name": "Physiotherapist",
      "aliases": [
          "physio",
          "physical therapy",
          "rehabilitation",
          "bpt",
          "sports physio"
      ],
      "streams": [
          "PCB"
      ],
      "careerType": "A",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 4,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 4,
      "description": "Help patients recover mobility through exercises and manual therapy. Growing demand in sports and geriatric care.",
      "realityNote": "BPT is undervalued in India — starting salaries are ₹2-4L. The real money is in sports physiotherapy or opening your own clinic, both of which take 5-10 years.",
      "semantic_tags": [
          "physiotherapy",
          "rehabilitation",
          "physical therapy",
          "mobility"
      ],
      "keywords_negative": [
          "physics",
          "physician"
      ],
      "domains": [
          {
              "name": "Anatomy & Biomechanics",
              "skills": [
                  "Anatomy",
                  "Kinesiology",
                  "Biomechanics",
                  "Exercise Science"
              ],
              "topResource": "BPT Curriculum",
              "timeMonths": 24
          },
          {
              "name": "Clinical Skills",
              "skills": [
                  "Manual Therapy",
                  "Electrotherapy",
                  "Sports Rehab"
              ],
              "topResource": "Clinical rotations",
              "timeMonths": 18
          },
          {
              "name": "Specialization",
              "skills": [
                  "Sports Physio",
                  "Neuro Rehab",
                  "Pediatric Physio"
              ],
              "topResource": "IASM/Sports authority courses",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "CMC Vellore",
              "tier": 1,
              "city": "Vellore",
              "state": "Tamil Nadu",
              "fees_per_year": 60000,
              "cutoff_description": "NEET/Entrance",
              "placement_median": "₹5L",
              "type": "private"
          },
          {
              "name": "AIIMS Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 1628,
              "cutoff_description": "NEET-based",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "SVNIRTAR Cuttack",
              "tier": 1,
              "city": "Cuttack",
              "state": "Odisha",
              "fees_per_year": 15000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹4L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹20-50 LPA"
      }
  },
  pharmacist: {
      "id": "pharmacist",
      "name": "Pharmacist",
      "aliases": [
          "pharmacy",
          "b.pharm",
          "d.pharm",
          "pharmaceutical",
          "drug",
          "pharma",
          "medicines"
      ],
      "streams": [
          "PCB",
          "PCM"
      ],
      "careerType": "A",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 4,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 4,
      "description": "Develop, test, and dispense medications. Pharma industry is India's 3rd largest globally.",
      "realityNote": "B.Pharm graduates rarely do actual pharmacy — most go into pharma sales or manufacturing. Clinical pharmacy roles are few. D.Pharm has very limited career growth.",
      "semantic_tags": [
          "pharmacy",
          "pharmaceutical",
          "drug",
          "medicine formulation"
      ],
      "keywords_negative": [
          "physician",
          "physics"
      ],
      "domains": [
          {
              "name": "Pharmaceutical Sciences",
              "skills": [
                  "Organic Chemistry",
                  "Pharmacology",
                  "Pharmaceutics"
              ],
              "topResource": "B.Pharm curriculum",
              "timeMonths": 24
          },
          {
              "name": "Industry Skills",
              "skills": [
                  "Drug Formulation",
                  "Quality Control",
                  "Regulatory Affairs"
              ],
              "topResource": "NIPER resources",
              "timeMonths": 18
          },
          {
              "name": "Research/Business",
              "skills": [
                  "Clinical Trials",
                  "Pharmacovigilance",
                  "Marketing"
              ],
              "topResource": "Industry internships",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "NIPER Mohali",
              "tier": 1,
              "city": "Mohali",
              "state": "Punjab",
              "fees_per_year": 50000,
              "cutoff_description": "GPAT Top 500",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "ICT Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 80000,
              "cutoff_description": "MHT-CET/JEE",
              "placement_median": "₹7L",
              "type": "government"
          },
          {
              "name": "JSS Mysuru",
              "tier": 1,
              "city": "Mysuru",
              "state": "Karnataka",
              "fees_per_year": 150000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-20 LPA",
          "senior": "₹25-60 LPA"
      }
  },
  veterinarian: {
      "id": "veterinarian",
      "name": "Veterinarian",
      "aliases": [
          "vet",
          "veterinary",
          "animal doctor",
          "bvsc",
          "animal science"
      ],
      "streams": [
          "PCB"
      ],
      "careerType": "B",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 5,
      "globalScope": false,
      "examRequired": "NEET-UG (Veterinary)",
      "roiScore": 5,
      "stressScore": 6,
      "description": "Diagnose and treat animals. India has only ~100k vets for 500M+ livestock — massive shortage.",
      "realityNote": "BVSc is 5.5 years but starting pay is ₹3-5L. Government vet jobs pay well but are rural postings. Urban pet practice is growing but saturated in metros.",
      "semantic_tags": [
          "veterinary",
          "animal",
          "livestock",
          "pet"
      ],
      "keywords_negative": [
          "venture",
          "veteran"
      ],
      "domains": [
          {
              "name": "NEET/Entrance",
              "skills": [
                  "Biology",
                  "Chemistry",
                  "Animal Science"
              ],
              "topResource": "NEET prep + ICAR AIEEA",
              "timeMonths": 18
          },
          {
              "name": "Veterinary Sciences",
              "skills": [
                  "Animal Anatomy",
                  "Pathology",
                  "Surgery",
                  "Medicine"
              ],
              "topResource": "BVSc curriculum",
              "timeMonths": 48
          },
          {
              "name": "Specialization",
              "skills": [
                  "Dairy Science",
                  "Wildlife",
                  "Pet Practice"
              ],
              "topResource": "MVSc/Internships",
              "timeMonths": 24
          }
      ],
      "topInstitutions": [
          {
              "name": "IVRI Bareilly",
              "tier": 1,
              "city": "Bareilly",
              "state": "Uttar Pradesh",
              "fees_per_year": 20000,
              "cutoff_description": "ICAR AIEEA Top 200",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "GADVASU Ludhiana",
              "tier": 1,
              "city": "Ludhiana",
              "state": "Punjab",
              "fees_per_year": 30000,
              "cutoff_description": "NEET/State entrance",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "TANUVAS Chennai",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 25000,
              "cutoff_description": "NEET-based",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-50 LPA"
      }
  },
  robotics_engineer: {
      "id": "robotics_engineer",
      "name": "Robotics Engineer",
      "aliases": [
          "robotics",
          "robots",
          "automation",
          "mechatronics",
          "ros",
          "robotic systems"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 4,
      "globalScope": true,
      "examRequired": "JEE Main / JEE Advanced",
      "roiScore": 8,
      "stressScore": 7,
      "description": "Design and build robots and automated systems. Booming with Industry 4.0 and warehouse automation.",
      "realityNote": "India's robotics industry is nascent — most high-paying jobs are abroad or at MNCs. Pure robotics roles in India are rare; most work in automation/IoT.",
      "semantic_tags": [
          "robotics",
          "automation",
          "robot",
          "mechatronics",
          "actuator"
      ],
      "keywords_negative": [
          "rocket",
          "rocketry"
      ],
      "domains": [
          {
              "name": "Engineering Core",
              "skills": [
                  "Mechanics",
                  "Electronics",
                  "Control Systems",
                  "Embedded C"
              ],
              "topResource": "B.Tech Mechatronics/ECE",
              "timeMonths": 24
          },
          {
              "name": "Robotics Stack",
              "skills": [
                  "ROS",
                  "Computer Vision",
                  "SLAM",
                  "Motion Planning"
              ],
              "topResource": "MIT OCW + Coursera Robotics",
              "timeMonths": 12
          },
          {
              "name": "Industry Prep",
              "skills": [
                  "Industrial Automation",
                  "PLC/SCADA",
                  "Collaborative Robots"
              ],
              "topResource": "Company internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Madras",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced Top 500",
              "placement_median": "₹20L",
              "type": "government"
          },
          {
              "name": "BITS Pilani",
              "tier": 1,
              "city": "Pilani",
              "state": "Rajasthan",
              "fees_per_year": 550000,
              "cutoff_description": "BITSAT 340+",
              "placement_median": "₹14L",
              "type": "deemed"
          },
          {
              "name": "MIT Manipal",
              "tier": 2,
              "city": "Manipal",
              "state": "Karnataka",
              "fees_per_year": 400000,
              "cutoff_description": "MET exam",
              "placement_median": "₹8L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹6-12 LPA",
          "mid": "₹15-40 LPA",
          "senior": "₹50-120 LPA"
      }
  },
  biomedical_engineer: {
      "id": "biomedical_engineer",
      "name": "Biomedical Engineer",
      "aliases": [
          "biomedical",
          "medical devices",
          "biotech engineering",
          "prosthetics",
          "medical instruments"
      ],
      "streams": [
          "PCM",
          "PCB"
      ],
      "careerType": "A",
      "domain": "healthcare",
      "category": "Technical",
      "minMarks": 72,
      "minMarksStretch": 58,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 5,
      "description": "Design medical devices, prosthetics, and diagnostic equipment. Bridge between engineering and medicine.",
      "realityNote": "Biomedical engineering sounds exciting but job market in India is very small. Most graduates end up in IT or generic manufacturing. Best opportunities are abroad or in pharma MNCs.",
      "semantic_tags": [
          "biomedical",
          "medical device",
          "prosthetic",
          "implant",
          "bioinstrumentation"
      ],
      "keywords_negative": [
          "biology",
          "biotechnology research"
      ],
      "domains": [
          {
              "name": "Engineering Base",
              "skills": [
                  "Circuits",
                  "Signal Processing",
                  "Biomechanics",
                  "Materials"
              ],
              "topResource": "B.Tech Biomedical curriculum",
              "timeMonths": 24
          },
          {
              "name": "Medical Technology",
              "skills": [
                  "Medical Imaging",
                  "Biomaterials",
                  "Tissue Engineering"
              ],
              "topResource": "NPTEL + IEEE courses",
              "timeMonths": 12
          },
          {
              "name": "Industry Skills",
              "skills": [
                  "FDA/CDSCO Regulations",
                  "Quality Systems",
                  "Clinical Trials"
              ],
              "topResource": "Company internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹15L",
              "type": "government"
          },
          {
              "name": "VIT Vellore",
              "tier": 2,
              "city": "Vellore",
              "state": "Tamil Nadu",
              "fees_per_year": 200000,
              "cutoff_description": "VITEEE",
              "placement_median": "₹6L",
              "type": "private"
          },
          {
              "name": "CMC Vellore BME",
              "tier": 1,
              "city": "Vellore",
              "state": "Tamil Nadu",
              "fees_per_year": 80000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹8L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹30-80 LPA"
      }
  },
  environmental_engineer: {
      "id": "environmental_engineer",
      "name": "Environmental Engineer",
      "aliases": [
          "environment",
          "pollution control",
          "waste management",
          "sustainability",
          "green engineering",
          "climate"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "environment",
      "category": "Technical",
      "minMarks": 68,
      "minMarksStretch": 55,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 5,
      "description": "Solve environmental problems — water treatment, air quality, waste management, sustainability consulting.",
      "realityNote": "Very few pure environmental engineering jobs in India. Most work is in EIA consulting or government pollution boards. NGOs pay poorly. Best ROI is abroad.",
      "semantic_tags": [
          "environment",
          "pollution",
          "waste",
          "water treatment",
          "sustainability",
          "climate"
      ],
      "keywords_negative": [
          "interior",
          "fashion"
      ],
      "domains": [
          {
              "name": "Engineering Core",
              "skills": [
                  "Environmental Chemistry",
                  "Fluid Mechanics",
                  "Thermodynamics"
              ],
              "topResource": "B.Tech Environmental curriculum",
              "timeMonths": 24
          },
          {
              "name": "Specialization",
              "skills": [
                  "Water Treatment",
                  "Air Quality Modeling",
                  "EIA",
                  "Waste Management"
              ],
              "topResource": "NPTEL + EPA resources",
              "timeMonths": 12
          },
          {
              "name": "Professional",
              "skills": [
                  "Environmental Law",
                  "GIS",
                  "Remote Sensing",
                  "Sustainability Reporting"
              ],
              "topResource": "MOOC + Internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay (ESED)",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced Top 2000",
              "placement_median": "₹16L",
              "type": "government"
          },
          {
              "name": "IIT Madras",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹15L",
              "type": "government"
          },
          {
              "name": "NIT Trichy",
              "tier": 1,
              "city": "Tiruchirappalli",
              "state": "Tamil Nadu",
              "fees_per_year": 180000,
              "cutoff_description": "JEE Main Top 10000",
              "placement_median": "₹8L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹25-60 LPA"
      }
  },
  food_technologist: {
      "id": "food_technologist",
      "name": "Food Technologist",
      "aliases": [
          "food technology",
          "food science",
          "food processing",
          "fssai",
          "food safety",
          "dairy technology"
      ],
      "streams": [
          "PCM",
          "PCB"
      ],
      "careerType": "A",
      "domain": "science",
      "category": "Technical",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 4,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 3,
      "description": "Develop and improve food products, ensure safety standards, manage food processing operations.",
      "realityNote": "Food tech is underrated but stable. FSSAI and food safety compliance roles are growing. Best placements come from NIFTEM and CFTRI. Dairy tech has excellent govt job prospects.",
      "semantic_tags": [
          "food",
          "dairy",
          "nutrition",
          "processing",
          "fssai",
          "quality control"
      ],
      "keywords_negative": [
          "fashion",
          "footwear"
      ],
      "domains": [
          {
              "name": "Food Science Base",
              "skills": [
                  "Food Chemistry",
                  "Microbiology",
                  "Nutrition",
                  "Processing"
              ],
              "topResource": "B.Tech Food Tech curriculum",
              "timeMonths": 24
          },
          {
              "name": "Industry Skills",
              "skills": [
                  "HACCP",
                  "ISO 22000",
                  "Sensory Evaluation",
                  "Packaging"
              ],
              "topResource": "FSSAI + CFTRI courses",
              "timeMonths": 12
          },
          {
              "name": "Specialization",
              "skills": [
                  "Dairy Tech",
                  "Bakery",
                  "Beverage",
                  "Quality Assurance"
              ],
              "topResource": "Industry internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "NIFTEM Kundli",
              "tier": 1,
              "city": "Sonipat",
              "state": "Haryana",
              "fees_per_year": 100000,
              "cutoff_description": "JEE Main/Special exam",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "CFTRI Mysore",
              "tier": 1,
              "city": "Mysuru",
              "state": "Karnataka",
              "fees_per_year": 30000,
              "cutoff_description": "GATE/Entrance",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "ICT Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 80000,
              "cutoff_description": "MHT-CET/JEE",
              "placement_median": "₹7L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA"
      }
  },
  mining_engineer: {
      "id": "mining_engineer",
      "name": "Mining Engineer",
      "aliases": [
          "mining",
          "mines",
          "mineral extraction",
          "coal",
          "iron ore"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "engineering",
      "category": "Technical",
      "minMarks": 62,
      "minMarksStretch": 50,
      "timeline": 4,
      "globalScope": false,
      "examRequired": "JEE Main / GATE",
      "roiScore": 6,
      "stressScore": 8,
      "description": "Plan and manage mining operations for minerals, coal, and metals. Critical for India's resource economy.",
      "realityNote": "Mining engineering has excellent govt job prospects (Coal India, NMDC, ONGC) but postings are always in remote areas. Safety risks are real. Urban jobs are rare.",
      "semantic_tags": [
          "mining",
          "mineral",
          "excavation",
          "coal",
          "ore",
          "quarry"
      ],
      "keywords_negative": [
          "data mining",
          "bitcoin mining"
      ],
      "domains": [
          {
              "name": "Engineering Core",
              "skills": [
                  "Rock Mechanics",
                  "Mine Planning",
                  "Surveying",
                  "Geology"
              ],
              "topResource": "B.Tech Mining curriculum",
              "timeMonths": 24
          },
          {
              "name": "Specialization",
              "skills": [
                  "Blasting Technology",
                  "Mine Safety",
                  "Environmental Mining"
              ],
              "topResource": "ISM Dhanbad resources",
              "timeMonths": 12
          },
          {
              "name": "Professional",
              "skills": [
                  "DGMS Certifications",
                  "Mine Management",
                  "GIS/Remote Sensing"
              ],
              "topResource": "Industry training",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT ISM Dhanbad",
              "tier": 1,
              "city": "Dhanbad",
              "state": "Jharkhand",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced/Main",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "NIT Rourkela",
              "tier": 1,
              "city": "Rourkela",
              "state": "Odisha",
              "fees_per_year": 180000,
              "cutoff_description": "JEE Main",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "VNIT Nagpur",
              "tier": 1,
              "city": "Nagpur",
              "state": "Maharashtra",
              "fees_per_year": 180000,
              "cutoff_description": "JEE Main",
              "placement_median": "₹7L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹5-10 LPA",
          "mid": "₹12-30 LPA",
          "senior": "₹35-80 LPA"
      }
  },
  ips_officer: {
      "id": "ips_officer",
      "name": "IPS Officer",
      "aliases": [
          "ips",
          "police",
          "superintendent",
          "commissioner",
          "law enforcement",
          "indian police service"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "government",
      "category": "Government",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 5,
      "globalScope": false,
      "examRequired": "UPSC Civil Services",
      "roiScore": 8,
      "stressScore": 10,
      "description": "Lead police forces, maintain law and order, investigate crimes. One of India's most powerful positions.",
      "realityNote": "IPS selection rate is <0.05%. You compete with lakhs of graduates. Age limit 32 (General). Most selected candidates have 3-5 attempts. Physical fitness standards are strict.",
      "semantic_tags": [
          "police",
          "ips",
          "law enforcement",
          "crime",
          "security",
          "investigation"
      ],
      "keywords_negative": [
          "software",
          "coding"
      ],
      "domains": [
          {
              "name": "UPSC Foundation",
              "skills": [
                  "Polity",
                  "History",
                  "Geography",
                  "Ethics",
                  "Essay"
              ],
              "topResource": "Laxmikanth + Spectrum",
              "timeMonths": 12
          },
          {
              "name": "Optional + Mains",
              "skills": [
                  "Optional Subject",
                  "Answer Writing",
                  "Current Affairs"
              ],
              "topResource": "Vision IAS / Forum IAS",
              "timeMonths": 12
          },
          {
              "name": "Physical + Interview",
              "skills": [
                  "Physical Fitness",
                  "Personality Test",
                  "Medical Standards"
              ],
              "topResource": "LBSNAA training reference",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "LBSNAA Mussoorie",
              "tier": 1,
              "city": "Mussoorie",
              "state": "Uttarakhand",
              "fees_per_year": 0,
              "cutoff_description": "UPSC CSE Final Rank Top 200",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "SVPNPA Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 0,
              "cutoff_description": "IPS Allocation",
              "placement_median": "₹12L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹8-12 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹25-40 LPA (+ perks)"
      }
  },
  ifs_officer: {
      "id": "ifs_officer",
      "name": "IFS Officer (Foreign Service)",
      "aliases": [
          "ifs",
          "diplomat",
          "embassy",
          "foreign service",
          "diplomacy",
          "ambassador",
          "indian foreign service"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "government",
      "category": "Government",
      "minMarks": 78,
      "minMarksStretch": 65,
      "timeline": 5,
      "globalScope": true,
      "examRequired": "UPSC Civil Services",
      "roiScore": 7,
      "stressScore": 7,
      "description": "Represent India abroad, negotiate treaties, protect Indian citizens overseas. Elite diplomatic career.",
      "realityNote": "Even harder than IAS — only ~30 IFS officers selected per year. You'll spend most of your career abroad, which sounds glamorous but means constant relocation and family disruption.",
      "semantic_tags": [
          "diplomat",
          "diplomacy",
          "foreign affairs",
          "embassy",
          "consulate",
          "international relations"
      ],
      "keywords_negative": [
          "software",
          "forex"
      ],
      "domains": [
          {
              "name": "UPSC Foundation",
              "skills": [
                  "International Relations",
                  "Polity",
                  "History",
                  "Geography"
              ],
              "topResource": "Laxmikanth + Pavneet Singh IR",
              "timeMonths": 12
          },
          {
              "name": "Mains + Optional",
              "skills": [
                  "Answer Writing",
                  "Essay",
                  "Optional Subject"
              ],
              "topResource": "Vajiram / Forum IAS",
              "timeMonths": 12
          },
          {
              "name": "Interview Prep",
              "skills": [
                  "Current Affairs",
                  "Personality",
                  "Communication"
              ],
              "topResource": "Mock interviews",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "LBSNAA Mussoorie",
              "tier": 1,
              "city": "Mussoorie",
              "state": "Uttarakhand",
              "fees_per_year": 0,
              "cutoff_description": "UPSC CSE + IFS preference",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "FSI (Foreign Service Institute)",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 0,
              "cutoff_description": "IFS Allocation",
              "placement_median": "₹12L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹8-12 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹25-40 LPA (+ allowances)"
      }
  },
  rbi_grade_b: {
      "id": "rbi_grade_b",
      "name": "RBI Grade B Officer",
      "aliases": [
          "rbi",
          "reserve bank",
          "banking regulator",
          "monetary policy",
          "central banking"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "finance",
      "category": "Government",
      "minMarks": 78,
      "minMarksStretch": 65,
      "timeline": 4,
      "globalScope": false,
      "examRequired": "RBI Grade B Exam",
      "roiScore": 7,
      "stressScore": 6,
      "description": "Work at India's central bank — monetary policy, banking regulation, forex management, financial stability.",
      "realityNote": "RBI Grade B is one of the best govt exams for Commerce/Economics graduates. ~300 vacancies/year. Excellent pay (₹12L+ starting) and prestige. But the exam is very competitive.",
      "semantic_tags": [
          "rbi",
          "central bank",
          "monetary",
          "banking regulation",
          "forex reserve"
      ],
      "keywords_negative": [
          "retail banking",
          "bank clerk"
      ],
      "domains": [
          {
              "name": "Economics Foundation",
              "skills": [
                  "Macro/Micro Economics",
                  "Monetary Policy",
                  "Indian Economy"
              ],
              "topResource": "Ramesh Singh + EPW",
              "timeMonths": 8
          },
          {
              "name": "Exam Preparation",
              "skills": [
                  "Quantitative Aptitude",
                  "Reasoning",
                  "English",
                  "Finance"
              ],
              "topResource": "Oliveboard + Unacademy",
              "timeMonths": 10
          },
          {
              "name": "Interview",
              "skills": [
                  "Economic Analysis",
                  "Current Affairs",
                  "Banking Knowledge"
              ],
              "topResource": "Mock interviews",
              "timeMonths": 3
          }
      ],
      "topInstitutions": [
          {
              "name": "RBI Central Office",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 0,
              "cutoff_description": "RBI Grade B Exam",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "RBI Regional Office",
              "tier": 1,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 0,
              "cutoff_description": "RBI Grade B Exam",
              "placement_median": "₹12L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹12-15 LPA",
          "mid": "₹18-30 LPA",
          "senior": "₹35-55 LPA"
      }
  },
  corporate_lawyer: {
      "id": "corporate_lawyer",
      "name": "Corporate Lawyer",
      "aliases": [
          "corporate law",
          "m&a lawyer",
          "mergers acquisitions",
          "commercial law",
          "business lawyer",
          "transactional lawyer"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "law",
      "category": "Other",
      "minMarks": 80,
      "minMarksStretch": 65,
      "timeline": 5,
      "globalScope": true,
      "examRequired": "CLAT / LSAT",
      "roiScore": 8,
      "stressScore": 8,
      "description": "Handle mergers, acquisitions, contracts, and corporate compliance. Highest-paying legal specialization.",
      "realityNote": "Corporate law at a top firm (AZB, Khaitan, Cyril) pays ₹15-20L starting — but you'll work 80-100 hour weeks. Burnout is the #1 exit reason. Only NLU grads get these firms easily.",
      "semantic_tags": [
          "corporate law",
          "m&a",
          "merger",
          "acquisition",
          "contract",
          "compliance"
      ],
      "keywords_negative": [
          "criminal",
          "family law"
      ],
      "domains": [
          {
              "name": "Law Foundation",
              "skills": [
                  "Constitutional Law",
                  "Contract Law",
                  "Corporate Law",
                  "Legal Research"
              ],
              "topResource": "CLAT prep + NLU curriculum",
              "timeMonths": 36
          },
          {
              "name": "Corporate Specialization",
              "skills": [
                  "Securities Law",
                  "M&A",
                  "Due Diligence",
                  "Drafting"
              ],
              "topResource": "NLU electives + Internships",
              "timeMonths": 24
          },
          {
              "name": "Career Ops",
              "skills": [
                  "Moot Court",
                  "Internships at top firms",
                  "Legal Writing"
              ],
              "topResource": "Bar Council + firm internships",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "NLSIU Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 250000,
              "cutoff_description": "CLAT Top 50",
              "placement_median": "₹20L",
              "type": "private"
          },
          {
              "name": "NALSAR Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 200000,
              "cutoff_description": "CLAT Top 100",
              "placement_median": "₹18L",
              "type": "private"
          },
          {
              "name": "NLU Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 200000,
              "cutoff_description": "AILET Top 80",
              "placement_median": "₹18L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹10-20 LPA",
          "mid": "₹30-80 LPA",
          "senior": "₹1-5 Cr PA"
      }
  },
  cyber_lawyer: {
      "id": "cyber_lawyer",
      "name": "Cyber Lawyer",
      "aliases": [
          "cyber law",
          "it law",
          "data privacy",
          "information technology law",
          "digital law",
          "internet law",
          "gdpr"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "law",
      "category": "Other",
      "minMarks": 70,
      "minMarksStretch": 55,
      "timeline": 5,
      "globalScope": true,
      "examRequired": "CLAT / LSAT",
      "roiScore": 7,
      "stressScore": 5,
      "description": "Handle cybercrime cases, data privacy compliance, IT Act disputes. Fastest-growing legal specialization.",
      "realityNote": "Very new field in India — demand is growing fast but structured career paths barely exist. Most 'cyber lawyers' are general lawyers who handle some IT Act cases.",
      "semantic_tags": [
          "cyber law",
          "data privacy",
          "cybercrime",
          "it act",
          "digital",
          "gdpr",
          "data protection"
      ],
      "keywords_negative": [
          "cybersecurity engineer",
          "hacking"
      ],
      "domains": [
          {
              "name": "Law Foundation",
              "skills": [
                  "Constitutional Law",
                  "Criminal Law",
                  "IT Act 2000"
              ],
              "topResource": "LLB/BA-LLB curriculum",
              "timeMonths": 36
          },
          {
              "name": "Cyber Specialization",
              "skills": [
                  "Data Privacy Laws",
                  "Cybercrime Investigation",
                  "Digital Evidence"
              ],
              "topResource": "NLSIU/NALSAR courses + Cert programs",
              "timeMonths": 12
          },
          {
              "name": "Technical Skills",
              "skills": [
                  "Basic Networking",
                  "Digital Forensics Concepts",
                  "Blockchain Law"
              ],
              "topResource": "Online courses + Conferences",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "NLSIU Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 250000,
              "cutoff_description": "CLAT Top 50",
              "placement_median": "₹15L",
              "type": "private"
          },
          {
              "name": "NLU Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 200000,
              "cutoff_description": "AILET",
              "placement_median": "₹14L",
              "type": "government"
          },
          {
              "name": "Symbiosis Law School",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 350000,
              "cutoff_description": "SLAT exam",
              "placement_median": "₹8L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹5-10 LPA",
          "mid": "₹15-35 LPA",
          "senior": "₹40-100 LPA"
      }
  },
  management_consultant: {
      "id": "management_consultant",
      "name": "Management Consultant",
      "aliases": [
          "consulting",
          "mckinsey",
          "bcg",
          "bain",
          "strategy consultant",
          "business consultant",
          "mbb"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "business",
      "category": "Other",
      "minMarks": 82,
      "minMarksStretch": 70,
      "timeline": 6,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 9,
      "stressScore": 9,
      "description": "Advise companies on strategy, operations, and organizational transformation. Elite business career.",
      "realityNote": "MBB (McKinsey/BCG/Bain) recruit almost exclusively from IIMs and top global MBA programs. Without a top MBA, you'll likely end up at mid-tier firms with very different pay and prestige.",
      "semantic_tags": [
          "consulting",
          "strategy",
          "management",
          "business advisory",
          "mbb",
          "mckinsey",
          "bcg"
      ],
      "keywords_negative": [
          "counseling",
          "therapy"
      ],
      "domains": [
          {
              "name": "Academic Foundation",
              "skills": [
                  "Economics",
                  "Statistics",
                  "Business Strategy",
                  "Case Studies"
              ],
              "topResource": "UG degree + MBA prep",
              "timeMonths": 24
          },
          {
              "name": "MBA",
              "skills": [
                  "Strategy",
                  "Operations",
                  "Finance",
                  "Leadership"
              ],
              "topResource": "IIM/ISB/Top global MBA",
              "timeMonths": 24
          },
          {
              "name": "Consulting Skills",
              "skills": [
                  "Frameworks",
                  "Slide Writing",
                  "Client Management",
                  "Data Analysis"
              ],
              "topResource": "Case in Point + Victor Cheng",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIM Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 2500000,
              "cutoff_description": "CAT 99.9+",
              "placement_median": "₹35L",
              "type": "government"
          },
          {
              "name": "IIM Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 2500000,
              "cutoff_description": "CAT 99.5+",
              "placement_median": "₹32L",
              "type": "government"
          },
          {
              "name": "ISB Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 4200000,
              "cutoff_description": "GMAT 720+",
              "placement_median": "₹35L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹15-25 LPA",
          "mid": "₹40-80 LPA",
          "senior": "₹1-4 Cr PA"
      }
  },
  product_manager: {
      "id": "product_manager",
      "name": "Product Manager",
      "aliases": [
          "pm",
          "product management",
          "product owner",
          "apm",
          "product strategy"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 9,
      "stressScore": 7,
      "description": "Define what gets built, why, and for whom. Bridge between business, design, and engineering.",
      "realityNote": "PM is the most overhyped career in tech. Everyone wants to be a PM but there are 10x fewer PM roles than SWE roles. Most 'PM' titles at startups are glorified project managers.",
      "semantic_tags": [
          "product management",
          "product strategy",
          "roadmap",
          "user research",
          "agile"
      ],
      "keywords_negative": [
          "project manager",
          "production manager"
      ],
      "domains": [
          {
              "name": "Technical Foundation",
              "skills": [
                  "Basic Coding",
                  "System Design",
                  "Data Analysis",
                  "SQL"
              ],
              "topResource": "CS degree or bootcamp",
              "timeMonths": 12
          },
          {
              "name": "PM Skills",
              "skills": [
                  "User Research",
                  "PRDs",
                  "Wireframing",
                  "A/B Testing",
                  "Metrics"
              ],
              "topResource": "Lenny's Newsletter + Reforge",
              "timeMonths": 6
          },
          {
              "name": "Career Ops",
              "skills": [
                  "Portfolio Projects",
                  "APM Programs",
                  "Mock PMs"
              ],
              "topResource": "Exponent + Product School",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹20L",
              "type": "government"
          },
          {
              "name": "BITS Pilani",
              "tier": 1,
              "city": "Pilani",
              "state": "Rajasthan",
              "fees_per_year": 550000,
              "cutoff_description": "BITSAT",
              "placement_median": "₹14L",
              "type": "deemed"
          },
          {
              "name": "IIM Ahmedabad (MBA)",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 2500000,
              "cutoff_description": "CAT 99.9+",
              "placement_median": "₹35L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹12-25 LPA",
          "mid": "₹30-60 LPA",
          "senior": "₹70-200 LPA"
      }
  },
  news_anchor: {
      "id": "news_anchor",
      "name": "News Anchor / TV Journalist",
      "aliases": [
          "news anchor",
          "tv journalist",
          "news reader",
          "broadcast journalist",
          "television reporter",
          "newsroom"
      ],
      "streams": [
          " Any"
      ],
      "careerType": "C",
      "domain": "media",
      "category": "Creative",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 3,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 8,
      "description": "Present news on television, conduct interviews, and report on current events. High visibility career.",
      "realityNote": "Only a handful of anchors become famous and well-paid. Most TV journalists earn ₹3-8L and work grueling hours. Print is dying. Digital media pays even less but has more freedom.",
      "semantic_tags": [
          "news",
          "anchor",
          "broadcast",
          "television",
          "journalist",
          "newsroom"
      ],
      "keywords_negative": [
          "youtube",
          "blogger"
      ],
      "domains": [
          {
              "name": "Journalism Foundation",
              "skills": [
                  "News Writing",
                  "Reporting",
                  "Media Ethics",
                  "Current Affairs"
              ],
              "topResource": "IIMC/Symbiosis/AJK MCRC",
              "timeMonths": 24
          },
          {
              "name": "Broadcast Skills",
              "skills": [
                  "Camera Presence",
                  "Voice Modulation",
                  "Teleprompting",
                  "Live Reporting"
              ],
              "topResource": "Internships at news channels",
              "timeMonths": 12
          },
          {
              "name": "Digital Transition",
              "skills": [
                  "Social Media",
                  "Video Editing",
                  "Podcasting"
              ],
              "topResource": "Online platforms",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIMC Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 35000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "AJK MCRC Jamia",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 25000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹4L",
              "type": "government"
          },
          {
              "name": "Symbiosis (SIMC)",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 400000,
              "cutoff_description": "SET exam",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹3-8 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹30-100 LPA"
      }
  },
  advertising_professional: {
      "id": "advertising_professional",
      "name": "Advertising Professional",
      "aliases": [
          "advertising",
          "ad agency",
          "copywriter",
          "art director",
          "creative director",
          "advertising campaign",
          "ad copy"
      ],
      "streams": [
          " Any"
      ],
      "careerType": "C",
      "domain": "media",
      "category": "Creative",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 7,
      "description": "Create advertising campaigns — copywriting, art direction, strategy. Drive brand storytelling.",
      "realityNote": "Ad agencies are fun but underpay compared to tech. Junior copywriters earn ₹3-5L. The hours are brutal during campaign seasons. Most people burn out by 30 and move to brand-side roles.",
      "semantic_tags": [
          "advertising",
          "ad agency",
          "campaign",
          "copywriting",
          "creative",
          "brand"
      ],
      "keywords_negative": [
          "data",
          "software ad"
      ],
      "domains": [
          {
              "name": "Creative Foundation",
              "skills": [
                  "Copywriting",
                  "Visual Design",
                  "Brand Strategy",
                  "Consumer Psychology"
              ],
              "topResource": "Mass Comm degree",
              "timeMonths": 24
          },
          {
              "name": "Agency Skills",
              "skills": [
                  "Campaign Planning",
                  "Media Buying",
                  "Digital Marketing",
                  "Social Media"
              ],
              "topResource": "Internships at agencies",
              "timeMonths": 12
          },
          {
              "name": "Portfolio",
              "skills": [
                  "Award Entries",
                  "Client Presentations",
                  "Reel Building"
              ],
              "topResource": "Industry events",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "MICA Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 2200000,
              "cutoff_description": "MICAT exam",
              "placement_median": "₹18L",
              "type": "private"
          },
          {
              "name": "IIMC Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 35000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "Xavier's Mumbai (BMM)",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 80000,
              "cutoff_description": "XAT/Merit",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹30-80 LPA"
      }
  },
  technical_writer: {
      "id": "technical_writer",
      "name": "Technical Writer",
      "aliases": [
          "technical writing",
          "documentation",
          "api docs",
          "user manual",
          "content developer",
          "doc writer"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 3,
      "description": "Write documentation, API guides, user manuals for software products. Hidden gem career in tech.",
      "realityNote": "Technical writing is one of the most underrated careers in tech. It pays nearly as much as dev roles (₹8-20L) with much less stress. But most people don't know it exists as a career.",
      "semantic_tags": [
          "technical writing",
          "documentation",
          "api",
          "manual",
          "docs"
      ],
      "keywords_negative": [
          "creative writing",
          "fiction"
      ],
      "domains": [
          {
              "name": "Writing Foundation",
              "skills": [
                  "Grammar",
                  "Technical Communication",
                  "Information Architecture"
              ],
              "topResource": "Online courses + practice",
              "timeMonths": 6
          },
          {
              "name": "Tech Skills",
              "skills": [
                  "Markdown",
                  "Git",
                  "API Understanding",
                  "DITA/DocBook"
              ],
              "topResource": "Google Technical Writing course",
              "timeMonths": 4
          },
          {
              "name": "Tools & Practice",
              "skills": [
                  "Swagger/OpenAPI",
                  "Confluence",
                  "ReadTheDocs",
                  "Style Guides"
              ],
              "topResource": "Open source documentation",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay (any degree)",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹20L",
              "type": "government"
          },
          {
              "name": "BITS Pilani",
              "tier": 1,
              "city": "Pilani",
              "state": "Rajasthan",
              "fees_per_year": 550000,
              "cutoff_description": "BITSAT",
              "placement_median": "₹14L",
              "type": "deemed"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-22 LPA",
          "senior": "₹25-50 LPA"
      }
  },
  pr_specialist: {
      "id": "pr_specialist",
      "name": "Public Relations Specialist",
      "aliases": [
          "pr",
          "public relations",
          "communications",
          "press",
          "media relations",
          "corporate communications"
      ],
      "streams": [
          " Any"
      ],
      "careerType": "A",
      "domain": "media",
      "category": "Creative",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 6,
      "description": "Manage public image for organizations and individuals. Crisis communication, media relations, reputation management.",
      "realityNote": "PR is relationship-driven — who you know matters more than what you know. Agency PR is hectic with multiple clients. In-house PR is calmer but slower to grow. Digital PR is the future.",
      "semantic_tags": [
          "public relations",
          "pr",
          "communications",
          "media relations",
          "press",
          "reputation"
      ],
      "keywords_negative": [
          "programming",
          "development"
      ],
      "domains": [
          {
              "name": "Communication Foundation",
              "skills": [
                  "Writing",
                  "Media Relations",
                  "Crisis Communication",
                  "Public Speaking"
              ],
              "topResource": "Mass Comm degree",
              "timeMonths": 24
          },
          {
              "name": "PR Skills",
              "skills": [
                  "Press Releases",
                  "Event Management",
                  "Social Media",
                  "Influencer Relations"
              ],
              "topResource": "PR agency internships",
              "timeMonths": 12
          },
          {
              "name": "Digital PR",
              "skills": [
                  "SEO PR",
                  "Content Marketing",
                  "Analytics",
                  "Online Reputation"
              ],
              "topResource": "Online courses",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIMC Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 35000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "Symbiosis SIMC",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 400000,
              "cutoff_description": "SET",
              "placement_median": "₹6L",
              "type": "private"
          },
          {
              "name": "MICA Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 2200000,
              "cutoff_description": "MICAT",
              "placement_median": "₹15L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-20 LPA",
          "senior": "₹25-60 LPA"
      }
  },
  social_media_manager: {
      "id": "social_media_manager",
      "name": "Social Media Manager",
      "aliases": [
          "social media",
          "instagram manager",
          "content creator",
          "digital marketing",
          "community manager",
          "influencer marketing"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "media",
      "category": "Creative",
      "minMarks": 50,
      "minMarksStretch": 35,
      "timeline": 2,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 5,
      "description": "Manage brand presence on social platforms. Content strategy, community building, paid campaigns.",
      "realityNote": "Low barrier to entry means oversaturation. Most social media managers earn ₹3-6L. The ones who earn well (₹15L+) are data-driven strategists at large brands, not just 'posting content'.",
      "semantic_tags": [
          "social media",
          "instagram",
          "linkedin",
          "content",
          "community",
          "digital marketing"
      ],
      "keywords_negative": [
          "software",
          "engineering"
      ],
      "domains": [
          {
              "name": "Digital Marketing Foundation",
              "skills": [
                  "Content Strategy",
                  "SEO/SEM",
                  "Analytics",
                  "Copywriting"
              ],
              "topResource": "Google Digital Garage + HubSpot",
              "timeMonths": 6
          },
          {
              "name": "Platform Mastery",
              "skills": [
                  "Instagram",
                  "LinkedIn",
                  "YouTube",
                  "Paid Ads",
                  "Reels"
              ],
              "topResource": "Practice + brand internships",
              "timeMonths": 6
          },
          {
              "name": "Analytics & Strategy",
              "skills": [
                  "Google Analytics",
                  "Meta Business Suite",
                  "A/B Testing",
                  "ROI Tracking"
              ],
              "topResource": "Coursera/Udemy courses",
              "timeMonths": 4
          }
      ],
      "topInstitutions": [
          {
              "name": "MICA Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 2200000,
              "cutoff_description": "MICAT",
              "placement_median": "₹15L",
              "type": "private"
          },
          {
              "name": "IIMC Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 35000,
              "cutoff_description": "Entrance",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA"
      }
  },
  professor: {
      "id": "professor",
      "name": "University Professor",
      "aliases": [
          "professor",
          "academic",
          "researcher",
          "faculty",
          "lecturer",
          "phd",
          "academia",
          "teaching"
      ],
      "streams": [
          " Any"
      ],
      "careerType": "A",
      "domain": "education",
      "category": "Research",
      "minMarks": 80,
      "minMarksStretch": 65,
      "timeline": 8,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 5,
      "description": "Teach at universities, conduct research, publish papers. Intellectual freedom but slow career growth.",
      "realityNote": "PhD takes 4-6 years. Then postdoc 2-3 years. Then assistant professor at 30+. India has very few tenure-track positions. NET/SET is mandatory. Pay at state universities is poor (₹3-5L for adhoc).",
      "semantic_tags": [
          "professor",
          "academic",
          "research",
          "university",
          "teaching",
          "faculty",
          "phd"
      ],
      "keywords_negative": [
          "coaching",
          "tutoring"
      ],
      "domains": [
          {
              "name": "Academic Foundation",
              "skills": [
                  "Deep subject mastery",
                  "Research Methodology",
                  "Academic Writing"
              ],
              "topResource": "UG + PG in chosen field",
              "timeMonths": 36
          },
          {
              "name": "PhD & Research",
              "skills": [
                  "Thesis",
                  "Publications",
                  "Conferences",
                  "Grant Writing"
              ],
              "topResource": "PhD program",
              "timeMonths": 48
          },
          {
              "name": "Teaching",
              "skills": [
                  "Pedagogy",
                  "Curriculum Design",
                  "Student Mentoring"
              ],
              "topResource": "UGC NET + teaching experience",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "JNU Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 20000,
              "cutoff_description": "Entrance + PhD admission",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "IISc Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 15000,
              "cutoff_description": "GATE/NET + Interview",
              "placement_median": "₹10L",
              "type": "government"
          },
          {
              "name": "Delhi University",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 25000,
              "cutoff_description": "UGC NET + Interview",
              "placement_median": "₹8L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-20 LPA",
          "senior": "₹18-35 LPA"
      }
  },
  school_teacher: {
      "id": "school_teacher",
      "name": "School Teacher",
      "aliases": [
          "teacher",
          "school teacher",
          "teaching",
          "educator",
          "tutor",
          "cbse teacher",
          "icse teacher"
      ],
      "streams": [
          " Any"
      ],
      "careerType": "A",
      "domain": "education",
      "category": "Other",
      "minMarks": 55,
      "minMarksStretch": 40,
      "timeline": 4,
      "globalScope": false,
      "examRequired": "CTET / State TET",
      "roiScore": 4,
      "stressScore": 5,
      "description": "Teach students at school level. Foundational role in shaping society. Stable but underpaid career.",
      "realityNote": "Government school teachers have excellent job security and decent pay (₹4-8L). Private school teachers are exploited — ₹15-25K/month is common. Coaching teachers can earn ₹20L+ but it's hustle.",
      "semantic_tags": [
          "teacher",
          "teaching",
          "school",
          "education",
          "cbse",
          "icse",
          "pedagogy"
      ],
      "keywords_negative": [
          "tech",
          "software"
      ],
      "domains": [
          {
              "name": "Subject Mastery",
              "skills": [
                  "Deep knowledge in chosen subject",
                  "Curriculum understanding"
              ],
              "topResource": "B.Ed + subject degree",
              "timeMonths": 24
          },
          {
              "name": "Teaching Skills",
              "skills": [
                  "Pedagogy",
                  "Classroom Management",
                  "Assessment Design"
              ],
              "topResource": "B.Ed program",
              "timeMonths": 24
          },
          {
              "name": "Certification",
              "skills": [
                  "CTET",
                  "State TET",
                  "NET (for higher secondary)"
              ],
              "topResource": "Exam preparation",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "NCERT/RIE",
              "tier": 1,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 15000,
              "cutoff_description": "B.Ed entrance",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "Jamia Millia B.Ed",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 20000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹6L",
              "type": "government"
          },
          {
              "name": "Azim Premji University",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 200000,
              "cutoff_description": "Entrance + Interview",
              "placement_median": "₹5L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹5-12 LPA",
          "senior": "₹12-25 LPA"
      }
  },
  edtech_professional: {
      "id": "edtech_professional",
      "name": "EdTech Professional",
      "aliases": [
          "edtech",
          "education technology",
          "online education",
          "elearning",
          "byju",
          "unacademy",
          "learning platform"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 6,
      "description": "Build and manage online education platforms, create digital learning experiences, develop ed-tech products.",
      "realityNote": "EdTech bubble burst in 2023-24 (Byju's crash). The sector is recovering but hiring is cautious. Content creation roles are low-paying. Product/engineering roles pay well. Be cautious.",
      "semantic_tags": [
          "edtech",
          "education technology",
          "online learning",
          "elearning",
          "lms"
      ],
      "keywords_negative": [
          "electrical",
          "embedded"
      ],
      "domains": [
          {
              "name": "Tech/Education Foundation",
              "skills": [
                  "Web Development",
                  "Instructional Design",
                  "Learning Science"
              ],
              "topResource": "CS/Education degree",
              "timeMonths": 24
          },
          {
              "name": "EdTech Skills",
              "skills": [
                  "LMS Platforms",
                  "Video Production",
                  "Gamification",
                  "Analytics"
              ],
              "topResource": "Industry experience",
              "timeMonths": 12
          },
          {
              "name": "Growth",
              "skills": [
                  "Product Management",
                  "AI in Education",
                  "Adaptive Learning"
              ],
              "topResource": "Conferences + courses",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "IIM Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 2500000,
              "cutoff_description": "CAT 99.5+",
              "placement_median": "₹30L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹5-12 LPA",
          "mid": "₹15-30 LPA",
          "senior": "₹35-80 LPA"
      }
  },
  prompt_engineer: {
      "id": "prompt_engineer",
      "name": "AI Prompt Engineer",
      "aliases": [
          "prompt engineer",
          "prompt engineering",
          "llm",
          "ai prompt",
          "generative ai",
          "chatgpt",
          "gemini engineer"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 70,
      "minMarksStretch": 55,
      "timeline": 2,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 8,
      "stressScore": 4,
      "description": "Design and optimize prompts for large language models. Newest career in AI — emerged 2023.",
      "realityNote": "Prompt engineering as a standalone career is already dying. It's becoming a skill, not a job. Companies want AI engineers who can also prompt, not prompt-only specialists. Learn to code.",
      "semantic_tags": [
          "prompt",
          "llm",
          "generative ai",
          "chatgpt",
          "gemini",
          "ai",
          "large language model"
      ],
      "keywords_negative": [
          "civil",
          "mechanical"
      ],
      "domains": [
          {
              "name": "AI Foundation",
              "skills": [
                  "Machine Learning basics",
                  "NLP",
                  "Transformer Architecture"
              ],
              "topResource": "Fast.ai + Andrej Karpathy",
              "timeMonths": 6
          },
          {
              "name": "Prompt Engineering",
              "skills": [
                  "Few-shot",
                  "Chain-of-thought",
                  "RAG",
                  "Fine-tuning concepts"
              ],
              "topResource": "OpenAI docs + DeepLearning.ai",
              "timeMonths": 3
          },
          {
              "name": "Applied AI",
              "skills": [
                  "API Integration",
                  "LangChain",
                  "Vector DBs",
                  "Evaluation"
              ],
              "topResource": "Projects + GitHub portfolio",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹20L",
              "type": "government"
          },
          {
              "name": "IIIT Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 300000,
              "cutoff_description": "UGEE",
              "placement_median": "₹16L",
              "type": "deemed"
          }
      ],
      "salaryRange": {
          "entry": "₹8-15 LPA",
          "mid": "₹18-40 LPA",
          "senior": "₹50-120 LPA"
      }
  },
  cybersecurity_analyst: {
      "id": "cybersecurity_analyst",
      "name": "Cybersecurity Analyst",
      "aliases": [
          "cybersecurity",
          "security analyst",
          "ethical hacker",
          "infosec",
          "penetration testing",
          "soc analyst",
          "information security"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 70,
      "minMarksStretch": 55,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 8,
      "stressScore": 7,
      "description": "Protect organizations from cyber threats. Penetration testing, incident response, security architecture.",
      "realityNote": "Cybersecurity has a massive talent shortage globally (3.5M unfilled jobs). India is a major hub. But entry-level roles require strong networking/OS fundamentals. Certifications (CEH, OSCP) matter more than degrees.",
      "semantic_tags": [
          "cybersecurity",
          "security",
          "hacking",
          "penetration",
          "firewall",
          "infosec",
          "soc"
      ],
      "keywords_negative": [
          "cyber law",
          "insurance"
      ],
      "domains": [
          {
              "name": "CS Foundation",
              "skills": [
                  "Networking",
                  "Operating Systems",
                  "Linux",
                  "Scripting"
              ],
              "topResource": "B.Tech CS + TryHackMe",
              "timeMonths": 18
          },
          {
              "name": "Security Core",
              "skills": [
                  "Ethical Hacking",
                  "OWASP",
                  "Cryptography",
                  "Incident Response"
              ],
              "topResource": "CEH + PortSwigger labs",
              "timeMonths": 12
          },
          {
              "name": "Advanced",
              "skills": [
                  "Cloud Security",
                  "OSCP",
                  "Threat Hunting",
                  "Malware Analysis"
              ],
              "topResource": "HackTheBox + SANS courses",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Kanpur (C3i)",
              "tier": 1,
              "city": "Kanpur",
              "state": "Uttar Pradesh",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "IIIT Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 350000,
              "cutoff_description": "JAC entrance",
              "placement_median": "₹14L",
              "type": "government"
          },
          {
              "name": "Amrita University",
              "tier": 2,
              "city": "Coimbatore",
              "state": "Tamil Nadu",
              "fees_per_year": 250000,
              "cutoff_description": "AEEE",
              "placement_median": "₹8L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹5-10 LPA",
          "mid": "₹12-30 LPA",
          "senior": "₹35-80 LPA"
      }
  },
  cloud_architect: {
      "id": "cloud_architect",
      "name": "Cloud Architect",
      "aliases": [
          "cloud",
          "aws",
          "azure",
          "gcp",
          "cloud computing",
          "devops",
          "cloud engineer",
          "infrastructure"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 72,
      "minMarksStretch": 58,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 9,
      "stressScore": 6,
      "description": "Design and manage cloud infrastructure. AWS, Azure, GCP. One of the highest-paying tech specializations.",
      "realityNote": "Cloud roles pay extremely well (₹20-60L mid-career) but require deep infrastructure knowledge. Certifications (AWS SA, Azure Solutions) are almost mandatory. Competition is intense.",
      "semantic_tags": [
          "cloud",
          "aws",
          "azure",
          "gcp",
          "infrastructure",
          "devops",
          "kubernetes"
      ],
      "keywords_negative": [
          "weather",
          "meteorology"
      ],
      "domains": [
          {
              "name": "CS Foundation",
              "skills": [
                  "Linux",
                  "Networking",
                  "Programming",
                  "Databases"
              ],
              "topResource": "B.Tech CS curriculum",
              "timeMonths": 24
          },
          {
              "name": "Cloud Core",
              "skills": [
                  "AWS/Azure/GCP",
                  "Containers",
                  "Kubernetes",
                  "Terraform",
                  "CI/CD"
              ],
              "topResource": "Cloud provider training + A Cloud Guru",
              "timeMonths": 12
          },
          {
              "name": "Architecture",
              "skills": [
                  "Microservices",
                  "Serverless",
                  "Security",
                  "Cost Optimization"
              ],
              "topResource": "AWS SA cert + real projects",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹22L",
              "type": "government"
          },
          {
              "name": "NIT Trichy",
              "tier": 1,
              "city": "Tiruchirappalli",
              "state": "Tamil Nadu",
              "fees_per_year": 180000,
              "cutoff_description": "JEE Main",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "BITS Pilani",
              "tier": 1,
              "city": "Pilani",
              "state": "Rajasthan",
              "fees_per_year": 550000,
              "cutoff_description": "BITSAT",
              "placement_median": "₹14L",
              "type": "deemed"
          }
      ],
      "salaryRange": {
          "entry": "₹8-15 LPA",
          "mid": "₹20-50 LPA",
          "senior": "₹60-150 LPA"
      }
  },
  blockchain_developer: {
      "id": "blockchain_developer",
      "name": "Blockchain Developer",
      "aliases": [
          "blockchain",
          "web3",
          "smart contracts",
          "solidity",
          "ethereum",
          "crypto developer",
          "defi"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 72,
      "minMarksStretch": 58,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 8,
      "stressScore": 6,
      "description": "Build decentralized applications, smart contracts, and blockchain protocols. Web3 specialization.",
      "realityNote": "Blockchain hype has cooled significantly since 2022. Real jobs exist but are fewer than the hype suggests. Most 'blockchain companies' in India are small and unstable. Learn core CS first.",
      "semantic_tags": [
          "blockchain",
          "smart contract",
          "web3",
          "defi",
          "ethereum",
          "solidity",
          "decentralized"
      ],
      "keywords_negative": [
          "chain supply",
          "logistics chain"
      ],
      "domains": [
          {
              "name": "CS Foundation",
              "skills": [
                  "DSA",
                  "Cryptography",
                  "Distributed Systems",
                  "Networking"
              ],
              "topResource": "B.Tech CS",
              "timeMonths": 24
          },
          {
              "name": "Blockchain Core",
              "skills": [
                  "Solidity",
                  "EVM",
                  "Smart Contract Security",
                  "DeFi Protocols"
              ],
              "topResource": "CryptoZombies + Alchemy University",
              "timeMonths": 6
          },
          {
              "name": "Full Stack Web3",
              "skills": [
                  "React/Next.js",
                  "Ethers.js",
                  "IPFS",
                  "Layer 2s"
              ],
              "topResource": "Buildspace + Hackathons",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Kharagpur",
              "tier": 1,
              "city": "Kharagpur",
              "state": "West Bengal",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "IIIT Hyderabad",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 300000,
              "cutoff_description": "UGEE",
              "placement_median": "₹16L",
              "type": "deemed"
          }
      ],
      "salaryRange": {
          "entry": "₹8-18 LPA",
          "mid": "₹20-50 LPA",
          "senior": "₹50-200 LPA"
      }
  },
  xr_designer: {
      "id": "xr_designer",
      "name": "XR Designer (AR/VR)",
      "aliases": [
          "vr",
          "ar",
          "mixed reality",
          "virtual reality",
          "augmented reality",
          "metaverse",
          "xr",
          "spatial computing"
      ],
      "streams": [
          "PCM",
          "Arts"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Creative",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 5,
      "description": "Design immersive experiences in AR/VR/MR. Apple Vision Pro and Meta Quest are driving demand.",
      "realityNote": "XR is still niche in India — very few full-time XR roles. Most work is project-based or at global companies remotely. The tech is maturing but mass adoption hasn't happened yet.",
      "semantic_tags": [
          "virtual reality",
          "augmented reality",
          "mixed reality",
          "xr",
          "spatial",
          "immersive",
          "metaverse"
      ],
      "keywords_negative": [
          "interior design",
          "graphic design"
      ],
      "domains": [
          {
              "name": "3D Foundation",
              "skills": [
                  "3D Modeling",
                  "Unity/Unreal",
                  "C#/C++",
                  "Spatial Design"
              ],
              "topResource": "Game dev or design degree",
              "timeMonths": 24
          },
          {
              "name": "XR Development",
              "skills": [
                  "ARKit/ARCore",
                  "WebXR",
                  "Shader Programming",
                  "UX for VR"
              ],
              "topResource": "Unity XR courses + Meta docs",
              "timeMonths": 12
          },
          {
              "name": "Portfolio",
              "skills": [
                  "XR Projects",
                  "Hackathons",
                  "App Store Releases"
              ],
              "topResource": "Personal projects",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Bombay (IDC)",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "CEED + JEE",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "NID Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 250000,
              "cutoff_description": "NID DAT",
              "placement_median": "₹12L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹5-12 LPA",
          "mid": "₹15-35 LPA",
          "senior": "₹40-100 LPA"
      }
  },
  iot_engineer: {
      "id": "iot_engineer",
      "name": "IoT Engineer",
      "aliases": [
          "iot",
          "internet of things",
          "embedded iot",
          "smart devices",
          "connected devices",
          "sensor networks"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 68,
      "minMarksStretch": 55,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 5,
      "description": "Build connected device ecosystems — smart homes, industrial IoT, wearables, sensor networks.",
      "realityNote": "IoT in India is mostly in industrial applications (manufacturing, agriculture). Consumer IoT startups have high failure rates. Core embedded + cloud skills are needed — it's not just 'connecting things'.",
      "semantic_tags": [
          "iot",
          "internet of things",
          "sensor",
          "connected",
          "smart device",
          "embedded",
          "wearable"
      ],
      "keywords_negative": [
          "software only",
          "web development"
      ],
      "domains": [
          {
              "name": "Electronics Foundation",
              "skills": [
                  "Circuits",
                  "Microcontrollers",
                  "Sensors",
                  "Embedded C"
              ],
              "topResource": "B.Tech ECE/EEE",
              "timeMonths": 24
          },
          {
              "name": "IoT Stack",
              "skills": [
                  "MQTT",
                  "LoRa",
                  "Edge Computing",
                  "Cloud Integration",
                  "ESP32/Arduino"
              ],
              "topResource": "Coursera IoT + Hackster.io",
              "timeMonths": 12
          },
          {
              "name": "Data & Security",
              "skills": [
                  "Time Series Data",
                  "IoT Security",
                  "ML on Edge",
                  "Dashboard Design"
              ],
              "topResource": "Projects + Internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Madras",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "BITS Pilani",
              "tier": 1,
              "city": "Pilani",
              "state": "Rajasthan",
              "fees_per_year": 550000,
              "cutoff_description": "BITSAT",
              "placement_median": "₹14L",
              "type": "deemed"
          },
          {
              "name": "MIT Manipal",
              "tier": 2,
              "city": "Manipal",
              "state": "Karnataka",
              "fees_per_year": 400000,
              "cutoff_description": "MET",
              "placement_median": "₹8L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹5-10 LPA",
          "mid": "₹12-28 LPA",
          "senior": "₹30-70 LPA"
      }
  },
  forensic_accountant: {
      "id": "forensic_accountant",
      "name": "Forensic Accountant",
      "aliases": [
          "forensic accounting",
          "fraud investigator",
          "financial crime",
          "fraud examiner",
          "cfe",
          "anti-money laundering"
      ],
      "streams": [
          "Commerce"
      ],
      "careerType": "B",
      "domain": "finance",
      "category": "Financial",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 5,
      "globalScope": false,
      "examRequired": "CA/CPA + CFE",
      "roiScore": 7,
      "stressScore": 6,
      "description": "Investigate financial fraud, embezzlement, money laundering. Combines accounting with detective work.",
      "realityNote": "Forensic accounting is niche but growing fast (corporate fraud, cyber fraud, GST fraud). Big 4 firms hire forensic teams. But you need CA + additional certifications (CFE). Pure investigators are rare in India.",
      "semantic_tags": [
          "forensic accounting",
          "fraud",
          "financial crime",
          "investigation",
          "audit",
          "aml"
      ],
      "keywords_negative": [
          "forensic science",
          "crime scene"
      ],
      "domains": [
          {
              "name": "Accounting Foundation",
              "skills": [
                  "Financial Accounting",
                  "Auditing",
                  "Taxation",
                  "Company Law"
              ],
              "topResource": "CA Foundation + Inter",
              "timeMonths": 36
          },
          {
              "name": "Forensic Skills",
              "skills": [
                  "Fraud Detection",
                  "Digital Forensics",
                  "AML/KYC",
                  "Data Analytics"
              ],
              "topResource": "CFE + ACFE courses",
              "timeMonths": 12
          },
          {
              "name": "Legal Knowledge",
              "skills": [
                  "PMLA",
                  "IT Act",
                  "Companies Act",
                  "Expert Witness Testimony"
              ],
              "topResource": "Law courses + Internships",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "ICAI (CA Program)",
              "tier": 1,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 50000,
              "cutoff_description": "CA Foundation Exam",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "IIM Bangalore (Forensic Audit PG)",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 2500000,
              "cutoff_description": "CAT",
              "placement_median": "₹30L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹5-10 LPA",
          "mid": "₹15-35 LPA",
          "senior": "₹40-100 LPA"
      }
  },
  meteorologist: {
      "id": "meteorologist",
      "name": "Meteorologist",
      "aliases": [
          "meteorology",
          "weather",
          "climate science",
          "weather forecasting",
          "atmospheric science",
          "imd"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "A",
      "domain": "science",
      "category": "Research",
      "minMarks": 72,
      "minMarksStretch": 58,
      "timeline": 5,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 4,
      "description": "Study and predict weather patterns, climate change, atmospheric phenomena. Critical for agriculture and disaster management.",
      "realityNote": "Very few meteorologist positions in India — mostly at IMD, ISRO, or universities. Private sector weather companies are emerging but small. PhD is almost mandatory for research roles.",
      "semantic_tags": [
          "meteorology",
          "weather",
          "climate",
          "atmosphere",
          "forecasting",
          "imd"
      ],
      "keywords_negative": [
          "meter",
          "measurement"
      ],
      "domains": [
          {
              "name": "Physics/Math Foundation",
              "skills": [
                  "Atmospheric Physics",
                  "Fluid Dynamics",
                  "Statistics",
                  "Programming"
              ],
              "topResource": "B.Sc Physics/Atmospheric Science",
              "timeMonths": 24
          },
          {
              "name": "Meteorology Specialization",
              "skills": [
                  "Numerical Weather Prediction",
                  "Remote Sensing",
                  "Climate Modeling"
              ],
              "topResource": "M.Sc Atmospheric Science",
              "timeMonths": 24
          },
          {
              "name": "Research/Career",
              "skills": [
                  "FORTRAN/Python",
                  "GIS",
                  "Satellite Data",
                  "Publication"
              ],
              "topResource": "IMD/IITM internship",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Delhi (CAS)",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced/GATE",
              "placement_median": "₹12L",
              "type": "government"
          },
          {
              "name": "IITM Pune",
              "tier": 1,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 20000,
              "cutoff_description": "GATE/NET",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "Andhra University",
              "tier": 1,
              "city": "Visakhapatnam",
              "state": "Andhra Pradesh",
              "fees_per_year": 30000,
              "cutoff_description": "Entrance",
              "placement_median": "₹4L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-20 LPA",
          "senior": "₹18-35 LPA"
      }
  },
  archaeologist: {
      "id": "archaeologist",
      "name": "Archaeologist",
      "aliases": [
          "archaeology",
          "excavation",
          "heritage",
          "ancient history",
          "antiquities",
          "historical sites"
      ],
      "streams": [
          "Arts"
      ],
      "careerType": "A",
      "domain": "humanities",
      "category": "Research",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 6,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 3,
      "stressScore": 4,
      "description": "Excavate and study ancient civilizations, artifacts, and historical sites. Preserve cultural heritage.",
      "realityNote": "Archaeology in India has extremely limited career options — ASI (Archaeological Survey of India) or universities. Pay is low (₹3-6L government). Field work is physically demanding. Passion-driven career.",
      "semantic_tags": [
          "archaeology",
          "excavation",
          "ancient",
          "heritage",
          "artifact",
          "civilization",
          "history"
      ],
      "keywords_negative": [
          "architecture",
          "software architect"
      ],
      "domains": [
          {
              "name": "History Foundation",
              "skills": [
                  "Ancient History",
                  "Art History",
                  "Anthropology",
                  "Epigraphy"
              ],
              "topResource": "BA History/Archaeology",
              "timeMonths": 24
          },
          {
              "name": "Fieldwork Skills",
              "skills": [
                  "Excavation Techniques",
                  "Dating Methods",
                  "GIS",
                  "Documentation"
              ],
              "topResource": "MA Archaeology + Field schools",
              "timeMonths": 24
          },
          {
              "name": "Research",
              "skills": [
                  "Publication",
                  "Museum Curation",
                  "Heritage Conservation",
                  "Grants"
              ],
              "topResource": "PhD + ASI internship",
              "timeMonths": 24
          }
      ],
      "topInstitutions": [
          {
              "name": "Deccan College Pune",
              "tier": 1,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 15000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹4L",
              "type": "government"
          },
          {
              "name": "JNU (SLS)",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 20000,
              "cutoff_description": "JNUEE",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "BHU Archaeology",
              "tier": 1,
              "city": "Varanasi",
              "state": "Uttar Pradesh",
              "fees_per_year": 10000,
              "cutoff_description": "BHU UET",
              "placement_median": "₹4L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-15 LPA",
          "senior": "₹15-25 LPA"
      }
  },
  oceanographer: {
      "id": "oceanographer",
      "name": "Oceanographer",
      "aliases": [
          "ocean",
          "marine science",
          "oceanography",
          "sea research",
          "coastal",
          "ocean exploration"
      ],
      "streams": [
          "PCM",
          "PCB"
      ],
      "careerType": "A",
      "domain": "science",
      "category": "Research",
      "minMarks": 72,
      "minMarksStretch": 58,
      "timeline": 6,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 4,
      "stressScore": 4,
      "description": "Study oceans — currents, marine ecosystems, underwater geology, climate impact. Critical for coastal India.",
      "realityNote": "Very niche field — maybe 200-300 active oceanographers in India. NIO Goa, NIOT Chennai, INCOIS Hyderabad are the main employers. PhD mandatory for research. Field work involves long ship voyages.",
      "semantic_tags": [
          "ocean",
          "marine",
          "oceanography",
          "coastal",
          "underwater",
          "sea"
      ],
      "keywords_negative": [
          "marine engineer",
          "shipping"
      ],
      "domains": [
          {
              "name": "Science Foundation",
              "skills": [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Math",
                  "Programming"
              ],
              "topResource": "B.Sc relevant field",
              "timeMonths": 24
          },
          {
              "name": "Oceanography",
              "skills": [
                  "Physical Oceanography",
                  "Chemical Oceanography",
                  "Biological Oceanography"
              ],
              "topResource": "M.Sc/M.Tech Oceanography",
              "timeMonths": 24
          },
          {
              "name": "Research",
              "skills": [
                  "Data Analysis",
                  "Ship-based Research",
                  "Remote Sensing",
                  "Climate Models"
              ],
              "topResource": "PhD + NIO/NIOT",
              "timeMonths": 36
          }
      ],
      "topInstitutions": [
          {
              "name": "NIO Goa",
              "tier": 1,
              "city": "Goa",
              "state": "Goa",
              "fees_per_year": 20000,
              "cutoff_description": "GATE/NET",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "NIOT Chennai",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 25000,
              "cutoff_description": "GATE",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "Cochin University (CUSAT)",
              "tier": 1,
              "city": "Kochi",
              "state": "Kerala",
              "fees_per_year": 30000,
              "cutoff_description": "CUSAT CAT",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-20 LPA",
          "senior": "₹18-35 LPA"
      }
  },
  museum_curator: {
      "id": "museum_curator",
      "name": "Museum Curator",
      "aliases": [
          "curator",
          "museum",
          "art gallery",
          "exhibition",
          "heritage conservation",
          "museology"
      ],
      "streams": [
          "Arts"
      ],
      "careerType": "A",
      "domain": "humanities",
      "category": "Creative",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 5,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 3,
      "stressScore": 3,
      "description": "Manage museum collections, plan exhibitions, preserve artifacts. Bridge between art, history, and public education.",
      "realityNote": "Museum jobs in India are scarce and poorly paid. National Museum Institute is the only premier institution. Most curators at government museums earn ₹4-6L. Private galleries in Delhi/Mumbai pay better.",
      "semantic_tags": [
          "museum",
          "curator",
          "exhibition",
          "gallery",
          "heritage",
          "conservation",
          "artifact"
      ],
      "keywords_negative": [
          "music",
          "musician"
      ],
      "domains": [
          {
              "name": "Arts/History Foundation",
              "skills": [
                  "Art History",
                  "Cultural Studies",
                  "Anthropology",
                  "Conservation"
              ],
              "topResource": "BA History/Fine Arts",
              "timeMonths": 24
          },
          {
              "name": "Museology",
              "skills": [
                  "Collection Management",
                  "Exhibition Design",
                  "Conservation Science"
              ],
              "topResource": "MA Museology/NMI",
              "timeMonths": 24
          },
          {
              "name": "Professional",
              "skills": [
                  "Grant Writing",
                  "Public Programming",
                  "Digital Museums",
                  "Cataloging"
              ],
              "topResource": "Museum internships",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "National Museum Institute",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 15000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "MS University Baroda",
              "tier": 1,
              "city": "Vadodara",
              "state": "Gujarat",
              "fees_per_year": 10000,
              "cutoff_description": "Entrance",
              "placement_median": "₹3L",
              "type": "government"
          },
          {
              "name": "JNU (Arts & Aesthetics)",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 20000,
              "cutoff_description": "JNUEE",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-5 LPA",
          "mid": "₹6-12 LPA",
          "senior": "₹15-25 LPA"
      }
  },
  defence_officer: {
      "id": "defence_officer",
      "name": "Defence Officer (Army/Navy/Air Force)",
      "aliases": [
          "army",
          "navy",
          "air force",
          "defence",
          "military",
          "nda",
          "cds",
          "indian army",
          "officer"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "B",
      "domain": "government",
      "category": "Government",
      "minMarks": 70,
      "minMarksStretch": 55,
      "timeline": 5,
      "globalScope": false,
      "examRequired": "NDA / CDS / AFCAT",
      "roiScore": 7,
      "stressScore": 10,
      "description": "Lead military operations, defend the nation. Prestigious career with unmatched discipline and adventure.",
      "realityNote": "NDA entry is at 16.5-19.5 years after 12th. CDS after graduation. Physical fitness is non-negotiable. You'll be posted in remote areas, conflict zones. Family life is disrupted. But the perks (housing, pension, canteen) are excellent.",
      "semantic_tags": [
          "army",
          "navy",
          "air force",
          "military",
          "defence",
          "officer",
          "nda",
          "cds"
      ],
      "keywords_negative": [
          "software",
          "civil"
      ],
      "domains": [
          {
              "name": "Exam Preparation",
              "skills": [
                  "Mathematics",
                  "General Knowledge",
                  "English",
                  "Reasoning"
              ],
              "topResource": "NDA/CDS coaching",
              "timeMonths": 12
          },
          {
              "name": "Training",
              "skills": [
                  "Physical Fitness",
                  "Military Tactics",
                  "Leadership",
                  "Weapons"
              ],
              "topResource": "IMA/OTA/AFA/INA",
              "timeMonths": 12
          },
          {
              "name": "Service",
              "skills": [
                  "Specialized Training",
                  "Staff College",
                  "Higher Command"
              ],
              "topResource": "Military institutions",
              "timeMonths": 24
          }
      ],
      "topInstitutions": [
          {
              "name": "IMA Dehradun",
              "tier": 1,
              "city": "Dehradun",
              "state": "Uttarakhand",
              "fees_per_year": 0,
              "cutoff_description": "NDA/CDS/Direct Entry",
              "placement_median": "₹10L",
              "type": "government"
          },
          {
              "name": "NDA Khadakwasla",
              "tier": 1,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 0,
              "cutoff_description": "NDA Exam + SSB",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "AFA Dundigal",
              "tier": 1,
              "city": "Hyderabad",
              "state": "Telangana",
              "fees_per_year": 0,
              "cutoff_description": "NDA/CDS/AFCAT + SSB",
              "placement_median": "₹10L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹8-12 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹25-40 LPA (+ perks)"
      }
  },
  merchant_navy: {
      "id": "merchant_navy",
      "name": "Merchant Navy Officer",
      "aliases": [
          "merchant navy",
          "shipping",
          "marine engineer",
          "deck officer",
          "seafarer",
          "nautical"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "B",
      "domain": "maritime",
      "category": "Technical",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 4,
      "globalScope": true,
      "examRequired": "IMU-CET",
      "roiScore": 8,
      "stressScore": 8,
      "description": "Navigate ships, manage cargo operations, maintain marine engines. High-paying career on the seas.",
      "realityNote": "Merchant navy pays extremely well (₹15-30L tax-free for engineers) but you'll spend 6-9 months at sea with no family. Mental isolation is real. Women face additional challenges. Career span is 15-20 years.",
      "semantic_tags": [
          "merchant navy",
          "ship",
          "maritime",
          "seafarer",
          "navigation",
          "marine"
      ],
      "keywords_negative": [
          "navy military",
          "coastguard"
      ],
      "domains": [
          {
              "name": "Foundation",
              "skills": [
                  "Mathematics",
                  "Physics",
                  "Navigation",
                  "Marine Engineering"
              ],
              "topResource": "IMU-CET prep",
              "timeMonths": 12
          },
          {
              "name": "Cadetship",
              "skills": [
                  "Ship Operations",
                  "Engine Room",
                  "Safety",
                  "Cargo"
              ],
              "topResource": "Maritime academy",
              "timeMonths": 36
          },
          {
              "name": "Certification",
              "skills": [
                  "COC Exams",
                  "STCW",
                  "Specialized Certifications"
              ],
              "topResource": "DG Shipping",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "IMU Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 300000,
              "cutoff_description": "IMU-CET",
              "placement_median": "₹15L",
              "type": "government"
          },
          {
              "name": "MERI Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 400000,
              "cutoff_description": "IMU-CET",
              "placement_median": "₹15L",
              "type": "private"
          },
          {
              "name": "TMI Pune",
              "tier": 1,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 500000,
              "cutoff_description": "IMU-CET",
              "placement_median": "₹12L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹8-15 LPA",
          "mid": "₹20-40 LPA (tax-free)",
          "senior": "₹50-100 LPA (Captain)"
      }
  },
  isro_scientist: {
      "id": "isro_scientist",
      "name": "Space Scientist (ISRO)",
      "aliases": [
          "isro",
          "space",
          "satellite",
          "rocket scientist",
          "space research",
          "chandrayaan",
          "mangalyaan"
      ],
      "streams": [
          "PCM"
      ],
      "careerType": "B",
      "domain": "science",
      "category": "Research",
      "minMarks": 82,
      "minMarksStretch": 70,
      "timeline": 6,
      "globalScope": false,
      "examRequired": "ICRB Exam / GATE",
      "roiScore": 6,
      "stressScore": 6,
      "description": "Design satellites, rockets, and space missions. India's space program is world-class on a budget.",
      "realityNote": "ISRO is incredibly hard to get into — they hire ~200 scientists/year from lakhs of applicants. Pay is government scale (₹8-15L) which is low vs private sector. But the work is literally rocket science.",
      "semantic_tags": [
          "space",
          "isro",
          "satellite",
          "rocket",
          "aerospace",
          "chandrayaan",
          "mars"
      ],
      "keywords_negative": [
          "astrology",
          "astronomy hobby"
      ],
      "domains": [
          {
              "name": "Engineering/Science",
              "skills": [
                  "Aerospace",
                  "Mechanical",
                  "Electronics",
                  "CS",
                  "Physics"
              ],
              "topResource": "B.Tech/M.Sc from IIT/NIT",
              "timeMonths": 24
          },
          {
              "name": "GATE/ICRB",
              "skills": [
                  "GATE Score",
                  "ISRO-specific Preparation",
                  "Technical Interview"
              ],
              "topResource": "GATE coaching + self-study",
              "timeMonths": 12
          },
          {
              "name": "Research",
              "skills": [
                  "Propulsion",
                  "Avionics",
                  "Remote Sensing",
                  "Mission Design"
              ],
              "topResource": "ISRO centres",
              "timeMonths": 36
          }
      ],
      "topInstitutions": [
          {
              "name": "IIT Madras (Aerospace)",
              "tier": 1,
              "city": "Chennai",
              "state": "Tamil Nadu",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced Top 1000",
              "placement_median": "₹18L",
              "type": "government"
          },
          {
              "name": "IIT Bombay (Aerospace)",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 220000,
              "cutoff_description": "JEE Advanced Top 800",
              "placement_median": "₹20L",
              "type": "government"
          },
          {
              "name": "IISc Bangalore",
              "tier": 1,
              "city": "Bangalore",
              "state": "Karnataka",
              "fees_per_year": 15000,
              "cutoff_description": "GATE Top 100",
              "placement_median": "₹10L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹8-12 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹25-40 LPA"
      }
  },
  chef: {
      "id": "chef",
      "name": "Professional Chef",
      "aliases": [
          "chef",
          "cooking",
          "culinary",
          "hotel management",
          "baking",
          "pastry",
          "food",
          "restaurant"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "hospitality",
      "category": "Creative",
      "minMarks": 50,
      "minMarksStretch": 35,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 8,
      "description": "Create culinary experiences in restaurants, hotels, catering. India's food industry is ₹5L Cr+.",
      "realityNote": "Hotel management is oversaturated — IHM graduates earn ₹2-4L starting. Fine dining chef roles pay better but demand 14-16 hour shifts. Own restaurant is the goal but 60% fail in year 1.",
      "semantic_tags": [
          "chef",
          "culinary",
          "cooking",
          "restaurant",
          "hotel",
          "kitchen",
          "food"
      ],
      "keywords_negative": [
          "chemistry",
          "chemical"
      ],
      "domains": [
          {
              "name": "Culinary Foundation",
              "skills": [
                  "Cooking Techniques",
                  "Food Safety",
                  "Nutrition",
                  "Baking"
              ],
              "topResource": "IHM/Culinary school",
              "timeMonths": 24
          },
          {
              "name": "Specialization",
              "skills": [
                  "Cuisine Mastery",
                  "Pastry Arts",
                  "Kitchen Management",
                  "Menu Design"
              ],
              "topResource": "Hotel internships",
              "timeMonths": 12
          },
          {
              "name": "Business",
              "skills": [
                  "Restaurant Management",
                  "Cost Control",
                  "Marketing",
                  "F&B Operations"
              ],
              "topResource": "Industry experience",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "IHM Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 100000,
              "cutoff_description": "JEE (Hotel Management)",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "IHM Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 100000,
              "cutoff_description": "JEE (HM)",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "Welcomgroup Manipal",
              "tier": 1,
              "city": "Manipal",
              "state": "Karnataka",
              "fees_per_year": 400000,
              "cutoff_description": "Entrance",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹20-50 LPA (Executive Chef)"
      }
  },
  electrician: {
      "id": "electrician",
      "name": "Master Electrician",
      "aliases": [
          "electrician",
          "electrical technician",
          "wiring",
          "iti electrical",
          "power distribution"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "trades",
      "category": "Other",
      "minMarks": 40,
      "minMarksStretch": 30,
      "timeline": 2,
      "globalScope": false,
      "examRequired": "ITI Certificate",
      "roiScore": 5,
      "stressScore": 6,
      "description": "Install, maintain, and repair electrical systems. Essential trade with growing demand in India.",
      "realityNote": "ITI electricians can earn ₹3-5L working for contractors. Skilled electricians running own business earn ₹8-15L. Solar installation is a booming sub-specialization. Govt jobs (BSNL, railways) pay ₹4-6L.",
      "semantic_tags": [
          "electrician",
          "wiring",
          "electrical",
          "power",
          "circuit",
          "installation"
      ],
      "keywords_negative": [
          "electronics engineer",
          "electrical engineer degree"
      ],
      "domains": [
          {
              "name": "ITI Foundation",
              "skills": [
                  "Basic Electrical",
                  "Circuit Theory",
                  "Safety",
                  "Wiring"
              ],
              "topResource": "ITI Electrician course",
              "timeMonths": 24
          },
          {
              "name": "Advanced Skills",
              "skills": [
                  "Industrial Wiring",
                  "PLC Basics",
                  "Solar Installation",
                  "EV Charging"
              ],
              "topResource": "Apprenticeship + certifications",
              "timeMonths": 12
          },
          {
              "name": "Business",
              "skills": [
                  "Contracting",
                  "Estimation",
                  "Team Management",
                  "Licensing"
              ],
              "topResource": "Field experience",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "Govt ITI Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 5000,
              "cutoff_description": "10th pass + Merit",
              "placement_median": "₹3L",
              "type": "government"
          },
          {
              "name": "Govt ITI Mumbai",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 5000,
              "cutoff_description": "10th pass",
              "placement_median": "₹3L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹2-4 LPA",
          "mid": "₹5-10 LPA",
          "senior": "₹12-25 LPA (Contractor)"
      }
  },
  plumber: {
      "id": "plumber",
      "name": "Master Plumber",
      "aliases": [
          "plumber",
          "plumbing",
          "pipefitting",
          "sanitary",
          "water systems"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "trades",
      "category": "Other",
      "minMarks": 35,
      "minMarksStretch": 25,
      "timeline": 2,
      "globalScope": false,
      "examRequired": "ITI Certificate",
      "roiScore": 5,
      "stressScore": 5,
      "description": "Install and maintain water supply, drainage, and gas piping systems. Massive shortage in India.",
      "realityNote": "India has a severe plumber shortage — organized plumbing services like UrbanClap have created new earning opportunities. Skilled plumbers earn ₹5-10L. No social stigma should stop you — it's honest, well-paying work.",
      "semantic_tags": [
          "plumber",
          "plumbing",
          "pipe",
          "sanitary",
          "drainage",
          "water system"
      ],
      "keywords_negative": [
          "software",
          "coding"
      ],
      "domains": [
          {
              "name": "ITI Foundation",
              "skills": [
                  "Pipe Fitting",
                  "Sanitary Systems",
                  "Blueprint Reading",
                  "Safety"
              ],
              "topResource": "ITI Plumber course",
              "timeMonths": 24
          },
          {
              "name": "Advanced",
              "skills": [
                  "CPVC/PPR",
                  "Bathroom Design",
                  "Water Purification",
                  "Gas Fitting"
              ],
              "topResource": "Apprenticeship",
              "timeMonths": 12
          },
          {
              "name": "Business",
              "skills": [
                  "Contracting",
                  "Customer Service",
                  "Estimation",
                  "Team Building"
              ],
              "topResource": "Field experience",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "Govt ITI",
              "tier": 1,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 5000,
              "cutoff_description": "10th pass",
              "placement_median": "₹2L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹2-4 LPA",
          "mid": "₹5-10 LPA",
          "senior": "₹12-20 LPA (Contractor)"
      }
  },
  welder: {
      "id": "welder",
      "name": "Certified Welder",
      "aliases": [
          "welder",
          "welding",
          "fabrication",
          "tig",
          "mig",
          "arc welding"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "trades",
      "category": "Other",
      "minMarks": 40,
      "minMarksStretch": 30,
      "timeline": 2,
      "globalScope": false,
      "examRequired": "ITI Certificate / ASNT",
      "roiScore": 6,
      "stressScore": 7,
      "description": "Join metals through welding — essential for construction, shipbuilding, oil & gas, aerospace.",
      "realityNote": "Skilled welders, especially underwater/pipeline welders, can earn ₹15-30L. Regular welders earn ₹3-6L. International certifications (AWS, ASNT) dramatically increase earning. Gulf/abroad jobs pay 3x.",
      "semantic_tags": [
          "welding",
          "welder",
          "fabrication",
          "metal",
          "joining",
          "tig",
          "mig"
      ],
      "keywords_negative": [
          "web developer",
          "software"
      ],
      "domains": [
          {
              "name": "ITI Foundation",
              "skills": [
                  "Arc Welding",
                  "Gas Welding",
                  "Safety",
                  "Blueprint Reading"
              ],
              "topResource": "ITI Welder course",
              "timeMonths": 24
          },
          {
              "name": "Advanced",
              "skills": [
                  "TIG",
                  "MIG",
                  "Pipe Welding",
                  "Underwater Welding"
              ],
              "topResource": "Specialized training",
              "timeMonths": 12
          },
          {
              "name": "Certification",
              "skills": [
                  "AWS CWI",
                  "ASNT",
                  "6G Certification",
                  "NDT"
              ],
              "topResource": "Certification bodies",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "Govt ITI",
              "tier": 1,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 5000,
              "cutoff_description": "10th pass",
              "placement_median": "₹2L",
              "type": "government"
          },
          {
              "name": "CWS Vishakhapatnam",
              "tier": 1,
              "city": "Visakhapatnam",
              "state": "Andhra Pradesh",
              "fees_per_year": 15000,
              "cutoff_description": "10th pass + test",
              "placement_median": "₹4L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹20-40 LPA (Specialist)"
      }
  },
  sports_physiologist: {
      "id": "sports_physiologist",
      "name": "Sports Scientist / Physiologist",
      "aliases": [
          "sports science",
          "exercise science",
          "sports medicine",
          "fitness",
          "kinesiology",
          "sports physiology"
      ],
      "streams": [
          "PCB",
          "PCM"
      ],
      "careerType": "A",
      "domain": "sports",
      "category": "Research",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 4,
      "description": "Optimize athlete performance through science — biomechanics, nutrition, recovery, testing.",
      "realityNote": "Sports science in India is underdeveloped. BCCI, ISL, PKL teams hire sports scientists but positions are few. Most end up as gym trainers earning ₹3-5L. International qualifications (ACSM, NSCA) help.",
      "semantic_tags": [
          "sports science",
          "exercise",
          "fitness",
          "biomechanics",
          "kinesiology",
          "athletic"
      ],
      "keywords_negative": [
          "esports",
          "gaming"
      ],
      "domains": [
          {
              "name": "Science Foundation",
              "skills": [
                  "Anatomy",
                  "Physiology",
                  "Biomechanics",
                  "Nutrition"
              ],
              "topResource": "B.Sc Sports Science",
              "timeMonths": 24
          },
          {
              "name": "Applied Sports Science",
              "skills": [
                  "Performance Testing",
                  "Injury Prevention",
                  "Rehabilitation",
                  "GPS Tracking"
              ],
              "topResource": "M.Sc Sports Science",
              "timeMonths": 24
          },
          {
              "name": "Certification",
              "skills": [
                  "CSCS (NSCA)",
                  "ACSM",
                  "Strength & Conditioning"
              ],
              "topResource": "Certification courses",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "LNIPE Gwalior",
              "tier": 1,
              "city": "Gwalior",
              "state": "Madhya Pradesh",
              "fees_per_year": 25000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹4L",
              "type": "government"
          },
          {
              "name": "SAI NSNIS Patiala",
              "tier": 1,
              "city": "Patiala",
              "state": "Punjab",
              "fees_per_year": 15000,
              "cutoff_description": "Selection",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "Symbiosis Sports Science",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 300000,
              "cutoff_description": "Entrance",
              "placement_median": "₹5L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA"
      }
  },
  sports_journalist: {
      "id": "sports_journalist",
      "name": "Sports Journalist",
      "aliases": [
          "sports journalist",
          "cricket commentator",
          "sports reporter",
          "sports writing",
          "espn",
          "sports media"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "media",
      "category": "Creative",
      "minMarks": 55,
      "minMarksStretch": 40,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 6,
      "description": "Cover sports events, write match reports, analyze games, do commentary. Dream career for sports fans.",
      "realityNote": "Sports journalism in India = cricket journalism for most outlets. Other sports get minimal coverage and pay. Starting pay is ₹2-4L at most outlets. Only top commentators/analysts earn well.",
      "semantic_tags": [
          "sports",
          "cricket",
          "football",
          "journalist",
          "commentary",
          "reporting",
          "match"
      ],
      "keywords_negative": [
          "financial reporting",
          "news anchor"
      ],
      "domains": [
          {
              "name": "Journalism Foundation",
              "skills": [
                  "Sports Writing",
                  "Reporting",
                  "Media Ethics",
                  "Statistics"
              ],
              "topResource": "Mass Comm degree",
              "timeMonths": 24
          },
          {
              "name": "Sports Expertise",
              "skills": [
                  "Deep sport knowledge",
                  "Data Analysis",
                  "Video Analysis",
                  "Social Media"
              ],
              "topResource": "Sports blogs + internships",
              "timeMonths": 12
          },
          {
              "name": "Career Building",
              "skills": [
                  "Portfolio",
                  "Networking",
                  "Personal Brand",
                  "Podcasting"
              ],
              "topResource": "Industry events",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "IIMC Delhi",
              "tier": 1,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 35000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "Symbiosis (SIMC)",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 400000,
              "cutoff_description": "SET",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹20-50 LPA"
      }
  },
  esports_professional: {
      "id": "esports_professional",
      "name": "Esports Professional",
      "aliases": [
          "esports",
          "gaming",
          "professional gamer",
          "game streamer",
          "esports manager",
          "competitive gaming"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "entertainment",
      "category": "Creative",
      "minMarks": 40,
      "minMarksStretch": 30,
      "timeline": 2,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 7,
      "description": "Compete in professional gaming tournaments or manage esports teams/events. India's gaming market is ₹25,000 Cr.",
      "realityNote": "Only the top 0.01% of gamers earn enough to sustain. Most 'pro gamers' in India earn ₹0-2L/year from tournaments. Streaming income requires 100K+ followers. Esports management/content is more viable long-term.",
      "semantic_tags": [
          "esports",
          "gaming",
          "competitive gaming",
          "streaming",
          "tournament",
          "pubg",
          "valorant"
      ],
      "keywords_negative": [
          "sports physical",
          "athlete"
      ],
      "domains": [
          {
              "name": "Gaming Skills",
              "skills": [
                  "Game Mastery",
                  "Reaction Time",
                  "Strategy",
                  "Team Coordination"
              ],
              "topResource": "Daily practice (8-12hrs)",
              "timeMonths": 12
          },
          {
              "name": "Content/Streaming",
              "skills": [
                  "Video Editing",
                  "Streaming Setup",
                  "Commentary",
                  "Community Building"
              ],
              "topResource": "YouTube/Twitch practice",
              "timeMonths": 6
          },
          {
              "name": "Business Side",
              "skills": [
                  "Tournament Organization",
                  "Team Management",
                  "Sponsorship",
                  "Marketing"
              ],
              "topResource": "Esports orgs internship",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "No formal institution — community-driven",
              "tier": 2,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 0,
              "cutoff_description": "Tournament qualification",
              "placement_median": "₹2-5L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹0-3 LPA",
          "mid": "₹5-20 LPA",
          "senior": "₹30-200 LPA (top tier)"
      }
  },
  music_producer: {
      "id": "music_producer",
      "name": "Music Producer / Sound Engineer",
      "aliases": [
          "music producer",
          "sound engineer",
          "audio engineer",
          "mixing",
          "mastering",
          "music production",
          "recording"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "entertainment",
      "category": "Creative",
      "minMarks": 45,
      "minMarksStretch": 30,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 5,
      "description": "Produce music tracks, mix and master audio, run recording studios. Bollywood and indie music scenes are thriving.",
      "realityNote": "Music production requires expensive equipment (₹5-10L setup). Income is project-based and inconsistent. Bollywood pays well but is nepotistic. Indie scene is growing but monetization is tough.",
      "semantic_tags": [
          "music",
          "producer",
          "audio",
          "sound",
          "recording",
          "mixing",
          "mastering"
      ],
      "keywords_negative": [
          "software producer",
          "film producer"
      ],
      "domains": [
          {
              "name": "Music Theory",
              "skills": [
                  "Harmony",
                  "Rhythm",
                  "Arrangement",
                  "Ear Training"
              ],
              "topResource": "Self-study + online courses",
              "timeMonths": 12
          },
          {
              "name": "Production Skills",
              "skills": [
                  "DAW (Ableton/FL Studio)",
                  "Mixing",
                  "Mastering",
                  "Sound Design"
              ],
              "topResource": "Online courses + practice",
              "timeMonths": 12
          },
          {
              "name": "Industry",
              "skills": [
                  "Networking",
                  "Portfolio",
                  "Live Sound",
                  "Studio Business"
              ],
              "topResource": "Internships at studios",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "Film and TV Institute (FTII)",
              "tier": 1,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 50000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹5L",
              "type": "government"
          },
          {
              "name": "SAE Institute",
              "tier": 2,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 600000,
              "cutoff_description": "Portfolio review",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-20 LPA",
          "senior": "₹25-100 LPA"
      }
  },
  interior_designer: {
      "id": "interior_designer",
      "name": "Interior Designer",
      "aliases": [
          "interior design",
          "home design",
          "space planning",
          "interior decorator",
          "residential design",
          "commercial interiors"
      ],
      "streams": [
          "Any",
          "Arts"
      ],
      "careerType": "C",
      "domain": "design",
      "category": "Creative",
      "minMarks": 55,
      "minMarksStretch": 40,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 5,
      "description": "Design functional and aesthetic indoor spaces — homes, offices, restaurants, retail stores.",
      "realityNote": "Interior design in India is unregulated — anyone can call themselves a designer. But formal training (NID, CEPT, JJ School) gives you an edge. Starting pay is poor (₹3-5L). Own practice is where the money is.",
      "semantic_tags": [
          "interior",
          "space design",
          "home",
          "decor",
          "furniture",
          "residential",
          "commercial"
      ],
      "keywords_negative": [
          "software",
          "web design"
      ],
      "domains": [
          {
              "name": "Design Foundation",
              "skills": [
                  "Space Planning",
                  "Color Theory",
                  "Materials",
                  "Drawing"
              ],
              "topResource": "B.Des Interior Design",
              "timeMonths": 24
          },
          {
              "name": "Technical Skills",
              "skills": [
                  "AutoCAD",
                  "3ds Max",
                  "SketchUp",
                  "Vastu",
                  "Building Codes"
              ],
              "topResource": "Design software courses",
              "timeMonths": 12
          },
          {
              "name": "Business",
              "skills": [
                  "Client Management",
                  "Vendor Relations",
                  "Project Management",
                  "Portfolio"
              ],
              "topResource": "Internships + own projects",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "NID Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 250000,
              "cutoff_description": "NID DAT",
              "placement_median": "₹8L",
              "type": "government"
          },
          {
              "name": "CEPT Ahmedabad",
              "tier": 1,
              "city": "Ahmedabad",
              "state": "Gujarat",
              "fees_per_year": 300000,
              "cutoff_description": "Entrance exam",
              "placement_median": "₹7L",
              "type": "private"
          },
          {
              "name": "JJ School of Art",
              "tier": 1,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 15000,
              "cutoff_description": "Drawing test",
              "placement_median": "₹5L",
              "type": "government"
          }
      ],
      "salaryRange": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-20 LPA",
          "senior": "₹25-80 LPA (Own firm)"
      }
  },
  tattoo_artist: {
      "id": "tattoo_artist",
      "name": "Tattoo Artist",
      "aliases": [
          "tattoo",
          "tattoo artist",
          "body art",
          "ink",
          "tattooing"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "art",
      "category": "Creative",
      "minMarks": 35,
      "minMarksStretch": 25,
      "timeline": 2,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 4,
      "description": "Create permanent body art. India's tattoo industry is ₹2000 Cr and growing 25% annually.",
      "realityNote": "No formal degree needed but apprenticeship under a good artist is crucial (1-2 years). Starting income is ₹2-4L. Established artists in metros earn ₹15-30L. Hygiene certification is important. It's a craft, not just art.",
      "semantic_tags": [
          "tattoo",
          "body art",
          "ink",
          "piercing",
          "art",
          "illustration"
      ],
      "keywords_negative": [
          "software",
          "technology"
      ],
      "domains": [
          {
              "name": "Art Foundation",
              "skills": [
                  "Drawing",
                  "Illustration",
                  "Anatomy",
                  "Color Theory"
              ],
              "topResource": "Art classes + self-study",
              "timeMonths": 12
          },
          {
              "name": "Apprenticeship",
              "skills": [
                  "Machine Operation",
                  "Hygiene",
                  "Skin Knowledge",
                  "Style Development"
              ],
              "topResource": "Under established artist",
              "timeMonths": 18
          },
          {
              "name": "Business",
              "skills": [
                  "Portfolio",
                  "Social Media",
                  "Studio Setup",
                  "Client Management"
              ],
              "topResource": "Personal branding",
              "timeMonths": 6
          }
      ],
      "topInstitutions": [
          {
              "name": "No formal institution — apprenticeship-based",
              "tier": 2,
              "city": "Various",
              "state": "Various",
              "fees_per_year": 50000,
              "cutoff_description": "Portfolio + Apprenticeship",
              "placement_median": "₹5L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹8-20 LPA",
          "senior": "₹25-60 LPA (Own studio)"
      }
  },
  event_manager: {
      "id": "event_manager",
      "name": "Event Manager",
      "aliases": [
          "event management",
          "event planner",
          "wedding planner",
          "corporate events",
          "exhibitions",
          "festivals"
      ],
      "streams": [
          "Any"
      ],
      "careerType": "C",
      "domain": "hospitality",
      "category": "Creative",
      "minMarks": 55,
      "minMarksStretch": 40,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 8,
      "description": "Plan and execute events — weddings, corporate conferences, exhibitions, concerts. India's wedding industry is ₹4L Cr.",
      "realityNote": "Event management is glamorous on the outside but grueling — 18-hour days during events, seasonal income, high stress. Starting pay is ₹2-4L. Top event companies (Wizcraft, E-Factor) pay ₹8-15L mid-level.",
      "semantic_tags": [
          "event",
          "wedding",
          "conference",
          "exhibition",
          "planning",
          "festival"
      ],
      "keywords_negative": [
          "software event",
          "data event"
      ],
      "domains": [
          {
              "name": "Foundation",
              "skills": [
                  "Event Planning",
                  "Budgeting",
                  "Vendor Management",
                  "Logistics"
              ],
              "topResource": "Event Management diploma",
              "timeMonths": 12
          },
          {
              "name": "Specialization",
              "skills": [
                  "Wedding Planning",
                  "Corporate Events",
                  "Exhibition Design",
                  "Digital Events"
              ],
              "topResource": "Internships",
              "timeMonths": 12
          },
          {
              "name": "Business",
              "skills": [
                  "Client Relations",
                  "Marketing",
                  "Team Management",
                  "Risk Management"
              ],
              "topResource": "Industry experience",
              "timeMonths": 12
          }
      ],
      "topInstitutions": [
          {
              "name": "NIEM Mumbai",
              "tier": 2,
              "city": "Mumbai",
              "state": "Maharashtra",
              "fees_per_year": 200000,
              "cutoff_description": "Entrance",
              "placement_median": "₹4L",
              "type": "private"
          },
          {
              "name": "EMDI Delhi",
              "tier": 2,
              "city": "Delhi",
              "state": "Delhi",
              "fees_per_year": 250000,
              "cutoff_description": "Entrance",
              "placement_median": "₹4L",
              "type": "private"
          },
          {
              "name": "Symbiosis",
              "tier": 2,
              "city": "Pune",
              "state": "Maharashtra",
              "fees_per_year": 400000,
              "cutoff_description": "SET",
              "placement_median": "₹6L",
              "type": "private"
          }
      ],
      "salaryRange": {
          "entry": "₹2-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹20-50 LPA (Own company)"
      }
  },
  semiconductor_engineer: {
      "id": "semiconductor_engineer",
      "name": "Semiconductor / VLSI Engineer",
      "aliases": ["semiconductor", "vlsi", "chip design", "chip designer", "asic", "fpga", "intel", "qualcomm", "amd", "tsmc", "foundry", "integrated circuit", "ic design", "neuromorphic chip"],
      "streams": ["PCM"],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 78,
      "minMarksStretch": 65,
      "timeline": 4,
      "globalScope": true,
      "examRequired": "GATE",
      "roiScore": 9,
      "stressScore": 7,
      "description": "Design the brains inside every phone, car, and satellite. India's ₹76,000 Cr Semiconductor Mission is building fabs from scratch — the first generation of Indian chip designers will define an entire industry. You'll work at the intersection of physics and logic, crafting transistor layouts smaller than a virus.",
      "realityNote": "India has no operating fabs yet (Tata-PSMC, CG Power plants under construction). Most VLSI jobs are in design services (Intel, Qualcomm, Synopsys India offices). GATE ECE is the gateway — M.Tech from IIT/IIIT is almost mandatory for top roles.",
      "semantic_tags": ["semiconductor", "vlsi", "chip", "asic", "fpga", "integrated circuit", "nanometer"],
      "keywords_negative": ["software only", "web development", "app development"],
      "domains": [
          {"name": "Electronics Core", "skills": ["Digital Logic", "Analog Circuits", "Signals & Systems", "Electromagnetics"], "topResource": "B.Tech ECE + NPTEL", "timeMonths": 24},
          {"name": "VLSI Design", "skills": ["Verilog/VHDL", "Physical Design", "Timing Analysis", "DFT"], "topResource": "NPTEL VLSI + Cadence tutorials", "timeMonths": 12},
          {"name": "Industry Tools", "skills": ["Cadence Virtuoso", "Synopsys DC", "SPICE Simulation", "Layout vs Schematic"], "topResource": "M.Tech project + internship", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "IIT Bombay", "tier": 1, "city": "Mumbai", "state": "Maharashtra", "fees_per_year": 220000, "cutoff_description": "JEE Advanced Top 500", "placement_median": "₹25L", "type": "government"},
          {"name": "IIT Madras", "tier": 1, "city": "Chennai", "state": "Tamil Nadu", "fees_per_year": 220000, "cutoff_description": "JEE Advanced Top 800", "placement_median": "₹22L", "type": "government"},
          {"name": "IIIT Hyderabad", "tier": 1, "city": "Hyderabad", "state": "Telangana", "fees_per_year": 250000, "cutoff_description": "JEE/UGEE", "placement_median": "₹18L", "type": "deemed"}
      ],
      "salaryRange": {"entry": "₹8-15 LPA", "mid": "₹20-50 LPA", "senior": "₹60-200 LPA"}
  },
  clinical_psychologist: {
      "id": "clinical_psychologist",
      "name": "Clinical Psychologist",
      "aliases": ["psychologist", "clinical psychology", "therapist", "mental health", "counseling psychologist", "psychology", "mental health professional", "CBT therapist"],
      "streams": ["Arts", "PCB", "Commerce", "PCM"],
      "careerType": "B",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 60,
      "minMarksStretch": 50,
      "timeline": 7,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 5,
      "stressScore": 8,
      "description": "India has 0.07 psychologists per 100,000 people — against WHO's recommended 3. You'd be among the professionals closing a 40x gap in a country where 150 million people need mental health care but can't access it. Clinical psychologists diagnose, treat, and help people rebuild their inner worlds.",
      "realityNote": "RCI (Rehabilitation Council of India) registration is mandatory. You need BA Psychology → MA Clinical Psychology → M.Phil Clinical Psychology (RCI recognized). The M.Phil has only ~600 seats nationwide. Private practice takes 3-5 years to build. Hospital salaries start low (₹4-6L).",
      "semantic_tags": ["psychology", "therapy", "mental health", "counseling", "CBT", "clinical"],
      "keywords_negative": ["criminal psychology", "forensic", "sports psychology", "psychiatrist"],
      "domains": [
          {"name": "Psychology Foundation", "skills": ["Abnormal Psychology", "Developmental Psychology", "Research Methods", "Statistics"], "topResource": "BA/BSc Psychology", "timeMonths": 36},
          {"name": "Clinical Training", "skills": ["Psychotherapy", "CBT", "Psychodiagnostics", "Case Formulation"], "topResource": "MA + M.Phil Clinical Psychology (RCI)", "timeMonths": 36},
          {"name": "Specialization", "skills": ["Child Psychology", "Neuropsychology", "Addiction", "Trauma Therapy"], "topResource": "Supervised practice + workshops", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "NIMHANS Bangalore", "tier": 1, "city": "Bangalore", "state": "Karnataka", "fees_per_year": 15000, "cutoff_description": "NIMHANS entrance", "placement_median": "₹8L", "type": "government"},
          {"name": "TISS Mumbai", "tier": 1, "city": "Mumbai", "state": "Maharashtra", "fees_per_year": 80000, "cutoff_description": "TISS-NET", "placement_median": "₹6L", "type": "deemed"},
          {"name": "Delhi University", "tier": 1, "city": "Delhi", "state": "Delhi", "fees_per_year": 20000, "cutoff_description": "CUET + Interview", "placement_median": "₹5L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹3-6 LPA", "mid": "₹10-25 LPA", "senior": "₹30-80 LPA (Private practice)"}
  },
  agricultural_engineer: {
      "id": "agricultural_engineer",
      "name": "Agricultural Engineer / Agritech Specialist",
      "aliases": ["agricultural engineer", "agritech", "agriculture technology", "farm technology", "precision agriculture", "agri startup", "smart farming"],
      "streams": ["PCM", "PCB"],
      "careerType": "A",
      "domain": "agriculture",
      "category": "Technical",
      "minMarks": 60,
      "minMarksStretch": 45,
      "timeline": 4,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 4,
      "description": "India feeds 1.4 billion people with farms averaging just 1.1 hectares. Agricultural engineers bring drones, IoT sensors, and AI-driven irrigation to fields where bullocks still pull plows — the gap between what exists and what's possible is wider here than in any other engineering field.",
      "realityNote": "Traditional agricultural engineering has poor ROI (₹3-5L starting). The real opportunity is in agritech startups (DeHaat, CropIn, Fasal) or government research (ICAR). Pure farming roles are rural with limited growth.",
      "semantic_tags": ["agriculture", "farming", "agritech", "crop", "irrigation", "precision farming"],
      "keywords_negative": ["software", "civil", "mechanical only"],
      "domains": [
          {"name": "Agricultural Science", "skills": ["Soil Science", "Crop Science", "Farm Machinery", "Irrigation Engineering"], "topResource": "B.Tech Agricultural Engineering", "timeMonths": 24},
          {"name": "Technology Integration", "skills": ["Drone Mapping", "IoT Sensors", "Precision Agriculture", "GIS/Remote Sensing"], "topResource": "IIT/IARI courses", "timeMonths": 12},
          {"name": "Business/Research", "skills": ["Agri Supply Chain", "Food Processing", "Startup Development"], "topResource": "ICAR/NABARD programs", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "IIT Kharagpur (AgFE)", "tier": 1, "city": "Kharagpur", "state": "West Bengal", "fees_per_year": 220000, "cutoff_description": "JEE Advanced", "placement_median": "₹12L", "type": "government"},
          {"name": "IARI New Delhi", "tier": 1, "city": "New Delhi", "state": "Delhi", "fees_per_year": 15000, "cutoff_description": "ICAR AIEEA", "placement_median": "₹7L", "type": "government"},
          {"name": "TNAU Coimbatore", "tier": 1, "city": "Coimbatore", "state": "Tamil Nadu", "fees_per_year": 30000, "cutoff_description": "State entrance", "placement_median": "₹5L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹3-8 LPA", "mid": "₹10-25 LPA", "senior": "₹30-60 LPA (Agritech)"}
  },
  data_engineer: {
      "id": "data_engineer",
      "name": "Data Engineer",
      "aliases": ["data engineer", "data pipeline", "etl developer", "big data engineer", "data infrastructure", "spark engineer", "databricks", "snowflake engineer"],
      "streams": ["PCM", "Commerce"],
      "careerType": "A",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 70,
      "minMarksStretch": 55,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 9,
      "stressScore": 6,
      "description": "Every AI model is only as good as the data feeding it. Data engineers build the invisible plumbing — the pipelines, warehouses, and streaming systems that turn terabytes of raw chaos into clean, queryable truth. It's the fastest-growing role in tech because every company that says 'we're doing AI' first needs someone to make the data actually work.",
      "realityNote": "Highest demand-to-supply ratio in Indian tech (2024). No specific degree required — CSE/IT grads who learn SQL, Python, Spark, and cloud (AWS/GCP) can break in. Salaries rival SWE roles. Remote-friendly.",
      "semantic_tags": ["data engineering", "pipeline", "etl", "spark", "warehouse", "big data", "streaming"],
      "keywords_negative": ["data entry", "data analyst only", "database admin"],
      "domains": [
          {"name": "Programming & SQL", "skills": ["Python", "SQL", "Linux", "Git"], "topResource": "B.Tech CSE + LeetCode", "timeMonths": 12},
          {"name": "Data Stack", "skills": ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake/BigQuery"], "topResource": "DataCamp + Zach Wilson's bootcamp", "timeMonths": 8},
          {"name": "Cloud & Production", "skills": ["AWS/GCP/Azure", "Docker", "Kubernetes", "CI/CD", "Data Governance"], "topResource": "Cloud certifications + projects", "timeMonths": 6}
      ],
      "topInstitutions": [
          {"name": "IIT Bombay", "tier": 1, "city": "Mumbai", "state": "Maharashtra", "fees_per_year": 220000, "cutoff_description": "JEE Advanced Top 1000", "placement_median": "₹30L", "type": "government"},
          {"name": "IIIT Hyderabad", "tier": 1, "city": "Hyderabad", "state": "Telangana", "fees_per_year": 250000, "cutoff_description": "JEE/UGEE", "placement_median": "₹20L", "type": "deemed"},
          {"name": "NIT Trichy", "tier": 1, "city": "Trichy", "state": "Tamil Nadu", "fees_per_year": 150000, "cutoff_description": "JEE Main Top 5000", "placement_median": "₹14L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹8-18 LPA", "mid": "₹25-55 LPA", "senior": "₹60-150 LPA"}
  },
  ethical_hacker: {
      "id": "ethical_hacker",
      "name": "Ethical Hacker / Penetration Tester",
      "aliases": ["ethical hacker", "pentester", "penetration tester", "bug bounty", "red team", "white hat hacker", "security researcher", "offensive security"],
      "streams": ["PCM", "Commerce"],
      "careerType": "C",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 55,
      "minMarksStretch": 40,
      "timeline": 3,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 8,
      "stressScore": 7,
      "description": "Get paid to break into systems — legally. Ethical hackers find vulnerabilities before criminals do, earning bug bounties that can hit $100K for a single critical find. India produces more bug bounty hunters than any country except the US, and companies like Google, Apple, and Microsoft pay top dollar for people who think like attackers.",
      "realityNote": "No formal degree required — skills and certifications (CEH, OSCP, eJPT) matter more. Bug bounty income is unpredictable. Full-time pentest roles at Big 4/consulting firms pay ₹8-25L. Building reputation on HackerOne/Bugcrowd is the fastest path in.",
      "semantic_tags": ["hacking", "penetration testing", "bug bounty", "red team", "exploit", "vulnerability"],
      "keywords_negative": ["criminal hacking", "black hat", "cracking"],
      "domains": [
          {"name": "Networking & OS", "skills": ["Linux", "TCP/IP", "Windows Security", "Networking"], "topResource": "TryHackMe + HackTheBox", "timeMonths": 6},
          {"name": "Offensive Security", "skills": ["Web App Pentesting", "Network Pentesting", "Social Engineering", "Burp Suite"], "topResource": "PortSwigger Academy + OSCP prep", "timeMonths": 8},
          {"name": "Certification & Practice", "skills": ["OSCP", "Bug Bounty Methodology", "Report Writing", "Red Team Ops"], "topResource": "HackerOne + OffSec", "timeMonths": 6}
      ],
      "topInstitutions": [
          {"name": "IIT Kanpur (CSE)", "tier": 1, "city": "Kanpur", "state": "Uttar Pradesh", "fees_per_year": 220000, "cutoff_description": "JEE Advanced", "placement_median": "₹25L", "type": "government"},
          {"name": "IIIT Delhi", "tier": 1, "city": "Delhi", "state": "Delhi", "fees_per_year": 350000, "cutoff_description": "JEE Main/Board marks", "placement_median": "₹18L", "type": "government"},
          {"name": "Amrita Vishwa Vidyapeetham", "tier": 2, "city": "Coimbatore", "state": "Tamil Nadu", "fees_per_year": 200000, "cutoff_description": "AEEE", "placement_median": "₹8L", "type": "deemed"}
      ],
      "salaryRange": {"entry": "₹5-12 LPA", "mid": "₹15-40 LPA", "senior": "₹50-150 LPA (+ bounties)"}
  },
  speech_therapist: {
      "id": "speech_therapist",
      "name": "Speech-Language Pathologist",
      "aliases": ["speech therapist", "speech pathologist", "slp", "speech therapy", "speech and language", "audiologist", "communication disorders"],
      "streams": ["PCB", "Arts"],
      "careerType": "A",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 55,
      "minMarksStretch": 45,
      "timeline": 4,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 4,
      "description": "Help children speak their first words, stroke survivors find their voice again, and stutterers break free from silence. India has fewer than 3,000 qualified SLPs for a population where 10 million children have speech disorders — every therapist you train will change hundreds of lives.",
      "realityNote": "BASLP (4-year degree) from an RCI-recognized college is mandatory. Only ~50 colleges offer it. Starting salaries are low (₹3-5L) in hospitals. Teletherapy and private practice in metros can reach ₹15-25L. Abroad opportunities (US, Australia) pay significantly more.",
      "semantic_tags": ["speech therapy", "language pathology", "communication", "stuttering", "autism therapy"],
      "keywords_negative": ["public speaking", "debate", "elocution", "voice over"],
      "domains": [
          {"name": "Foundation", "skills": ["Anatomy of Speech", "Linguistics", "Audiology", "Psychology"], "topResource": "BASLP curriculum", "timeMonths": 24},
          {"name": "Clinical Practice", "skills": ["Articulation Therapy", "Fluency Disorders", "Swallowing Disorders", "AAC"], "topResource": "Clinical rotations", "timeMonths": 18},
          {"name": "Specialization", "skills": ["Pediatric SLP", "Neurogenic Disorders", "Teletherapy", "Autism Intervention"], "topResource": "MASLP + workshops", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "AIISH Mysuru", "tier": 1, "city": "Mysuru", "state": "Karnataka", "fees_per_year": 15000, "cutoff_description": "AIISH entrance", "placement_median": "₹6L", "type": "government"},
          {"name": "Ali Yavar Jung NIRD Mumbai", "tier": 1, "city": "Mumbai", "state": "Maharashtra", "fees_per_year": 20000, "cutoff_description": "Entrance exam", "placement_median": "₹5L", "type": "government"},
          {"name": "Manipal SOAHS", "tier": 2, "city": "Manipal", "state": "Karnataka", "fees_per_year": 300000, "cutoff_description": "MET exam", "placement_median": "₹5L", "type": "private"}
      ],
      "salaryRange": {"entry": "₹3-6 LPA", "mid": "₹8-20 LPA", "senior": "₹25-50 LPA (Private/Abroad)"}
  },
  genetic_counselor: {
      "id": "genetic_counselor",
      "name": "Genetic Counselor",
      "aliases": ["genetic counselor", "genetics", "genomics", "genetic counseling", "genome", "dna testing", "hereditary", "genetic testing"],
      "streams": ["PCB"],
      "careerType": "B",
      "domain": "healthcare",
      "category": "Research",
      "minMarks": 75,
      "minMarksStretch": 60,
      "timeline": 6,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 5,
      "description": "Read the code of life. As genome sequencing drops below ₹10,000, genetic counselors are becoming the translators between raw DNA data and life-changing medical decisions — should you screen for cancer genes? Is your child's condition inherited? India has fewer than 200 trained genetic counselors for 1.4 billion people.",
      "realityNote": "MSc Genetic Counseling is offered by only 5-6 institutions in India (SGPGI Lucknow, Kamineni, Kasturba). No Indian regulatory body yet — ABGC (American) certification is gold standard. Most jobs are in metro hospitals, IVF clinics, or diagnostics companies (MedGenome, Mapmygenome).",
      "semantic_tags": ["genetics", "genomics", "dna", "hereditary", "counseling", "gene therapy"],
      "keywords_negative": ["general counseling", "career counseling", "therapy"],
      "domains": [
          {"name": "Genetics Foundation", "skills": ["Molecular Biology", "Human Genetics", "Biochemistry", "Cytogenetics"], "topResource": "BSc Genetics/Biotech + MSc", "timeMonths": 36},
          {"name": "Clinical Genetics", "skills": ["Pedigree Analysis", "Risk Assessment", "Prenatal Genetics", "Cancer Genetics"], "topResource": "MSc Genetic Counseling program", "timeMonths": 24},
          {"name": "Practice Skills", "skills": ["Patient Communication", "Ethical Decision-Making", "Psychosocial Support", "Lab Interpretation"], "topResource": "Clinical rotations + ABGC prep", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "SGPGI Lucknow", "tier": 1, "city": "Lucknow", "state": "Uttar Pradesh", "fees_per_year": 25000, "cutoff_description": "Entrance exam", "placement_median": "₹8L", "type": "government"},
          {"name": "Kasturba Medical College", "tier": 1, "city": "Manipal", "state": "Karnataka", "fees_per_year": 300000, "cutoff_description": "Entrance + interview", "placement_median": "₹7L", "type": "private"},
          {"name": "Kamineni Academy", "tier": 2, "city": "Hyderabad", "state": "Telangana", "fees_per_year": 250000, "cutoff_description": "Entrance exam", "placement_median": "₹6L", "type": "private"}
      ],
      "salaryRange": {"entry": "₹5-10 LPA", "mid": "₹12-30 LPA", "senior": "₹35-80 LPA (Abroad/Lab Director)"}
  },
  urban_planner: {
      "id": "urban_planner",
      "name": "Urban Planner / City Planner",
      "aliases": ["urban planner", "city planner", "town planner", "urban design", "city planning", "smart city", "urban development", "regional planning"],
      "streams": ["PCM", "Arts"],
      "careerType": "A",
      "domain": "infrastructure",
      "category": "Technical",
      "minMarks": 65,
      "minMarksStretch": 50,
      "timeline": 5,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 6,
      "stressScore": 5,
      "description": "India is adding the equivalent of a new Chicago every year to its cities. Urban planners decide where 500 million future city-dwellers will live, work, and commute. You'd shape Smart City missions, metro rail corridors, and housing for millions — the decisions you make today become the skylines of 2050.",
      "realityNote": "Planning degrees (B.Plan/M.Plan) are offered at IIT Kharagpur, SPA Delhi, CEPT Ahmedabad. Government jobs (TCPO, Smart City SPVs) pay ₹6-12L. Private consulting can reach ₹20-40L. The field is small but growing with ₹48,000 Cr Smart Cities Mission.",
      "semantic_tags": ["urban planning", "city design", "smart city", "infrastructure", "zoning", "transit"],
      "keywords_negative": ["financial planning", "event planning", "wedding planner"],
      "domains": [
          {"name": "Planning Foundation", "skills": ["Urban Geography", "Land Use Planning", "Transportation Planning", "GIS/AutoCAD"], "topResource": "B.Plan/B.Arch + Planning electives", "timeMonths": 24},
          {"name": "Policy & Design", "skills": ["Development Control Regulations", "Environmental Planning", "Housing Policy", "Smart City Technologies"], "topResource": "M.Plan from SPA/IIT", "timeMonths": 24},
          {"name": "Practice", "skills": ["Stakeholder Consultation", "EIA Reports", "Master Plan Preparation", "Data-Driven Planning"], "topResource": "Government/consultancy internship", "timeMonths": 12}
      ],
      "topInstitutions": [
          {"name": "SPA New Delhi", "tier": 1, "city": "New Delhi", "state": "Delhi", "fees_per_year": 100000, "cutoff_description": "JEE/NATA + aptitude", "placement_median": "₹10L", "type": "government"},
          {"name": "CEPT Ahmedabad", "tier": 1, "city": "Ahmedabad", "state": "Gujarat", "fees_per_year": 200000, "cutoff_description": "CEPT entrance", "placement_median": "₹8L", "type": "private"},
          {"name": "IIT Kharagpur (RPDP)", "tier": 1, "city": "Kharagpur", "state": "West Bengal", "fees_per_year": 220000, "cutoff_description": "JEE Advanced", "placement_median": "₹12L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹4-8 LPA", "mid": "₹12-30 LPA", "senior": "₹35-70 LPA"}
  },
  film_editor: {
      "id": "film_editor",
      "name": "Film / Video Editor",
      "aliases": ["film editor", "video editor", "editor", "post production", "premiere pro", "davinci resolve", "final cut", "editing", "color grading", "colorist"],
      "streams": ["Arts", "Commerce", "PCM", "PCB"],
      "careerType": "C",
      "domain": "creative_media",
      "category": "Creative",
      "minMarks": 40,
      "minMarksStretch": 30,
      "timeline": 2,
      "globalScope": true,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 6,
      "description": "The editor is the invisible storyteller — every cut, transition, and sound sync shapes how millions feel watching a scene. India produces 2,000+ films and 100,000+ hours of OTT content annually, and every second of it passes through an editor's timeline. From Bollywood features to viral reels, editors turn raw footage into emotion.",
      "realityNote": "No degree gatekeeping — portfolio and skills matter. Start with YouTube/freelance work. Bollywood assistant editors earn ₹15-30K/month initially. OTT boom (Netflix, Amazon, JioCinema) has doubled demand. Learn DaVinci Resolve (free) to start, Premiere Pro for industry work.",
      "semantic_tags": ["editing", "post production", "film editing", "video editing", "color grading"],
      "keywords_negative": ["photo editing", "text editor", "code editor", "gene editing"],
      "domains": [
          {"name": "Technical Skills", "skills": ["Premiere Pro", "DaVinci Resolve", "After Effects", "Sound Design"], "topResource": "YouTube tutorials + practice", "timeMonths": 6},
          {"name": "Storytelling Craft", "skills": ["Pacing", "Montage Theory", "Color Grading", "Continuity Editing"], "topResource": "FTII/Whistling Woods curriculum", "timeMonths": 12},
          {"name": "Industry Entry", "skills": ["Assistant Editing", "DIT/Data Management", "Client Communication", "Reel Building"], "topResource": "Internships + freelance projects", "timeMonths": 6}
      ],
      "topInstitutions": [
          {"name": "FTII Pune", "tier": 1, "city": "Pune", "state": "Maharashtra", "fees_per_year": 50000, "cutoff_description": "FTII JET entrance", "placement_median": "₹8L", "type": "government"},
          {"name": "Whistling Woods Mumbai", "tier": 1, "city": "Mumbai", "state": "Maharashtra", "fees_per_year": 500000, "cutoff_description": "Aptitude test", "placement_median": "₹6L", "type": "private"},
          {"name": "Satyajit Ray Film Institute", "tier": 1, "city": "Kolkata", "state": "West Bengal", "fees_per_year": 25000, "cutoff_description": "SRFTI entrance", "placement_median": "₹5L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹3-8 LPA", "mid": "₹10-30 LPA", "senior": "₹40-100 LPA (Feature films)"}
  },
  drone_pilot: {
      "id": "drone_pilot",
      "name": "Drone Pilot / UAV Operator",
      "aliases": ["drone pilot", "drone operator", "uav pilot", "drone", "unmanned aerial vehicle", "rpas", "drone surveyor", "drone photography"],
      "streams": ["PCM", "Arts", "Commerce"],
      "careerType": "C",
      "domain": "technology",
      "category": "Technical",
      "minMarks": 45,
      "minMarksStretch": 35,
      "timeline": 1,
      "globalScope": false,
      "examRequired": null,
      "roiScore": 7,
      "stressScore": 3,
      "description": "India's drone industry went from illegal to ₹15,000 Cr in three years. Licensed drone pilots survey farmland, inspect power lines, deliver medicines to remote villages, and film Bollywood aerials. DGCA's liberalized drone rules created an entirely new profession — and India needs 100,000+ certified pilots by 2030.",
      "realityNote": "DGCA Remote Pilot Certificate is mandatory (10-day course, ~₹50K-1L). No college degree required. Starting pay for survey pilots is ₹4-8L. Specialized operators (LiDAR mapping, agricultural spraying) earn ₹12-25L. Starting your own drone services company is viable with ₹5-10L investment.",
      "semantic_tags": ["drone", "uav", "aerial", "remote pilot", "mapping", "surveying"],
      "keywords_negative": ["airplane pilot", "fighter pilot", "airline", "commercial pilot"],
      "domains": [
          {"name": "Certification", "skills": ["DGCA Regulations", "Airspace Management", "Flight Planning", "Emergency Procedures"], "topResource": "DGCA-approved RPTO course", "timeMonths": 1},
          {"name": "Flight Operations", "skills": ["Multirotor Operations", "Fixed-Wing UAV", "Payload Management", "FPV Flying"], "topResource": "Hands-on flight hours", "timeMonths": 3},
          {"name": "Specialization", "skills": ["Aerial Photography", "LiDAR/Photogrammetry", "Agricultural Spraying", "Infrastructure Inspection"], "topResource": "Industry certifications + projects", "timeMonths": 6}
      ],
      "topInstitutions": [
          {"name": "IIT Kanpur Drone Academy", "tier": 1, "city": "Kanpur", "state": "Uttar Pradesh", "fees_per_year": 100000, "cutoff_description": "Open enrollment", "placement_median": "₹8L", "type": "government"},
          {"name": "FlytBase Academy", "tier": 2, "city": "Pune", "state": "Maharashtra", "fees_per_year": 80000, "cutoff_description": "Open enrollment", "placement_median": "₹6L", "type": "private"},
          {"name": "Indira Gandhi Rashtriya Uran Akademi", "tier": 1, "city": "Rae Bareli", "state": "Uttar Pradesh", "fees_per_year": 50000, "cutoff_description": "Entrance exam", "placement_median": "₹7L", "type": "government"}
      ],
      "salaryRange": {"entry": "₹4-8 LPA", "mid": "₹12-25 LPA", "senior": "₹30-60 LPA (Own company)"}
  },
};
