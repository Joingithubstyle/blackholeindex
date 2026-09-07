## Correction — 2026-09-07

**Zone thresholds in `methodology/METHODOLOGY.md` were wrong from first publication.** The file,
committed 2026-04-30 and never edited since, gave 0.5 / 1.0 / 1.5 / 2.5. The model in this same
repository (`model/model.ts`) has always used 0.4 / 0.7 / 1.3 / 2.5, as does the March 2026 research
paper and the production site. Anyone who took the specification rather than the code as canonical
had a different instrument. Corrected, and the empirical status of the boundaries is now stated in
the file: only B = 1 is derived; the rest are interpretive and unvalidated.

The July 2026 pass that replaced the placeholder validation figures updated `README.md` and the
data exports but did not touch the methodology document. That is why this survived.

# Changelog

## Q3 2026 (Current)
- Universe expanded to 184 platforms across 18 sectors; 34 platforms re-scored
- Ecosystem parent-group data added (12 groups, 37 platforms)
- Validation status corrected: preliminary Spearman ρ = 0.79 vs annual retention (n = 14); inter-rater ICC pending
- Placeholder validation cohort replaced with the published n = 14 retention cohort (see validation/)

## V3.1 — Q1 2026
- Org-depth multiplier introduced
- Momentum normalised
- ε-floor formalised at 0.1
- Universe expanded to 112 platforms across 12 sectors
- Working paper submitted to SSRN (Abstract ID: 6555158)
- UK CMA submission acknowledged (April 2026)

## V3.0 — Q3 2025
- Eleven-parameter rubric adopted
- Capture / Escape / Extended split formalised
- CES aggregation with Milgrom-Roberts complementarity correction

## V2.x — 2024
- Eight-parameter rubric
- First public release

## V1.x — 2023
- Six-parameter pilot
- Internal use only
