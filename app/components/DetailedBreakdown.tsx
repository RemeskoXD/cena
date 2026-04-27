"use client";

import { useMemo } from "react";
import { OFFER } from "@/app/content/offer";
import { formatCzk } from "@/app/lib/money";
import { percent } from "@/app/lib/math";
import { Badge } from "@/app/components/Badge";

export type BreakdownDetailMode = "modules" | "layers";

const COPY: Record<
  BreakdownDetailMode,
  { heading: string; lede: string }
> = {
  modules: {
    heading: "Řádkový rozklad dle modulů (dle sitmapy)",
    lede: "Jako v náhledu nákladů: každý řádek je orientační alokace z fixní 520 000 Kč. Vychází z modulů ve vašem schématu (vstupní web až trezor). Mezi řádky může čas v praxi mírně plavat; součet skupin drží cílovou cenu.",
  },
  layers: {
    heading: "Řádkový rozklad dle vrstev (Spec → … → Předání)",
    lede: "Týchž 520 000 Kč rozložených do kroků z nadpisu sekce: spec, návrh, data, API, UI, integrace, bezpečnost, testy, předání. Přepněte na moduly, pokud chcete produktový výřez podle portálů.",
  },
};

export function DetailedBreakdown({ mode }: { mode: BreakdownDetailMode }) {
  const total = OFFER.project.priceTotalCzk;
  const groups =
    mode === "modules" ? OFFER.pricing.detailed : OFFER.pricing.detailedByLayer;
  const { heading, lede } = COPY[mode];

  const computed = useMemo(
    () =>
      groups.reduce(
        (acc, g) => acc + g.items.reduce((a, it) => a + it.amountCzk, 0),
        0,
      ),
    [groups],
  );
  const ok = computed === total;

  return (
    <div
      id="rozpad-radky"
      className="mt-10 scroll-mt-24 border-l-4 border-rose-500/90 pl-5 print:border-zinc-400 print:bg-white dark:border-rose-400/90"
      aria-labelledby="detailed-breakdown-title"
    >
      <div className="max-w-3xl rounded-r-2xl border border-rose-200/60 bg-rose-50/40 p-4 print:border-zinc-300 print:bg-zinc-50 dark:border-rose-900/50 dark:bg-rose-950/20">
        <h3
          id="detailed-breakdown-title"
          className="text-lg font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {heading}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {lede}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone={ok ? "success" : "warning"}>
          Součet řádků: {formatCzk(computed)}
        </Badge>
        <Badge tone="neutral">Cíl: {formatCzk(total)}</Badge>
      </div>

      <div
        className="mt-6 space-y-6"
        role="region"
        aria-label={heading}
        aria-live="polite"
      >
        {groups.map((g) => {
          const gTotal = g.items.reduce((a, it) => a + it.amountCzk, 0);
          return (
            <div
              key={g.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <div className="min-w-0 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {g.title}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {percent(gTotal, total)} % z celku
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
                    {formatCzk(gTotal)}
                  </span>
                </div>
              </div>

              <div
                className="hidden sm:grid sm:grid-cols-[1fr,auto] sm:gap-2 sm:px-4 sm:py-2 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                aria-hidden
              >
                <span>Položka (rozsah práce)</span>
                <span className="text-right">Cena cca</span>
              </div>
              <ul className="divide-y divide-zinc-100 dark:divide-white/10">
                {g.items.map((it) => (
                  <li
                    key={it.id}
                    className="grid grid-cols-1 gap-1 px-4 py-2.5 sm:grid-cols-[1fr,auto] sm:items-baseline"
                  >
                    <span className="text-sm text-zinc-700 dark:text-zinc-200">
                      {it.label}
                    </span>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-rose-700 dark:text-rose-300/95 sm:text-right">
                      cca {formatCzk(it.amountCzk)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
