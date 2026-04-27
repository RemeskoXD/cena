import { OFFER } from "@/app/content/offer";
import { ListCard } from "@/app/components/ListCard";

const areaLabel: Record<string, string> = {
  MarketingWeb: "Marketing web",
  Eshop: "E‑shop",
  AdminPanel: "Admin panel",
  KlientPanel: "Klient panel",
  Affiliate: "Affiliate",
  Vault: "Trezor",
};

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200">
      <span className="font-mono text-[11px] leading-4">{children}</span>
    </span>
  );
}

export function ScreenToApi() {
  const groups = Object.groupBy(
    OFFER.technicalDeepDive.screenToApi,
    (x) => x.area,
  );

  return (
    <div className="grid gap-4">
      {Object.entries(groups).map(([area, items]) => (
        <ListCard key={area} title={areaLabel[area] ?? area}>
          <div className="grid gap-4">
            {(items ?? []).map((s) => (
              <div
                key={`${s.area}-${s.screen}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                      {s.screen}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Role: {s.role}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      READ (načtení dat)
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.reads.length ? (
                        s.reads.map((e) => <Chip key={e}>{e}</Chip>)
                      ) : (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          —
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      WRITE (změny)
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.writes.length ? (
                        s.writes.map((e) => <Chip key={e}>{e}</Chip>)
                      ) : (
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          —
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {s.notes?.length ? (
                  <ul className="mt-4 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {s.notes.map((n) => (
                      <li key={n} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </ListCard>
      ))}
    </div>
  );
}

