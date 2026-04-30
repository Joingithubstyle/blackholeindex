# Black Hole Index™

[![SSRN](https://img.shields.io/badge/SSRN-6555158-142850)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6555158)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--9542--7022-A6CE39)](https://orcid.org/0009-0003-9542-7022)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Website](https://img.shields.io/badge/Web-blackholeindex.com-142850)](https://blackholeindex.com)

**An open instrument for measuring structural lock-in across digital platforms.**

B = Capture / Escape. When B > 1, leaving becomes expensive. When it stays there, leaving becomes structurally prohibitive.

---

## What is BHI?

The Black Hole Index is a single dimensionless quantity that measures the structural lock-in of a digital platform — the degree to which a user, organisation, or counterparty cannot leave a system without proportional cost.

The instrument scores each platform on **eleven independently-anchored parameters** across three dimensions:

| Dimension | Parameters | Measures |
|-----------|-----------|----------|
| **Capture** (6) | Data, Memory, Action, Process, Network, Closeness | What holds users in |
| **Escape** (3) | Portability, Substitutability, Human Fallback | What enables exit |
| **Extended** (2) | Org Depth, Momentum | Structural amplifiers |

Scores are aggregated via a CES (Constant Elasticity of Substitution) function with a Milgrom-Roberts complementarity correction into a single ratio: **B = Capture / Escape**.

## Current Release: Q1 2026

- **Universe:** 112 platforms across 12 sectors
- **Version:** V3.1
- **Validation:** Spearman ρ = 0.83 against external migration-cost data (n = 36)
- **Inter-rater:** ICC(3,k) = 0.84

## Zone Classification

| Zone | B Range | Interpretation |
|------|---------|---------------|
| Useful Tool | 0 – 0.5 | Substitutable in days; no structural friction |
| Growing Gravity | 0.5 – 1.0 | Friction is real but reversible at modest cost |
| Transition | 1.0 – 1.5 | Migration is a project, not a decision |
| Event Horizon | 1.5 – 2.5 | Leaving requires re-platforming |
| Black Hole | ≥ 2.5 | Exit cost approaches the value of the dependent activity |

## Repository Structure

```
blackholeindex/
├── paper/                  # Full working paper (35 pages, 46 references)
├── data/                   # Platform scores and sector definitions
├── model/                  # V3.1 aggregation function (TypeScript)
├── validation/             # Reference cohort with migration costs
├── methodology/            # Parameter rubrics and aggregation specification
├── CITATION.cff            # Machine-readable citation
├── CHANGELOG.md            # Version history
└── LICENSE                 # CC-BY 4.0
```

## Interactive Tools

All tools are available at [blackholeindex.com](https://blackholeindex.com):

- **[Calculator](https://blackholeindex.com/observatory)** — Score any platform against the 11-parameter rubric
- **[Rankings](https://blackholeindex.com/rankings)** — All 112 platforms ranked by sector
- **[Compare](https://blackholeindex.com/compare)** — Overlay up to 4 platforms on the same radar
- **[Methodology](https://blackholeindex.com/methodology)** — Full specification with KaTeX equations
- **[Validation](https://blackholeindex.com/validation)** — External-data correlation and residuals
- **[Paper](https://blackholeindex.com/paper)** — Paginated reader with fullscreen mode

## Citation

```bibtex
@techreport{savich2026bhi,
  author       = {Savich, Ivan},
  title        = {Structural Lock-In as a Single Dimensionless Quantity:
                  The Black Hole Index},
  institution  = {Black Hole Index Project},
  year         = {2026},
  month        = jan,
  number       = {V3.1},
  type         = {Working Paper},
  url          = {https://blackholeindex.com/paper},
  note         = {SSRN Abstract ID: 6555158}
}
```

## Regulatory Engagement

- **UK CMA** — Digital Markets Unit acknowledged BHI-based submission on Apple/Google mobile platform investigation (April 2026)
- **SSRN** — Working paper submitted (Abstract ID: 6555158)

## Author

**Ivan Savich** — Independent researcher
- ORCID: [0009-0003-9542-7022](https://orcid.org/0009-0003-9542-7022)
- Email: ivan.savich@blackholeindex.com
- Web: [blackholeindex.com](https://blackholeindex.com)

## License

This work is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial, as long as you give appropriate credit.
