// ============================================================
// PATHFORGE AI — TYPE DEFINITIONS (v4 — Master Prompt v2.0)
// ============================================================

import type { CareerType } from './career-types';

export type { CareerType };

export interface ForgeProfile {
  name: string;
  gender: "male" | "female" | "other" | "prefer_not_to_say";
  class_level: string;
  stream: string;
  city: string;
  marks: number;
  board: string;
  exam_score: number | null;
  trend: "improving" | "stable" | "declining";
  dream_job: string;
  priorities: string[];
  timeline: "urgent" | "normal" | "long-game";
  constraints: string[];
  abroad_open: "yes" | "no" | "if_funded" | "maybe" | "only_abroad";
  backup_openness: number;
  budget: string;
  loan_open: "yes" | "no" | "maybe";
  scholarship_exp: "never" | "applied" | "researching";
  deep_dream: string;
}

export interface CareerPath {
  id: "safe" | "balanced" | "aggressive";
  label: string;
  tagline: string;
  probability: number;
  careerTarget: string;
  primaryRoute: string;
  institution: Institution;
  timeline: string;
  salaryEntry: string;
  salaryMid: string;
  rationale: string;
  milestones: { name: string; contingency?: string }[];
  risks: string[];
  color: "success" | "ember" | "heat";
}

// ── FRAMEWORK B: Exam-Dependent ───────────────────────────────
export interface ExamRoadmap {
  examName: string;
  eligibility: string;
  attempts: string;
  phases: ExamPhase[];
  clearingProbability: number;
  examBaseRate: string;
  backupPlan: string;
  topCoaching: string[];
  selfStudyResources: string[];
  realityNote: string;
}

export interface ExamPhase {
  name: string;
  duration: string;
  subjects: string[];
  resources: string[];
  milestone: string;
}

// ── FRAMEWORK C: Portfolio/Skill-Dependent ─────────────────────
export interface PortfolioRoadmap {
  trainingInstitutions: { name: string; type: string; cost: string }[];
  skillAcquisitionPath: PortfolioMilestone[];
  portfolioMilestones: string[];
  communityEntryPoints: string[];
  incomeReality: string;
  timelineMonths: number;
}

export interface PortfolioMilestone {
  skill: string;
  duration: string;
  resource: string;
  deliverable: string;
}

// ── REALITY FLAGS ─────────────────────────────────────────────
export interface RealityFlag {
  type: "warning" | "danger" | "success" | "info";
  title: string;
  message: string;
}

export interface ScholarshipMatch {
  scholarship: import('./scholarship-database').Scholarship;
  score: number;
  tier: "high" | "moderate" | "reach";
  matchReason: string;
}

// ── STREAM ELIGIBILITY RESULT ─────────────────────────────────
export interface StreamEligibilityResult {
  status: "ELIGIBLE" | "INELIGIBLE" | "STREAM_AGNOSTIC";
  reason: string;
  alternatives?: string[];
}

// ── GENERATED RESULTS (v2.1 — supports all 3 frameworks) ─────
export interface GeneratedResults {
  careerId: string;
  careerName: string;
  careerType: CareerType;

  // Career context (GAP-6)
  careerDescription: string;
  honestTruth: string;

  // Confidence scoring
  confidence: number;
  confidenceLabel: string;

  // Stream eligibility
  streamEligibility: StreamEligibilityResult;

  // Framework A output
  paths: CareerPath[];

  // Framework B output (Type B careers)
  examRoadmap?: ExamRoadmap;

  // Framework C output (Type C careers)
  portfolioRoadmap?: PortfolioRoadmap;

  // Shared outputs
  realityFlags: RealityFlag[];
  scholarships: ScholarshipMatch[];
  skillDomains: import('./career-database').SkillDomain[];
  institutions: Institution[];
}

export interface Institution {
  name: string;
  tier: 1 | 2 | 3;
  city: string;
  state: string;
  fees_per_year: number;
  cutoff_description: string;
  placement_median: string;
  type: "government" | "private" | "deemed" | "global";
}
