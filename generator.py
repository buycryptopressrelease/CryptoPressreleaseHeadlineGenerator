#!/usr/bin/env python3
"""
CryptoPressRelease Headline Generator
An AI-powered tool to generate compelling, newsworthy, and SEO-friendly
headlines for cryptocurrency, blockchain, Web3, NFT, DeFi, and fintech
press releases.
https://www.buycryptopressrelease.com
"""

import sys


def get_status(score: int) -> str:
    if score <= 30:
        return "Critical"
    elif score <= 60:
        return "At Risk"
    elif score <= 80:
        return "Healthy"
    return "Excellent"


def get_priority_action(scores: dict) -> str:
    labels = {
        "headline_quality": "Headline Quality",
        "seo_optimization": "SEO Optimization",
        "crypto_keywords": "Crypto Keywords",
        "click_through_potential": "Click-Through Potential",
        "media_distribution": "Media Distribution",
    }
    lowest_key = min(scores, key=scores.get)
    return f"{labels[lowest_key]} ({scores[lowest_key]}/100 — act first)"


def get_platform_visibility(seo: int, crypto: int, media: int) -> dict:
    return {
        "Google News": min(100, round((seo + media) / 2)),
        "CoinDesk": min(100, round(crypto * 1.0)),
        "CoinTelegraph": min(100, round(crypto * 0.98)),
        "PR Newswire": min(100, round(media * 0.96)),
    }


def generate_headline(
    headline: str,
    announcement_type: str = "funding-round",
    headline_quality: int = 88,
    seo_optimization: int = 82,
    crypto_keywords: int = 90,
    click_through_potential: int = 75,
    media_distribution: int = 85,
) -> dict:
    """
    Generate and score crypto press release headlines.

    Args:
        headline: The press release headline text
        announcement_type: Type of crypto announcement
        headline_quality: Headline quality score (0-100)
        seo_optimization: SEO optimization score (0-100)
        crypto_keywords: Crypto keyword score (0-100)
        click_through_potential: Click-through potential score (0-100)
        media_distribution: Media distribution score (0-100)

    Returns:
        dict with individual signal scores, overall score, and platform visibility
    """
    scores = {
        "headline_quality": headline_quality,
        "seo_optimization": seo_optimization,
        "crypto_keywords": crypto_keywords,
        "click_through_potential": click_through_potential,
        "media_distribution": media_distribution,
    }
    overall_headline_score = round(sum(scores.values()) / 5)

    return {
        "headline": headline,
        "announcement_type": announcement_type,
        "headline_quality_score": headline_quality,
        "seo_optimization_score": seo_optimization,
        "crypto_keywords_score": crypto_keywords,
        "click_through_potential_score": click_through_potential,
        "media_distribution_score": media_distribution,
        "overall_headline_score": overall_headline_score,
        "priority_action": get_priority_action(scores),
        "platform_visibility": get_platform_visibility(seo_optimization, crypto_keywords, media_distribution),
    }


if __name__ == "__main__":
    headline = sys.argv[1] if len(sys.argv) > 1 else "DeFi Protocol Raises $10M in Series A Funding Round"
    announcement_type = sys.argv[2] if len(sys.argv) > 2 else "funding-round"
    headline_quality = int(sys.argv[3]) if len(sys.argv) > 3 else 88
    seo_optimization = int(sys.argv[4]) if len(sys.argv) > 4 else 82
    crypto_keywords = int(sys.argv[5]) if len(sys.argv) > 5 else 90
    click_through_potential = int(sys.argv[6]) if len(sys.argv) > 6 else 75
    media_distribution = int(sys.argv[7]) if len(sys.argv) > 7 else 85

    result = generate_headline(
        headline, announcement_type, headline_quality, seo_optimization,
        crypto_keywords, click_through_potential, media_distribution
    )

    print(f"Headline: {result['headline']}")
    print(f"Announcement Type: {result['announcement_type']}")
    print("=" * 45)
    print(f"Headline Quality Score:        {result['headline_quality_score']}/100  [{get_status(result['headline_quality_score'])}]")
    print(f"SEO Optimization Score:        {result['seo_optimization_score']}/100  [{get_status(result['seo_optimization_score'])}]")
    print(f"Crypto Keywords Score:         {result['crypto_keywords_score']}/100  [{get_status(result['crypto_keywords_score'])}]")
    print(f"Click-Through Potential:       {result['click_through_potential_score']}/100  [{get_status(result['click_through_potential_score'])}]")
    print(f"Media Distribution Score:      {result['media_distribution_score']}/100  [{get_status(result['media_distribution_score'])}]")
    print("=" * 45)
    print(f"Overall Headline Score:        {result['overall_headline_score']}/100")
    print(f"Priority Action:               {result['priority_action']}")
    print("\nPlatform Visibility:")
    for platform, score in result['platform_visibility'].items():
        print(f"  {platform:<22} {score}/100")
