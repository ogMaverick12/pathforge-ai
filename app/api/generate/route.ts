// Removed AI SDK dependencies to avoid 404 routing errors on NVIDIA NIM.
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { CAREERS } from '@/lib/career-database';
import { getInstitutions, generateRealityFlags, matchScholarships, generateResults } from '@/lib/engines';
import { retrieveRelevantCareers } from '@/lib/rag-engine';
import type { ForgeProfile, GeneratedResults, CareerPath } from '@/lib/types';
import fs from 'fs';
import path from 'path';

const institutionDbText = fs.readFileSync(path.join(process.cwd(), 'pathforge_institution_database.md'), 'utf-8');

// Raw fetch to be used instead.

export async function POST(req: Request) {
  let profile: ForgeProfile | null = null;
  try {
    const body = await req.json();
    if (!body || !body.profile) {
      return NextResponse.json({ error: 'Missing profile data' }, { status: 400 });
    }
    const validatedProfile = body.profile as ForgeProfile;
    profile = validatedProfile;

    let topCareers = retrieveRelevantCareers(validatedProfile, 8);
    topCareers = topCareers.filter(c => {
      const dbCareer = CAREERS[c.id];
      if (dbCareer && !dbCareer.streams.includes(validatedProfile.stream)) {
        return false;
      }
      return true;
    });
    
    if (topCareers.length < 3) {
      topCareers = retrieveRelevantCareers(validatedProfile, 10);
    }

    const availableCareers = topCareers.map((data) => ({
      id: data.id,
      name: data.name,
      category: data.category,
      timeline: data.timeline,
    }));

    const systemPrompt = `You are PathForge AI, an elite career strategist.
Your task is to generate 3 distinct career paths (Safe, Balanced, Dream) for the user based on their profile.

Available Career IDs to choose from:
${JSON.stringify(availableCareers, null, 2)}

Institution Database Context (Extract realistic institutions from here):
${institutionDbText}

Rules:
1. Select exactly 3 valid Career IDs from the provided list.
2. The 'safe' path must have a probability between 75-95%. It should logically fit their marks/stream.
3. The 'balanced' path should have a probability between 50-75%. Higher leverage, moderate risk.
4. The 'aggressive' (dream) path should have a probability between 10-45%. High risk, max reward.
5. Provide a realistic rationale and custom milestones for each path.
6. Crucially, select ONE exact institution name from the "Institution Database Context" provided above that perfectly matches the career, budget, and region of the user for each path.`;

    const userPrompt = `User Profile:
- Stream: ${validatedProfile.stream}
- Marks: ${validatedProfile.marks}%
- Budget: ${validatedProfile.budget}
- Timeline: ${validatedProfile.timeline}
- Open to Abroad: ${validatedProfile.abroad_open}
- Career Trend: ${validatedProfile.trend}
- Dream Job: ${validatedProfile.dream_job}
- Deep Dream/Motivation: ${validatedProfile.deep_dream}

Generate the paths according to the schema. Output strictly valid JSON and nothing else. No markdown formatting, no backticks. The JSON must have a single root object with a "paths" array of exactly 3 objects.
Schema:
{
  "paths": [
    {
      "id": "safe" | "balanced" | "aggressive",
      "label": "string",
      "tagline": "string",
      "probability": number,
      "careerId": "string (the ID of the career chosen)",
      "institutionName": "string (the exact name of the institution chosen from the provided context)",
      "rationale": "string",
      "milestones": [
        { "name": "string", "contingency": "string (optional)" }
      ]
    }
  ]
}`;

    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey || apiKey === 'dummy_key') {
      console.log('No NVIDIA API key configured. Falling back to local deterministic engine.');
      const localResults = generateResults(profile);
      return NextResponse.json(localResults);
    }

    let text = "";
    try {
      const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'meta/llama-3.1-70b-instruct',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`NVIDIA API Error: ${response.status} ${await response.text()}`);
      }

      const data = await response.json();
      text = data.choices[0]?.message?.content || "";
    } catch (apiError) {
      console.warn("NVIDIA API call failed, falling back to local deterministic engine:", apiError);
      const localResults = generateResults(validatedProfile);
      return NextResponse.json(localResults);
    }

    let parsedData;
    try {
      // Clean markdown blocks if LLM still includes them
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleanText);
    } catch (parseError) {
      console.warn("Failed to parse NVIDIA API response, falling back to local deterministic engine:", parseError);
      const localResults = generateResults(validatedProfile);
      return NextResponse.json(localResults);
    }

    const finalPaths: CareerPath[] = [];
    const colors = { safe: 'success', balanced: 'ember', aggressive: 'heat' } as const;
    let allInstitutions: any[] = [];
    let mainCareerId = parsedData.paths[0]?.careerId || 'software_engineer';

    for (const pathData of parsedData.paths) {
      const careerDb = CAREERS[pathData.careerId];
      if (!careerDb) continue; 

      let availableInstitutions = getInstitutions(pathData.careerId);
      if (validatedProfile.abroad_open === "only_abroad") {
        const globalOnly = availableInstitutions.filter(i => i.type === "global");
        if (globalOnly.length > 0) availableInstitutions = globalOnly;
      }
      
      const sortedByFees = [...availableInstitutions].sort((a,b) => a.fees_per_year - b.fees_per_year);
      
      // Match LLM selected institution with our backend list, fallback to sorting
      let targetInst = availableInstitutions.find(i => i.name.toLowerCase() === pathData.institutionName.toLowerCase() || pathData.institutionName.toLowerCase().includes(i.name.toLowerCase()));
      
      if (!targetInst) {
        if (pathData.id === 'safe') targetInst = availableInstitutions.filter(i => i.tier >= 2).sort((a,b) => a.fees_per_year - b.fees_per_year)[0] || sortedByFees[sortedByFees.length - 1] || sortedByFees[0];
        else if (pathData.id === 'balanced') targetInst = availableInstitutions.filter(i => i.tier <= 2)[0] || availableInstitutions[0];
        else targetInst = availableInstitutions[0];
      }

      // push only unique institutions to allInstitutions
      availableInstitutions.forEach(inst => {
          if(!allInstitutions.find(a => a.name === inst.name)) {
              allInstitutions.push(inst);
          }
      });

      finalPaths.push({
        id: pathData.id,
        label: pathData.label.toUpperCase(),
        tagline: pathData.tagline,
        probability: pathData.probability,
        careerTarget: careerDb.name,
        primaryRoute: `${targetInst.name} → ${careerDb.name}`,
        institution: targetInst,
        timeline: `${careerDb.timeline} years`,
        salaryEntry: careerDb.salaryRange.entry,
        salaryMid: careerDb.salaryRange.mid,
        rationale: pathData.rationale,
        milestones: pathData.milestones,
        risks: [careerDb.realityNote, `AI Assessed Probability: ${pathData.probability}%`],
        color: colors[pathData.id as keyof typeof colors] || 'success'
      });
    }

    const mainCareer = CAREERS[mainCareerId] || CAREERS['software_engineer'];

    const finalResults: GeneratedResults = {
      careerId: mainCareerId,
      careerName: mainCareer.name,
      careerType: mainCareer.careerType || "A",
      careerDescription: mainCareer.description,
      honestTruth: mainCareer.realityNote,
      confidence: 0.7,
      confidenceLabel: "Good",
      streamEligibility: { status: "ELIGIBLE", reason: "AI-generated path" },
      paths: finalPaths,
      realityFlags: generateRealityFlags(validatedProfile, mainCareerId),
      scholarships: matchScholarships(validatedProfile),
      skillDomains: mainCareer.domains,
      institutions: allInstitutions
    };

    return NextResponse.json(finalResults);
  } catch (error) {
    console.error('Generation API Error:', error);
    try {
      if (profile) {
        console.log('Attempting local deterministic fallback due to generation processing error.');
        const localResults = generateResults(profile);
        return NextResponse.json(localResults);
      }
      return NextResponse.json({ error: "Failed to generate dynamic paths. Profile not loaded." }, { status: 500 });
    } catch (fallbackError) {
      console.error('Local generation fallback failed:', fallbackError);
      return NextResponse.json({ error: "Failed to generate dynamic paths." }, { status: 500 });
    }
  }
}
