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

## Current Release: Q3 2026

- **Universe:** 184 platforms across 18 sectors
- **Version:** V3.1
- **Validation:** Preliminary. Spearman ρ = 0.79 against annual retention rates (n = 14, p < 0.001). Details: [blackholeindex.com/validation](https://blackholeindex.com/validation)
- **Inter-rater:** Pending. All scores to date are from a single evaluator; an independent multi-rater ICC study (target ICC > 0.75) is planned for Q4 2026

## Zone Classification

| Zone | B Range | Interpretation |
|------|---------|---------------|
| Useful Tool | 0 – 0.4 | System is genuinely optional; users can leave with minimal cost |
| Growing Gravity | 0.4 – 0.7 | Dependency forming; switching feasible but increasingly inconvenient |
| Transition Zone | 0.7 – 1.3 | Gray zone; outcome depends on trajectory |
| Event Horizon | 1.3 – 2.5 | Leaving is expensive and gets more expensive over time |
| Black Hole | ≥ 2.5 | Structural lock-in; leaving requires organizational restructuring |

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
- **[Rankings](https://blackholeindex.com/rankings)** — All 184 platforms ranked by sector
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
- **SSRN** — Paper posted (Abstract ID: 6555158)

## Author

**Ivan Savich** — Independent researcher
- ORCID: [0009-0003-9542-7022](https://orcid.org/0009-0003-9542-7022)
- Email: ivan.savich@blackholeindex.com
- Web: [blackholeindex.com](https://blackholeindex.com)

## License

This work is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt this material for any purpose, including commercial, as long as you give appropriate credit.
