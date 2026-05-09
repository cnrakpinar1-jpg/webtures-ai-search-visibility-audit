export type Platform = "ChatGPT" | "Gemini" | "Perplexity" | "Google";

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
};

const PLACEHOLDER_NOTE =
  "Placeholder observation — replace with manually collected result.";

export const auditItems: AuditItem[] = [
  {
    id: "obs-001",
    date: "2026-05-02",
    platform: "ChatGPT",
    query: "what is generative engine optimization",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 6,
    geoRelevance: 8,
    sourceQuality: 6,
    competitors: ["SearchEngineLand", "Backlinko"],
    notes: `Definitional answer dominated by US publishers; no Turkish agencies surfaced. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-002",
    date: "2026-05-02",
    platform: "ChatGPT",
    query: "best AI search visibility consulting agencies",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 5,
    geoRelevance: 7,
    sourceQuality: 5,
    competitors: ["Profound", "Otterly.AI", "Peec AI"],
    notes: `Tooling vendors mentioned more than service agencies. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-003",
    date: "2026-05-03",
    platform: "Gemini",
    query: "GEO agencies in Turkey",
    brandMentioned: true,
    brandPosition: 3,
    contextClarity: 6,
    geoRelevance: 9,
    sourceQuality: 5,
    competitors: ["Zeo Agency", "Boosmart"],
    notes: `Webtures listed but described primarily as a traditional performance agency. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-004",
    date: "2026-05-03",
    platform: "Gemini",
    query: "how to optimize content for ChatGPT answers",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 6,
    geoRelevance: 8,
    sourceQuality: 6,
    competitors: ["HubSpot", "Semrush"],
    notes: `Tactical answer; cites global SaaS blogs only. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-005",
    date: "2026-05-04",
    platform: "Perplexity",
    query: "Webtures agency review",
    brandMentioned: true,
    brandPosition: 1,
    contextClarity: 7,
    geoRelevance: 4,
    sourceQuality: 6,
    competitors: [],
    notes: `Branded query — answer pulled from Webtures site copy and a few directory listings. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-006",
    date: "2026-05-04",
    platform: "Perplexity",
    query: "AI-native growth marketing companies",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 5,
    geoRelevance: 6,
    sourceQuality: 6,
    competitors: ["Single Grain", "NoGood", "Omniscient Digital"],
    notes: `US-centric list; no Turkish or EMEA agencies surfaced. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-007",
    date: "2026-05-05",
    platform: "Perplexity",
    query: "visibility intelligence platforms 2026",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 4,
    geoRelevance: 7,
    sourceQuality: 5,
    competitors: ["Profound", "Athena HQ", "Goodie AI"],
    notes: `Category framed around tooling rather than services. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-008",
    date: "2026-05-05",
    platform: "Google",
    query: "AI search visibility audit",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 5,
    geoRelevance: 8,
    sourceQuality: 7,
    competitors: ["Semrush", "Ahrefs"],
    notes: `AI Overview led by major SEO tool vendors. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-009",
    date: "2026-05-06",
    platform: "Google",
    query: "GEO vs SEO difference",
    brandMentioned: false,
    brandPosition: null,
    contextClarity: 7,
    geoRelevance: 9,
    sourceQuality: 6,
    competitors: ["SearchEngineJournal", "Moz"],
    notes: `Educational AI Overview; opportunity to own a clear definition page. ${PLACEHOLDER_NOTE}`,
  },
  {
    id: "obs-010",
    date: "2026-05-07",
    platform: "ChatGPT",
    query: "generative engine optimization agencies in Istanbul",
    brandMentioned: true,
    brandPosition: 4,
    contextClarity: 5,
    geoRelevance: 8,
    sourceQuality: 4,
    competitors: ["Zeo Agency", "Boosmart", "Oraganic"],
    notes: `Webtures appears in a list but without GEO-specific positioning. ${PLACEHOLDER_NOTE}`,
  },
];
