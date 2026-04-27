import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-10 sm:py-14 scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

