import { AuditTable } from "@/components/AuditTable";
import { FindingCard } from "@/components/FindingCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ScoreCard } from "@/components/ScoreCard";
import { auditItems } from "@/data/auditData";
import {
  calculateAverageScore,
  calculateBrandClarityAverage,
  calculateGeoRelevanceAverage,
  calculateOpportunityScore,
  calculateSourceQualityAverage,
} from "@/lib/scoring";

const HERO_TAGS = [
  "Exploratory Analysis",
  "AI Search",
  "GEO",
  "Visibility Intelligence",
];

const SCORING_CRITERIA = [
  {
    title: "Brand Mention",
    description: "Whether Webtures appears in the AI-generated answer.",
  },
  {
    title: "Brand Position",
    description: "How prominently Webtures is placed within the answer.",
  },
  {
    title: "Context Clarity",
    description: "Whether the brand is described accurately and clearly.",
  },
  {
    title: "GEO Relevance",
    description:
      "Whether the answer connects to AI Search, GEO, or Visibility Intelligence.",
  },
  {
    title: "Source Quality",
    description:
      "Whether the answer appears supported by reliable sources or references.",
  },
];

const FINDINGS = [
  {
    title: "Consistent visibility in GEO and AI Search contexts",
    description:
      "Across Gemini, ChatGPT, Perplexity and Google observations, Webtures shows consistent visibility in GEO and AI Search related contexts. Broad SEO and digital marketing queries still show stronger competitor pressure and more crowded positioning.",
    severity: "opportunity" as const,
  },
  {
    title: "Source quality differs by platform",
    description:
      "Gemini answers did not include direct citations, while ChatGPT, Perplexity and Google answers surfaced references that frequently included Webtures-owned or listicle pages. Owned sources should not be read as independent validation, and scores should be interpreted with that distinction in mind.",
    severity: "medium" as const,
  },
  {
    title: "Category ownership around GEO is still open",
    description:
      "Webtures can potentially strengthen its category ownership around GEO and AI Search Visibility before larger global agencies define the language for the Turkish market.",
    severity: "opportunity" as const,
  },
  {
    title: "AI engines reward clear entity signals",
    description:
      "AI answer engines may reward clear entity signals, repeated category language, and authoritative content. Generic agency descriptions are unlikely to surface in AI answers.",
    severity: "medium" as const,
  },
  {
    title: "SEO visibility does not equal AI visibility",
    description:
      "Traditional SEO ranking does not automatically translate into AI answer visibility. Different surfaces, different signals, different content shapes.",
    severity: "high" as const,
  },
  {
    title: "GEO content can become a differentiation layer",
    description:
      "A structured GEO content strategy — definitions, comparisons, FAQs, recurring reports — could become a strong differentiation layer versus performance-only competitors.",
    severity: "opportunity" as const,
  },
];

const RECOMMENDATIONS = [
  {
    title: "Dedicated GEO / AI Search Visibility landing page",
    description:
      "Create a focused page that defines GEO, explains the methodology, and positions Webtures as a primary entity for the category in Turkish and English.",
    impact: "Entity signal · Category ownership",
  },
  {
    title: "Recurring AI Search Visibility reports",
    description:
      "Publish a quarterly or monthly report tracking how the category, competitors, and Webtures appear across ChatGPT, Gemini, Perplexity, and Google.",
    impact: "Authority · Source signal",
  },
  {
    title: "Strengthen entity clarity",
    description:
      "Tighten the on-site language around Webtures, GEO, Visibility Intelligence, and AI-native search so that AI engines have a consistent, repeatable description to lift.",
    impact: "Context clarity",
  },
  {
    title: "Comparison and FAQ-style content",
    description:
      "Build comparison pages (GEO vs SEO, AI Search vs Traditional Search) and FAQ-style content shaped for the way AI engines extract answers.",
    impact: "Answer-shaped content",
  },
  {
    title: "Lead magnets from audit insights",
    description:
      "Convert audit observations into downloadable mini-reports and benchmarks that potential clients can request — turning research into qualified pipeline.",
    impact: "Demand capture",
  },
  {
    title: "Cross-platform visibility case studies",
    description:
      "Document concrete before/after visibility changes across ChatGPT, Gemini, Perplexity, and Google for selected clients to make the value of GEO tangible.",
    impact: "Proof · Trust",
  },
];

export default function Home() {
  const overallVisibility = calculateAverageScore(auditItems);
  const geoRelevance = calculateGeoRelevanceAverage(auditItems);
  const brandClarity = calculateBrandClarityAverage(auditItems);
  const sourceQuality = calculateSourceQualityAverage(auditItems);
  const opportunity = calculateOpportunityScore(auditItems);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      {/* 1. Hero */}
      <section className="border-b border-white/5 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center gap-2">
          {HERO_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-neutral-50 md:text-5xl">
          Webtures AI Search Visibility Mini Audit
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
          A proof-of-work GEO / AI Search Visibility audit prepared by{" "}
          <span className="text-neutral-200">Çınar Akpınar</span>.
        </p>
      </section>

      {/* 2. Executive Summary */}
      <section className="py-16 md:py-20">
        <SectionHeader
          eyebrow="01 — Executive Summary"
          title="What this report is — and is not"
        />
        <div className="mt-8 grid gap-4 text-base leading-relaxed text-neutral-300 md:grid-cols-2">
          <p>
            This is an exploratory proof-of-work project. It evaluates how
            brands appear across AI answer engines and modern search
            environments — focused on visibility, brand mention, position,
            context clarity, GEO relevance, and source quality.
          </p>
          <p>
            AI-generated answers shift over time as models, indexes, and
            grounding sources change. The results here should be treated as{" "}
            <span className="text-neutral-100">directional signals</span>, not
            final truth. The purpose is to demonstrate analytical thinking for a
            Visibility Intelligence / AI Analyst role at Webtures.
          </p>
        </div>
      </section>

      {/* 3. Methodology */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionHeader
          eyebrow="02 — Methodology"
          title="A small, transparent process"
        />
        <div className="mt-8 grid gap-6 text-base leading-relaxed text-neutral-300 md:grid-cols-2">
          <p>
            The same query set is tested across selected platforms — ChatGPT,
            Gemini, Perplexity, and Google. Each observation is manually
            reviewed to avoid unreliable scraping, and each row is scored using
            the transparent model below.
          </p>
          <p>
            Manual collection is slower, but it preserves nuance: how the brand
            is described, which competitors surface, what tone the answer
            takes, and which sources the AI appears to trust. Scoring is
            weighted so that mention and position carry the most weight, with
            context, GEO relevance, and source quality balancing the picture.
          </p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {SCORING_CRITERIA.map((criterion) => (
            <div
              key={criterion.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <p className="text-sm font-semibold text-neutral-100">
                {criterion.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Score Cards */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionHeader
          eyebrow="03 — Score Cards"
          title="Scores derived from preliminary manual observations"
        />
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3 py-1 text-xs font-medium text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
          Preliminary manual observations — AI answers may change over time.
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <ScoreCard
            label="Overall Visibility"
            value={overallVisibility}
            description="Weighted average across mention, position, context, GEO, and source quality."
          />
          <ScoreCard
            label="GEO Relevance"
            value={geoRelevance}
            description="How closely AI answers connect to GEO and AI Search topics."
          />
          <ScoreCard
            label="Brand Clarity"
            value={brandClarity}
            description="How clearly Webtures is described when it does appear."
          />
          <ScoreCard
            label="Source Quality"
            value={sourceQuality}
            description="Strength of the sources AI engines lean on for these answers."
          />
          <ScoreCard
            label="Opportunity · Current Dataset"
            value={opportunity}
            description="Because this dataset is based on a limited manual snapshot, this score should be interpreted as a directional signal rather than a final performance metric. It mainly reflects mention gaps in the selected manual sample; competitor-pressure rows may affect it."
          />
        </div>
      </section>

      {/* 5. Platform Findings Table */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionHeader
          eyebrow="04 — Platform Findings"
          title="Per-query observations across platforms"
        />
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">
          This is an exploratory manual dataset — not final truth. The current
          set covers Gemini, ChatGPT, Perplexity and Google observations.
        </p>
        <div className="mt-8">
          <AuditTable items={auditItems} />
        </div>
      </section>

      {/* 6. Key Findings */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionHeader
          eyebrow="05 — Key Findings"
          title="Cautious, directional reads"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FINDINGS.map((finding) => (
            <FindingCard
              key={finding.title}
              title={finding.title}
              description={finding.description}
              severity={finding.severity}
            />
          ))}
        </div>
      </section>

      {/* 7. Recommendations */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <SectionHeader
          eyebrow="06 — Recommendations"
          title="Where I would start"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RECOMMENDATIONS.map((rec) => (
            <RecommendationCard
              key={rec.title}
              title={rec.title}
              description={rec.description}
              impact={rec.impact}
            />
          ))}
        </div>
      </section>

      {/* 8. Closing */}
      <section className="border-t border-white/5 pt-16 md:pt-20">
        <SectionHeader
          eyebrow="07 — Closing"
          title="Prepared by Çınar Akpınar"
        />
        <div className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300">
          <p className="text-neutral-200">
            AI-Native Growth &amp; Visibility Analyst Candidate
          </p>
          <p className="mt-4 text-neutral-400">
            This project was built as a proof-of-work exercise to show how I
            think, analyze, and structure visibility problems in the AI search
            era.
          </p>
          <p className="mt-4 text-neutral-400">
            Built to demonstrate how I approach AI search visibility problems
            before joining the team.
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50 md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
