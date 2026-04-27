import type { ReactNode } from "react";

export function CodeBlock({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
      {title ? (
        <div className="mb-3 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
          {title}
        </div>
      ) : null}
      <pre className="overflow-auto rounded-xl bg-zinc-50 p-4 text-xs leading-5 text-zinc-800 dark:bg-black/40 dark:text-zinc-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}

