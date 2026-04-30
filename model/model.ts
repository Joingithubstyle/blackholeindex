/* ═══════════════════════════════════════════
   MODEL — VERIFIED. DO NOT MODIFY.
   ═══════════════════════════════════════════ */

export const EP = 0.1;

export const clamp = (v: number, lo = 0, hi = 10) => Math.max(lo, Math.min(hi, v));

export const norm = (v: number) => clamp(v) / 10;

const ces4 = (a: number, b: number, c: number, d: number) =>
  ((Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c) + Math.sqrt(d)) / 4) ** 2;

const ces3 = (a: number, b: number, c: number) =>
  ((Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c)) / 3) ** 2;

export interface Metrics {
  d: number; m: number; a: number; p: number;
  n: number; c: number; x: number; s: number;
  h: number; o: number; t: number;
}

export interface V3Result {
  capture: number; escape: number; b: number;
  coreBase: number; escCore: number;
  sigmaK: number; sigmaO: number;
  synergyBoost: number; orgMult: number; momMult: number;
  feedback: number;
}

export function V1(m: Metrics) {
  const [d, e, a, p, n, c, x, s, h] = [m.d, m.m, m.a, m.p, m.n, m.c, m.x, m.s, m.h].map(norm);
  return { b: c * (1 + 0.5 * n) * ces4(d, e, a, p) / (EP + (x + s + h) / 3) };
}

export function V2(m: Metrics) {
  const [d, e, a, p, n, c, x, s, h] = [m.d, m.m, m.a, m.p, m.n, m.c, m.x, m.s, m.h].map(norm);
  return { b: c * (1 + 0.5 * n) * ces4(d, e, a, p) / (EP + ces3(x, s, h)) };
}

export function V3(m: Metrics, hO?: number): V3Result {
  const [d, e, a, p, n, c, x, s] = [m.d, m.m, m.a, m.p, m.n, m.c, m.x, m.s].map(norm);
  const h = hO !== undefined ? hO : norm(m.h);
  const o = norm(m.o);
  const t = norm(m.t);
  const sK = Math.sqrt(d * e);
  const sO = Math.sqrt(a * p);
  const syn = 1 + 0.3 * (sK + sO) / 2;
  const cb = ces4(d, e, a, p);
  const core = cb * syn;
  const cap = c * (1 + 0.5 * n) * core * (1 + 0.5 * o) * (1 + 0.3 * t);
  const fb = Math.max(0.3, 1 - 0.35 * cb);
  const ec = ces3(x, s, h);
  const esc = EP + ec * fb;
  return {
    capture: cap, escape: esc, b: cap / esc,
    coreBase: cb, escCore: ec, sigmaK: sK, sigmaO: sO,
    synergyBoost: syn, orgMult: 1 + 0.5 * o, momMult: 1 + 0.3 * t, feedback: fb,
  };
}

/* ═══ DATA ═══ */
export interface PresetData {
  l: string; s: string; v: Metrics;
}

export const PR: Record<string, PresetData> = {
  "chat-llm": { l: "Chat LLM", s: "Chat", v: { d: 3, m: 2, a: 2, p: 4, n: 6, c: 4, x: 8, s: 8, h: 8, o: 2, t: 3 } },
  ide: { l: "IDE Assistant", s: "IDE", v: { d: 6, m: 4, a: 6, p: 7, n: 6, c: 8, x: 7, s: 5, h: 6, o: 5, t: 5 } },
  "ai-os": { l: "AI-OS", s: "AI-OS", v: { d: 9, m: 8, a: 8, p: 9, n: 7, c: 9, x: 3, s: 2, h: 3, o: 8, t: 7 } },
  chatgpt: { l: "ChatGPT", s: "GPT", v: { d: 7, m: 7, a: 7, p: 6, n: 9, c: 7, x: 6, s: 7, h: 7, o: 4, t: 7 } },
  claude: { l: "Claude", s: "Claude", v: { d: 6, m: 7, a: 8, p: 5, n: 5, c: 7, x: 7, s: 7, h: 7, o: 3, t: 8 } },
  copilot: { l: "MS Copilot", s: "Copilot", v: { d: 9, m: 5, a: 6, p: 9, n: 8, c: 9, x: 4, s: 3, h: 4, o: 9, t: 4 } },
  gemini: { l: "Gemini", s: "Gemini", v: { d: 8, m: 6, a: 6, p: 8, n: 9, c: 8, x: 5, s: 6, h: 6, o: 5, t: 7 } },
  grok: { l: "Grok", s: "Grok", v: { d: 7, m: 4, a: 5, p: 4, n: 8, c: 9, x: 6, s: 7, h: 7, o: 3, t: 8 } },
  cursor: { l: "Cursor", s: "Cursor", v: { d: 7, m: 6, a: 8, p: 7, n: 6, c: 8, x: 5, s: 5, h: 5, o: 4, t: 9 } },
  "apple-ai": { l: "Apple Intelligence", s: "Apple AI", v: { d: 9, m: 6, a: 5, p: 7, n: 9, c: 8, x: 2, s: 2, h: 6, o: 6, t: 8 } },
  custom: { l: "Custom", s: "Custom", v: { d: 5, m: 5, a: 5, p: 5, n: 5, c: 5, x: 5, s: 5, h: 5, o: 5, t: 5 } },
};

export interface MetricDef {
  k: string; l: string; r: string; g: string; h: string;
}

export const MT: MetricDef[] = [
  { k: "d", l: "Data Depth", r: "Data", g: "cap", h: "Volume and density of observable user and organizational context" },
  { k: "m", l: "Memory", r: "Mem", g: "cap", h: "Persistent non-portable state — embeddings, profiles, learned policies" },
  { k: "a", l: "Action", r: "Act", g: "cap", h: "Ability to initiate and complete real-world actions autonomously" },
  { k: "p", l: "Process", r: "Proc", g: "cap", h: "Degree of embedding inside daily workflow chains" },
  { k: "n", l: "Network", r: "Net", g: "cap", h: "Ecosystem reinforcement — complementors, standards, multi-homing cost" },
  { k: "c", l: "Closeness", r: "Close", g: "cap", h: "Frequency of contact and cognitive offloading habit formation" },
  { k: "x", l: "Portability", r: "Port", g: "esc", h: "Data and state exportability — GDPR Art.20 excludes inferred data" },
  { k: "s", l: "Substitutability", r: "Sub", g: "esc", h: "Existence of functionally equivalent alternatives at integration level" },
  { k: "h", l: "Human Fallback", r: "Fall", g: "esc", h: "Ability to maintain productivity without the system (Parasuraman decay)" },
  { k: "o", l: "Org Depth", r: "Org", g: "ext", h: "Institutional procurement lock-in — Granovetter cascade threshold" },
  { k: "t", l: "Momentum", r: "Mom", g: "ext", h: "Capability growth velocity — Arthur increasing returns" },
];

export const GC: Record<string, string> = { cap: "#d4a015", esc: "#38bdf8", ext: "#b794f6" };

export function zone(b: number) {
  if (b < 0.4) return { l: "Useful Tool", c: "#14b8a6", bg: "rgba(20,184,166,.07)", br: "rgba(20,184,166,.22)" };
  if (b < 0.7) return { l: "Growing Gravity", c: "#22d3ee", bg: "rgba(34,211,238,.07)", br: "rgba(34,211,238,.22)" };
  if (b < 1.3) return { l: "Transition Zone", c: "#facc15", bg: "rgba(250,204,21,.07)", br: "rgba(250,204,21,.22)" };
  if (b < 2.5) return { l: "Event Horizon", c: "#fb923c", bg: "rgba(251,146,60,.07)", br: "rgba(251,146,60,.22)" };
  return { l: "Black Hole", c: "#f87171", bg: "rgba(248,113,113,.07)", br: "rgba(248,113,113,.22)" };
}

/* ═══ SENSITIVITY ═══ */
export function computeSens(base: Metrics, N = 260) {
  const ks = MT.map(m => m.k);
  const rand = () => Math.random() * 10;
  const samp = () => {
    const o: Record<string, number> = {};
    ks.forEach(k => (o[k] = rand()));
    return o as unknown as Metrics;
  };
  const blend = (s: Metrics, a: Metrics) => {
    const o: Record<string, number> = {};
    ks.forEach(k => (o[k] = clamp(0.55 * (a as any)[k] + 0.45 * (s as any)[k])));
    return o as unknown as Metrics;
  };
  const A = Array.from({ length: N }, samp);
  const B = Array.from({ length: N }, samp);
  const A2 = A.map(s => blend(s, base));
  const B2 = B.map(s => blend(s, base));
  const fA = A2.map(m => V3(m).b);
  const fB = B2.map(m => V3(m).b);
  const all = [...fA, ...fB];
  const mu = all.reduce((a, v) => a + v, 0) / all.length;
  const vY = all.reduce((a, v) => a + (v - mu) ** 2, 0) / Math.max(1, all.length - 1);
  if (vY < 1e-10) return ks.map(k => ({ k, l: MT.find(m => m.k === k)!.l, g: MT.find(m => m.k === k)!.g, S1: 0, ST: 0, mg: 0 }));
  return ks.map(k => {
    const fABi = A2.map((s, i) => V3({ ...s, [k]: (B2[i] as any)[k] } as Metrics).b);
    let s1 = 0, st = 0;
    for (let j = 0; j < N; j++) { s1 += fB[j] * (fABi[j] - fA[j]); st += (fA[j] - fABi[j]) ** 2; }
    const up = { ...base, [k]: Math.min(10, (base as any)[k] + 1) } as Metrics;
    const dn = { ...base, [k]: Math.max(0, (base as any)[k] - 1) } as Metrics;
    const meta = MT.find(m => m.k === k)!;
    return {
      k, l: meta.l, g: meta.g,
      S1: +Math.max(0, Math.min(1, s1 / N / vY)).toFixed(4),
      ST: +Math.max(0, Math.min(1, st / (2 * N * vY))).toFixed(4),
      mg: +(V3(up).b - V3(dn).b).toFixed(4),
    };
  }).sort((a, b) => b.ST - a.ST);
}

/* ═══ DYNAMICS ═══ */
export interface DynParams {
  k: number; u: number; r: number; Bmax: number;
  phi: number; psi: number; lam: number; steps: number;
}

export function simDyn(m: Metrics, p: DynParams) {
  const cc = norm(m.c), pp = norm(m.p), U = cc * pp;
  let h = norm(m.h), BS = V3(m, h).b, BD = BS;
  const data: { t: number; BD: number; BS: number; h: number }[] = [];
  for (let i = 0; i <= p.steps; i++) {
    data.push({ t: i, BD: +Math.min(BD, p.Bmax * 1.2).toFixed(3), BS: +Math.min(BS, p.Bmax * 1.2).toFixed(3), h: +h.toFixed(4) });
    h = Math.max(0.01, Math.min(1, h + (-p.phi * U * h + p.psi * (1 - h))));
    BS = V3(m, h).b;
    const auto = BD > 1 ? p.k * (BD - 1) * Math.max(0, 1 - BD / p.Bmax) : 0;
    BD = Math.max(0, BD + p.lam * (BS - BD) + auto + p.u - p.r);
    if (BD > p.Bmax * 1.2) BD = p.Bmax * 1.2;
  }
  return data;
}

/* ═══ UNCERTAINTY ═══ */
export function computeWithUncertainty(
  scores: Metrics,
  iterations: number = 1000
): { b: number; low: number; high: number; median: number } {
  const base = V3(scores).b;
  const results: number[] = [];
  const keys = Object.keys(scores) as (keyof Metrics)[];
  for (let i = 0; i < iterations; i++) {
    const perturbed = { ...scores };
    for (const key of keys) {
      const delta = Math.floor(Math.random() * 3) - 1;
      perturbed[key] = Math.max(0, Math.min(10, perturbed[key] + delta));
    }
    results.push(V3(perturbed).b);
  }
  results.sort((a, b) => a - b);
  return {
    b: base,
    low: results[Math.floor(iterations * 0.1)],
    high: results[Math.floor(iterations * 0.9)],
    median: results[Math.floor(iterations * 0.5)],
  };
}

/* ═══ VALIDATION ═══ */
export function runVal(m: Metrics) {
  const ch: { n: string; p: boolean; v: string }[] = [];
  const b = V3(m);
  (["d", "m", "a", "p", "n", "c"] as const).forEach(k => {
    const u = { ...m, [k]: Math.min(10, (m as any)[k] + 1) } as Metrics;
    ch.push({ n: `Capture monotonicity: ${k}+1`, p: V3(u).b >= b.b, v: `${b.b.toFixed(3)} -> ${V3(u).b.toFixed(3)}` });
  });
  (["x", "s", "h"] as const).forEach(k => {
    const u = { ...m, [k]: Math.min(10, (m as any)[k] + 1) } as Metrics;
    ch.push({ n: `Escape anti-monotonicity: ${k}+1`, p: V3(u).b <= b.b, v: `${b.b.toFixed(3)} -> ${V3(u).b.toFixed(3)}` });
  });
  const mx = V3({ d: 10, m: 10, a: 10, p: 10, n: 10, c: 10, x: 0, s: 0, h: 0, o: 10, t: 10 }).b;
  ch.push({ n: "B_max in plausible range (10-100)", p: mx > 10 && mx < 100, v: mx.toFixed(2) });
  ch.push({ n: "Feedback bounded [0.3, 1.0]", p: b.feedback >= 0.3 && b.feedback <= 1, v: b.feedback.toFixed(4) });
  ch.push({ n: "Escape exceeds epsilon floor", p: b.escape > EP, v: b.escape.toFixed(4) });
  return ch;
}
