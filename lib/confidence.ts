// ============================================================
// PATHFORGE AI — CONFIDENCE SCORING (Master Prompt v2.0)
// ============================================================

export function getConfidenceLevel(score: number): { label: string; color: string } {
  if (score >= 0.7) return { label: "High confidence", color: "success" };
  if (score >= 0.4) return { label: "Good confidence", color: "ember" };
  return { label: "Low confidence — results may not fully match your intent", color: "danger" };
}

export function getConfidenceEmoji(score: number): string {
  if (score >= 0.7) return "🟢";
  if (score >= 0.4) return "🟡";
  return "🔴";
}
