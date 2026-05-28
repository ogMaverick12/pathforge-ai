// ═══════════════════════════════════════════════════════════════
// PATHFORGE AI — TF-IDF Semantic Similarity Engine
// Deterministic, zero-dependency text similarity for career matching
// ═══════════════════════════════════════════════════════════════

import { CAREERS, type CareerProfile } from './career-database';

// ── STOP WORDS ────────────────────────────────────────────────
const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with',
  'is','are','was','were','be','been','being','have','has','had','do',
  'does','did','will','would','could','should','can','may','might',
  'shall','must','need','it','its','this','that','these','those',
  'i','me','my','we','our','you','your','he','she','they','them',
  'who','what','which','where','when','how','why','all','each',
  'every','both','few','more','most','other','some','such','no',
  'not','only','own','same','so','than','too','very','just','also',
  'from','by','as','if','then','else','about','up','out','off',
  'over','under','again','further','once','here','there','into',
  'through','during','before','after','above','below','between',
]);

// ── TOKENIZER ─────────────────────────────────────────────────
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

// ── CORPUS & IDF COMPUTATION ──────────────────────────────────
interface CareerDocument {
  id: string;
  career: CareerProfile;
  tokens: string[];
  tf: Map<string, number>;
}

let corpus: CareerDocument[] = [];
let idf: Map<string, number> = new Map();
let corpusBuilt = false;

/**
 * Build the TF-IDF corpus from all careers.
 * Called lazily on first query.
 */
function buildCorpus(): void {
  if (corpusBuilt) return;

  const docs: CareerDocument[] = [];
  const docFreq = new Map<string, number>();
  const totalDocs = Object.keys(CAREERS).length;

  for (const [id, career] of Object.entries(CAREERS)) {
    // Build document text from all career fields
    const parts = [
      career.name,
      career.description,
      career.realityNote || '',
      ...career.aliases,
      ...(career.semantic_tags || []),
      career.category,
      career.domain || '',
      career.careerType || '',
    ];
    const text = parts.join(' ');
    const tokens = tokenize(text);

    // Compute term frequency
    const tf = new Map<string, number>();
    for (const token of tokens) {
      tf.set(token, (tf.get(token) || 0) + 1);
    }
    // Normalize TF by doc length
    const docLen = tokens.length || 1;
    for (const [term, count] of tf) {
      tf.set(term, count / docLen);
    }

    // Track document frequency
    const uniqueTerms = new Set(tokens);
    for (const term of uniqueTerms) {
      docFreq.set(term, (docFreq.get(term) || 0) + 1);
    }

    docs.push({ id, career, tokens, tf });
  }

  // Compute IDF: log(N / df)
  idf = new Map();
  for (const [term, df] of docFreq) {
    idf.set(term, Math.log(totalDocs / df));
  }

  corpus = docs;
  corpusBuilt = true;
}

/**
 * Compute TF-IDF cosine similarity between user query and each career.
 * Returns sorted scores for all careers.
 */
export function tfidfSimilarity(query: string): { id: string; career: CareerProfile; similarity: number }[] {
  buildCorpus();

  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  // Build query TF vector
  const queryTf = new Map<string, number>();
  for (const token of queryTokens) {
    queryTf.set(token, (queryTf.get(token) || 0) + 1);
  }
  const qLen = queryTokens.length;
  for (const [term, count] of queryTf) {
    queryTf.set(term, count / qLen);
  }

  // Build query TF-IDF vector
  const queryVec = new Map<string, number>();
  let queryMag = 0;
  for (const [term, tf] of queryTf) {
    const idfVal = idf.get(term) || 0;
    const tfidfVal = tf * idfVal;
    if (tfidfVal > 0) {
      queryVec.set(term, tfidfVal);
      queryMag += tfidfVal * tfidfVal;
    }
  }
  queryMag = Math.sqrt(queryMag);
  if (queryMag === 0) return [];

  // Score each career document
  const results: { id: string; career: CareerProfile; similarity: number }[] = [];

  for (const doc of corpus) {
    // Compute doc TF-IDF magnitude and dot product simultaneously
    let dotProduct = 0;
    let docMag = 0;

    for (const [term, tf] of doc.tf) {
      const idfVal = idf.get(term) || 0;
      const tfidfVal = tf * idfVal;
      docMag += tfidfVal * tfidfVal;

      // Only compute dot product if term exists in query
      const qVal = queryVec.get(term);
      if (qVal !== undefined) {
        dotProduct += tfidfVal * qVal;
      }
    }
    docMag = Math.sqrt(docMag);

    const similarity = (docMag > 0) ? dotProduct / (queryMag * docMag) : 0;
    results.push({ id: doc.id, career: doc.career, similarity });
  }

  results.sort((a, b) => b.similarity - a.similarity);
  return results;
}

/**
 * Reset corpus (for testing or when careers change).
 */
export function resetCorpus(): void {
  corpusBuilt = false;
  corpus = [];
  idf = new Map();
}
