import { CAREERS, type CareerProfile } from './career-database';
import { ALL_SCHOLARSHIPS as SCHOLARSHIPS, type Scholarship } from './scholarship-database';
import { tfidfSimilarity } from './tfidf-engine';
import type { ForgeProfile } from './types';

// ═══════════════════════════════════════════════════════════════
// PATHFORGE AI — SEMANTIC RAG ENGINE v5 (Multi-Signal Scoring)
// ═══════════════════════════════════════════════════════════════

// ── SEMANTIC KEYWORD MAP ──────────────────────────────────────
// Maps domain-specific terms to career IDs they should boost
const SEMANTIC_KEYWORDS: Record<string, string[]> = {
  // Tech keywords
  'ai': ['software_engineer', 'data_scientist', 'ai_researcher', 'startup_founder'],
  'artificial intelligence': ['ai_researcher', 'data_scientist', 'software_engineer'],
  'machine learning': ['ai_researcher', 'data_scientist', 'software_engineer'],
  'deep learning': ['ai_researcher', 'data_scientist'],
  'coding': ['software_engineer', 'game_developer', 'cybersecurity_engineer'],
  'programming': ['software_engineer', 'game_developer', 'data_scientist'],
  'tech': ['software_engineer', 'data_scientist', 'product_manager', 'startup_founder'],
  'software': ['software_engineer', 'cybersecurity_engineer', 'game_developer'],
  'app': ['software_engineer', 'product_manager', 'startup_founder'],
  'website': ['software_engineer', 'graphic_designer'],
  'hacking': ['cybersecurity_engineer', 'software_engineer'],
  'cyber': ['cybersecurity_engineer'],
  'cloud': ['cloud_architect', 'software_engineer'],
  'devops': ['cloud_architect', 'software_engineer'],
  'blockchain': ['blockchain_developer', 'software_engineer'],
  'crypto': ['blockchain_developer', 'quant_finance'],
  'web3': ['blockchain_developer', 'startup_founder'],
  'data': ['data_scientist', 'ai_researcher', 'software_engineer'],
  'analytics': ['data_scientist', 'quant_finance', 'product_manager'],
  'algorithm': ['software_engineer', 'data_scientist', 'quant_finance'],
  'robot': ['ai_researcher', 'space_scientist', 'electrician_electrical_engineer'],
  'automation': ['ai_researcher', 'software_engineer', 'electrician_electrical_engineer'],

  // Business keywords
  'startup': ['startup_founder', 'product_manager', 'software_engineer'],
  'founder': ['startup_founder', 'fashion_entrepreneur'],
  'entrepreneur': ['startup_founder', 'fashion_entrepreneur'],
  'ceo': ['startup_founder', 'product_manager'],
  'business': ['startup_founder', 'chartered_accountant', 'product_manager'],
  'company': ['startup_founder', 'product_manager', 'chartered_accountant'],
  'unicorn': ['startup_founder', 'quant_finance'],
  'build': ['startup_founder', 'software_engineer', 'architect_urban_planner'],
  'scale': ['startup_founder', 'product_manager', 'data_scientist'],
  'product': ['product_manager', 'startup_founder', 'graphic_designer'],
  'pm': ['product_manager', 'startup_founder'],
  'management': ['product_manager', 'sports_management', 'startup_founder'],
  'consulting': ['management_consultant', 'chartered_accountant'],
  'consultant': ['management_consultant'],
  'mckinsey': ['management_consultant'],
  'strategy': ['management_consultant', 'product_manager', 'startup_founder'],

  // Finance keywords
  'finance': ['chartered_accountant', 'quant_finance', 'startup_founder'],
  'trading': ['quant_finance', 'chartered_accountant'],
  'investment': ['quant_finance', 'chartered_accountant', 'startup_founder'],
  'banking': ['quant_finance', 'chartered_accountant'],
  'wall street': ['quant_finance'],
  'hedge fund': ['quant_finance'],
  'quant': ['quant_finance', 'data_scientist'],
  'stock': ['quant_finance', 'chartered_accountant'],
  'money': ['quant_finance', 'chartered_accountant', 'startup_founder'],
  'rich': ['quant_finance', 'startup_founder', 'management_consultant'],
  'billionaire': ['startup_founder', 'quant_finance'],
  'wealth': ['quant_finance', 'startup_founder', 'chartered_accountant'],
  'ca': ['chartered_accountant'],
  'audit': ['chartered_accountant'],
  'tax': ['chartered_accountant'],
  'accounting': ['chartered_accountant'],

  // Government keywords
  'ias': ['civil_services'],
  'ips': ['civil_services'],
  'upsc': ['civil_services', 'diplomat_international_relations'],
  'civil services': ['civil_services'],
  'government': ['civil_services', 'diplomat_international_relations'],
  'officer': ['civil_services', 'diplomat_international_relations'],
  'collector': ['civil_services'],
  'bureaucrat': ['civil_services'],
  'administration': ['civil_services'],
  'policy': ['civil_services', 'diplomat_international_relations'],
  'public service': ['civil_services', 'social_worker'],

  // Medical keywords
  'doctor': ['doctor_mbbs', 'pharmacist'],
  'medicine': ['doctor_mbbs', 'pharmacist', 'nurse'],
  'surgery': ['doctor_mbbs'],
  'hospital': ['doctor_mbbs', 'nurse', 'pharmacist'],
  'health': ['doctor_mbbs', 'nurse', 'pharmacist', 'yoga_wellness_instructor'],
  'nursing': ['nurse'],
  'pharmacy': ['pharmacist'],
  'veterinary': ['veterinarian'],
  'animal': ['veterinarian'],
  'ayurveda': ['ayurveda_practitioner', 'yoga_wellness_instructor'],

  // Creative keywords
  'design': ['graphic_designer', 'interior_designer', 'architect_urban_planner', 'product_manager'],
  'art': ['graphic_designer', 'animator', 'photographer'],
  'animation': ['animator', 'game_developer'],
  'film': ['filmmaker', 'animator', 'photographer'],
  'movie': ['filmmaker', 'animator'],
  'music': ['musician'],
  'photography': ['photographer'],
  'interior': ['interior_designer'],
  'fashion': ['fashion_entrepreneur'],
  'content': ['filmmaker', 'photographer', 'journalist', 'startup_founder'],
  'youtube': ['filmmaker', 'photographer', 'musician'],
  'creator': ['filmmaker', 'photographer', 'startup_founder'],
  'writing': ['journalist', 'content_writer'],
  'journalism': ['journalist'],

  // Science keywords
  'research': ['ai_researcher', 'research_scientist', 'space_scientist', 'marine_biologist'],
  'scientist': ['research_scientist', 'ai_researcher', 'space_scientist', 'environmental_scientist'],
  'space': ['space_scientist'],
  'rocket': ['space_scientist'],
  'isro': ['space_scientist', 'isro_scientist'],
  'nasa': ['space_scientist'],
  'ocean': ['marine_biologist', 'oceanographer'],
  'marine': ['marine_biologist'],
  'environment': ['environmental_scientist'],
  'climate': ['environmental_scientist', 'marine_biologist'],
  'physics': ['research_scientist', 'space_scientist'],
  'chemistry': ['research_scientist', 'pharmacist'],
  'biology': ['research_scientist', 'doctor_mbbs', 'marine_biologist'],

  // Sports keywords
  'cricket': ['cricketer'],
  'sports': ['sports_management', 'cricketer'],
  'esports': ['esports_professional', 'game_developer'],
  'gaming': ['esports_professional', 'game_developer'],
  'game': ['game_developer', 'esports_professional'],
  'athlete': ['cricketer', 'sports_management'],
  'ipl': ['sports_management', 'cricketer'],

  // Legal keywords
  'lawyer': ['lawyer'],
  'law': ['lawyer', 'civil_services'],
  'court': ['lawyer'],
  'legal': ['lawyer'],
  'justice': ['lawyer', 'civil_services'],
  'advocate': ['lawyer'],

  // Other keywords
  'teach': ['teacher_educator'],
  'teacher': ['teacher_educator'],
  'education': ['teacher_educator', 'startup_founder'],
  'diplomat': ['diplomat_international_relations'],
  'foreign': ['diplomat_international_relations'],
  'un': ['diplomat_international_relations', 'social_worker'],
  'ngo': ['social_worker'],
  'help': ['social_worker', 'doctor_mbbs', 'nurse'],
  'impact': ['social_worker', 'startup_founder', 'civil_services'],
  'yoga': ['yoga_wellness_instructor'],
  'wellness': ['yoga_wellness_instructor'],
  'architecture': ['architect_urban_planner'],
  'building': ['architect_urban_planner', 'civil_engineer'],
  'construction': ['civil_engineer'],
  'electrical': ['electrician_electrical_engineer'],
  'renewable': ['electrician_electrical_engineer', 'environmental_scientist'],
  'solar': ['electrician_electrical_engineer', 'environmental_scientist'],
  'ev': ['electrician_electrical_engineer'],

  // Defence & Government (expansion)
  'army': ['defence_officer'],
  'navy': ['merchant_navy', 'defence_officer'],
  'military': ['defence_officer'],
  'nda': ['defence_officer'],
  'defence': ['defence_officer'],
  'defense': ['defence_officer'],
  'merchant navy': ['merchant_navy'],
  'sailor': ['merchant_navy'],
  'shipping': ['merchant_navy'],
  'drdo': ['defence_officer', 'mechanical_engineer'],
  'barc': ['nuclear_engineer'],
  'nuclear': ['nuclear_engineer'],
  'ips officer': ['ips_officer'],
  'ifs officer': ['ifs_officer'],
  'rbi': ['rbi_grade_b'],
  'reserve bank': ['rbi_grade_b'],

  // Trades & Niche (expansion)
  'chef': ['chef'],
  'cooking': ['chef'],
  'culinary': ['chef'],
  'tattoo': ['tattoo_artist'],
  'plumber': ['plumber'],
  'plumbing': ['plumber'],
  'welding': ['welder'],
  'welder': ['welder'],
  'electrician': ['electrician'],
  'wiring': ['electrician'],
  'event': ['event_manager'],
  'wedding planner': ['event_manager'],
  'concert': ['event_manager', 'music_producer'],
  'music production': ['music_producer'],
  'producer': ['music_producer'],

  // Engineering expansion
  'biomedical': ['biomedical_engineer'],
  'petroleum': ['petroleum_engineer'],
  'oil gas': ['petroleum_engineer'],
  'mining': ['mining_engineer'],
  'food technology': ['food_technologist'],
  'food science': ['food_technologist'],
  'robotics': ['robotics_engineer'],
  'iot': ['iot_engineer'],
  'internet of things': ['iot_engineer'],
  'xr': ['xr_designer'],
  'virtual reality': ['xr_designer'],
  'augmented reality': ['xr_designer'],
  'prompt engineer': ['prompt_engineer'],

  // Media & Professional (expansion)
  'forensic accounting': ['forensic_accountant'],
  'fraud': ['forensic_accountant'],
  'meteorology': ['meteorologist'],
  'weather': ['meteorologist'],
  'archaeology': ['archaeologist'],
  'museum': ['museum_curator'],
  'curator': ['museum_curator'],
  'news': ['news_anchor', 'sports_journalist'],
  'anchor': ['news_anchor'],
  'advertising': ['advertising_professional'],
  'public relations': ['pr_specialist'],
  'pr': ['pr_specialist'],
  'professor': ['professor'],
  'academia': ['professor'],
  'edtech': ['edtech_professional'],

  // Sports expansion
  'sports medicine': ['sports_physiologist'],
  'sports science': ['sports_physiologist'],
  'sports journalism': ['sports_journalist'],
  'sports writer': ['sports_journalist'],

  // New niche careers
  'semiconductor': ['semiconductor_engineer'],
  'vlsi': ['semiconductor_engineer'],
  'chip design': ['semiconductor_engineer'],
  'asic': ['semiconductor_engineer'],
  'fpga': ['semiconductor_engineer'],
  'psychologist': ['clinical_psychologist'],
  'therapist': ['clinical_psychologist'],
  'mental health': ['clinical_psychologist'],
  'counseling': ['clinical_psychologist'],
  'cbt': ['clinical_psychologist'],
  'agritech': ['agricultural_engineer'],
  'agriculture': ['agricultural_engineer'],
  'smart farming': ['agricultural_engineer'],
  'precision agriculture': ['agricultural_engineer'],
  'data pipeline': ['data_engineer'],
  'etl': ['data_engineer'],
  'big data': ['data_engineer', 'data_scientist'],
  'spark': ['data_engineer'],
  'data warehouse': ['data_engineer'],
  'ethical hacker': ['ethical_hacker'],
  'pentester': ['ethical_hacker'],
  'bug bounty': ['ethical_hacker'],
  'red team': ['ethical_hacker'],
  'speech therapy': ['speech_therapist'],
  'speech pathologist': ['speech_therapist'],
  'slp': ['speech_therapist'],
  'stuttering': ['speech_therapist'],
  'genetic counselor': ['genetic_counselor'],
  'genomics': ['genetic_counselor'],
  'dna testing': ['genetic_counselor'],
  'urban planner': ['urban_planner'],
  'city planner': ['urban_planner'],
  'smart city': ['urban_planner'],
  'town planning': ['urban_planner'],
  'film editor': ['film_editor'],
  'video editor': ['film_editor'],
  'post production': ['film_editor'],
  'color grading': ['film_editor'],
  'drone pilot': ['drone_pilot'],
  'uav': ['drone_pilot'],
  'drone operator': ['drone_pilot'],
};

// ── INTENT CLASSIFIER ─────────────────────────────────────────
// Classifies user's dream into action-oriented intents
type Intent = 'build' | 'heal' | 'teach' | 'create' | 'lead' | 'analyze' | 'compete' | 'protect' | 'discover' | 'earn';

const INTENT_PATTERNS: Record<Intent, RegExp> = {
  build:    /\b(build|create|start|launch|found|make|develop|ship|code|engineer)\b/i,
  heal:     /\b(heal|cure|treat|save lives|patient|surgery|medicine|hospital|health)\b/i,
  teach:    /\b(teach|educate|mentor|train|tutor|coach|guide|professor)\b/i,
  create:   /\b(design|art|draw|paint|animate|film|photo|music|write|creative|content)\b/i,
  lead:     /\b(lead|manage|run|govern|officer|president|ceo|director|head)\b/i,
  analyze:  /\b(analyze|research|study|discover|experiment|data|math|solve|logic)\b/i,
  compete:  /\b(compete|win|champion|tournament|sport|game|rank|beat|race)\b/i,
  protect:  /\b(protect|defend|secure|law|justice|rights|safe|hack|cyber)\b/i,
  discover: /\b(discover|explore|space|ocean|nature|universe|planet|deep sea)\b/i,
  earn:     /\b(earn|rich|money|salary|income|wealth|billion|crore|lakh|financial freedom)\b/i,
};

const INTENT_CAREER_BOOSTS: Record<Intent, string[]> = {
  build:    ['startup_founder', 'software_engineer', 'product_manager', 'architect_urban_planner', 'civil_engineer'],
  heal:     ['doctor_mbbs', 'nurse', 'pharmacist', 'veterinarian', 'ayurveda_practitioner', 'yoga_wellness_instructor'],
  teach:    ['teacher_educator', 'research_scientist', 'ai_researcher'],
  create:   ['graphic_designer', 'animator', 'filmmaker', 'photographer', 'musician', 'interior_designer', 'fashion_entrepreneur', 'game_developer'],
  lead:     ['civil_services', 'management_consultant', 'product_manager', 'startup_founder', 'diplomat_international_relations'],
  analyze:  ['data_scientist', 'ai_researcher', 'quant_finance', 'research_scientist', 'chartered_accountant'],
  compete:  ['cricketer', 'esports_professional', 'sports_management', 'lawyer'],
  protect:  ['cybersecurity_engineer', 'lawyer', 'civil_services', 'diplomat_international_relations'],
  discover: ['space_scientist', 'marine_biologist', 'environmental_scientist', 'research_scientist'],
  earn:     ['quant_finance', 'startup_founder', 'management_consultant', 'software_engineer', 'chartered_accountant'],
};

// ── THEME ANALYZER (Enhanced v5) ──────────────────────────────
type Theme = 'wealth' | 'impact' | 'fame' | 'stability' | 'freedom' | 'power' | 'mastery' | 'adventure' | 'legacy' | 'none';

function analyzeTheme(text: string): Theme {
  const t = text.toLowerCase();
  if (t.match(/\b(billion|rich|wealth|money|crore|salary|income|financial freedom|lakh|earn|trading|hedge)\b/)) return 'wealth';
  if (t.match(/\b(help|change|solve|world|impact|society|poor|save|millions|humanity|improve)\b/)) return 'impact';
  if (t.match(/\b(famous|audience|followers|youtube|star|known|celebrity|viral|influence)\b/)) return 'fame';
  if (t.match(/\b(stable|secure|safe|government|pension|peaceful|guaranteed|permanent)\b/)) return 'stability';
  if (t.match(/\b(free|freedom|independent|own boss|no boss|remote|travel|nomad)\b/)) return 'freedom';
  if (t.match(/\b(power|control|lead|govern|rule|authority|minister|president|officer)\b/)) return 'power';
  if (t.match(/\b(best|master|expert|genius|pioneer|world-class|top|greatest)\b/)) return 'mastery';
  if (t.match(/\b(explore|discover|adventure|space|ocean|travel|abroad|new|unknown)\b/)) return 'adventure';
  if (t.match(/\b(legacy|build|create|lasting|generation|history|remember|company)\b/)) return 'legacy';
  return 'none';
}

const THEME_CATEGORY_BOOSTS: Record<Theme, string[]> = {
  wealth:    ['Financial', 'Entrepreneurial', 'Technical'],
  impact:    ['Research', 'Other', 'Government'],
  fame:      ['Creative', 'Other'],
  stability: ['Government', 'Financial', 'Technical'],
  freedom:   ['Entrepreneurial', 'Creative', 'Technical'],
  power:     ['Government', 'Financial', 'Entrepreneurial'],
  mastery:   ['Research', 'Technical'],
  adventure: ['Research', 'Other', 'Hybrid'],
  legacy:    ['Entrepreneurial', 'Research', 'Government'],
  none:      [],
};

// ── PRIORITY MAPPER ───────────────────────────────────────────
// Maps user priority selections to career category boosts
const PRIORITY_CAREER_MAP: Record<string, string[]> = {
  '💰 High Salary': ['quant_finance', 'software_engineer', 'management_consultant', 'startup_founder', 'data_scientist', 'ai_researcher'],
  '🏆 Prestige': ['civil_services', 'doctor_mbbs', 'management_consultant', 'lawyer', 'diplomat_international_relations', 'space_scientist'],
  '❤️ Passion': [], // No specific boost — let dream job drive it
  '🛡️ Job Security': ['civil_services', 'doctor_mbbs', 'chartered_accountant', 'nurse', 'teacher_educator'],
  '🌍 Travel/Global': ['diplomat_international_relations', 'management_consultant', 'startup_founder', 'software_engineer', 'filmmaker'],
  '🚀 Entrepreneurship': ['startup_founder', 'fashion_entrepreneur', 'product_manager', 'software_engineer'],
  '🏠 Stay in India': ['civil_services', 'chartered_accountant', 'doctor_mbbs', 'lawyer', 'teacher_educator'],
  '⏱️ Work-Life Balance': ['teacher_educator', 'graphic_designer', 'product_manager', 'data_scientist'],
};

// ── MAIN RETRIEVAL FUNCTION ───────────────────────────────────
/**
 * RAG Engine v5: Multi-Signal Semantic Career Retrieval
 * 
 * Scores each career using 6 independent signals:
 * 1. Direct alias match (keyword overlap)
 * 2. Semantic keyword mapping (domain terms → career IDs)
 * 3. Intent classification (what action does user want to take?)
 * 4. Theme analysis (what deep motivation drives them?)
 * 5. Priority weighting (user-selected life priorities)
 * 6. Fit penalties (stream, marks, budget constraints)
 */
export function retrieveRelevantCareers(profile: ForgeProfile, topK = 8): CareerProfile[] {
  const dreamJobNorm = profile.dream_job.toLowerCase().trim();
  const deepDreamNorm = (profile.deep_dream || '').toLowerCase().trim();
  const combinedInput = `${dreamJobNorm} ${deepDreamNorm}`;
  const inputTokens = combinedInput.split(/[^a-z0-9]+/).filter(w => w.length > 1);

  // Pre-compute TF-IDF similarities for this query
  const tfidfResults = tfidfSimilarity(combinedInput);
  const tfidfScores = new Map(tfidfResults.map(r => [r.id, r.similarity]));

  // Classify user intent
  const detectedIntents: Intent[] = [];
  for (const [intent, pattern] of Object.entries(INTENT_PATTERNS)) {
    if (pattern.test(combinedInput)) {
      detectedIntents.push(intent as Intent);
    }
  }

  // Analyze theme
  const theme = analyzeTheme(deepDreamNorm || dreamJobNorm);

  // Score each career
  const scores: { career: CareerProfile; score: number; matchSignals: string[] }[] = [];

  for (const [id, career] of Object.entries(CAREERS)) {
    let score = 0;
    const matchSignals: string[] = [];

    // ── Signal 1: Alias match (direct keyword overlap) ──────
    const allAliases = [career.name.toLowerCase(), ...career.aliases];
    let bestAliasMatch = 0;

    for (const alias of allAliases) {
      // Exact substring match (strongest signal) — require alias >= 3 chars to prevent false positives
      if (alias.length >= 3 && (dreamJobNorm.includes(alias) || alias.includes(dreamJobNorm))) {
        bestAliasMatch = Math.max(bestAliasMatch, 100);
      }

      // Word-level overlap
      const aliasTokens = alias.split(/[^a-z0-9]+/).filter(w => w.length > 1);
      let matchCount = 0;
      for (const at of aliasTokens) {
        if (inputTokens.includes(at)) matchCount++;
      }
      if (aliasTokens.length > 0) {
        const overlapScore = (matchCount / aliasTokens.length) * 80;
        bestAliasMatch = Math.max(bestAliasMatch, overlapScore);
      }
    }
    score += bestAliasMatch;

    // ── Signal 2: Semantic keyword mapping ───────────────────
    let semanticBoost = 0;
    for (const token of inputTokens) {
      const matchedCareers = SEMANTIC_KEYWORDS[token];
      if (matchedCareers && matchedCareers.includes(id)) {
        semanticBoost += 25;
      }
    }
    // Also check bigrams (e.g., "machine learning", "hedge fund")
    for (let i = 0; i < inputTokens.length - 1; i++) {
      const bigram = `${inputTokens[i]} ${inputTokens[i + 1]}`;
      const matchedCareers = SEMANTIC_KEYWORDS[bigram];
      if (matchedCareers && matchedCareers.includes(id)) {
        semanticBoost += 40;
      }
    }
    score += Math.min(semanticBoost, 80); // Cap semantic boost

    // ── Signal 3: Intent classification ─────────────────────
    for (const intent of detectedIntents) {
      if (INTENT_CAREER_BOOSTS[intent].includes(id)) {
        score += 20;
      }
    }

    // ── Signal 4: Theme analysis ────────────────────────────
    if (theme !== 'none' && THEME_CATEGORY_BOOSTS[theme].includes(career.category)) {
      score += 15;
    }

    // ── Signal 5: Priority weighting ────────────────────────
    if (profile.priorities && profile.priorities.length > 0) {
      for (const priority of profile.priorities) {
        const boostedCareers = PRIORITY_CAREER_MAP[priority];
        if (boostedCareers && boostedCareers.includes(id)) {
          score += 12;
        }
      }
    }

    // ── Signal 6: Semantic tag match (v2.0) ───────────────────
    if (career.semantic_tags && career.semantic_tags.length > 0) {
      for (const tag of career.semantic_tags) {
        const tagTokens = tag.toLowerCase().split(/\s+/);
        if (tagTokens.every(t => inputTokens.includes(t))) {
          score += 20;
        }
      }
    }

    // ── Signal 7: NEGATIVE keyword penalty (BUG-004 FIX) ────
    // If the user's input matches a career's negative keywords,
    // apply a heavy penalty to prevent cross-domain hallucinations.
    if (career.keywords_negative && career.keywords_negative.length > 0) {
      for (const negKw of career.keywords_negative) {
        const negTokens = negKw.toLowerCase().split(/\s+/);
        let negMatch = false;
        if (negTokens.every(nt => inputTokens.includes(nt))) {
          negMatch = true;
        }
        if (combinedInput.includes(negKw.toLowerCase())) {
          negMatch = true;
        }
        if (negMatch) {
          score -= 100;  // Hard penalty — effectively disqualifies
          matchSignals.push(`NEGATIVE:${negKw}`);
        }
      }
    }

    // ── Signal 8: Fit penalties (stream, marks) ─────────────
    if (!career.streams.includes(profile.stream)) {
      score -= 30;
    }
    if (profile.marks < career.minMarksStretch - 15) {
      score -= 20;
    }

    // ── Signal 9: TF-IDF corpus similarity ──────────────────
    // Provides matching signal for careers without manual keyword maps
    const tfidfMatch = tfidfScores.get(id);
    if (tfidfMatch && tfidfMatch > 0.05) {
      const tfidfBoost = Math.round(tfidfMatch * 60); // Scale 0-60
      score += tfidfBoost;
      if (tfidfBoost >= 20) matchSignals.push(`TFIDF:${tfidfBoost}`);
    }

    scores.push({ career, score, matchSignals });
  }

  // Sort by highest score (best match first)
  scores.sort((a, b) => b.score - a.score);

  // Return top K
  return scores.slice(0, topK).map(s => s.career);
}

/**
 * RAG Engine v2: Returns careers WITH scores for confidence calculation
 */
export function retrieveRelevantCareersWithScores(profile: ForgeProfile, topK = 8): { career: CareerProfile; score: number; matchSignals: string[] }[] {
  const dreamJobNorm = profile.dream_job.toLowerCase().trim();
  const deepDreamNorm = (profile.deep_dream || '').toLowerCase().trim();
  const combinedInput = `${dreamJobNorm} ${deepDreamNorm}`;
  const allTokens = combinedInput.split(/[^a-z0-9]+/).filter(w => w.length > 1);

  // Pre-compute TF-IDF similarities
  const tfidfResults = tfidfSimilarity(combinedInput);
  const tfidfScores = new Map(tfidfResults.map(r => [r.id, r.similarity]));

  const detectedIntents: Intent[] = [];
  for (const [intent, pattern] of Object.entries(INTENT_PATTERNS)) {
    if (pattern.test(combinedInput)) {
      detectedIntents.push(intent as Intent);
    }
  }

  const theme = analyzeTheme(deepDreamNorm || dreamJobNorm);
  const scores: { career: CareerProfile; score: number; matchSignals: string[] }[] = [];

  for (const [id, career] of Object.entries(CAREERS)) {
    let score = 0;
    const matchSignals: string[] = [];

    // Signal 1: Alias match
    const allAliases = [career.name.toLowerCase(), ...career.aliases];
    let bestAliasMatch = 0;
    for (const alias of allAliases) {
      if (alias.length >= 3 && (dreamJobNorm.includes(alias) || alias.includes(dreamJobNorm))) {
        bestAliasMatch = Math.max(bestAliasMatch, 100);
      }
      const aliasTokens = alias.split(/[^a-z0-9]+/).filter(w => w.length > 1);
      let matchCount = 0;
      for (const at of aliasTokens) {
        if (allTokens.includes(at)) matchCount++;
      }
      if (aliasTokens.length > 0) {
        const overlapScore = (matchCount / aliasTokens.length) * 80;
        bestAliasMatch = Math.max(bestAliasMatch, overlapScore);
      }
    }
    score += bestAliasMatch;

    // Signal 2: Semantic keyword mapping
    let semanticBoost = 0;
    for (const token of allTokens) {
      const matchedCareers = SEMANTIC_KEYWORDS[token];
      if (matchedCareers && matchedCareers.includes(id)) semanticBoost += 25;
    }
    for (let i = 0; i < allTokens.length - 1; i++) {
      const bigram = `${allTokens[i]} ${allTokens[i + 1]}`;
      const matchedCareers = SEMANTIC_KEYWORDS[bigram];
      if (matchedCareers && matchedCareers.includes(id)) semanticBoost += 40;
    }
    score += Math.min(semanticBoost, 80);

    // Signal 3: Intent classification
    for (const intent of detectedIntents) {
      if (INTENT_CAREER_BOOSTS[intent].includes(id)) score += 20;
    }

    // Signal 4: Theme analysis
    if (theme !== 'none' && THEME_CATEGORY_BOOSTS[theme].includes(career.category)) score += 15;

    // Signal 5: Priority weighting
    if (profile.priorities) {
      for (const priority of profile.priorities) {
        const boostedCareers = PRIORITY_CAREER_MAP[priority];
        if (boostedCareers && boostedCareers.includes(id)) score += 12;
      }
    }

    // Signal 6: Semantic tag match
    if (career.semantic_tags) {
      for (const tag of career.semantic_tags) {
        const tagTokens = tag.toLowerCase().split(/\s+/);
        if (tagTokens.every(t => allTokens.includes(t))) score += 20;
      }
    }

    // Signal 7: NEGATIVE keyword penalty (BUG-004)
    if (career.keywords_negative) {
      for (const negKw of career.keywords_negative) {
        const negTokens = negKw.toLowerCase().split(/\s+/);
        if (negTokens.every(nt => allTokens.includes(nt)) || combinedInput.includes(negKw.toLowerCase())) {
          score -= 100;
          matchSignals.push(`NEGATIVE:${negKw}`);
        }
      }
    }

    // Signal 8: Fit penalties
    if (!career.streams.includes(profile.stream)) score -= 30;
    if (profile.marks < career.minMarksStretch - 15) score -= 20;

    // Signal 9: TF-IDF corpus similarity
    const tfidfMatch = tfidfScores.get(id);
    if (tfidfMatch && tfidfMatch > 0.05) {
      const tfidfBoost = Math.round(tfidfMatch * 60);
      score += tfidfBoost;
      if (tfidfBoost >= 20) matchSignals.push(`TFIDF:${tfidfBoost}`);
    }

    scores.push({ career, score, matchSignals });
  }

  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, topK);
}

/**
 * RAG Engine: Retrieves scholarships with domain gating (BUG-006 FIX)
 */
export function retrieveRelevantScholarships(profile: ForgeProfile, domain?: string, topK = 5): Scholarship[] {
  const isAbroadOpen = profile.abroad_open === 'yes' || profile.abroad_open === 'if_funded' || profile.abroad_open === 'only_abroad';

  const matches = SCHOLARSHIPS.filter(s => {
    if (s.criteria.streams && !s.criteria.streams.includes(profile.stream)) return false;
    if (s.criteria.minMarks && profile.marks < s.criteria.minMarks - 10) return false;
    if (s.criteria.abroadRequired && !isAbroadOpen) return false;
    // Domain gating (BUG-006)
    if (domain && (s as any).eligible_domains && !(s as any).eligible_domains.includes(domain)) return false;
    if (domain && (s as any).ineligible_domains && (s as any).ineligible_domains.includes(domain)) return false;
    return true;
  });

  return matches.slice(0, topK);
}
