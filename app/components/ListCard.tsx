import type { ReactNode } from "react";

export function ListCard({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "success" | "warning";
}) {
  const tones: Record<typeof tone, string> = {
    neutral:
      "border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950",
    success:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/10",
    warning:
      "border-amber-200 bg-amber-50/60 dark:border-amber-500/20 dark:bg-amber-500/10",
  };

  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

