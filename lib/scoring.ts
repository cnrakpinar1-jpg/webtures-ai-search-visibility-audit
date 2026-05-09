import type { AuditItem, Platform } from "@/data/auditData";

export const SCORE_WEIGHTS = {
  mention: 0.25,
  position: 0.2,
  contextClarity: 0.2,
  geoRelevance: 0.2,
  sourceQuality: 0.15,
} as const;

const round1 = (n: number): number => Math.round(n * 10) / 10;

export function getMentionScore(brandMentioned: boolean): number {
  return brandMentioned ? 10 : 0;
}

export function getPositionScore(position: number | null): number {
  if (position === null) return 0;
  return Math.max(0, 10 - (position - 1) * 2);
}

export function calculateVisibilityScore(item: AuditItem): number {
  const score =
    getMentionScore(item.brandMentioned) * SCORE_WEIGHTS.mention +
    getPositionScore(item.brandPosition) * SCORE_WEIGHTS.position +
    item.contextClarity * SCORE_WEIGHTS.contextClarity +
    item.geoRelevance * SCORE_WEIGHTS.geoRelevance +
    item.sourceQuality * SCORE_WEIGHTS.sourceQuality;
  return round1(score);
}

export function calculateAverageScore(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce(
    (sum, item) => sum + calculateVisibilityScore(item),
    0,
  );
  return round1(total / items.length);
}

export function calculateGeoRelevanceAverage(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.geoRelevance, 0);
  return round1(total / items.length);
}

export function calculateBrandClarityAverage(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.contextClarity, 0);
  return round1(total / items.length);
}

export function calculateSourceQualityAverage(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.sourceQuality, 0);
  return round1(total / items.length);
}

export function calculateMentionRate(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const mentioned = items.filter((item) => item.brandMentioned).length;
  return round1((mentioned / items.length) * 10);
}

export function calculateOpportunityScore(items: AuditItem[]): number {
  if (items.length === 0) return 0;
  const mentionRate =
    items.filter((item) => item.brandMentioned).length / items.length;
  return round1((1 - mentionRate) * 10);
}

export type PlatformSummary = {
  platform: Platform;
  count: number;
  mentionRate: number;
  avgVisibility: number;
  avgGeoRelevance: number;
};

export function calculatePlatformSummary(
  items: AuditItem[],
): PlatformSummary[] {
  const platforms: Platform[] = ["ChatGPT", "Gemini", "Perplexity", "Google"];
  return platforms.map((platform) => {
    const subset = items.filter((item) => item.platform === platform);
    return {
      platform,
      count: subset.length,
      mentionRate: calculateMentionRate(subset),
      avgVisibility: calculateAverageScore(subset),
      avgGeoRelevance: calculateGeoRelevanceAverage(subset),
    };
  });
}
