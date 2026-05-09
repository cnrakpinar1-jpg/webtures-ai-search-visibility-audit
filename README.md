# Webtures AI Search Visibility Mini Audit

A proof-of-work GEO / AI Search Visibility audit prepared by **Çınar Akpınar** for a Visibility Intelligence / AI Analyst / AI-native Growth role at Webtures.

## Purpose

A single-page report that evaluates how brands appear across AI answer engines (ChatGPT, Gemini, Perplexity) and modern search environments (Google AI Overviews). It focuses on visibility, brand mention, position, context clarity, GEO relevance, and source quality.

## Why I built this

I wanted to demonstrate, in concrete form, how I think about visibility in the AI search era — methodology, scoring, observation, and the difference between traditional SEO ranking and AI answer presence. The project is intentionally exploratory: it shows the *shape* of an audit I would run for Webtures, not a finished engagement.

## Methodology

- The same query set is tested across selected platforms: **ChatGPT, Gemini, Perplexity, Google**.
- Each observation is **manually reviewed** to avoid unreliable scraping.
- Each row is scored using a transparent, weighted model (below).
- Notes capture qualitative context — competitors, framing, source mix.

## Scoring model

All component scores are on a **0 – 10** scale and rounded to one decimal place.

| Criterion        | Weight |
| ---------------- | ------ |
| Brand Mention    | 25%    |
| Brand Position   | 20%    |
| Context Clarity  | 20%    |
| GEO Relevance    | 20%    |
| Source Quality   | 15%    |

- **Mention score** — `10` if the brand is mentioned, `0` otherwise.
- **Position score** — `max(0, 10 − (position − 1) × 2)`. Position `1` → `10`, position `5` → `2`, position `6+` → `0`. `null` (not mentioned) → `0`.
- **Context Clarity / GEO Relevance / Source Quality** — manually scored 0 – 10 per observation.

> **Opportunity Score** is a directional indicator, not a performance score. It is derived as `(1 − mentionRate) × 10` and is intended to highlight unclaimed visibility surface, not measure how well the brand is currently performing.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- Static TypeScript data — no backend, no database, no external UI libraries.

## How to run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run lint    # ESLint
npm run start   # serve the production build
```

## Disclaimer

AI-generated answers change over time as models, indexes, and grounding sources evolve. Any single observation is a snapshot, not a permanent state. Treat results as **directional signals**, not final truth.

## Placeholder data notice

All audit observations in this repository are **sample/placeholder data**. Every record's `notes` field ends with:

> *"Placeholder observation — replace with manually collected result."*

Before this report is used for anything beyond demonstration, the placeholder dataset in [`data/auditData.ts`](data/auditData.ts) must be replaced with manually collected observations using the checklist below.

## Manual Data Collection Checklist

For each query × platform combination, capture:

- [ ] **Platform** — ChatGPT / Gemini / Perplexity / Google
- [ ] **Query** — exact wording used
- [ ] **Was Webtures mentioned?** — yes / no
- [ ] **Position** — order in the answer if mentioned (1 = first, `null` if not)
- [ ] **Competitors mentioned** — list of other brands that surfaced
- [ ] **Context clarity** — 0 – 10, how accurately the brand is described
- [ ] **GEO relevance** — 0 – 10, how closely the answer connects to GEO / AI Search topics
- [ ] **Source quality** — 0 – 10, strength of the sources the AI leans on
- [ ] **Notes** — qualitative observations: framing, tone, surprises
- [ ] **Screenshot / source reference** — link or filename of the captured evidence

Collect on a fixed date, in a fresh session, and re-run periodically — AI answers drift.

## Project structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # full single-page report
  globals.css       # Tailwind v4 + theme tokens
components/
  ScoreCard.tsx
  FindingCard.tsx
  RecommendationCard.tsx
  AuditTable.tsx
data/
  auditData.ts      # AuditItem type + placeholder records
lib/
  scoring.ts        # weighted scoring functions
```

---

Prepared by **Çınar Akpınar** — AI-Native Growth & Visibility Analyst Candidate.
