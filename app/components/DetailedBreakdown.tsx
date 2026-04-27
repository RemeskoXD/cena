"use client";

import { useMemo } from "react";
import { OFFER } from "@/app/content/offer";
import { formatCzk } from "@/app/lib/money";
import { percent } from "@/app/lib/math";
import { Badge } from "@/app/components/Badge";
import type { DetailedBreakdownGroup, MoneyCZK } from "@/app/content/offer";

function groupSum(g: DetailedBreakdownGroup): MoneyCZK {
  return g.items.reduce((a, it) => a + it.amountCzk, 0);
}

export function DetailedBreakdown() {
  const total = OFFER.project.priceTotalCzk;
  const groups = OFFER.pricing.detailed;

  const computed = useMemo(
    () => groups.reduce((acc, g) => acc + groupSum(g), 0),
    [groups],
  );
  const ok = computed === total;

  return (
    <div className="mt-10 border-t border-zinc-200 pt-10 dark:border-white/10">
      <div className="max-w-3xl">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
          Podrobný rozklad (jak bych to dělal s vámi)
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Stejná fixní cena, jen rozepsaná na menší dodávky podle modulů. Odpovídá tomu,
          kde bych s vámi strávil čas v praxi (iterace v UI, eshop/checkout, klientské
          jádro, trezor). Mezi řádky se může čas mírně přesouvat; součet zůstává 520 000 Kč.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone={ok ? "success" : "warning"}>
          Součet detailu: {formatCzk(computed)}
        </Badge>
        <Badge tone="neutral">Cíl: {formatCzk(total)}</Badge>
      </div>

      <div className="mt-6 space-y-6">
        {groups.map((g) => {
          const gTotal = groupSum(g);
          return (
            <div
              key={g.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950"
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
              <ul className="divide-y divide-zinc-100 dark:divide-white/10">
                {g.items.map((it) => (
                  <li
                    key={it.id}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-2.5 text-sm"
                  >
                    <span className="min-w-0 text-zinc-700 dark:text-zinc-200">
                      {it.label}
                    </span>
                    <span className="shrink-0 tabular-nums text-zinc-950 dark:text-zinc-50">
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
