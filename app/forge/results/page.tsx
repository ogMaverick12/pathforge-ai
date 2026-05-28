'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useForgeStore } from '@/stores/forge-store';
// Clerk imports — safe fallback when not configured
let useAuth: () => { isSignedIn: boolean } = () => ({ isSignedIn: false });
let UserButton: React.ComponentType<any> = () => null;
let SignInButton: React.ComponentType<any> = ({ children }: any) => children;
try {
  const clerk = require('@clerk/nextjs');
  if (clerk.useAuth) useAuth = clerk.useAuth;
  if (clerk.UserButton) UserButton = clerk.UserButton;
  if (clerk.SignInButton) SignInButton = clerk.SignInButton;
} catch {}
import { generateResults } from '@/lib/engines';
import type { CareerPath } from '@/lib/types';

import { ScoreBar } from '@/components/ScoreBar';
import { PathCard } from '@/components/PathCard';
import { generateFallbackResponse } from '@/lib/fallback-reasoning';

export default function ResultsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: 'var(--text-dim)' }}>Loading results...</p></div>}>
      <ResultsInner />
    </Suspense>
  );
}

function ResultsInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { profile, results, setResults } = useForgeStore();
  let isSignedIn = false;
  try { isSignedIn = useAuth().isSignedIn; } catch { isSignedIn = false; }
  
  const [expandedPath, setExpandedPath] = useState<string | null>('balanced');
  const [showToast, setShowToast] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cliHistory, setCliHistory] = useState<{sender: 'user' | 'ai', text: string}[]>([{sender: 'ai', text: "I am the PathForge Follow-up Engine. I can compare paths, explain risk factors, or help you pivot. Try asking: 'What if I fail my entrance exams?'"}]);


  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!profile || !results) return;
    setIsSaving(true);
    try {
      const res = await fetch('/api/paths/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, results })
      });
      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to save');
      }
    } catch (err) {
      alert('Error saving profile');
    } finally {
      setIsSaving(false);
    }
  };

  // Handle shared link decoding and AI generation
  useEffect(() => {
    const encoded = searchParams.get('p');
    if (encoded && !results && !isGenerating) {
      try {
        const decoded = JSON.parse(atob(encoded));
        setIsGenerating(true);
        fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ profile: decoded })
        })
        .then(res => res.json())
        .then(data => {
          if (data.error) throw new Error(data.error);
          setResults(data);
          setIsGenerating(false);
        })
        .catch(err => {
          console.error("AI Gen Failed, falling back to static:", err);
          const generated = generateResults(decoded);
          setResults(generated);
          setIsGenerating(false);
        });
      } catch { /* ignore bad params */ }
    }
  }, [searchParams, results, isGenerating, setResults]);

  if (!results) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        {isGenerating ? (
          <>
            <p style={{ color: 'var(--ember)', fontFamily: 'var(--font-mono)', fontSize: 14 }}>⚡ AI Engine is generating your paths...</p>
            <div className="loader"></div>
            <style jsx>{`
              .loader { width: 40px; height: 40px; border: 3px solid rgba(255, 100, 0, 0.2); border-top-color: var(--ember); border-radius: 50%; animation: spin 1s linear infinite; }
              @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
          </>
        ) : (
          <>
            <p style={{ color: 'var(--text-dim)' }}>No results yet.</p>
            <Link href="/forge" className="btn-primary" style={{ textDecoration: 'none' }}>⚡ Start Forging</Link>
          </>
        )}
      </div>
    );
  }

  const handleShare = () => {
    const encoded = btoa(JSON.stringify(profile));
    const url = `${window.location.origin}/forge/results?p=${encoded}`;
    navigator.clipboard.writeText(url);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const ToastMessage = isSaving ? 'Saving to dashboard...' : '✅ Saved Successfully!';

  const colorMap: Record<string, string> = { success: 'var(--success)', ember: 'var(--ember)', heat: 'var(--heat)' };

  return (
    <div className="results-page page-enter">
      {/* Print Header */}
      <div className="print-header">
        <h1>⚡ PathForge AI — Career Intelligence Report</h1>
        <p>{profile.name} · {profile.stream} · Class {profile.class_level} · Generated {new Date().toLocaleDateString()}</p>
      </div>

      {/* Top Nav */}
      <nav className="results-nav no-print">
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/icons/PathForgeAI.ico" alt="PathForge AI" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--ember)' }}>PATHFORGE</span>
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <button className="btn-ghost" onClick={() => router.push('/forge')} style={{ fontSize: 13 }}>✏️ Edit Profile</button>
          <button className="btn-ghost" onClick={handleShare} style={{ fontSize: 13 }}>🔗 Share</button>
          <button className="btn-ghost" onClick={() => window.print()} style={{ fontSize: 13 }}>📄 Export PDF</button>
          {isSignedIn ? (
            <>
              <button className="btn-primary" onClick={handleSave} disabled={isSaving} style={{ fontSize: 13, padding: '6px 12px' }}>
                {isSaving ? 'Saving...' : '💾 Save to Dashboard'}
              </button>
              <UserButton />
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="btn-ghost" style={{ fontSize: 13, color: 'var(--ember)' }}>Sign In to Save</button>
            </SignInButton>
          )}
        </div>
      </nav>

      <div className="results-container">
        {/* Header */}
        <header className="report-header stagger">
          <p className="section-label">CAREER INTELLIGENCE REPORT</p>
          <h1 className="display-heading" style={{ fontSize: 48 }}>
            {profile.name ? `${profile.name.toUpperCase()}'S` : 'YOUR'} PATH
          </h1>
          <p style={{ color: 'var(--text-dim)', marginTop: 8 }}>
            {profile.stream} · Class {profile.class_level} · {profile.marks}% · Dream: <strong style={{ color: 'var(--ember)' }}>{results.careerName}</strong>
          </p>
          {/* v2.0: Confidence Badge */}
          {results.confidence !== undefined && (
            <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', borderRadius: 20, background: results.confidence >= 0.7 ? 'rgba(0,200,100,0.12)' : results.confidence >= 0.4 ? 'rgba(255,180,0,0.12)' : 'rgba(255,60,60,0.12)', border: `1px solid ${results.confidence >= 0.7 ? 'var(--success)' : results.confidence >= 0.4 ? 'var(--warning)' : 'var(--danger)'}` }}>
              <span style={{ fontSize: 14 }}>{results.confidence >= 0.7 ? '🟢' : results.confidence >= 0.4 ? '🟡' : '🔴'}</span>
              <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: results.confidence >= 0.7 ? 'var(--success)' : results.confidence >= 0.4 ? 'var(--warning)' : 'var(--danger)' }}>
                {results.confidenceLabel || 'N/A'} confidence match
              </span>
            </div>
          )}
        </header>

        {/* v2.0: Career Description + Honest Truth (GAP-6) */}
        {(results.careerDescription || results.honestTruth) && (
          <section className="stagger" style={{ marginTop: 32 }}>
            <p className="section-label">📋 ABOUT THIS CAREER</p>
            {results.careerDescription && (
              <div className="card" style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-dim)' }}>{results.careerDescription}</p>
              </div>
            )}
            {results.honestTruth && (
              <div className="card card-warning" style={{ borderLeft: '4px solid var(--warning)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.05em', color: 'var(--warning)', marginBottom: 6 }}>
                  ⚡ HONEST TRUTH
                </h4>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-dim)' }}>{results.honestTruth}</p>
              </div>
            )}
          </section>
        )}

        {/* v2.0: Stream Eligibility */}
        {results.streamEligibility && results.streamEligibility.status !== 'ELIGIBLE' && (
          <section className="stagger" style={{ marginTop: 24 }}>
            <div className={`card ${results.streamEligibility.status === 'INELIGIBLE' ? 'card-danger' : 'card-success'}`}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.05em', marginBottom: 6, color: results.streamEligibility.status === 'INELIGIBLE' ? 'var(--danger)' : 'var(--success)' }}>
                {results.streamEligibility.status === 'INELIGIBLE' ? '🚫' : '✅'} STREAM ELIGIBILITY: {results.streamEligibility.status}
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-dim)' }}>{results.streamEligibility.reason}</p>
            </div>
          </section>
        )}

        {/* v2.1: Bridge Pathway (stream-switcher route) */}
        {results.bridgePath && (
          <section className="stagger" style={{ marginTop: 16 }}>
            <div className="card" style={{ borderLeft: '4px solid var(--ember)', background: 'rgba(255,100,0,0.04)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.05em', color: 'var(--ember)', marginBottom: 8 }}>
                🌉 YOUR BRIDGE PATHWAY
              </h4>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-dim)' }}>
                Since your current stream doesn't directly align, here's how to get there:
              </p>
              <div style={{ marginTop: 12, padding: '10px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ember)', letterSpacing: '0.02em' }}>
                {results.bridgePath}
              </div>
            </div>
          </section>
        )}

        {/* Reality Check */}
        {results.realityFlags.length > 0 && (
          <section className="stagger" style={{ marginTop: 40 }}>
            <p className="section-label">⚠️ REALITY CHECK</p>
            <div className="flags-grid">
              {results.realityFlags.map((flag, i) => (
                <div key={i} className={`card ${flag.type === 'danger' ? 'card-danger' : flag.type === 'success' ? 'card-success' : flag.type === 'info' ? 'card-info' : 'card-warning'}`}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.05em', marginBottom: 8, color: flag.type === 'danger' ? 'var(--danger)' : flag.type === 'success' ? 'var(--success)' : flag.type === 'info' ? 'var(--ember)' : 'var(--warning)' }}>
                    {flag.type === 'danger' ? '🚨' : flag.type === 'success' ? '✅' : flag.type === 'info' ? 'ℹ️' : '⚠️'} {flag.title}
                  </h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-dim)' }}>{flag.message}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Three Paths */}
        <section className="stagger" style={{ marginTop: 48 }}>
          <p className="section-label">YOUR THREE PATHS</p>
          <div className="paths-grid">
            {results.paths.map((path) => (
              <PathCard
                key={path.id}
                path={path}
                color={colorMap[path.color]}
                expanded={expandedPath === path.id}
                onToggle={() => setExpandedPath(expandedPath === path.id ? null : path.id)}
                onPivot={() => {
                  setCliInput(`I need to pivot away from the ${path.primaryRoute} route for my ${path.label} path. What is my contingency plan?`);
                  setTimeout(() => {
                    const btn = document.getElementById('cli-submit-btn');
                    if (btn) btn.click();
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }, 100);
                }}
              />
            ))}
          </div>
        </section>

        {/* v2.0: Exam Roadmap (Framework B) */}
        {results.examRoadmap && (
          <section className="stagger" style={{ marginTop: 48 }}>
            <p className="section-label">📝 EXAM ROADMAP — {results.examRoadmap.examName}</p>
            <div className="card" style={{ borderLeft: '4px solid var(--ember)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Eligibility</span>
                  <p style={{ fontSize: 14, color: 'var(--text)', marginTop: 4 }}>{results.examRoadmap.eligibility}</p>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Attempts</span>
                  <p style={{ fontSize: 14, color: 'var(--text)', marginTop: 4 }}>{results.examRoadmap.attempts}</p>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Your Probability</span>
                  <p style={{ fontSize: 14, color: 'var(--ember)', marginTop: 4, fontWeight: 700 }}>{results.examRoadmap.clearingProbability}%</p>
                </div>
              </div>
              {/* National Base Rate */}
              <div style={{ padding: '10px 14px', borderRadius: 8, background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.2)', marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: 'var(--warning)', fontFamily: 'var(--font-mono)' }}>📊 NATIONAL SUCCESS RATE</span>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 4 }}>{results.examRoadmap.examBaseRate}</p>
              </div>
              {/* Phases */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {results.examRoadmap.phases.map((phase, i) => (
                  <div key={i} style={{ padding: '12px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--ember)' }}>PHASE {i + 1}: {phase.name}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{phase.duration}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{phase.subjects.join(', ')}</p>
                  </div>
                ))}
              </div>
              {/* Reality Note */}
              <p style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 16, fontStyle: 'italic' }}>⚡ {results.examRoadmap.realityNote}</p>
            </div>
          </section>
        )}

        {/* v2.0: Portfolio Roadmap (Framework C) */}
        {results.portfolioRoadmap && (
          <section className="stagger" style={{ marginTop: 48 }}>
            <p className="section-label">🎨 PORTFOLIO & SKILL ROADMAP</p>
            <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Timeline</span>
                  <p style={{ fontSize: 14, color: 'var(--text)', marginTop: 4 }}>{results.portfolioRoadmap.timelineMonths} months</p>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Entry Income</span>
                  <p style={{ fontSize: 14, color: 'var(--ember)', marginTop: 4 }}>{results.portfolioRoadmap.incomeReality}</p>
                </div>
              </div>
              {/* Skill Acquisition Path */}
              <p style={{ fontSize: 12, fontFamily: 'var(--font-display)', color: 'var(--text)', letterSpacing: '0.05em', marginBottom: 12 }}>SKILL ACQUISITION PATH</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {results.portfolioRoadmap.skillAcquisitionPath.map((skill, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--success)' }}>{skill.skill}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{skill.duration}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>📚 {skill.resource} → 📦 {skill.deliverable}</p>
                  </div>
                ))}
              </div>
              {/* Portfolio Milestones */}
              <p style={{ fontSize: 12, fontFamily: 'var(--font-display)', color: 'var(--text)', letterSpacing: '0.05em', marginTop: 16, marginBottom: 8 }}>PORTFOLIO MILESTONES</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {results.portfolioRoadmap.portfolioMilestones.map((m, i) => (
                  <li key={i} style={{ fontSize: 13, color: 'var(--text-dim)', padding: '4px 0' }}>✅ {m}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Comparison Grid */}
        <section style={{ marginTop: 48 }}>
          <p className="section-label">PATH COMPARISON</p>
          <div className="comparison-table">
            <div className="comp-header">
              <div className="comp-label" />
              {results.paths.map(p => (
                <div key={p.id} className="comp-col-header" style={{ color: colorMap[p.color] }}>
                  {p.label}
                </div>
              ))}
            </div>
            {[
              { label: 'Probability', key: 'probability' },
              { label: 'ROI (10yr)', key: 'roi' },
              { label: 'Effort Required', key: 'effort' },
            ].map(row => (
              <div key={row.key} className="comp-row">
                <div className="comp-label mono">{row.label}</div>
                {results.paths.map(p => {
                  let val: number;
                  if (row.key === 'probability') {
                    val = p.probability;
                  } else if (row.key === 'roi') {
                    // Compute ROI from salary data
                    const parseSalary = (s: string): number => {
                      const match = s.match(/(\d+)/);
                      return match ? parseInt(match[1]) : 10;
                    };
                    const midSalary = parseSalary(p.salaryMid);
                    const instFee = p.institution?.fees_per_year ? p.institution.fees_per_year / 100000 : 2;
                    const timelineYrs = parseInt(p.timeline) || 4;
                    const totalCost = instFee * timelineYrs;
                    const tenYearEarnings = midSalary * 10;
                    val = Math.min(Math.round(((tenYearEarnings - totalCost) / Math.max(totalCost, 1)) * 10), 99);
                    val = Math.max(val, 15);
                  } else {
                    // Compute effort from career mode
                    const marksFit = Math.min(profile.marks / 90, 1);
                    const baseEffort = p.id === 'aggressive' ? 85 : p.id === 'balanced' ? 60 : 35;
                    val = Math.round(baseEffort + (1 - marksFit) * 15);
                    val = Math.min(val, 99);
                  }
                  return (
                    <div key={p.id} className="comp-cell">
                      <span className="mono" style={{ fontSize: 13, color: colorMap[p.color] }}>{val}{row.key === 'roi' ? 'x' : '%'}</span>
                      <ScoreBar value={Math.min(val, 100)} color={colorMap[p.color]} />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Scholarships */}
        {results.scholarships.length > 0 && (
          <section className="stagger" style={{ marginTop: 48 }}>
            <p className="section-label">💰 FUNDING YOUR PATH</p>
            <div className="scholarship-grid">
              {results.scholarships.map((match, i) => (
                <div key={i} className="card" style={{ borderLeftColor: match.tier === 'high' ? 'var(--success)' : match.tier === 'moderate' ? 'var(--ember)' : 'var(--iron)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{match.scholarship.name}</h4>
                      <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{match.scholarship.org}</p>
                    </div>
                    <span className={`badge ${match.tier === 'high' ? 'badge-success' : match.tier === 'moderate' ? 'badge-gold' : 'badge-silver'}`}>
                      {match.tier === 'high' ? '🏆 HIGH CHANCE' : match.tier === 'moderate' ? '⚡ MODERATE' : '🎯 REACH'}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 8 }}>{match.scholarship.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="mono" style={{ fontSize: 14, color: 'var(--ember)' }}>{match.scholarship.value}</span>
                    <a href={match.scholarship.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--ember)' }}>
                      Apply ↗
                    </a>
                  </div>
                  <p style={{ fontSize: 11, color: 'var(--iron)', marginTop: 8 }}>Match: {match.matchReason}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        
        {/* Follow-up CLI */}
        <section className="cli-section no-print" style={{ marginTop: 48, marginBottom: 16 }}>
          <p className="section-label">🧠 REASONING & FOLLOW-UP</p>
          <div className="cli-window">
            <div className="cli-history">
              {cliHistory.map((h, i) => (
                <div key={i} className={`cli-msg ${h.sender}`}>
                  <span className="sender">{h.sender === 'user' ? '👤' : '⚡'}</span>
                  <span className="text">{h.text}</span>
                </div>
              ))}
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              if (!cliInput.trim() || isTyping) return;
              const userText = cliInput;
              const newHistory = [...cliHistory, { sender: 'user' as const, text: userText }];
              setCliHistory(newHistory);
              setCliInput('');
              setIsTyping(true);
              
              try {
                const messages = newHistory.map(msg => ({
                  role: msg.sender === 'user' ? 'user' : 'assistant',
                  content: msg.text
                }));

                // Client-side timeout — if API takes >12s, abort and use fallback
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 12000);

                const res = await fetch('/api/chat', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  signal: controller.signal,
                  body: JSON.stringify({
                    messages,
                    context: { profile, paths: results.paths }
                  })
                });
                
                clearTimeout(timeoutId);
                const data = await res.json();
                
                if (data.useFallback || !data.text) {
                  // Use client-side fallback reasoning engine
                  const fallbackResponse = generateFallbackResponse(userText, {
                    profile,
                    paths: results.paths,
                    results
                  });
                  setCliHistory([...newHistory, { sender: 'ai' as const, text: fallbackResponse }]);
                } else {
                  setCliHistory([...newHistory, { sender: 'ai' as const, text: data.text }]);
                }
              } catch (err) {
                // Network error — use fallback reasoning
                const fallbackResponse = generateFallbackResponse(userText, {
                  profile,
                  paths: results.paths,
                  results
                });
                setCliHistory([...newHistory, { sender: 'ai' as const, text: fallbackResponse }]);
              } finally {
                setIsTyping(false);
              }
            }} className="cli-input-form">
              <span className="prompt">&gt;</span>
              <input type="text" value={cliInput} disabled={isTyping} onChange={e => setCliInput(e.target.value)} placeholder={isTyping ? "AI is thinking..." : "Ask about risks, failures, or pivoting..."} />
              <button type="submit" id="cli-submit-btn" style={{ display: 'none' }}>Send</button>
            </form>
          </div>
        </section>

        {/* CTAs */}
        <section className="cta-section no-print" style={{ marginTop: 64, marginBottom: 48 }}>
          <Link href="/dashboard" className="btn-primary" style={{ textDecoration: 'none', fontSize: 15 }}>📊 INSTITUTION DASHBOARD →</Link>
          <Link href="/dashboard/skills" className="btn-ghost" style={{ textDecoration: 'none' }}>🌳 EXPLORE SKILL TREE →</Link>
        </section>
      </div>

      {/* Toast */}
      <div className={`toast ${showToast ? 'visible' : ''}`}>{ToastMessage}</div>

      <style jsx>{`
        .results-page { min-height: 100vh; background: var(--bg); }
        .results-nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 16px 32px; border-bottom: 1px solid var(--border);
          position: sticky; top: 0; background: var(--bg); z-index: 50;
        }
        .results-container { max-width: 960px; margin: 0 auto; padding: 40px 24px; }
        .flags-grid { display: flex; flex-direction: column; gap: 12px; }
        .paths-grid { display: flex; flex-direction: column; gap: 16px; }
        .scholarship-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
        .cta-section { display: flex; gap: 16px; flex-wrap: wrap; }

        .comparison-table { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .comp-header, .comp-row { display: grid; grid-template-columns: 140px 1fr 1fr 1fr; gap: 1px; }
        .comp-header { border-bottom: 1px solid var(--border); }
        .comp-col-header { padding: 12px 16px; font-family: var(--font-display); font-size: 14px; letter-spacing: 0.05em; text-align: center; }
        .comp-label { padding: 12px 16px; font-size: 13px; color: var(--text-dim); }
        .comp-cell { padding: 12px 16px; display: flex; flex-direction: column; gap: 6px; }
        .comp-row + .comp-row { border-top: 1px solid var(--border); }

        @media (max-width: 768px) {
          .results-nav { padding: 12px 16px; flex-direction: column; gap: 12px; }
          .comparison-table { font-size: 11px; }
          .comp-header, .comp-row { grid-template-columns: 100px 1fr 1fr 1fr; }
        }
        .cli-window {
          background: #111;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          font-family: var(--font-mono);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .cli-history {
          max-height: 250px;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cli-msg { display: flex; gap: 12px; font-size: 13px; line-height: 1.5; }
        .cli-msg.ai .text { color: var(--text); }
        .cli-msg.user .text { color: var(--ember); }
        .cli-msg .sender { opacity: 0.7; }
        .cli-input-form {
          display: flex; gap: 12px; align-items: center;
          padding: 16px; border-top: 1px solid #333;
          background: #1a1a1a;
        }
        .cli-input-form .prompt { color: var(--ember); font-weight: bold; }
        .cli-input-form input {
          flex: 1; background: transparent; border: none; outline: none;
          color: white; font-family: var(--font-mono); font-size: 13px;
        }
        .cli-input-form input::placeholder { color: #555; }
      `}</style>
    </div>
  );
}


