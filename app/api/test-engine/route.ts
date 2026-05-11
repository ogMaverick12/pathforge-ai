// ============================================================
// PATHFORGE AI — TEST ENGINE API ENDPOINT
// Exposes the deterministic engine for automated stress testing
// ============================================================

import { NextResponse } from 'next/server';
import { generateResults } from '@/lib/engines';
import type { ForgeProfile } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const profile: ForgeProfile = await req.json();
    const results = generateResults(profile);
    return NextResponse.json(results);
  } catch (error: any) {
    console.error('Test engine error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
