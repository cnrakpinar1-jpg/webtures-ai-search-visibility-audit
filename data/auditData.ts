export type Platform = "ChatGPT" | "Gemini" | "Perplexity" | "Google";

export type CollectionMethod = "manual" | "placeholder";

export type AuditItem = {
  id: string;
  date: string;
  platform: Platform;
  query: string;
  brandMentioned: boolean;
  brandPosition: number | null;
  contextClarity: number;
  geoRelevance: number;
  sourceQuality: number;
  competitors: string[];
  notes: string;
  collectionMethod: CollectionMethod;
};

// -----------------------------------------------------------------------
// Preliminary manual observations (collected 2026-05-09).
// Current coverage: Gemini, ChatGPT, Perplexity and Google.
// Source quality varies by platform: Gemini answers did not include direct
// citations (scored conservatively); ChatGPT and Perplexity answers
// included references, but several were agency-owned or listicle sources;
// Google/public search rows reflect a single-snapshot, location- and
// personalization-sensitive view rather than a stable ranking.
// -----------------------------------------------------------------------

export const auditItems: AuditItem[] = [
  {
    id: "gemini-001",
    date: "2026-05-09",
    platform: "Gemini",
    query: "Türkiye’de SEO ajansı önerir misin?",
    brandMentioned: true,
    brandPosition: 4,
    contextClarity: 9,
    geoRelevance: 2,
    sourceQuality: 4,
    competitors: ["Zeo", "Hype", "iProspect", "Stradigi"],
    notes:
      "Gemini mentioned Webtures in a traditional SEO agency recommendation context, positioning it as a more boutique and results-oriented option. GEO relevance was low because the answer focused mainly on classic SEO. Source quality was scored conservatively because no direct references were provided.",
    collectionMethod: "manual",
  },
  {
    id: "gemini-002",
    date: "2026-05-09",
    platform: "Gemini",
    query: "Türkiye’de GEO hizmeti veren ajanslar kimler?",
    brandMentioned: true,
    brandPosition: 2,
    contextClarity: 8,
    geoRelevance: 10,
    sourceQuality: 5,
    competitors: ["Zeo", "Boosmart"],
    notes:
      "Gemini mentioned Webtures as one of the visible early players in GEO-related services in Turkey. The answer framed GEO as an emerging niche and positioned Webtures after Zeo. Source quality was scored conservatively because the response did not include direct citations.",
    collectionMethod: "manual",
  },
  {
    id: "gemini-003",
    date: "2026-05-09",
    platform: "Gemini",
    query: "AI Search Visibility konusunda Türkiye’de kimler öne çıkıyor?",
    brandMentioned: true,
    brandPosition: 2,
    contextClarity: 7,
    geoRelevance: 10,
    sourceQuality: 5,
    competitors: ["Zeo", "Hype"],
    notes:
      "Gemini mentioned Webtures in an AI Search Visibility context and associated it with user experience and AI's impact on content. This is a strong category-relevance signal, although the response did not provide direct source references.",
    collectionMethod: "manual",
  },
  {
    id: "gemini-004",
    date: "2026-05-09",
    platform: "Gemini",
    query: "Webtures ne yapar?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 6,
    sourceQuality: 5,
    competitors: [],
    notes:
      "Gemini clearly explained Webtures as a next-generation SEO and growth consultancy agency and mentioned GEO as part of its recent service direction. This was a direct brand query, so position and clarity were strong. Source quality was kept moderate because no direct citations were shown.",
    collectionMethod: "manual",
  },
  {
    id: "gemini-005",
    date: "2026-05-09",
    platform: "Gemini",
    query: "Webtures güvenilir bir dijital pazarlama ajansı mı?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 0,
    sourceQuality: 5,
    competitors: [],
    notes:
      "Gemini described Webtures as one of the older and better-known SEO-focused agencies in Turkey and framed trust through sector presence, published materials and references. GEO relevance was not present because the query focused on reputation rather than AI search visibility.",
    collectionMethod: "manual",
  },
  {
    id: "gemini-006",
    date: "2026-05-09",
    platform: "Gemini",
    query:
      "Türkiye’de dijital pazarlama ajansı seçerken hangi markalara bakmalıyım?",
    brandMentioned: true,
    brandPosition: 4,
    contextClarity: 9,
    geoRelevance: 3,
    sourceQuality: 4,
    competitors: ["Hype", "Genart", "Zeo", "Boosmart"],
    notes:
      "Gemini mentioned Webtures among recommended digital marketing agencies and positioned it in the SEO and growth-focused category. The query was broad, so GEO relevance was limited. Source quality was scored conservatively because no direct references were provided.",
    collectionMethod: "manual",
  },

  // ChatGPT manual observations (2026-05-09).
  // ChatGPT answers included web-search references; treat scores as
  // directional — several references were agency-owned or positioning
  // pages, so independent validation is still limited.
  {
    id: "chatgpt-001",
    date: "2026-05-09",
    platform: "ChatGPT",
    query: "Türkiye’de SEO ajansı önerir misin?",
    brandMentioned: true,
    brandPosition: 2,
    contextClarity: 7,
    geoRelevance: 5,
    sourceQuality: 8,
    competitors: ["Zeo", "Sempeak", "ROIPUBLIC"],
    notes:
      "ChatGPT mentioned Webtures second in a traditional SEO agency recommendation query and framed it around SEO plus AI Search/GEO transition. The answer included web-search references, but the signal should still be treated as directional because several references were agency-owned or market-positioning pages.",
    collectionMethod: "manual",
  },
  {
    id: "chatgpt-002",
    date: "2026-05-09",
    platform: "ChatGPT",
    query: "Türkiye’de GEO hizmeti veren ajanslar kimler?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 10,
    sourceQuality: 8,
    competitors: ["Cremicro", "ROIPUBLIC", "Zeo"],
    notes:
      "ChatGPT placed Webtures first for a GEO services query and connected it directly with Generative Engine Optimization, Visibility Intelligence and AI Readiness. This is a strong AI-search category signal, although independent validation is still limited.",
    collectionMethod: "manual",
  },
  {
    id: "chatgpt-003",
    date: "2026-05-09",
    platform: "ChatGPT",
    query: "AI Search Visibility konusunda Türkiye’de kimler öne çıkıyor?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 10,
    sourceQuality: 8,
    competitors: ["Zeo", "ROIPUBLIC", "Cremicro"],
    notes:
      "ChatGPT identified Webtures as the clearest match for AI Search Visibility in Turkey and connected the brand with GEO, AI-First SEO and Visibility Intelligence. The note should be treated as a visibility signal rather than a definitive market-leadership claim.",
    collectionMethod: "manual",
  },
  {
    id: "chatgpt-004",
    date: "2026-05-09",
    platform: "ChatGPT",
    query: "Webtures ne yapar?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 9,
    sourceQuality: 9,
    competitors: [],
    notes:
      "ChatGPT described Webtures as a digital growth and consultancy company offering SEO, AI Search Optimization/GEO, content strategy, performance marketing, digital strategy and analytics. The answer relied strongly on Webtures-owned positioning, so clarity is high but independent validation remains limited.",
    collectionMethod: "manual",
  },
  {
    id: "chatgpt-005",
    date: "2026-05-09",
    platform: "ChatGPT",
    query: "Webtures güvenilir bir dijital pazarlama ajansı mı?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 9,
    geoRelevance: 6,
    sourceQuality: 7,
    competitors: [],
    notes:
      "ChatGPT gave a cautious positive trust signal for Webtures, referencing official success stories and third-party review signals. The answer avoided a final trust verdict and recommended checking contract scope, references, KPIs and reporting quality before making a decision.",
    collectionMethod: "manual",
  },
  {
    id: "chatgpt-006",
    date: "2026-05-09",
    platform: "ChatGPT",
    query:
      "Türkiye’de dijital pazarlama ajansı seçerken hangi markalara bakmalıyım?",
    brandMentioned: true,
    brandPosition: 2,
    contextClarity: 8,
    geoRelevance: 7,
    sourceQuality: 8,
    competitors: [
      "Zeo",
      "Sempeak",
      "ROIPUBLIC",
      "BusinessUp!",
      "Clickzone",
      "Cremicro",
    ],
    notes:
      "ChatGPT mentioned Webtures second in a broad digital marketing agency selection query. The answer framed Webtures strongly for SEO and AI Search/GEO contexts, while performance-focused competitors appeared more naturally for ROI and paid growth criteria.",
    collectionMethod: "manual",
  },

  // Perplexity manual observations (2026-05-09).
  // Perplexity returns inline citations, so source quality can be higher
  // than citation-free outputs. Scores are kept conservative where the
  // citations are listicles, agency-owned pages, or otherwise not fully
  // independent.
  {
    id: "perplexity-001",
    date: "2026-05-09",
    platform: "Perplexity",
    query: "Türkiye’de SEO ajansı önerir misin?",
    brandMentioned: true,
    brandPosition: 3,
    contextClarity: 9,
    geoRelevance: 5,
    sourceQuality: 7,
    competitors: [
      "Zeo",
      "Seobaz",
      "Boosmart",
      "Digipeak",
      "Magna",
      "Netvent",
      "ROIBLE",
      "Mosanta",
      "Cremicro",
      "Adverpeak",
    ],
    notes:
      "Perplexity mentioned Webtures third in a traditional SEO agency recommendation query. The answer cited external list and directory-style sources, so the result is useful as a visibility signal but should not be interpreted as a definitive market ranking.",
    collectionMethod: "manual",
  },
  {
    id: "perplexity-002",
    date: "2026-05-09",
    platform: "Perplexity",
    query: "Türkiye’de GEO hizmeti veren ajanslar kimler?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 10,
    sourceQuality: 6,
    competitors: ["Seobaz", "Magna", "TurkoMedya", "ARGEO"],
    notes:
      "Perplexity placed Webtures first for a GEO services query and connected it with GEO, AI Search Optimization and AI Visibility language. Source quality was kept moderate because some sources were list-style or agency-owned rather than fully independent validation.",
    collectionMethod: "manual",
  },
  {
    id: "perplexity-003",
    date: "2026-05-09",
    platform: "Perplexity",
    query: "AI Search Visibility konusunda Türkiye’de kimler öne çıkıyor?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 10,
    sourceQuality: 6,
    competitors: ["Seobaz", "TurkoMedya", "Zeo"],
    notes:
      "Perplexity placed Webtures first in an AI Search Visibility query and framed it as one of the Turkish agencies directly centering AI Search Optimization and GEO. The finding is strong for category visibility, but it should remain a directional signal because several citations reflect owned or market-positioning sources.",
    collectionMethod: "manual",
  },
  {
    id: "perplexity-004",
    date: "2026-05-09",
    platform: "Perplexity",
    query: "Webtures ne yapar?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 9,
    sourceQuality: 8,
    competitors: [],
    notes:
      "Perplexity described Webtures as a digital growth consultancy focused on SEO, AI Search Optimization/GEO, content strategy, performance marketing and analytics. The answer relied mainly on Webtures-owned sources, so clarity is high but independent validation remains limited.",
    collectionMethod: "manual",
  },
  {
    id: "perplexity-005",
    date: "2026-05-09",
    platform: "Perplexity",
    query: "Webtures güvenilir bir dijital pazarlama ajansı mı?",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 2,
    sourceQuality: 7,
    competitors: [],
    notes:
      "Perplexity gave a cautiously positive trust signal for Webtures using sources such as Clutch, Facebook and Glassdoor. The answer correctly avoided a final verdict and suggested that trust should still be evaluated through references, contract terms and project fit.",
    collectionMethod: "manual",
  },
  {
    id: "perplexity-006",
    date: "2026-05-09",
    platform: "Perplexity",
    query:
      "Türkiye’de dijital pazarlama ajansı seçerken hangi markalara bakmalıyım?",
    brandMentioned: true,
    brandPosition: 2,
    contextClarity: 10,
    geoRelevance: 4,
    sourceQuality: 7,
    competitors: [
      "Zeo",
      "Seobaz",
      "Magna",
      "Boosmart",
      "Digipeak",
      "Netvent",
      "TurkoMedya",
    ],
    notes:
      "Perplexity mentioned Webtures second in a broad digital marketing agency selection query. The answer used multiple web references and positioned Webtures among SEO, GEO, AI Visibility and digital marketing players, but the broad query still placed it alongside many established competitors.",
    collectionMethod: "manual",
  },

  // Google / public search manual observations (2026-05-09).
  // Public search results vary by location, personalization and time, so
  // these rows are a single-snapshot view rather than a stable ranking.
  // Notes distinguish owned Webtures pages, third-party list/directory
  // pages, and competitor-owned pages.
  {
    id: "google-001",
    date: "2026-05-09",
    platform: "Google",
    query: "Webtures GEO",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 10,
    sourceQuality: 8,
    competitors: ["Zeo", "Seotrio", "Sirmedia"],
    notes:
      "Google/public search surfaces Webtures-owned GEO pages for this branded GEO query. The official Webtures GEO page explains Generative Engine Optimization as optimization for AI-powered search engines and citation behavior. Source quality is high for Webtures positioning, but it is an owned source rather than independent validation.",
    collectionMethod: "manual",
  },
  {
    id: "google-002",
    date: "2026-05-09",
    platform: "Google",
    query: "Webtures AI Search Visibility",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 9,
    geoRelevance: 10,
    sourceQuality: 8,
    competitors: ["Algeonex", "Sheltron"],
    notes:
      "Google/public search shows Webtures content around AI Visibility, AI Search Visibility and B2B AI Search Visibility strategy. This is a strong owned-content signal for the AI search category, although the observation should remain directional because search results can change.",
    collectionMethod: "manual",
  },
  {
    id: "google-003",
    date: "2026-05-09",
    platform: "Google",
    query: "Webtures nedir",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 9,
    geoRelevance: 6,
    sourceQuality: 8,
    competitors: [],
    notes:
      "Google/public search surfaces Webtures-owned explanatory pages for the direct brand query. The result provides strong brand clarity, but GEO relevance is moderate because the query is about the brand definition rather than AI search visibility specifically.",
    collectionMethod: "manual",
  },
  {
    id: "google-004",
    date: "2026-05-09",
    platform: "Google",
    query: "Visibility Intelligence danışmanlığı",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 10,
    geoRelevance: 9,
    sourceQuality: 8,
    competitors: [],
    notes:
      "Google/public search surfaces Webtures' dedicated Visibility Intelligence page. The page defines Visibility Intelligence as a multi-surface visibility approach that includes search engines, social platforms, content platforms, news sources and AI-supported surfaces. This is a strong owned-content category signal.",
    collectionMethod: "manual",
  },
  {
    id: "google-005",
    date: "2026-05-09",
    platform: "Google",
    query: "Türkiye’de GEO hizmeti veren ajanslar",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 8,
    geoRelevance: 10,
    sourceQuality: 6,
    competitors: [
      "Adverpeak",
      "Zeo",
      "Sıradışı Digital",
      "Cremicro",
      "ROIBLE",
      "Seotrio",
    ],
    notes:
      "Google/public search shows Webtures-owned GEO service pages and third-party GEO agency list contexts. Webtures is visible for GEO service intent, but the category is crowded and third-party list quality varies, so source quality is scored moderately.",
    collectionMethod: "manual",
  },
  {
    id: "google-006",
    date: "2026-05-09",
    platform: "Google",
    query: "Türkiye’de SEO ajansı önerisi",
    brandMentioned: true,
    brandPosition: 3,
    contextClarity: 8,
    geoRelevance: 4,
    sourceQuality: 6,
    competitors: [
      "Cremicro",
      "Zeo",
      "Adverpeak",
      "Mosanta",
      "Digipeak",
      "Mobitek",
      "ROIPUBLIC",
      "ROIBLE",
      "Sempeak",
    ],
    notes:
      "Google/public search shows Webtures in multiple Turkish SEO agency list contexts, often around the upper part of the list. This supports traditional SEO visibility, but the query is broad and classic SEO-focused, so GEO relevance is lower and competitor pressure is higher.",
    collectionMethod: "manual",
  },
  {
    id: "google-007",
    date: "2026-05-09",
    platform: "Google",
    query: "Zeo GEO",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 0,
    geoRelevance: 10,
    sourceQuality: 8,
    competitors: ["Zeo"],
    notes:
      "This competitor-specific Google/public search query surfaces Zeo's GEO pages, which define GEO around visibility in ChatGPT, Gemini and similar generative AI systems. Webtures was not expected to appear in this competitor-branded query, but the row is useful as a competitor-pressure signal.",
    collectionMethod: "manual",
  },
  {
    id: "google-008",
    date: "2026-05-09",
    platform: "Google",
    query: "GEO Generative Engine Optimization Türkiye",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 8,
    geoRelevance: 10,
    sourceQuality: 6,
    competitors: ["Zeo", "Seotrio", "Sirmedia", "E-adam", "Turkiye.ai"],
    notes:
      "Google/public search surfaces Webtures-owned GEO resources as well as competitor and educational GEO pages from Zeo, Seotrio, Sirmedia and others. Webtures has strong owned-content coverage, but the generic GEO query is crowded and should be treated as a category-competition signal.",
    collectionMethod: "manual",
  },
];
