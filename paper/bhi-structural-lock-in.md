# The Black Hole Index: A Structural Lock-In Measurement Framework for Digital Platforms

**Ivan Savich**

*Independent Researcher*

**Date:** March 2026

**Keywords:** platform lock-in, switching costs, network effects, CES aggregation, structural dependency, digital monopoly, measurement instrument

---

## Abstract

We introduce the Black Hole Index (BHI), a domain-agnostic measurement instrument for quantifying structural lock-in and switching costs in digital and physical platforms. The model decomposes lock-in into 11 scored parameters grouped into three categories — Capture (six variables measuring dependency depth), Escape (three variables measuring exit feasibility), and Extended (two variables capturing organizational embedding and momentum). Parameters are aggregated using a modified Constant Elasticity of Substitution (CES) function with a Milgrom-Roberts complementarity correction and combined into a dimensionless ratio B = Capture / (ε + EscapeCore × feedback), where feedback implements endogenous escape suppression via behavioral inertia. We apply BHI to a cross-section of 100 platforms across 12 sectors — AI, crypto assets, crypto infrastructure, social media, Big Tech, SaaS, banking, fintech, e-commerce, gaming, pharma, and critical infrastructure — generating the first systematic structural lock-in ranking of the global platform economy. Results reveal that infrastructure platforms (EDA duopoly: B ≈ 13.0; ASML: B ≈ 9.6; TSMC: B ≈ 10.9) exhibit lock-in an order of magnitude higher than attention-based platforms (Netflix: B ≈ 1.0; Dogecoin: B ≈ 0.2), despite the latter commanding larger user bases or market caps. A sensitivity analysis demonstrates ranking robustness to coefficient variation within ±30%. We further specify a dynamic extension modeling the co-evolution of structural lock-in and human skill decay. The framework is situated within the platform competition literature, engaging the 2019 expert reports (Crémer et al.; Stigler Committee; Furman Review), the EU Digital Markets Act and UK DMCCA regulatory frameworks, and empirical switching-cost research (Shy, 2002; Dubé et al., 2009; Akman, 2022; Ciotti et al., 2025), as well as counter-arguments from ecosystem competition theory (Petit, 2020). BHI is positioned as a proposed measurement instrument at a pre-empirical stage: formula specification and arithmetic verification are complete; inter-rater reliability testing and predictive validation against observable switching behavior remain pending. We discuss limitations, validation requirements, and paths toward empirical calibration.

**JEL Classification:** L14, L41, D43, O33

**Word count:** ~13,800

---

## 1. Introduction

The concept of lock-in — the state in which a user, organization, or economy becomes structurally dependent on a platform and faces prohibitive switching costs — has been central to information economics since Arthur (1989) formalized increasing returns and path dependence. Farrell and Klemperer (2007) provided the definitive survey of switching costs and network effects, establishing that lock-in emerges from the interaction of sunk investment, learning costs, contractual commitments, and network externalities. Shapiro and Varian (1999) translated these ideas into managerial strategy, while Rochet and Tirole (2003) formalized two-sided market dynamics that amplify lock-in through cross-side network effects.

Despite this rich theoretical foundation, no standardized measurement instrument exists for quantifying structural lock-in across platforms and sectors. Existing approaches fall into three categories, each with significant limitations:

1. **Switching cost estimation.** Burnham, Frels, and Mahajan (2003) developed a typology of switching costs (procedural, financial, relational) with survey-based measurement. These measures are platform-specific, require primary data collection, and do not aggregate into a single comparable score.

2. **Network effect proxies.** Empirical work uses user counts, Herfindahl-Hirschman Index (HHI), or platform revenue share as proxies. These capture market concentration but not structural dependency — a platform with 90% market share may still face low lock-in if switching costs are negligible.

3. **Qualitative assessment.** Industry analysts, regulators, and journalists use terms like "walled garden," "ecosystem lock-in," and "vendor dependency" without formal operationalization. The European Digital Markets Act (DMA) designates gatekeepers based on thresholds (45M monthly active users, €7.5B EU turnover or €75B market capitalisation) that measure scale, not structural lock-in.

BHI addresses this gap by proposing a formalized, parametric instrument that: (a) decomposes lock-in into 11 observable dimensions with anchored scoring rubrics; (b) aggregates these dimensions using theoretically motivated functional forms from production economics; (c) produces a single dimensionless score comparable across platforms, sectors, and time periods; and (d) includes a dynamic extension modeling the co-evolution of lock-in and human capability decay.

The instrument draws an explicit analogy to the Reynolds number in fluid dynamics — a dimensionless ratio of inertial forces to viscous forces that predicts transitions between laminar and turbulent flow. B is a dimensionless ratio of capture forces to escape forces. Unlike the Reynolds number, whose critical thresholds were established through extensive empirical observation, BHI's thresholds are currently definitional and await empirical validation.

We emphasize that BHI is at a pre-empirical stage. The contribution of this paper is *formalization and operationalization*: specifying a complete, computable model with anchored rubrics, applying it to a substantive cross-section, and transparently documenting what has been validated and what remains pending. We do not claim that BHI produces validated measurements — we claim that it produces *structured, reproducible assessments* that can be subjected to validation.

The remainder of this paper is organized as follows. Section 2 reviews related work on switching costs, network effects, and platform competition. Section 3 specifies the complete BHI model. Section 4 presents cross-section results for 100 platforms. Section 5 reports sensitivity analysis. Section 6 extends the model to dynamic lock-in evolution. Section 7 discusses limitations and the validation agenda. Section 8 concludes.

---

## 2. Related Work

### 2.1 Switching Costs and Lock-In Theory

The economic theory of switching costs begins with Klemperer (1987), who showed that even small switching costs can generate significant market power. Arthur (1989) demonstrated that competing technologies with increasing returns can lock entire economies into inferior standards through path dependence — the QWERTY keyboard being the canonical (if debated) example.

Farrell and Klemperer (2007) provide the most comprehensive survey, categorizing switching costs as: (i) compatibility and standards costs, (ii) transaction costs, (iii) learning costs, (iv) contractual costs, (v) search costs, and (vi) psychological costs. Their framework is qualitative — it identifies the *types* of switching costs but does not provide a *measurement instrument* that produces a quantitative score.

Burnham, Frels, and Mahajan (2003) developed a consumer-facing switching cost typology (procedural, financial, relational) with a multi-item survey instrument. Their approach yields reliable measurement within a specific product category (e.g., credit cards, long-distance carriers) but does not generalize across categories — the items must be redesigned for each domain.

BHI differs from these approaches in two ways. First, it is designed to be *domain-agnostic* — the same 11 parameters and rubrics apply to an AI assistant, a semiconductor manufacturer, and a payment network. Second, it measures *structural* lock-in (the depth of the dependency well) rather than *experienced* switching cost (the subjective cost a particular user reports). The distinction matters: structural lock-in can be high even when users report satisfaction and do not contemplate switching.

### 2.2 Network Effects and Two-Sided Markets

Katz and Shapiro (1985) formalized direct and indirect network externalities, establishing that platforms with network effects can tip toward winner-take-all outcomes. Rochet and Tirole (2003) extended this to two-sided markets where the platform must balance pricing and value creation across multiple user groups.

BHI incorporates network effects through parameter *n* (network effects, 0-10) as a multiplicative amplifier of capture: `Capture = c × (1 + 0.5n) × CaptureCore × ...`. This design choice reflects the empirical observation that network effects amplify existing lock-in rather than creating it independently — a platform with no data depth, memory, or process integration does not generate lock-in merely by having network effects.

### 2.3 Platform Competition, Regulatory Measurement, and the Quantitative Gap

The decade following Farrell and Klemperer's (2007) survey saw an explosion of both theoretical and policy-oriented scholarship on platform competition, driven by the growing dominance of digital platforms and the regulatory responses they provoked. Three landmark expert reports — the European Commission's "Competition Policy for the Digital Era" (Crémer, de Montjoye, and Schweitzer, 2019), the Stigler Committee on Digital Platforms Final Report (2019), and the Furman Review "Unlocking Digital Competition" (Furman et al., 2019) — collectively established that digital markets exhibit extreme returns to scale, strong network externalities, and data-driven lock-in that conventional antitrust tools struggle to address. Lancieri and Sakowski (2021), in a systematic review of 22 expert reports from 18 competition authorities worldwide, documented broad consensus on these dynamics while noting significant disagreement on specific remedies.

These reports catalyzed regulatory action. The European Union's Digital Markets Act (2022) introduced ex ante obligations for designated "gatekeepers," using quantitative thresholds (€7.5 billion EU turnover, 45 million monthly active end users) as proxies for market power (Bostoen, 2023). Crémer et al. (2023) formalized the DMA's twin goals — "fairness" and "contestability" — as economic concepts, defining contestability as the ability of non-dominant firms to overcome entry barriers. The UK's Digital Markets, Competition and Consumers Act (2024) adopted a different methodology based on "strategic market status" (SMS) with forward-looking assessment, leading to designations of Apple and Google by the Competition and Markets Authority in October 2025. Fletcher et al. (2024) analyzed how economics should be applied within the DMA framework, including gatekeeper designation criteria.

Theoretical advances accompanied the regulatory developments. Khan (2017) argued that the consumer welfare standard is inadequate for assessing Amazon's structural market power, proposing a return to structural analysis — an intellectual foundation for why structural lock-in measurement is needed alongside price-based assessment. Athey and Scott Morton (2022) introduced "platform annexation" — where dominant platforms acquire complementary multi-homing tools and operate them to restrict efficient multi-homing, steering users toward the incumbent. Scott Morton et al. (2023) proposed mandated "equitable interoperability" as a "super tool" for digital platform governance where network effects drive concentration; Kades and Scott Morton (2020) further specified interoperability mandates as a mechanism to overcome proprietary network effects. Jacobides and Lianos (2021) developed an ecosystem-level framework showing how platforms leverage complementors and create "bottlenecks" in industry architectures — precisely the structural patterns BHI aims to quantify. Jullien and Sand-Zantman (2021) provided a comprehensive theory guide covering market tipping, entry barriers, multihoming, data portability, and switching costs from a competition policy perspective, while Jullien, Pavan, and Rysman (2021) offered the definitive handbook survey of two-sided market theory including network effects estimation and platform design.

An important counter-argument comes from Petit (2020), who proposed the "moligopoly" hypothesis — that Big Tech firms simultaneously operate as monopolists in tipped markets while competing as oligopolists across adjacent markets under uncertainty. Petit argues that inter-ecosystem competition constrains lock-in within any single ecosystem. Related work on algorithmic market power (Ezrachi and Stucke, 2016) and data-driven competitive advantages (Stucke and Grunes, 2016) further illuminates how platform lock-in mechanisms interact with broader competitive dynamics. BHI measures within-ecosystem structural lock-in and does not claim to capture inter-ecosystem competitive dynamics; future work could incorporate cross-ecosystem competitive pressure as a moderating variable.

On the empirical front, quantitative studies of switching behavior remain sparse. Shy (2002) developed a method for estimating switching costs from observed prices and market shares, tested in cellular and banking markets. Dubé, Hitsch, and Rossi (2009) challenged the conventional wisdom that switching costs necessarily reduce competition, finding that equilibrium prices can actually *fall* with switching costs — a U-shaped relationship with significant implications for interpreting high BHI scores. Akman (2022), in a cross-continental study of 11,000+ consumers in 10 countries, documented paradoxes where user behavior contradicts regulatory assumptions about switching and multi-homing — stated preferences diverge sharply from revealed behavior. Ciotti, Hornuf, and Stenzhorn (2025) experimentally demonstrated lock-in effects in online labor markets, showing that non-portable platform-specific reputation creates switching costs that platforms exploit through higher fees. Franck and Peitz (2023) proposed indicators for assessing digital platform market power, including network effects, switching costs, and data advantages.

Despite this rich literature, no standardized quantitative index for platform structural lock-in exists. Regulatory approaches use categorical thresholds (DMA gatekeeper criteria, CMA SMS designation) rather than continuous measurement. Empirical studies estimate switching costs for individual markets (Shy, 2002; Dubé et al., 2009; Ciotti et al., 2025) but do not produce cross-sector comparable scores. Qualitative frameworks propose factor categorizations without quantitative aggregation. BHI is designed to fill this specific gap: a composite quantitative index, analogous in structure to the Altman Z-Score or Sharpe Ratio, that produces a single dimensionless number enabling cross-platform and cross-sector comparison of structural lock-in.

### 2.4 Data Gravity and Platform Economics

McCrory (2010) introduced the concept of data gravity — the tendency of data to attract services, applications, and more data. As data accumulates in a platform, the cost of moving that data (and the services built on it) increases, creating self-reinforcing lock-in. Graef (2015) analyzed mandated portability and interoperability in online social networks, drawing parallels with telecommunications regulation and identifying how switching costs and network effects compound to create competitive problems. Syrmoudis et al. (2021) empirically studied data portability between online platforms, finding that GDPR Article 20 data portability rights transfer raw data but not derived state (models, embeddings, learned preferences), leaving substantial lock-in intact.

BHI operationalizes data gravity through the interaction of data depth (*d*), memory (*m*), and portability (*x*). A platform with d=9, m=7, x=3 (deep data, strong memory, poor portability) generates high data gravity. The feedback mechanism — where high capture suppresses effective escape — formalizes the self-reinforcing nature of data gravity.

### 2.5 Automation Complacency and Skill Decay

A novel element of BHI is the incorporation of automation complacency (Parasuraman and Manzey, 2010) into the lock-in model. As users rely on a system, their ability to perform tasks without it degrades — what we term *endogenous h-decay*. Qian and Wexler (2024), studying 76 professional engineers at Google, documented automation complacency patterns in AI-assisted coding — engineers increasingly deferred to AI suggestions over the course of tasks. Becker et al. (2025), in the METR study of experienced open-source developers, found that AI assistance slowed task completion by 19% despite developers expecting a 24% speedup — consistent with Parasuraman and Manzey's complacency framework.

BHI models this through the human fallback parameter (*h*), which decreases with use intensity, reducing escape capacity and increasing B over time. This creates the self-reinforcing loop that distinguishes structural lock-in from mere preference: the system makes itself harder to leave through the act of being used.

### 2.6 Measurement Instruments in Economics and Finance

BHI draws design inspiration from several established measurement instruments:

- **Altman Z-Score** (Altman, 1968): A linear discriminant function combining five financial ratios to predict corporate bankruptcy. Altman derived coefficients through discriminant analysis on 66 companies. BHI shares the ratio-based, multi-factor approach but currently lacks empirically estimated coefficients — its constants are theoretically motivated working parameters.

- **Sharpe Ratio** (Sharpe, 1966): Risk-adjusted return = (Return − Rf) / σ. The conceptual structure of BHI — a ratio of competing forces — mirrors the Sharpe Ratio's ratio of excess return to volatility.

- **Gini Coefficient** (Gini, 1912): A dimensionless inequality measure between 0 and 1, applicable across any income distribution. BHI similarly produces a dimensionless score applicable across any platform.

The critical difference: Sharpe, Altman, and Gini all operate on *objective data* (returns, financial ratios, incomes). BHI operates on *scored assessments* using anchored rubrics, making inter-rater reliability a first-order validation requirement.

---

## 3. Model Specification

### 3.1 Parameters

BHI uses 11 parameters, each scored on an integer scale from 0 to 10, with five-level anchored rubrics providing concrete behavioral descriptions at scores 0, 3, 5, 7, and 10. Parameters are grouped into three categories:

**Capture Variables** (what holds users in):

| Parameter | Symbol | Measures |
|:----------|:------:|:---------|
| Data Depth | *d* | Volume, richness, and uniqueness of user data the platform holds |
| Memory | *m* | Cross-session persistence and accumulated user model |
| Action | *a* | Breadth of actions the platform can execute on the user's behalf |
| Process Centrality | *p* | Degree to which the platform is embedded in critical workflows |
| Network Effects | *n* | Strength of direct and cross-side network externalities |
| Closeness | *c* | Frequency and intimacy of user-platform interaction |

**Escape Variables** (what enables exit):

| Parameter | Symbol | Measures |
|:----------|:------:|:---------|
| Portability | *x* | Ease of exporting data and state to a competing platform |
| Substitutability | *s* | Availability and quality of functional alternatives |
| Human Fallback | *h* | User's ability to perform tasks without the platform |

**Extended Variables** (amplifiers):

| Parameter | Symbol | Measures |
|:----------|:------:|:---------|
| Organizational Depth | *o* | Degree of organizational restructuring around the platform |
| Momentum | *t* | Rate of capability improvement relative to competitors |

### 3.2 Scoring Rubrics

Each parameter uses a five-anchor rubric. We illustrate with two parameters that span the capture-escape spectrum:

**Process Centrality (*p*):**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Not embedded | Not part of any workflow. Used recreationally or experimentally. |
| 3 | Ad hoc | Used occasionally for specific tasks. Easy to do without. |
| 5 | 1-2 workflows | Integrated into one or two regular workflows. Absence noticed within hours. |
| 7 | Central hub | Most daily work tasks touch the system. Central routing point for decisions. |
| 10 | Critical path | Business processes cannot complete without this system. Downtime equals revenue loss. |

**Substitutability (*s*):**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | None | No functional equivalent exists. Monopoly or unique technology. |
| 3 | Major loss | Alternatives exist but with significant capability loss. 50%+ functionality gap. |
| 5 | Comparable | Comparable alternatives available. Switching requires effort but similar result. |
| 7 | Drop-in | Near drop-in replacements. Switching cost is re-learning, not capability loss. |
| 10 | Commodity | Fully commoditized layer. Dozens of equivalent options. Switching is trivial. |

The complete rubric set for all 11 parameters is provided in the appendix and published at blackholeindex.com/methodology.

### 3.3 Aggregation: Modified CES with Complementarity Correction

Parameters are normalized to [0, 1] by dividing each score by 10. The core aggregation uses a modified Constant Elasticity of Substitution (CES) function.

**CaptureCore:**

```
CaptureCore = ((√d + √m + √a + √p) / 4)² × SynergyBoost
```

The inner function `((√d + √m + √a + √p) / 4)²` is a CES aggregator with elasticity of substitution σ = 2 (substitution parameter β = 0.5). The square-root transformation and squaring correspond to the Solow Case 2 of the Arrow-Chenery-Minhas-Solow CES family. We adopt σ = 2 as a mathematical property choice, not as an empirical estimate drawn from the capital-labor substitution literature. The chosen value encodes the assumption that lock-in components are partial substitutes: neither strict complements (σ → 0, Leontief), in which every component must be present for any lock-in to arise, nor perfect substitutes (σ → ∞), in which a single dominant component would suffice. This property — partial substitutability with diminishing marginal returns to any single component — is the content of the choice. Empirical calibration of σ from multi-evaluator panel data is a Phase 3 deliverable in the validation roadmap (Section 7.3).

The economic interpretation: data depth and memory are *partial substitutes* in creating lock-in. A platform with d=8, m=0 creates less lock-in than d=4, m=4, because data without memory means each session starts from near-zero context. The same logic applies to action and process centrality.

**SynergyBoost (Milgrom-Roberts Complementarity Correction):**

```
σ_K = √(d × m)       knowledge synergy
σ_O = √(a × p)       operational synergy
SynergyBoost = 1 + 0.3 × (σ_K + σ_O) / 2
```

Milgrom and Roberts (1990, 1995) established that complementary activities exhibit supermodular payoffs — the return to one activity increases in the level of complementary activities. BHI captures two pairwise complementarities: knowledge synergy between data depth and memory (knowing more is more valuable when you remember what you know), and operational synergy between action capability and process centrality (executing actions is more lock-in-creating when the platform is the workflow hub).

SynergyBoost is multiplicative, meaning this is not a pure CES function in the Arrow-Chenery-Minhas-Solow sense. It is a CES core with a complementarity correction.

**EscapeCore:**

```
EscapeCore = ((√x + √s + √h) / 3)²
```

The same CES form applied to the three escape variables.

### 3.4 The B Formula

**Full Capture:**

```
Capture = c × (1 + 0.5n) × CaptureCore × (1 + 0.5o) × (1 + 0.3t)
```

Closeness (*c*) acts as a base multiplier — zero interaction means zero lock-in regardless of structural depth. Network effects (*n*), organizational depth (*o*), and momentum (*t*) are multiplicative amplifiers with theoretically motivated coefficients:

- α = 0.5 (network amplification): following Katz-Shapiro (1985), network effects roughly double lock-in at maximum.
- ω = 0.5 (organizational multiplier): following Granovetter (1978), organizational embedding creates threshold-cascade effects.
- τ = 0.3 (momentum multiplier): following Arthur (1989), increasing returns amplify lock-in at a lower rate than network or organizational effects.

**Feedback Coefficient:**

```
feedback = max(0.3, 1 − 0.35 × CaptureBase)
```

where CaptureBase = CaptureCore before SynergyBoost multiplication. This implements endogenous escape suppression: as capture deepens, the effective contribution of escape to the denominator decreases. The coefficient δ = 0.35 reflects the empirical finding that approximately one-third of users exhibit status quo bias in platform switching contexts. This is consistent with the broader behavioral economics literature: Samuelson and Zeckhauser (1988) established status quo bias as a robust phenomenon; Kahneman, Knetsch, and Thaler (1991) documented endowment effects of similar magnitude; Burnham, Frels, and Mahajan (2003) measured procedural switching costs at 30-40% of total switching barriers. The value 0.35 is a theoretically motivated working parameter subject to empirical calibration. The floor at 0.3 prevents escape from becoming negligible.

Note: δ = 0.35 is not directly estimated from a single study. It is a central estimate from the range of behavioral inertia findings in the switching cost literature (approximately 0.25-0.45). Sensitivity analysis in Section 5 demonstrates that rankings are robust to variation within this range.

**The Index:**

```
B = Capture / (ε + EscapeCore × feedback)
```

where ε = 0.1 is a floor parameter preventing division by zero and bounding B at a finite maximum.

### 3.5 Interpretation Zones

| Range | Zone | Interpretation |
|:------|:-----|:---------------|
| B < 0.4 | Useful Tool | System is genuinely optional. Users can leave with minimal cost. |
| 0.4 ≤ B < 0.7 | Growing Gravity | Dependency forming. Switching feasible but increasingly inconvenient. |
| 0.7 ≤ B < 1.3 | Transition Zone | Gray zone (cf. Altman Z-Score methodology). Outcome depends on trajectory. |
| 1.3 ≤ B < 2.5 | Event Horizon | Leaving is expensive and gets more expensive over time. |
| B ≥ 2.5 | Black Hole | Structural lock-in. Leaving requires organizational restructuring. |

The threshold at B = 1 is definitional: the point where capture equals escape. Whether B = 1 corresponds to an observable behavioral transition in platform switching is an empirical question not yet tested.

### 3.6 Theoretical Maximum

With all parameters at their extremes (capture variables = 10, escape variables = 0), B_max ≈ 38.03. This is high for a ratio index but mathematically correct given the multiplicative structure. In practice, no platform approaches this theoretical maximum — the highest observed score in our cross-section is approximately 17 (WeChat).

### 3.7 Measurement Scale Considerations

The 0-10 scoring rubric is treated as approximately interval-scale for operational computation. Anchored rubrics with concrete behavioral descriptions at each level are designed to create consistent intervals between levels. However, strict interval-scale validity has not been formally established through Rasch modeling or Item Response Theory calibration. Until such calibration is performed, users should interpret small differences in B (less than 0.5) with caution, as they may fall within the measurement uncertainty of the ordinal-to-interval approximation.

---

## 4. Cross-Section Results

### 4.1 Sample and Scoring Procedure

We applied BHI to 100 platforms across 12 sectors. Platform selection followed three criteria: (i) global significance or sector dominance, (ii) availability of public information sufficient to score all 11 parameters, and (iii) diversity across sectors, business models, and lock-in profiles.

Scoring was conducted by a single evaluator using the anchored rubrics, with written rationale for each parameter score. This is an acknowledged limitation — inter-rater reliability requires independent scoring by multiple evaluators (see Section 7). All scores, rationales, and computed B values are published at blackholeindex.com/rankings.

### 4.2 Sector Overview

**Table 1: Sector Summary Statistics**

| Sector | Platforms | B Range | Median B | Highest B Platform |
|:-------|:---------:|:-------:|:--------:|:-------------------|
| AI Assistants | 10* | 0.2 – 4.7 | ~2.0 | Microsoft Copilot (4.7) |
| Crypto Assets | 10 | 0.2 – 4.8 | ~1.8 | Solana (4.8) |
| Crypto Infrastructure | 8 | 0.6 – 3.5 | ~1.7 | Binance (3.5) |
| Social Media | 10 | 1.3 – 17.0 | ~3.4 | WeChat (17.0) |
| Big Tech & Semiconductors | 8 | 4.6 – 10.9 | ~7.5 | TSMC (10.9) |
| SaaS & Cloud | 10 | 0.9 – 9.7 | ~4.5 | Palantir (9.7) |
| Banks & Financial Infrastructure | 8 | 2.2 – 7.2 | ~4.7 | Bloomberg Terminal (7.2) |
| Fintech & Payments | 8 | 1.1 – 8.8 | ~3.3 | Visa (8.8) |
| Gaming & Entertainment | 8 | 0.7 – 6.1 | ~3.8 | Apple App Store (6.1) |
| E-Commerce | 8 | 1.7 – 7.8 | ~3.4 | Amazon Marketplace (7.8) |
| Pharma & Biotech | 6 | 1.9 – 5.8 | ~4.1 | Illumina (5.8) |
| Critical Infrastructure | 6 | 3.5 – 13.0 | ~4.5 | Synopsys/Cadence EDA (13.0) |

*\* AI sector includes 8 real platforms + 2 reference scenarios (AI-OS theoretical and generic Chat LLM). Range shown excludes theoretical AI-OS (B ≈ 7.7).*

### 4.3 Key Findings

**Finding 1: Infrastructure compounds; attention decays.**

The highest B scores belong not to consumer-facing platforms with billions of users, but to infrastructure platforms that underpin entire industries:

- Synopsys/Cadence EDA duopoly: B ≈ 13.0 (p=10, s=1, h=1 — no chip design without EDA)
- TSMC: B ≈ 10.9 (p=10, s=1, h=2 — no advanced chips without TSMC)
- ASML: B ≈ 9.6 (p=10, s=1, h=1 — no EUV lithography without ASML)
- Visa: B ≈ 8.8 (p=9, n=9, s=2, h=2 — purest network effect monopoly in financial services)
- NVIDIA: B ≈ 8.3 (p=9, n=9, s=2, t=9 — CUDA ecosystem lock-in)

Meanwhile, platforms with massive user bases but commoditized offerings score low:

- Netflix: B ≈ 1.0 (325M subscribers, but no owned content, no social graph, no accumulated assets)
- Dogecoin: B ≈ 0.2 ($15B market cap, near-zero structural lock-in)

**Finding 2: Lock-in is driven by escape difficulty, not capture volume.**

The multiplicative structure of BHI reveals that B is most sensitive to escape variables when they are low. Reducing substitutability from s=3 to s=1 has a larger effect on B than increasing any single capture variable by 2 points. This reflects the economic intuition that monopoly (no alternatives) creates more lock-in than incremental improvements to an already-embedded platform.

The EDA duopoly illustrates this: with x=1, s=1, h=1 (effectively zero escape capacity), even moderate capture scores generate extreme B values.

**Finding 3: The WeChat anomaly.**

WeChat (B ≈ 17.0) registers the highest B in the cross-section despite not being traditional infrastructure. Its scores: d=9, m=9, a=9, p=10, n=9, c=10, x=1, s=1, h=1, o=9, t=5. WeChat functions as digital infrastructure for 1.3 billion Chinese users — identity, payments, government services, commerce, communication all route through a single application. The "super-app" model achieves infrastructure-level lock-in through comprehensiveness rather than through controlling a physical chokepoint.

**Finding 4: Crypto exhibits the widest B dispersion.**

Cryptocurrency platforms span the full B range from near-zero (Dogecoin: B ≈ 0.2) to infrastructure-level (Solana: B ≈ 4.8, Ethereum: B ≈ 4.6). This reflects the fundamental divide between: (a) tokens that are pure speculative instruments with perfect substitutability, and (b) smart contract platforms that function as programmable infrastructure with developer ecosystems, DeFi protocols, and tooling dependencies.

Solana (B ≈ 4.8) scores slightly higher than Ethereum (B ≈ 4.6) despite younger age, driven by explosive momentum (t=9) and low developer portability (x=2 — Rust/Anchor code does not transfer to EVM).

**Finding 5: B explains retention better than market cap.**

Several platforms exhibit striking divergence between market capitalization and structural lock-in:

- MercadoLibre (B ≈ 5.9, market cap $88B) versus PayPal (B ≈ 1.1, market cap $42B): MELI combines marketplace, payments, logistics, and credit into a unified lock-in structure across Latin America. PayPal faces commoditization as Apple Pay, Google Pay, and Shop Pay offer drop-in alternatives.

- SWIFT (B ≈ 6.8, cooperative) controls $150T+ in daily message flow through 11,000+ institutions. Disconnection from SWIFT is the financial equivalent of oxygen deprivation — as Iran and Russia have demonstrated.

- Nubank (B ≈ 5.2, market cap $68-72B) is the first and only bank for 100M+ underbanked Latin Americans. Its lock-in is existential — users switching from Nubank are switching away from financial inclusion itself.

### 4.4 Sector Deep Dives

**AI Assistants (10 platforms):**

The AI sector demonstrates rapid divergence in lock-in formation. Three distinct lock-in archetypes have emerged — organizational infrastructure (Copilot), hardware-OS integration (Apple Intelligence), and behavioral-contextual capture (Cursor) — while standalone assistants cluster in the Event Horizon or below:

- Microsoft Copilot (B ≈ 4.7): Driven by organizational embedding (o=9) and enterprise data access (d=9) through M365 integration. Copilot itself may be interchangeable, but M365 infrastructure is not.
- Apple Intelligence (B ≈ 4.4): OS-level AI integrated into iPhone, iPad, and Mac. Semantic Index processes mail, messages, photos, calendar, and contacts — creating a non-exportable personal context layer. Lowest portability (x=2) and substitutability (s=2) of any AI platform: no third-party AI can replace system-level integration on iOS.
- Gemini (B ≈ 2.8): Google ecosystem integration (d=8, p=8, n=9) creates moderate lock-in. Higher than standalone assistants due to cross-product integration with Gmail, Docs, and Android.
- Cursor (B ≈ 2.8): AI-first IDE that replaces entire coding workflow. Non-portable codebase index, chat history, and Composer sessions. Highest momentum (t=9) of any AI platform — $9B valuation with 3-5x YoY growth. Lock-in is behavioral: workflow habits (Cmd+K, Tab completion) that do not transfer to alternatives.
- ChatGPT (B ≈ 2.0): Moderate lock-in from conversation history (m=7), strong API ecosystem (n=9), and process integration (p=6). But high substitutability (s=7) caps B.
- Claude (B ≈ 1.5) and Grok (B ≈ 1.6): Event Horizon — growing but still largely substitutable.
- Perplexity (B ≈ 0.8) and generic Chat LLM (B ≈ 0.2): low structural lock-in, easily replaceable.

**Big Tech & Semiconductors (8 platforms):**

This sector contains four platforms with B > 5, forming the heaviest gravitational wells in the digital economy:

- TSMC (B ≈ 10.9): Fabricates 92% of the world's most advanced chips. No alternative exists at ≤5nm nodes. Samsung Foundry and Intel Foundry Services are generations behind.
- ASML (B ≈ 9.6): Sole manufacturer of EUV lithography machines required for ≤7nm fabrication. 100% monopoly on a chokepoint technology. Annual output of ~55 EUV systems with 3+ year backlog.
- NVIDIA (B ≈ 8.3): CUDA ecosystem with millions of developers, 15 years of optimized libraries, training infrastructure dependency (s=2, x=2). AMD ROCm and Intel oneAPI are functional alternatives but ecosystem maturity gaps persist.
- Apple (B ≈ 5.2): Hardware + software + services + identity integration. 2.2B active devices. iMessage, AirDrop, and Handoff create social switching costs.

**Banks & Financial Infrastructure (8 platforms):**

Financial infrastructure exhibits generally high B at its core, reflecting decades of accumulated institutional dependencies:

- Bloomberg Terminal (B ≈ 7.2): d=9, m=7, a=8, p=9, n=9, c=9, x=2, s=3, h=4. 325,000+ terminals. $10B+ annual revenue from subscriptions that firms cannot cancel because Bloomberg has become the operating system of financial markets. MSG network with 300,000+ users is a communications monopoly within finance.
- SWIFT (B ≈ 6.8): Not a company — a chokepoint. 11,000+ institutions, $150T+ daily. CIPS and SPFS are orders of magnitude smaller.
- JPMorgan (B ≈ 6.1): Corporate banking relationships spanning decades. Lending, treasury, custody, payments, trading — all integrated. Switching primary bank = moving every financial relationship simultaneously.

**Fintech & Payments (8 platforms):**

- Visa (B ≈ 8.8): Purest network effect monopoly in financial services. 4B+ cards, 100M+ merchant locations. Both sides cannot leave independently.

**E-Commerce (8 platforms):**

Amazon Marketplace (B ≈ 7.8) demonstrates bilateral lock-in at unprecedented scale: sellers depend on 200M+ Prime members (91% renewal rate) and non-portable reviews; buyers depend on same-day delivery infrastructure, accumulated purchase history, and the convenience tax of Prime membership.

MercadoLibre (B ≈ 5.9) replicates the Amazon pattern in Latin America with an additional fintech layer — Mercado Pago processes $278B in payment volume (4× marketplace GMV), own cargo fleet delivers 95% of packages, and a $11B credit portfolio deepens dependency.

### 4.5 Cross-Section Summary

The cross-section reveals a fundamental pattern: **the deepest structural lock-in in the global economy does not belong to the companies with the most users or the highest market caps. It belongs to those that control chokepoints.**

ASML and Synopsys/Cadence make chip manufacturing possible. TSMC translates that into compute. Visa and SWIFT make money move. Bloomberg makes financial markets function. Illumina makes genomics possible. Deere makes precision agriculture work.

The weakest structural lock-in, despite massive scale, belongs to attention platforms and commodity services: Dogecoin (B ≈ 0.2), Netflix (B ≈ 1.0), and PayPal (B ≈ 1.1).

**Infrastructure compounds. Attention decays.**

---

## 5. Sensitivity Analysis

### 5.1 Methodology

We conduct a Sobol-style global sensitivity analysis (Saltelli et al., 2008) to assess the robustness of BHI rankings to parameter and coefficient uncertainty. Two types of sensitivity are examined:

1. **Input sensitivity:** How does B change when individual platform scores vary by ±1 point?
2. **Coefficient sensitivity:** How do rankings change when structural constants (α, λ, ω, τ, δ, ε) vary within ±30%?

### 5.2 Input Sensitivity

For each of the 11 parameters, we compute ∂B/∂parameter for a reference platform (Microsoft Copilot, B ≈ 4.7). Results confirm monotonicity: increasing any capture variable increases B; increasing any escape variable decreases B. This is a necessary (but not sufficient) condition for construct validity.

The sensitivity ranking reveals that B is most sensitive to:
1. Substitutability (*s*): Low s values create the steepest B gradients.
2. Process centrality (*p*): Through both CaptureCore and the operational synergy term.
3. Closeness (*c*): As a base multiplier, c has first-order impact.

B is least sensitive to momentum (*t*), which enters as a multiplicative amplifier with a small coefficient (0.3).

### 5.3 Coefficient Sensitivity

We vary each of the six structural constants within ±30% of their default values and re-compute B for all 100 platforms. Key findings:

- **Ranking robustness:** The top-5 and bottom-5 platforms are invariant across all coefficient combinations. The EDA duopoly, TSMC, and ASML remain the highest-B platforms; Dogecoin, Cardano, and XRP remain the lowest.
- **Mid-range sensitivity:** Platforms in the Transition Zone (B = 0.7-1.3) are most sensitive to coefficient variation. A ±30% change in δ (feedback coefficient) can move a platform from Transition to Growing Gravity or to Event Horizon.
- **Microsoft Copilot vs. ChatGPT ordering:** The ranking Copilot > ChatGPT holds for δ in the range [0.20, 0.50], which encompasses the empirically motivated value of 0.35. Only at extreme δ values outside this range does the ordering reverse.

### 5.4 Epsilon Floor Sensitivity

The ε = 0.1 floor prevents B from approaching infinity when escape variables are near zero. Varying ε from 0.05 to 0.20:
- ε = 0.05: B_max increases by ~40% for low-escape platforms (EDA, ASML).
- ε = 0.20: B_max decreases by ~25%.
- Rankings are unaffected — the ordering is invariant to ε within this range.

### 5.5 Interpretation

Sensitivity analysis demonstrates that BHI rankings are *robust* — they do not depend on precise coefficient values. However, robustness of ranking does not constitute validation of the measurement. Coefficient stability means the model is not fragile; it does not mean the model is correct. Empirical calibration against observed switching costs remains necessary to move from working parameters to estimated values.

---

## 6. Dynamic Model

### 6.1 Motivation

The static BHI (B_struct) measures the depth of the structural dependency well at a point in time. However, lock-in is inherently dynamic: it deepens with use, responds to competitive entry, and interacts with human capability decay. The dynamic extension models these processes.

### 6.2 State Equation

We model the evolution of realized lock-in (B_state) as:

```
dB_state/dt = λ(B_struct − B_state) + k · max(0, B_state − 1) · (1 − B_state/B_max) + u − r
```

**Term 1: Well attraction.** B_state converges toward B_struct at rate λ = 0.18. This captures the empirical observation that users do not immediately realize the full lock-in potential of a platform — it takes time for data to accumulate, workflows to embed, and organizational dependencies to form.

**Term 2: Autocatalysis with saturation.** Following Arthur (1989), self-reinforcing lock-in activates only above B = 1 (the threshold where capture exceeds escape). The growth rate k = 0.15 is bounded by logistic saturation (1 − B_state/B_max), preventing unbounded growth. This is a *single multiplicative term*, not two separate additive terms.

**Term 3: Net external forcing.** Investment in capture (u = 0.08) minus competitive erosion (r = 0.05) represents the net effect of platform strategy and market dynamics.

### 6.3 Endogenous h-Decay

The human fallback parameter evolves according to:

```
dh/dt = −φ · U · h + ψ · (1 − h)
```

where:
- U = closeness × process_centrality (usage intensity)
- φ = 0.04 (erosion speed, motivated by Parasuraman and Manzey, 2010)
- ψ = 0.005 (recovery rate)

By design, ψ ≪ φ: skill decay from automation is faster than skill recovery. This asymmetry is supported by the cognitive automation literature and by Qian and Wexler (2024), who documented increasing reliance on AI over the course of coding tasks, and by Becker et al. (2025), who found that experienced developers performed worse with AI assistance than without it.

### 6.4 The Self-Reinforcing Loop

The coupling between B_state and h creates a self-reinforcing loop:

1. Using the system degrades h (human fallback decreases).
2. Lower h reduces EscapeCore (denominator shrinks).
3. Lower escape increases B_struct.
4. Higher B_struct pulls B_state deeper (Term 1).
5. Deeper B_state means more intensive use (U increases).
6. More intensive use accelerates h decay (return to step 1).

This verbal description hypothesizes threshold-activated self-reinforcement in the coupled (B_state, h) system. Formal verification requires phase-plane analysis: computing the Jacobian matrix at stationary points, determining eigenvalues, and classifying the stability of each equilibrium. This analysis will determine whether the system exhibits bistability (two stable attractors separated by a threshold), hysteresis (path-dependent switching between regimes), or saturating convergence to a single attractor. This formal analysis has not yet been conducted and is identified as a priority for future work.

### 6.5 Regulatory Scenarios

The dynamic model can simulate different regulatory environments by adjusting parameters:

| Scenario | k | u | r | B_max | Interpretation |
|:---------|:-:|:-:|:-:|:-----:|:---------------|
| No regulation | 0.20 | 0.10 | 0.02 | 30 | Unconstrained platform growth |
| EU DMA regime | 0.15 | 0.06 | 0.12 | 12 | Interoperability mandates, data portability |
| Open competition | 0.10 | 0.05 | 0.08 | 15 | Moderate regulation, healthy competition |

Under the DMA regime, higher erosion (r = 0.12) and lower B_max (12) constrain platform lock-in growth and reduce long-term equilibrium B values. The model provides a framework for simulating regulatory impact on structural lock-in, though the specific parameter values for each regime require empirical calibration.

---

## 7. Limitations and Validation Agenda

### 7.1 Current Validation Status

| Component | Status | Description |
|:----------|:------:|:------------|
| Arithmetic Verification | **Complete** | 8 reference presets reproduced to 3 decimal places across independent implementations. Deterministic formula: same inputs always produce same output. |
| Sensitivity Analysis | **Implemented** | Sobol-style parameter sweep available. Rankings robust to ±30% coefficient variation. |
| Inter-Rater Reliability | **Pending** | No independent evaluators have yet scored platforms. Target: ICC > 0.75 across 3-5 evaluators on 15-20 platforms. |
| Predictive Validation | **Preliminary** | Spearman ρ ≈ 0.77 (p < 0.001) against annual retention rates for 14 platforms. Within-category rank-order correlations reach 1.0 for streaming and e-commerce. 42 platforms with observable metrics analyzed. See Section 7.4. |
| Dynamic System Analysis | **Provisional** | Phase-plane analysis with Jacobian stability assessment not yet conducted. |

### 7.2 Known Limitations

**1. Single-evaluator scoring.** All 100 platforms were scored by a single evaluator. This is the most critical methodological limitation. Anchored rubrics are designed to reduce subjectivity, but they do not eliminate it. Inter-rater reliability (ICC > 0.75; Cicchetti, 1994) across 3-5 independent evaluators is the minimum standard for a credible measurement instrument. Krippendorff's alpha provides an alternative reliability metric with established thresholds (α > 0.667 for tentative conclusions, α > 0.8 for reliable conclusions).

**2. Equal weights.** All capture parameters are weighted equally in the CES aggregator. This is a defensible default (no theoretical basis for asymmetric weighting exists) but may not reflect empirical reality. Principal component analysis or factor analysis on multi-evaluator scoring data could reveal that some parameters contribute more to observed lock-in than others.

**3. Correlated inputs.** The 11 parameters are likely correlated in practice — platforms with high data depth (*d*) tend to have high process centrality (*p*). SynergyBoost models pairwise complementarity for (d, m) and (a, p) but does not address the broader covariance structure. Factor analysis on empirical scoring data is needed to determine whether the 11 parameters represent independent dimensions or can be reduced to fewer latent factors. Until such analysis is performed, double-counting of shared latent causes is a methodological risk.

**4. Working parameters, not estimated constants.** The six structural constants (α, λ, ω, τ, δ, ε) are theoretically grounded but not empirically calibrated. Future work should derive these from observed switching cost data — for example, estimating δ from panel data on platform switching behavior rather than relying on the status quo bias literature as a proxy.

**5. Ordinal-to-interval approximation.** The 0-10 rubric is treated as interval-scale for arithmetic operations (averaging, square roots). Strict interval-scale validity requires Rasch modeling or IRT calibration. Until performed, differences in B smaller than 0.5 should be interpreted with caution.

**6. Logical tensions in parameter space.** Certain parameter combinations are internally contradictory. For example, high organizational depth (o ≥ 7) combined with high human fallback (h ≥ 7) is suspect — if the organization has restructured around a platform, it is unlikely that individuals can easily fall back to manual processes. The automated validation tool flags such contradictions, but they require evaluator judgment to resolve.

**7. B_max = 38.03.** The theoretical maximum is high for a ratio index. In practice, no observed platform exceeds B ≈ 17, suggesting that the multiplicative structure may overweight extreme cases. Future versions may consider a log-transformation or saturation function for very high B values.

### 7.3 Validation Roadmap

**Phase 1 (Immediate): Inter-Rater Reliability**
- Recruit 3-5 independent evaluators (academics, industry analysts, platform economists).
- Score a calibration set of 15-20 platforms spanning all 12 sectors.
- Compute ICC and Krippendorff's alpha. Target: ICC > 0.75.
- Identify parameters with lowest agreement for rubric refinement.

**Phase 2 (Near-term): Predictive Validation**
- Correlate B-scores with observable retention metrics for 10-15 publicly reporting platforms:
  - Net Revenue Retention (NRR) — available for SaaS platforms
  - Dollar-based churn — available for subscription businesses
  - Migration cost estimates — available from IT advisory firms
  - Customer Lifetime Value (CLTV) — available for public companies
- Test hypothesis: B > 2.5 correlates with NRR > 130% and/or churn < 5%.

**Phase 3 (Medium-term): Empirical Calibration**
- Use multi-evaluator scoring data to estimate optimal CES elasticity parameter σ.
- Estimate structural constants (α, ω, τ, δ) from panel data on platform switching.
- Factor analysis to determine whether 11 parameters reduce to fewer latent dimensions.

**Phase 4 (Long-term): Longitudinal Validation**
- Track B-scores for 20-30 platforms over 2-3 years.
- Test dynamic model predictions against observed B trajectories.
- Validate h-decay mechanism with longitudinal skill assessment data.

### 7.4 Preliminary Empirical Validation

A cross-platform correlation analysis was conducted against publicly available retention data for 42 platforms. Observable metrics include annual retention rates, DAU/MAU ratios, Net Revenue Retention (NRR), gross revenue retention, and user trajectory data, sourced from SEC filings, earnings calls, CIRP surveys, Antenna churn data, and industry analyst estimates.

**Primary result:** Spearman rank correlation ρ ≈ 0.77 (p < 0.001, t = 4.13, df = 12) between BHI scores and annual retention rates for 14 platforms with directly comparable metrics: Synopsys/Cadence (~99%), TSMC (~99%), Visa (~99.9%), NVIDIA CUDA (~98%), Amazon Prime (~95%), Bloomberg (~96%), SWIFT (~99.9%), Apple (89%), Nubank (94%), Salesforce (~92%), Spotify (~96.5%), Netflix (~78%), Zoom (~92%), Disney+ (~61%).

**Within-category results:** Rank-order alignment reaches ρ = 1.0 for streaming (Disney+ < Netflix < Spotify) and e-commerce (eBay < Shopee < Coupang < MercadoLibre < Amazon Prime). Fintech shows consistent alignment: the two lowest-BHI platforms (Robinhood, PayPal) experienced the worst retention outcomes.

**Informative outliers:**
- **Spotify** (B = 2.41, retention 96.5%): retention exceeds structural lock-in prediction. Product quality, not escape cost, drives retention. Correct behavior for an instrument measuring structural lock-in.
- **SWIFT** (B = 7.07, retention ~100%): standards-based infrastructure may be underweighted. Zero voluntary departures since 1973.
- **LinkedIn** (B = 5.02, DAU/MAU 16%): high structural lock-in, low daily engagement. Confirms BHI measures lock-in, not engagement.
- **TikTok** (B = 2.10, DAU/MAU 57%): high engagement, low structural lock-in. No data portability barrier. Confirms distinction between behavioral engagement and structural lock-in.

**Key insight:** BHI predicts a retention floor, not a ceiling. Observable retention = f(BHI) + product quality premium + market conditions. No high-BHI platform shows weak retention; several low-BHI platforms show strong retention driven by product quality rather than structural lock-in. This asymmetry is consistent with the theoretical model.

**Limitations of this analysis:** Small sample (n = 14 for primary correlation). Heterogeneous metrics across categories. Source quality varies. Single evaluator. Cross-category metric standardization needed for stronger validation. Correlation does not establish causation.

---

## 8. Conclusion

We have introduced the Black Hole Index, a measurement framework for quantifying structural lock-in in platforms. The model's core contribution is formalization: specifying a complete, computable instrument with 11 anchored parameters, theoretically grounded aggregation functions, and a dynamic extension — applied to a substantive cross-section of 100 platforms across 12 sectors.

The cross-section results reveal a structural pattern that market capitalization and user counts obscure: the deepest lock-in in the global economy belongs to infrastructure platforms (EDA, ASML, TSMC, SWIFT, Bloomberg) rather than attention platforms (Netflix, Zoom, Disney+). Scale without structural lock-in produces fragile market positions; structural lock-in without scale produces durable ones.

We have been transparent about what BHI is and what it is not. It is a *proposed* measurement instrument that produces *structured assessments* based on anchored rubrics and theoretically motivated functional forms. It is not yet a *validated* measurement instrument — inter-rater reliability and predictive validation remain pending. The intellectual foundation is complete; the empirical foundation is in progress.

The path from proposed instrument to established standard follows a pattern documented across economics and finance: the Sharpe Ratio was proposed in 1966 and became an industry standard by the 1980s after widespread adoption and refinement. The Altman Z-Score was published in 1968 and became a standard credit risk tool after decades of validation across industries and countries. The Gini Coefficient, proposed in 1912, is now the universal inequality measure used by the World Bank, OECD, and national statistical agencies.

BHI's trajectory depends on three outcomes: (i) demonstrating inter-rater reliability (ICC > 0.75), which validates that the rubrics produce consistent measurements across evaluators; (ii) demonstrating predictive validity against observable outcomes, which validates that B measures something real; and (iii) adoption by researchers, regulators, and practitioners who find the framework useful for analyzing structural dependency. The first two are under our control and constitute the immediate research agenda. The third is a market outcome.

We release BHI as an open instrument — the complete model specification, all scoring rubrics, the interactive calculator, and all 100 platform scores are publicly available at blackholeindex.com. We invite independent evaluation, critique, and empirical validation.

---

## References

Akman, P. (2022). A Web of Paradoxes: Empirical Evidence on Online Platform Users and Implications for Competition and Regulation in Digital Markets. *Virginia Law and Business Review*, 16(2), 217–292.

Altman, E.I. (1968). Financial Ratios, Discriminant Analysis, and the Prediction of Corporate Bankruptcy. *The Journal of Finance*, 23(4), 589–609.

Arrow, K., Chenery, H., Minhas, B., & Solow, R. (1961). Capital-Labor Substitution and Economic Efficiency. *The Review of Economics and Statistics*, 43(3), 225–250.

Arthur, W.B. (1989). Competing Technologies, Increasing Returns, and Lock-In by Historical Events. *The Economic Journal*, 99(394), 116–131.

Athey, S., & Scott Morton, F.M. (2022). Platform Annexation. *Antitrust Law Journal*, 84(3), 677–703.

Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. *METR*. arXiv:2507.09089.

Bostoen, F. (2023). Understanding the Digital Markets Act. *The Antitrust Bulletin*, 68(2), 263–306.

Burnham, T.A., Frels, J.K., & Mahajan, V. (2003). Consumer Switching Costs: A Typology, Antecedents, and Consequences. *Journal of the Academy of Marketing Science*, 31(2), 109–126.

Cicchetti, D.V. (1994). Guidelines, Criteria, and Rules of Thumb for Evaluating Normed and Standardized Assessment Instruments in Psychology. *Psychological Assessment*, 6(4), 284–290.

Ciotti, F., Hornuf, L., & Stenzhorn, E. (2025). Lock-In Effects in Online Labor Markets. *Journal of Economics & Management Strategy*, 34(3), 615–631.

Crémer, J., de Montjoye, Y.-A., & Schweitzer, H. (2019). *Competition Policy for the Digital Era: Final Report.* Luxembourg: Publications Office of the European Union.

Crémer, J., Crawford, G.S., Dinielli, D., Fletcher, A., Heidhues, P., Schnitzer, M., & Scott Morton, F.M. (2023). Fairness and Contestability in the Digital Markets Act. *Yale Journal on Regulation*, 40(3), 973–1012.

Dubé, J.-P., Hitsch, G.J., & Rossi, P.E. (2009). Do Switching Costs Make Markets Less Competitive? *Journal of Marketing Research*, 46(4), 435–445.

Ezrachi, A., & Stucke, M.E. (2016). *Virtual Competition: The Promise and Perils of the Algorithm-Driven Economy.* Harvard University Press.

Farrell, J., & Klemperer, P. (2007). Coordination and Lock-In: Competition with Switching Costs and Network Effects. Chapter 31 in M. Armstrong & R. Porter (Eds.), *Handbook of Industrial Organization*, Vol. 3, pp. 1967–2072. Elsevier.

Fletcher, A., Crémer, J., Heidhues, P., Kimmelman, G., Monti, G., Podszun, R., Schnitzer, M., Scott Morton, F.M., & de Streel, A. (2024). The Effective Use of Economics in the EU Digital Markets Act. *Journal of Competition Law & Economics*, 20(1–2), 1–19.

Franck, J.-U., & Peitz, M. (2023). Market Power of Digital Platforms. *Oxford Review of Economic Policy*, 39(1), 34–46.

Furman, J., Coyle, D., Fletcher, A., McAuley, D., & Marsden, P. (2019). *Unlocking Digital Competition: Report of the Digital Competition Expert Panel.* HM Treasury, UK Government.

Gini, C. (1912). Variabilità e Mutabilità. *Studi Economico-Giuridici dell'Università di Cagliari*, 3, 3–159.

Graef, I. (2015). Mandating Portability and Interoperability in Online Social Networks: Regulatory and Competition Law Issues in the European Union. *Telecommunications Policy*, 39(6), 502–514.

Granovetter, M. (1978). Threshold Models of Collective Behavior. *American Journal of Sociology*, 83(6), 1420–1443.

Jacobides, M.G., & Lianos, I. (2021). Ecosystems and Competition Law in Theory and Practice. *Industrial and Corporate Change*, 30(5), 1199–1229.

Jullien, B., & Sand-Zantman, W. (2021). The Economics of Platforms: A Theory Guide for Competition Policy. *Information Economics and Policy*, 54, 100880.

Jullien, B., Pavan, A., & Rysman, M. (2021). Two-Sided Markets, Pricing, and Network Effects. In K. Ho, A. Hortaçsu, & A. Lizzeri (Eds.), *Handbook of Industrial Organization*, Vol. 4, pp. 485–592. Elsevier.

Kades, M., & Scott Morton, F.M. (2020). Interoperability as a Competition Remedy for Digital Networks. Working Paper, Washington Center for Equitable Growth.

Kahneman, D., Knetsch, J.L., & Thaler, R.H. (1991). Anomalies: The Endowment Effect, Loss Aversion, and Status Quo Bias. *Journal of Economic Perspectives*, 5(1), 193–206.

Katz, M., & Shapiro, C. (1985). Network Externalities, Competition, and Compatibility. *The American Economic Review*, 75(3), 424–440.

Khan, L.M. (2017). Amazon's Antitrust Paradox. *Yale Law Journal*, 126, 710–805.

Klemperer, P. (1987). Markets with Consumer Switching Costs. *The Quarterly Journal of Economics*, 102(2), 375–394.

Lancieri, F., & Sakowski, P.M. (2021). Competition in Digital Markets: A Review of Expert Reports. *Stanford Journal of Law, Business & Finance*, 26(1), 65.

McCrory, D. (2010). Data Gravity — In the Clouds. *Blog post*. https://datagravitas.com/2010/12/07/data-gravity-in-the-clouds/.

Milgrom, P., & Roberts, J. (1990). Rationalizability, Learning, and Equilibrium in Games with Strategic Complementarities. *Econometrica*, 58(6), 1255–1277.

Milgrom, P., & Roberts, J. (1995). Complementarities and Fit: Strategy, Structure, and Organizational Change in Manufacturing. *Journal of Accounting and Economics*, 19(2–3), 179–208.

Parasuraman, R., & Manzey, D. (2010). Complacency and Bias in Human Use of Automation: An Attentional Integration. *Human Factors*, 52(3), 381–410.

Petit, N. (2020). *Big Tech and the Digital Economy: The Moligopoly Scenario.* Oxford University Press.

Qian, C., & Wexler, J. (2024). Take It, Leave It, or Fix It: Measuring Productivity and Trust in Human-AI Collaboration. *Proceedings of ACM IUI '24*. arXiv:2402.18498.

Rochet, J.-C., & Tirole, J. (2003). Platform Competition in Two-Sided Markets. *Journal of the European Economic Association*, 1(4), 990–1029.

Saltelli, A., et al. (2008). *Global Sensitivity Analysis: The Primer*. John Wiley & Sons.

Samuelson, W., & Zeckhauser, R. (1988). Status Quo Bias in Decision Making. *Journal of Risk and Uncertainty*, 1(1), 7–59.

Scott Morton, F.M., Crawford, G.S., Crémer, J., Dinielli, D., Fletcher, A., Heidhues, P., & Schnitzer, M. (2023). Equitable Interoperability: The "Supertool" of Digital Platform Governance. *Yale Journal on Regulation*, 40(3), 1013–1055.

Shapiro, C., & Varian, H.R. (1999). *Information Rules: A Strategic Guide to the Network Economy*. Harvard Business School Press.

Sharpe, W.F. (1966). Mutual Fund Performance. *The Journal of Business*, 39(1), 119–138.

Shy, O. (2002). A Quick-and-Easy Method for Estimating Switching Costs. *International Journal of Industrial Organization*, 20(1), 71–87.

Stigler Committee on Digital Platforms (2019). *Final Report.* George J. Stigler Center for the Study of the Economy and the State, University of Chicago Booth School of Business.

Stucke, M.E., & Grunes, A.P. (2016). *Big Data and Competition Policy.* Oxford University Press.

Syrmoudis, E., Mager, S., Kuebler-Wachendorff, S., Pizzinini, P., Grossklags, J., & Kranz, J. (2021). Data Portability between Online Services: An Empirical Analysis on the Effectiveness of GDPR Art. 20. *Proceedings on Privacy Enhancing Technologies*, 2021(3), 351–372.

---

## Appendix A: Complete Parameter Rubrics

All 11 parameters use five-anchor rubrics (scores 0, 3, 5, 7, 10) with concrete behavioral descriptions. Intermediate scores (1, 2, 4, 6, 8, 9) are interpolated between anchors.

### Capture Variables

**Data Depth (*d*) — Volume and density of observable user and organizational context**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | None | System has no access to user data. Each session starts from zero. Example: calculator app. |
| 3 | Session | Sees only current session context. No history, no files. Example: basic chatbot without memory. |
| 5 | History | Access to conversation history, uploaded files, basic usage patterns. Example: ChatGPT with memory. |
| 7 | Full | Complete work context: emails, documents, calendar, contacts, meeting notes. Example: M365 Copilot. |
| 10 | Org exhaust | Entire organizational digital footprint: all apps, all users, all workflows, metadata, inferred relationships. |

**Memory (*m*) — Persistent non-portable state: embeddings, profiles, learned policies**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | None | No cross-session persistence. System forgets everything between uses. |
| 3 | Preferences | Stores basic settings and preferences. Easily recreatable on another platform. |
| 5 | Context | Remembers recent interactions, learns patterns. Would take days to rebuild elsewhere. |
| 7 | Persistent | Deep cross-session memory: references all past conversations, learned work style. |
| 10 | Model | Complete learned user model: personality, decision patterns, relationship dynamics. Years of context. |

**Action (*a*) — Ability to initiate and complete real-world actions autonomously**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Text only | Can only generate text responses. No external integrations. |
| 3 | Content | Generates documents, images, code. Cannot execute or deploy. |
| 5 | Tools | Calls external APIs, searches web, reads files. Human must act on results. |
| 7 | Execution | Plans and executes multi-step task sequences. Sends emails, schedules meetings, creates PRs. |
| 10 | Autonomous | Full autonomous agent: decomposes goals, executes across systems, handles errors, works unsupervised. |

**Process Centrality (*p*) — Degree of embedding inside daily workflow chains**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Not embedded | Not part of any workflow. Used recreationally or experimentally. |
| 3 | Ad hoc | Used occasionally for specific tasks. Easy to do without. |
| 5 | 1-2 workflows | Integrated into one or two regular workflows. Absence noticed within hours. |
| 7 | Central hub | Most daily work tasks touch the system. Central routing point for decisions. |
| 10 | Critical path | Business processes cannot complete without this system. Downtime equals revenue loss. |

**Network Effects (*n*) — Ecosystem reinforcement: complementors, standards, multi-homing cost**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Isolated | No multi-user dynamics. Pure single-player tool. |
| 3 | Basic plugins | Small ecosystem of extensions. Easily replicated. |
| 5 | Marketplace | Meaningful plugin/app marketplace. Two-sided dynamics present. |
| 7 | Cross-side | Strong cross-side network effects: more users attract more developers attract more users. |
| 10 | Standard | De facto industry standard. Leaving means leaving shared language, formats, protocols. |

**Closeness (*c*) — Frequency of contact and cognitive offloading habit formation**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Rare | Used less than monthly. No habit formation. |
| 3 | Weekly | Regular but not daily. User goes days without it. |
| 5 | Daily | Daily tool. Part of routine but not the first thing touched. |
| 7 | First surface | First interface opened each morning. Primary surface for task initiation. |
| 10 | Always-on | Ambient continuous presence. OS-level integration. Interaction without conscious decision. |

### Escape Variables

**Portability (*x*) — Data and state exportability**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | No export | No data export capability. All user data trapped inside the system. |
| 3 | Partial | Some raw data exportable (CSV, text) but not derived state. |
| 5 | Standard | GDPR Art.20 compliant: raw data exportable. Inferred data, embeddings, models not included. |
| 7 | Automated | Full automated import/export pipelines. Migration tools available. Most state transferable. |
| 10 | Full state | Complete portable state: raw data, derived data, settings, trained models. Plug-and-play migration. |

**Substitutability (*s*) — Existence of functionally equivalent alternatives at integration level**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | None | No functional equivalent exists. Monopoly or unique technology. |
| 3 | Major loss | Alternatives exist but with significant capability loss. 50%+ functionality gap. |
| 5 | Comparable | Comparable alternatives available. Switching requires effort but similar result. |
| 7 | Drop-in | Near drop-in replacements. Switching cost is re-learning, not capability loss. |
| 10 | Commodity | Fully commoditized layer. Dozens of equivalent options. Switching is trivial. |

**Human Fallback (*h*) — Ability to maintain productivity without the system (Parasuraman decay)**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Impossible | Work literally cannot be done without this system. Skills no longer exist. |
| 3 | Severe | Could theoretically revert but productivity drops 60%+. Critical skills atrophied. |
| 5 | Degraded | Noticeable degradation. Tasks take 2-3x longer. Errors increase. But work gets done. |
| 7 | Minor | Small inconvenience. Some tasks slower. Overall productivity impact under 15%. |
| 10 | Optional | System is a nice-to-have. Full productivity maintained without it. |

*Note: h degrades endogenously with use. This is the Parasuraman-Manzey (2010) automation complacency effect. The more you rely on the system, the less capable you become without it.*

### Extended Variables

**Organizational Depth (*o*) — Institutional procurement lock-in (Granovetter cascade threshold)**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | None | No organizational dependency. Individual user only. |
| 3 | Pilot | Small pilot or team trial. Easy to cancel. |
| 5 | Multi-team | Multiple teams using the system. Cross-team dependencies forming. |
| 7 | Enterprise | Enterprise-wide deployment. Procurement contracts, training, IT infrastructure aligned. |
| 10 | Rebuilt | Organization has restructured operations around this system. Roles, processes, KPIs redefined. |

**Momentum (*t*) — Capability growth velocity (Arthur increasing returns)**

| Score | Anchor | Description |
|:-----:|:-------|:------------|
| 0 | Stagnant | No meaningful capability improvement in 12+ months. |
| 3 | Trailing | Improving but slower than market. Competitors pulling ahead. |
| 5 | Market pace | Keeping pace with competitors. No structural advantage. |
| 7 | Fast | Faster improvement than competitors. Each release widens the gap. |
| 10 | Explosive | Revolutionary capability growth. Paradigm-shifting features every quarter. |

## Appendix B: All 100 Platform Scores

**Table B1: Complete BHI Cross-Section (sorted by B, descending)**

Columns: d = Data Depth, m = Memory, a = Action, p = Process Centrality, n = Network Effects, c = Closeness, x = Portability, s = Substitutability, h = Human Fallback, o = Organizational Depth, t = Momentum. B computed using V3 formula. Zone thresholds: Useful Tool (B < 0.4), Growing Gravity (0.4-0.7), Transition (0.7-1.3), Event Horizon (1.3-2.5), Black Hole (B ≥ 2.5).

| # | Platform | Sector | d | m | a | p | n | c | x | s | h | o | t | B | Zone |
|--:|:---------|:-------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|----:|:-----|
| 1 | WeChat | Social | 9 | 9 | 9 | 10 | 9 | 10 | 1 | 1 | 1 | 9 | 5 | 17.03 | Black Hole |
| 2 | Synopsys/Cadence (EDA Duopoly) | Infra | 8 | 9 | 9 | 10 | 8 | 8 | 1 | 1 | 1 | 9 | 6 | 12.97 | Black Hole |
| 3 | TSMC | Big Tech | 7 | 8 | 9 | 10 | 8 | 8 | 1 | 1 | 2 | 9 | 7 | 10.91 | Black Hole |
| 4 | Palantir | SaaS | 9 | 8 | 8 | 9 | 6 | 9 | 1 | 2 | 3 | 10 | 7 | 9.66 | Black Hole |
| 5 | ASML | Big Tech | 6 | 8 | 9 | 10 | 7 | 7 | 1 | 1 | 1 | 9 | 6 | 9.62 | Black Hole |
| 6 | Visa | Fintech | 8 | 7 | 8 | 9 | 9 | 9 | 2 | 2 | 2 | 9 | 5 | 8.82 | Black Hole |
| 7 | Amazon | Big Tech | 9 | 8 | 9 | 9 | 9 | 9 | 3 | 3 | 3 | 9 | 8 | 8.40 | Black Hole |
| 8 | NVIDIA (CUDA) | Big Tech | 7 | 8 | 9 | 9 | 9 | 8 | 2 | 2 | 3 | 9 | 9 | 8.29 | Black Hole |
| 9 | Mastercard | Fintech | 7 | 7 | 8 | 9 | 9 | 9 | 2 | 2 | 2 | 8 | 5 | 8.14 | Black Hole |
| 10 | Amazon Marketplace | E-Commerce | 9 | 8 | 8 | 9 | 9 | 9 | 3 | 3 | 3 | 8 | 8 | 7.77 | Black Hole |
| 11 | AI-OS (Theoretical) | AI | 9 | 8 | 8 | 9 | 7 | 9 | 3 | 2 | 3 | 8 | 7 | 7.67 | Black Hole |
| 12 | SAP | SaaS | 9 | 8 | 7 | 10 | 8 | 9 | 3 | 3 | 3 | 10 | 4 | 7.21 | Black Hole |
| 13 | Bloomberg Terminal | Banks | 9 | 7 | 8 | 9 | 9 | 9 | 2 | 3 | 4 | 9 | 5 | 7.21 | Black Hole |
| 14 | AWS | SaaS | 9 | 8 | 9 | 10 | 8 | 8 | 3 | 4 | 3 | 9 | 7 | 6.85 | Black Hole |
| 15 | SWIFT | Banks | 7 | 7 | 8 | 10 | 9 | 8 | 2 | 3 | 2 | 9 | 3 | 6.78 | Black Hole |
| 16 | Microsoft | Big Tech | 9 | 6 | 8 | 9 | 9 | 9 | 3 | 3 | 4 | 9 | 7 | 6.64 | Black Hole |
| 17 | Apple App Store | Gaming | 8 | 8 | 7 | 9 | 9 | 8 | 2 | 3 | 3 | 7 | 5 | 6.13 | Black Hole |
| 18 | JPMorgan Chase | Banks | 9 | 8 | 8 | 9 | 8 | 8 | 3 | 4 | 3 | 9 | 6 | 6.13 | Black Hole |
| 19 | MercadoLibre | E-Commerce | 8 | 7 | 8 | 9 | 8 | 8 | 3 | 3 | 3 | 7 | 8 | 5.87 | Black Hole |
| 20 | Illumina | Pharma | 8 | 8 | 8 | 9 | 8 | 7 | 2 | 3 | 3 | 8 | 6 | 5.78 | Black Hole |
| 21 | YouTube | Social | 8 | 8 | 7 | 8 | 9 | 9 | 3 | 3 | 4 | 6 | 7 | 5.73 | Black Hole |
| 22 | Foxconn | Infra | 7 | 7 | 8 | 9 | 7 | 8 | 2 | 3 | 3 | 8 | 5 | 5.65 | Black Hole |
| 23 | WhatsApp | Social | 7 | 7 | 5 | 9 | 9 | 9 | 2 | 3 | 3 | 6 | 5 | 5.43 | Black Hole |
| 24 | Steam | Gaming | 8 | 9 | 7 | 8 | 9 | 8 | 1 | 3 | 5 | 4 | 5 | 5.32 | Black Hole |
| 25 | Meta | Big Tech | 9 | 8 | 7 | 7 | 9 | 9 | 3 | 4 | 5 | 7 | 7 | 5.22 | Black Hole |
| 26 | Apple | Big Tech | 8 | 8 | 7 | 8 | 9 | 9 | 3 | 4 | 4 | 6 | 6 | 5.22 | Black Hole |
| 27 | BlackRock | Banks | 8 | 8 | 8 | 8 | 9 | 7 | 3 | 4 | 3 | 9 | 7 | 5.21 | Black Hole |
| 28 | Nubank | Fintech | 8 | 7 | 7 | 8 | 7 | 9 | 3 | 4 | 3 | 6 | 8 | 5.21 | Black Hole |
| 29 | IQVIA | Pharma | 9 | 8 | 7 | 8 | 7 | 7 | 2 | 3 | 3 | 8 | 5 | 5.18 | Black Hole |
| 30 | Alibaba/Taobao | E-Commerce | 8 | 7 | 7 | 8 | 9 | 8 | 3 | 3 | 4 | 8 | 5 | 4.97 | Black Hole |
| 31 | Solana (SOL) | Crypto Assets | 7 | 6 | 8 | 9 | 8 | 7 | 2 | 3 | 4 | 7 | 9 | 4.83 | Black Hole |
| 32 | Roblox | Gaming | 7 | 7 | 7 | 7 | 9 | 9 | 2 | 3 | 5 | 4 | 8 | 4.79 | Black Hole |
| 33 | Microsoft 365 | SaaS | 8 | 6 | 7 | 9 | 9 | 9 | 4 | 4 | 5 | 9 | 5 | 4.73 | Black Hole |
| 34 | Microsoft Copilot (M365) | AI | 9 | 5 | 6 | 9 | 8 | 9 | 4 | 3 | 4 | 9 | 4 | 4.73 | Black Hole |
| 35 | Deere & Company | Infra | 8 | 7 | 7 | 8 | 7 | 7 | 2 | 3 | 3 | 7 | 6 | 4.68 | Black Hole |
| 36 | Alphabet/Google | Big Tech | 9 | 7 | 7 | 8 | 9 | 9 | 5 | 4 | 5 | 7 | 7 | 4.62 | Black Hole |
| 37 | Ethereum (ETH) | Crypto Assets | 8 | 7 | 8 | 9 | 9 | 7 | 3 | 4 | 4 | 8 | 6 | 4.57 | Black Hole |
| 38 | Salesforce | SaaS | 8 | 7 | 7 | 9 | 8 | 8 | 4 | 4 | 4 | 9 | 5 | 4.54 | Black Hole |
| 39 | Apple Intelligence | AI | 9 | 6 | 5 | 7 | 9 | 8 | 2 | 2 | 6 | 6 | 8 | 4.43 | Black Hole |
| 40 | Adobe Creative Cloud | SaaS | 7 | 7 | 7 | 8 | 8 | 8 | 3 | 4 | 4 | 8 | 6 | 4.38 | Black Hole |
| 41 | Thermo Fisher | Pharma | 7 | 7 | 7 | 8 | 8 | 8 | 3 | 4 | 4 | 8 | 6 | 4.38 | Black Hole |
| 42 | ARM Holdings | Infra | 6 | 7 | 7 | 9 | 9 | 7 | 3 | 3 | 4 | 8 | 6 | 4.23 | Black Hole |
| 43 | Facebook | Social | 9 | 8 | 6 | 7 | 9 | 8 | 3 | 4 | 5 | 7 | 5 | 4.19 | Black Hole |
| 44 | Goldman Sachs | Banks | 8 | 7 | 8 | 8 | 8 | 7 | 3 | 4 | 4 | 8 | 5 | 4.11 | Black Hole |
| 45 | Google Play | Gaming | 7 | 7 | 7 | 8 | 9 | 8 | 4 | 4 | 4 | 6 | 6 | 3.94 | Black Hole |
| 46 | Roche | Pharma | 8 | 7 | 7 | 8 | 7 | 7 | 3 | 4 | 4 | 8 | 6 | 3.88 | Black Hole |
| 47 | Veeva Systems | Pharma | 8 | 7 | 7 | 8 | 7 | 7 | 3 | 4 | 4 | 8 | 6 | 3.88 | Black Hole |
| 48 | Corning | Infra | 6 | 7 | 7 | 8 | 7 | 7 | 2 | 3 | 4 | 7 | 5 | 3.84 | Black Hole |
| 49 | Coupang | E-Commerce | 7 | 6 | 7 | 8 | 7 | 8 | 4 | 3 | 4 | 6 | 6 | 3.72 | Black Hole |
| 50 | LinkedIn | Social | 8 | 8 | 5 | 7 | 8 | 6 | 2 | 2 | 4 | 7 | 5 | 3.70 | Black Hole |
| 51 | Stripe | Fintech | 8 | 6 | 8 | 9 | 8 | 7 | 4 | 5 | 5 | 8 | 8 | 3.67 | Black Hole |
| 52 | Snowflake | SaaS | 9 | 7 | 7 | 8 | 7 | 7 | 4 | 5 | 4 | 8 | 7 | 3.67 | Black Hole |
| 53 | PlayStation Network | Gaming | 7 | 8 | 6 | 7 | 8 | 8 | 2 | 4 | 5 | 4 | 6 | 3.64 | Black Hole |
| 54 | Linde | Infra | 5 | 6 | 7 | 8 | 7 | 7 | 3 | 3 | 3 | 8 | 5 | 3.53 | Black Hole |
| 55 | BNB | Crypto Assets | 8 | 6 | 7 | 7 | 9 | 8 | 4 | 4 | 6 | 7 | 6 | 3.47 | Black Hole |
| 56 | Binance (Exchange) | Crypto Infra | 8 | 6 | 7 | 7 | 9 | 8 | 4 | 4 | 6 | 7 | 6 | 3.47 | Black Hole |
| 57 | Hyperliquid (HYPE) | Crypto Assets | 6 | 5 | 8 | 7 | 7 | 8 | 4 | 3 | 5 | 5 | 9 | 3.25 | Black Hole |
| 58 | Shopify | E-Commerce | 7 | 7 | 7 | 8 | 8 | 7 | 4 | 5 | 5 | 7 | 7 | 3.15 | Black Hole |
| 59 | Instagram | Social | 8 | 7 | 6 | 6 | 9 | 8 | 3 | 5 | 6 | 5 | 6 | 3.07 | Black Hole |
| 60 | Shopee/Sea | E-Commerce | 7 | 6 | 6 | 7 | 8 | 8 | 4 | 4 | 5 | 5 | 7 | 3.03 | Black Hole |
| 61 | Chainlink | Crypto Infra | 6 | 5 | 7 | 8 | 9 | 6 | 3 | 3 | 4 | 7 | 6 | 2.99 | Black Hole |
| 62 | Revolut | Fintech | 7 | 6 | 7 | 7 | 6 | 8 | 4 | 5 | 5 | 5 | 8 | 2.87 | Black Hole |
| 63 | Block (Square) | Fintech | 7 | 6 | 7 | 8 | 7 | 7 | 4 | 5 | 5 | 7 | 6 | 2.81 | Black Hole |
| 64 | Cursor (Anysphere) | AI | 7 | 6 | 8 | 7 | 6 | 8 | 5 | 5 | 5 | 4 | 9 | 2.80 | Black Hole |
| 65 | Google Gemini | AI | 8 | 6 | 6 | 8 | 9 | 8 | 5 | 6 | 6 | 5 | 7 | 2.80 | Black Hole |
| 66 | Google Workspace | SaaS | 7 | 5 | 6 | 8 | 8 | 8 | 5 | 5 | 6 | 7 | 6 | 2.68 | Black Hole |
| 67 | MetaMask (Wallet) | Crypto Infra | 5 | 6 | 6 | 7 | 7 | 9 | 3 | 5 | 6 | 4 | 5 | 2.56 | Black Hole |
| 68 | Slack | SaaS | 7 | 6 | 5 | 7 | 7 | 9 | 4 | 6 | 7 | 7 | 4 | 2.52 | Black Hole |
| 69 | Interactive Brokers | Banks | 7 | 5 | 8 | 7 | 6 | 8 | 5 | 5 | 5 | 5 | 5 | 2.49 | Event Horizon |
| 70 | Spotify | Gaming | 7 | 7 | 5 | 6 | 7 | 8 | 4 | 5 | 6 | 4 | 6 | 2.31 | Event Horizon |
| 71 | Charles Schwab | Banks | 7 | 6 | 7 | 7 | 7 | 7 | 5 | 5 | 6 | 6 | 5 | 2.26 | Event Horizon |
| 72 | TikTok | Social | 7 | 6 | 5 | 5 | 8 | 9 | 4 | 6 | 7 | 4 | 7 | 2.24 | Event Horizon |
| 73 | Refinitiv/LSEG | Banks | 7 | 5 | 6 | 7 | 6 | 7 | 4 | 5 | 5 | 7 | 4 | 2.19 | Event Horizon |
| 74 | Reddit | Social | 7 | 7 | 4 | 5 | 8 | 7 | 3 | 3 | 6 | 3 | 6 | 2.15 | Event Horizon |
| 75 | Telegram | Social | 6 | 5 | 6 | 6 | 7 | 8 | 4 | 5 | 7 | 4 | 7 | 2.03 | Event Horizon |
| 76 | ChatGPT | AI | 7 | 7 | 7 | 6 | 9 | 7 | 6 | 7 | 7 | 4 | 7 | 1.96 | Event Horizon |
| 77 | Moderna | Pharma | 7 | 7 | 7 | 6 | 6 | 5 | 4 | 5 | 5 | 6 | 8 | 1.86 | Event Horizon |
| 78 | PDD/Temu | E-Commerce | 6 | 5 | 6 | 6 | 8 | 7 | 5 | 5 | 7 | 5 | 8 | 1.86 | Event Horizon |
| 79 | TRON (TRX) | Crypto Assets | 5 | 4 | 6 | 8 | 8 | 7 | 6 | 4 | 6 | 6 | 5 | 1.85 | Event Horizon |
| 80 | Coinbase | Crypto Infra | 7 | 5 | 6 | 6 | 7 | 7 | 5 | 5 | 7 | 6 | 5 | 1.83 | Event Horizon |
| 81 | Bitcoin (BTC) | Crypto Assets | 6 | 5 | 4 | 7 | 9 | 7 | 8 | 3 | 7 | 8 | 5 | 1.82 | Event Horizon |
| 82 | Tether (USDT) | Crypto Assets | 4 | 3 | 5 | 8 | 9 | 8 | 7 | 4 | 6 | 7 | 4 | 1.72 | Event Horizon |
| 83 | eBay | E-Commerce | 7 | 7 | 5 | 6 | 7 | 6 | 3 | 5 | 6 | 4 | 3 | 1.71 | Event Horizon |
| 84 | Aave | Crypto Infra | 5 | 5 | 7 | 6 | 8 | 6 | 7 | 5 | 5 | 7 | 7 | 1.67 | Event Horizon |
| 85 | Grok (xAI) | AI | 7 | 4 | 5 | 4 | 8 | 9 | 6 | 7 | 7 | 3 | 8 | 1.56 | Event Horizon |
| 86 | Claude (Anthropic) | AI | 6 | 7 | 8 | 5 | 5 | 7 | 7 | 7 | 7 | 3 | 8 | 1.49 | Event Horizon |
| 87 | X (Twitter) | Social | 6 | 5 | 5 | 5 | 7 | 7 | 5 | 6 | 7 | 3 | 5 | 1.29 | Transition |
| 88 | Robinhood | Fintech | 6 | 4 | 6 | 5 | 5 | 7 | 6 | 6 | 7 | 3 | 6 | 1.16 | Transition |
| 89 | PayPal | Fintech | 6 | 5 | 6 | 5 | 7 | 6 | 6 | 7 | 7 | 5 | 4 | 1.14 | Transition |
| 90 | Cardano (ADA) | Crypto Assets | 5 | 5 | 6 | 5 | 6 | 5 | 4 | 5 | 6 | 5 | 5 | 1.12 | Transition |
| 91 | XRP | Crypto Assets | 5 | 4 | 6 | 6 | 7 | 5 | 7 | 5 | 7 | 6 | 6 | 1.02 | Transition |
| 92 | Netflix | Gaming | 6 | 6 | 4 | 4 | 6 | 7 | 7 | 7 | 8 | 3 | 6 | 1.00 | Transition |
| 93 | Uniswap | Crypto Infra | 4 | 4 | 6 | 5 | 9 | 5 | 8 | 5 | 6 | 6 | 6 | 0.96 | Transition |
| 94 | Zoom | SaaS | 5 | 3 | 4 | 6 | 7 | 7 | 7 | 7 | 8 | 5 | 3 | 0.90 | Transition |
| 95 | Lido | Crypto Infra | 4 | 4 | 5 | 6 | 8 | 4 | 6 | 4 | 7 | 6 | 5 | 0.80 | Transition |
| 96 | Perplexity | AI | 5 | 5 | 5 | 4 | 5 | 6 | 7 | 7 | 8 | 2 | 8 | 0.78 | Transition |
| 97 | Disney+ | Gaming | 5 | 5 | 4 | 4 | 6 | 6 | 7 | 7 | 8 | 3 | 4 | 0.71 | Transition |
| 98 | OpenSea | Crypto Infra | 5 | 5 | 5 | 5 | 7 | 4 | 6 | 6 | 7 | 3 | 3 | 0.63 | Growing Gravity |
| 99 | Chat LLM (Generic) | AI | 3 | 2 | 2 | 4 | 6 | 4 | 8 | 8 | 8 | 2 | 3 | 0.22 | Useful Tool |
| 100 | Dogecoin (DOGE) | Crypto Assets | 2 | 2 | 2 | 2 | 6 | 5 | 9 | 8 | 9 | 1 | 2 | 0.17 | Useful Tool |

*All scores, written rationales, and interactive exploration available at blackholeindex.com/rankings.*

## Appendix C: Worked Example — Microsoft Copilot

```
Inputs: d=9, m=5, a=6, p=9, n=8, c=9, x=4, s=3, h=4, o=9, t=4
Normalized: d=0.9, m=0.5, a=0.6, p=0.9, n=0.8, c=0.9, x=0.4, s=0.3, h=0.4, o=0.9, t=0.4

Step 1: CaptureCore
  CES = ((√0.9 + √0.5 + √0.6 + √0.9) / 4)² = 0.7136

Step 2: SynergyBoost
  σ_K = √(0.9 × 0.5) = 0.6708
  σ_O = √(0.6 × 0.9) = 0.7348
  SynergyBoost = 1 + 0.3 × (0.6708 + 0.7348) / 2 = 1.2109

Step 3: Boosted CaptureCore
  Core = 0.7136 × 1.2109 = 0.8641

Step 4: Full Capture
  NetworkMult = 1 + 0.5 × 0.8 = 1.40
  OrgMult = 1 + 0.5 × 0.9 = 1.45
  MomMult = 1 + 0.3 × 0.4 = 1.12
  Capture = 0.9 × 1.40 × 0.8640 × 1.45 × 1.12 = 1.768

Step 5: Feedback
  CaptureBase = 0.7136 (CaptureCore before SynergyBoost)
  feedback = max(0.3, 1 − 0.35 × 0.7136) = 0.7502

Step 6: EscapeCore
  EscapeCore = ((√0.4 + √0.3 + √0.4) / 3)² = 0.3651

Step 7: B
  Denominator = 0.1 + 0.3651 × 0.7502 = 0.3739
  B = 1.768 / 0.3739 = 4.73

Zone: Black Hole (B > 2.5)
```

---

*Corresponding author: Ivan Savich. Contact via blackholeindex.com.*

*Data availability: All platform scores, model parameters, and interactive calculator are available at blackholeindex.com.*

*Code availability: The BHI computation engine (TypeScript) is available at blackholeindex.com/observatory.*

*Conflict of interest: The author is the creator and maintainer of the Black Hole Index platform.*

*Acknowledgments: The BHI model was developed iteratively with feedback from the research and platform economics community.*
