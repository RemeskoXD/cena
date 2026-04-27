"use client";

import { useMemo, useState } from "react";
import type { BreakdownItem } from "@/app/content/offer";
import { OFFER } from "@/app/content/offer";
import { formatCzk } from "@/app/lib/money";
import { percent, sum } from "@/app/lib/math";
import { Badge } from "@/app/components/Badge";
import { Tabs } from "@/app/components/Tabs";

type Mode = "modules" | "layers";

function Row({ item, total }: { item: BreakdownItem; total: number }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              {item.title}
            </h3>
            <Badge tone="neutral">{percent(item.amountCzk, total)} %</Badge>
          </div>
          <ul className="mt-2 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {item.includes.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-lg font-semibold tabular-nums text-zinc-950 dark:text-zinc-50">
            {formatCzk(item.amountCzk)}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            z {formatCzk(total)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Breakdown() {
  const [mode, setMode] = useState<Mode>("modules");

  const total = OFFER.project.priceTotalCzk;
  const items = mode === "modules" ? OFFER.pricing.byModule : OFFER.pricing.byLayer;
  const computedTotal = useMemo(() => sum(items), [items]);
  const ok = computedTotal === total;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Tabs
          value={mode}
          onChange={setMode}
          items={[
            { value: "modules", label: "Rozpad dle modulů" },
            { value: "layers", label: "Rozpad dle vrstev" },
          ]}
        />

        <div className="flex items-center gap-2">
          <Badge tone={ok ? "success" : "warning"}>
            Součet: {formatCzk(computedTotal)}
          </Badge>
          <Badge tone="neutral">Cíl: {formatCzk(total)}</Badge>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <Row key={it.id} item={it} total={total} />
        ))}
      </div>
    </div>
  );
}

