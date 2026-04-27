"use client";

import type { ReactNode } from "react";

export function Tabs<T extends string>({
  value,
  onChange,
  items,
}: {
  value: T;
  onChange: (value: T) => void;
  items: { value: T; label: string; icon?: ReactNode }[];
}) {
  return (
    <div className="inline-flex rounded-2xl border border-zinc-200 bg-white p-1 dark:border-white/10 dark:bg-zinc-950">
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            onClick={() => onChange(it.value)}
            className={[
              "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition",
              active
                ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-950"
                : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-white/5",
            ].join(" ")}
          >
            {it.icon ? <span className="opacity-90">{it.icon}</span> : null}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

