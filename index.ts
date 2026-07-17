#!/usr/bin/env node

interface HeadlineInput {
  headline: string;
  announcementType: string;
  headlineQuality: number;
  seoOptimization: number;
  cryptoKeywords: number;
  clickThroughPotential: number;
  mediaDistribution: number;
}

interface HeadlineOutput {
  headline: string;
  announcementType: string;
  headlineQualityScore: number;
  seoOptimizationScore: number;
  cryptoKeywordsScore: number;
  clickThroughPotentialScore: number;
  mediaDistributionScore: number;
  overallHeadlineScore: number;
  priorityAction: string;
  platformVisibility: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    headlineQuality: "Headline Quality",
    seoOptimization: "SEO Optimization",
    cryptoKeywords: "Crypto Keywords",
    clickThroughPotential: "Click-Through Potential",
    mediaDistribution: "Media Distribution",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function getPlatformVisibility(seo: number, crypto: number, media: number): Record<string, number> {
  return {
    "Google News": Math.min(100, Math.round((seo + media) / 2)),
    "CoinDesk": Math.min(100, Math.round(crypto * 1.0)),
    "CoinTelegraph": Math.min(100, Math.round(crypto * 0.98)),
    "PR Newswire": Math.min(100, Math.round(media * 0.96)),
  };
}

export function generateHeadline(input: HeadlineInput): HeadlineOutput {
  const scores = {
    headlineQuality: input.headlineQuality,
    seoOptimization: input.seoOptimization,
    cryptoKeywords: input.cryptoKeywords,
    clickThroughPotential: input.clickThroughPotential,
    mediaDistribution: input.mediaDistribution,
  };
  const overallHeadlineScore = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 5
  );
  return {
    headline: input.headline,
    announcementType: input.announcementType,
    headlineQualityScore: input.headlineQuality,
    seoOptimizationScore: input.seoOptimization,
    cryptoKeywordsScore: input.cryptoKeywords,
    clickThroughPotentialScore: input.clickThroughPotential,
    mediaDistributionScore: input.mediaDistribution,
    overallHeadlineScore,
    priorityAction: getPriorityAction(scores),
    platformVisibility: getPlatformVisibility(
      input.seoOptimization, input.cryptoKeywords, input.mediaDistribution
    ),
  };
}

const args = process.argv.slice(2);
const headline = args[0] || "DeFi Protocol Raises $10M in Series A Funding Round";
const announcementType = args[1] || "funding-round";
const headlineQuality = parseInt(args[2]) || 88;
const seoOptimization = parseInt(args[3]) || 82;
const cryptoKeywords = parseInt(args[4]) || 90;
const clickThroughPotential = parseInt(args[5]) || 75;
const mediaDistribution = parseInt(args[6]) || 85;

const result = generateHeadline({
  headline, announcementType, headlineQuality, seoOptimization,
  cryptoKeywords, clickThroughPotential, mediaDistribution,
});

console.log(`Headline: ${result.headline}`);
console.log(`Announcement Type: ${result.announcementType}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Headline Quality Score:        ${result.headlineQualityScore}/100  [${getStatus(result.headlineQualityScore)}]`);
console.log(`SEO Optimization Score:        ${result.seoOptimizationScore}/100  [${getStatus(result.seoOptimizationScore)}]`);
console.log(`Crypto Keywords Score:         ${result.cryptoKeywordsScore}/100  [${getStatus(result.cryptoKeywordsScore)}]`);
console.log(`Click-Through Potential:       ${result.clickThroughPotentialScore}/100  [${getStatus(result.clickThroughPotentialScore)}]`);
console.log(`Media Distribution Score:      ${result.mediaDistributionScore}/100  [${getStatus(result.mediaDistributionScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Headline Score:        ${result.overallHeadlineScore}/100`);
console.log(`Priority Action:               ${result.priorityAction}`);
console.log("\nPlatform Visibility:");
Object.entries(result.platformVisibility).forEach(([platform, score]) => {
  console.log(`  ${platform.padEnd(20)} ${score}/100`);
});
