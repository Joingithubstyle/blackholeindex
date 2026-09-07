# BHI Methodology — V3.1

## Formula

```
B = Capture / [ε + EscapeCore × feedback]

Capture = c × (1 + 0.5n) × CaptureCore × (1 + 0.5o) × (1 + 0.3t)

CaptureCore = ((√d + √m + √a + √p) / 4)² × SynergyBoost

SynergyBoost = 1 + 0.3 × (σ_K + σ_O) / 2
  σ_K = √(d × m)     knowledge synergy
  σ_O = √(a × p)     operational synergy

EscapeCore = ((√x + √s + √h) / 3)²

feedback = max(0.3, 1 − 0.35 × CaptureBase)

ε = 0.1 (floor)
```

## Parameters

All parameters scored 0–10 with anchored rubrics.

### Capture (6 parameters)
| # | Parameter | Key | Anchor at 10 |
|---|-----------|-----|-------------|
| 1 | Data Depth | d | All user-generated state lives inside the platform with no equivalent export |
| 2 | Memory | m | Persistent, system-side context that compounds with use |
| 3 | Action | a | Platform executes consequential actions across multiple external surfaces |
| 4 | Process | p | Operating procedures written around the platform's primitives |
| 5 | Network | n | Direct two-sided network effects with no portable identity layer |
| 6 | Closeness | c | Daily, intimate, multi-modal use; surface area against habit |

### Escape (3 parameters)
| # | Parameter | Key | Anchor at 10 |
|---|-----------|-----|-------------|
| 7 | Portability | x | Full one-click export of all state to a competing system |
| 8 | Substitutability | s | Multiple commodity-grade alternatives at parity |
| 9 | Human Fallback | h | Work can be done by a human in reasonable time and cost |

### Extended (2 parameters)
| # | Parameter | Key | Anchor at 10 |
|---|-----------|-----|-------------|
| 10 | Org Depth | o | Embedded across >10 functions; removal requires structural change |
| 11 | Momentum | t | Lock-in increasing year-over-year; ∂B/∂t positive and material |

## Zone Thresholds

| Zone | B Range | Interpretation |
|------|---------|---------------|
| Useful Tool | B < 0.4 | System is genuinely optional; users can leave with minimal cost |
| Growing Gravity | 0.4 ≤ B < 0.7 | Dependency forming; switching feasible but increasingly inconvenient |
| Transition Zone | 0.7 ≤ B < 1.3 | Gray zone (cf. Altman Z-score methodology); outcome depends on trajectory |
| Event Horizon | 1.3 ≤ B < 2.5 | Leaving is expensive and gets more expensive over time |
| Black Hole | B ≥ 2.5 | Structural lock-in; leaving requires organisational restructuring |

**Corrected 7 September 2026.** This table previously read 0.5 / 1.0 / 1.5 / 2.5. Those boundaries
were never the ones the model used: `model/model.ts` in this repository has always applied
0.4 / 0.7 / 1.3 / 2.5, and so does the research paper published in March 2026, a month before this
file. The replication package therefore shipped a specification that contradicted its own code from
the day it was published, and stood that way for four months. The values above now match the code,
the paper and the production site.

**Status of these boundaries.** Only B = 1 has a derivation — it is the point where capture equals
escape. The others are interpretive and have no empirical derivation: they have not been shown to
correspond to any observed behavioural transition, and roughly 9% of platforms cross a zone
boundary under ±1 scoring noise (see the robustness note). Treat the zone label as a presentational
band, not as a measured category.
