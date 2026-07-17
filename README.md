# CryptoPressRelease Headline Generator 📰⚡

[![npm](https://img.shields.io/npm/v/@buycryptopressrelease/headline-generator)](https://npmjs.com/package/@buycryptopressrelease/headline-generator)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21415210.svg)](https://doi.org/10.5281/zenodo.21415210)

An AI-powered tool designed to generate compelling, newsworthy, and SEO-friendly headlines for cryptocurrency, blockchain, Web3, NFT, DeFi, and fintech press releases. Built by [BuyCryptoPressRelease.com](https://www.buycryptopressrelease.com).

## Features

- Headline Quality Score — evaluates newsworthiness, clarity, and journalistic standards
- SEO Optimization Score — measures keyword density and search engine friendliness
- Crypto Keyword Score — tracks relevant crypto, Web3, DeFi, NFT, and blockchain terms
- Click-Through Potential Score — predicts reader engagement and CTR
- Media Distribution Score — evaluates suitability for news platforms and wire services
- Announcement Type Targeting — token launches, exchange listings, funding rounds, partnerships, protocol updates, and more
- CLI support in Node.js and Python
- Benchmark dataset included (20 crypto headline cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @buycryptopressrelease/headline-generator
npx crypto-headline-generator "DeFi Protocol Raises $10M in Series A Funding Round" token-launch 88 82 90 75 85
```

### Python

```bash
pip install buycryptopressrelease-headline-generator
python -m generator "DeFi Protocol Raises $10M in Series A Funding Round" token-launch 88 82 90 75 85
```

## Output

```
Headline: DeFi Protocol Raises $10M in Series A Funding Round
Announcement Type: Token Launch
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headline Quality Score:        88 / 100  [Excellent]
SEO Optimization Score:        82 / 100  [Healthy]
Crypto Keyword Score:          90 / 100  [Excellent]
Click-Through Potential:       75 / 100  [Healthy]
Media Distribution Score:      85 / 100  [Excellent]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Headline Score:        84 / 100
Priority Action:               Click-Through Potential (lowest — act first)

Platform Visibility:
  Google News:          85 / 100
  CoinDesk:             90 / 100
  CoinTelegraph:        88 / 100
  PR Newswire:          82 / 100
```

## Announcement Types

| Type | Description |
|------|-------------|
| token-launch | New token or coin launch announcements |
| exchange-listing | Exchange listing announcements |
| funding-round | Seed, Series A/B/C funding news |
| partnership | Strategic partnership announcements |
| product-release | New product or feature releases |
| protocol-update | Protocol upgrades and updates |
| ecosystem-milestone | Ecosystem growth milestones |
| regulatory-news | Regulatory and compliance updates |
| community-achievement | Community and governance news |
| nft-launch | NFT collection or platform launches |

## Project Structure

```
CryptoPressreleaseHeadlineGenerator/
├── index.ts              # TypeScript generator
├── generator.py          # Python generator
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt
├── dataset/
│   └── headline_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Headline Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| Headline Quality | Newsworthiness, clarity, journalistic standards | 0–100 |
| SEO Optimization | Keyword density, search engine friendliness | 0–100 |
| Crypto Keywords | Relevant crypto, Web3, DeFi, NFT, blockchain terms | 0–100 |
| Click-Through Potential | Reader engagement and CTR prediction | 0–100 |
| Media Distribution | Suitability for news platforms and wire services | 0–100 |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Major headline revision required |
| 31–60 | At Risk | Significant optimization needed |
| 61–80 | Healthy | Minor improvements recommended |
| 81–100 | Excellent | Ready for distribution |

## Keywords

Crypto Press Release · Headline Generator · Blockchain PR · Web3 Headlines · DeFi Press Release · NFT Announcement · Crypto SEO · Token Launch PR · BuyCryptoPressRelease

## Links

| Platform | URL |
|----------|-----|
| Website | https://www.buycryptopressrelease.com |
| GitHub | https://github.com/buycryptopressrelease/CryptoPressreleaseHeadlineGenerator |
| GitHub Pages | https://buycryptopressrelease.github.io/CryptoPressreleaseHeadlineGenerator/ |
| NPM | https://npmjs.com/package/@buycryptopressrelease/headline-generator |
| Hugging Face | https://huggingface.co/datasets/buycryptopressrelease/headline-generator-benchmarks |
| Kaggle | https://kaggle.com/datasets/buycryptopressrelease/headline-generator-benchmarks |
| Zenodo | https://zenodo.org/records/21415210 |
| Docs | https://cryptopressrelease-headline-generator.readthedocs.io |

## About BuyCryptoPressRelease.com

BuyCryptoPressRelease.com helps startups, crypto projects, PR professionals, and marketers create attention-grabbing press release headlines that follow journalistic best practices while improving visibility across search engines, news platforms, and media outlets.

## License

MIT — [BuyCryptoPressRelease.com](https://www.buycryptopressrelease.com)
