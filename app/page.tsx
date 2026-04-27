import { OFFER } from "@/app/content/offer";
import { Breakdown } from "@/app/components/Breakdown";
import { Section } from "@/app/components/Section";
import { Badge } from "@/app/components/Badge";
import { formatCzk } from "@/app/lib/money";
import { ApiOverview } from "@/app/components/ApiOverview";
import { ListCard } from "@/app/components/ListCard";
import { TechDeepDive } from "@/app/components/TechDeepDive";
import { ScreenToApi } from "@/app/components/ScreenToApi";
import { PrintButton } from "@/app/components/PrintButton";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <header className="border-b border-zinc-200/60 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="min-w-0">
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Cenová nabídka
            </div>
            <div className="truncate text-base font-semibold tracking-tight">
              {OFFER.project.name}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PrintButton />
            <nav className="hidden items-center gap-2 sm:flex">
              {[
              { href: "#rozpad", label: "Rozpad ceny" },
              { href: "#rozsah", label: "Rozsah" },
              { href: "#api", label: "API" },
              { href: "#mapovani", label: "Mapování" },
              { href: "#plan", label: "Plán" },
              { href: "#predpoklady", label: "Předpoklady" },
              { href: "#platebni", label: "Platby" },
            ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-black" />
          <div className="absolute -top-24 left-1/2 h-72 w-[800px] -translate-x-1/2 rounded-full bg-zinc-200/40 blur-3xl dark:bg-white/10" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">{OFFER.project.stack.frontend}</Badge>
                  <Badge tone="neutral">{OFFER.project.stack.backend}</Badge>
                  <Badge tone="neutral">{OFFER.project.stack.database}</Badge>
                </div>

                <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Cenová nabídka pro {OFFER.project.name}
                </h1>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                  Kompletní dodávka aplikace v MVP rozsahu, rozpadnutá podle modulů
                  a technických vrstev (včetně API). {OFFER.project.vatNote}
                </p>

                <div className="mt-5 rounded-2xl border border-zinc-200 bg-white/60 p-4 text-sm leading-6 text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/30 dark:text-zinc-200">
                  <div className="font-semibold text-zinc-950 dark:text-zinc-50">
                    Shrnutí pro rozhodnutí
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {OFFER.executiveSummary.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-950 md:min-w-[320px]">
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  Fixní cena za celou aplikaci
                </div>
                <div className="mt-1 text-3xl font-semibold tabular-nums">
                  {formatCzk(OFFER.project.priceTotalCzk)}
                </div>
                <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  Cena zahrnuje analýzu, UX/UI, frontend, backend, databázi, základní
                  integrace, testování a předání.
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="rozpad"
          title="Rozpad ceny"
          subtitle="Moduly = produktové části; vrstvy = jak bych si rozvrhl rizika a čas napříč celým projektem (spec → data → API → UI → integrace → bezpečnost → testy → předání). Pod přepínačem je řádkový rozklad po modulech. Součet všude 520 000 Kč."
        >
          <Breakdown />
        </Section>

        <Section
          id="rozsah"
          title="Rozsah (co aplikace obsahuje)"
          subtitle="Souhrn podle dodaných podkladů – marketingový web + e‑shop + administrační rozhraní + klientská zóna + affiliate + trezor."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-base font-semibold">Marketingový web</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {OFFER.scope.web.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-base font-semibold">Integrace & bezpečnost</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "API napojení", items: OFFER.scope.integrations.api },
                  {
                    title: "Datová synchronizace",
                    items: OFFER.scope.integrations.dataSync,
                  },
                  {
                    title: "Bezpečnost",
                    items: OFFER.scope.integrations.security,
                  },
                ].map((g) => (
                  <div key={g.title}>
                    <div className="text-sm font-semibold">{g.title}</div>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {OFFER.scope.modules.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950"
              >
                <h3 className="text-base font-semibold">{m.title}</h3>
                {"description" in m && m.description ? (
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {m.description}
                  </p>
                ) : null}
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="api"
          title="API a integrace"
          subtitle="Přehled domén API (typické endpointy) a návrh základní architektury. Umožní to rozumně oddělit frontend aplikace (web/admin/klient/affiliate) od backendu."
        >
          <ApiOverview />
        </Section>

        <Section
          id="tech"
          title="Technický detail (až k API)"
          subtitle="Detailnější technický rozpad pro schválení scope: role matrix, datový model (entity) a konkrétní příklady API endpointů včetně payloadů."
        >
          <TechDeepDive />
        </Section>

        <Section
          id="mapovani"
          title="Mapování obrazovek → API"
          subtitle="Propojení obrazovek z podkladů s konkrétními API voláními (READ/WRITE). Pomáhá to odhalit skrytou složitost a brání nedorozuměním ve scope."
        >
          <ScreenToApi />
        </Section>

        <Section
          id="plan"
          title="Časový plán"
          subtitle={`Orientační harmonogram dodávky v MVP režimu. Celkem: ${OFFER.schedule.totalRange}. ${OFFER.schedule.note}`}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {OFFER.timeline.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950"
              >
                <h3 className="text-base font-semibold">{p.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {OFFER.milestones.map((m) => (
              <ListCard key={m.title} title={`Milník: ${m.title}`}>
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>
        </Section>

        <Section
          id="predpoklady"
          title="Předpoklady a mimo rozsah"
          subtitle="Aby nabídka fungovala jako fixní cena, držíme se jasných předpokladů. Vše mimo ně řešíme jako change request (doplnění scope)."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-base font-semibold">V ceně (předpoklady)</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {OFFER.assumptions.included.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70 dark:bg-emerald-400/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-base font-semibold">Mimo scope (typicky)</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {OFFER.assumptions.excluded.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80 dark:bg-amber-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="predani"
          title="Co přesně dostanete (výstupy)"
          subtitle="Aby to bylo férové a měřitelné, je výstup definovaný jako konkrétní balík dodávek: specifikace, aplikace, API + DB, předání."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {OFFER.delivery.deliverables.map((d) => (
              <ListCard key={d.title} title={d.title}>
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>
        </Section>

        <Section
          id="akceptace"
          title="Akceptační kritéria (MVP)"
          subtitle="Kontrolní seznam, podle kterého se dá objektivně potvrdit, že MVP je dodané a připravené k nasazení."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <ListCard title="Checklist" tone="success">
              <ul className="space-y-1.5 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                {OFFER.delivery.acceptanceCriteria.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80 dark:bg-emerald-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </ListCard>
            <ListCard title="Jak bude probíhat akceptace" tone="neutral">
              <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {[
                  "Před UAT připravíme demo účet pro každou roli (admin/klient/affiliate).",
                  "UAT běží podle checklistu; nalezené chyby rozdělíme na blokující / neblokující.",
                  "Blokující chyby opravíme v rámci předání; neblokující zařadíme do backlogu.",
                  "Po akceptaci nasadíme na produkci (nebo předáme build k nasazení).",
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </ListCard>
          </div>
        </Section>

        <Section
          id="rizika"
          title="Rizika a mitigace"
          subtitle="Typické důvody, proč se podobné projekty zadrhnou, a jak tomu předejít."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {OFFER.delivery.risks.map((r) => (
              <ListCard key={r.title} title={r.title} tone="neutral">
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>
        </Section>

        <Section
          id="podpora"
          title="Podpora po spuštění"
          subtitle="Po MVP spuštění je nejcennější rychlá reakce na reálný provoz. Navrhuju hypercare a potom volitelnou údržbu."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {OFFER.delivery.supportOptions.map((s) => (
              <ListCard key={s.title} title={s.title} tone="neutral">
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <ListCard title="Komunikace" tone="neutral">
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {OFFER.delivery.communication.note}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {OFFER.delivery.communication.channels.map((c) => (
                  <div key={c.title}>
                    <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                      {c.title}
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ListCard>
          </div>
        </Section>

        <Section
          id="provoz"
          title="Hosting, e‑mail a provoz"
          subtitle={OFFER.operationalCosts.note}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {OFFER.operationalCosts.items.map((it) => (
              <ListCard key={it.title} title={it.title}>
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>
        </Section>

        <Section
          id="platebni"
          title="Platební podmínky"
          subtitle={OFFER.paymentTerms.note}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {OFFER.paymentTerms.proposal.map((p) => (
              <ListCard key={p.title} title={p.title}>
                <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </ListCard>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-200/60 bg-white dark:border-white/10 dark:bg-black">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 text-sm text-zinc-600 dark:text-zinc-300 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {OFFER.project.name} · {formatCzk(OFFER.project.priceTotalCzk)} ·{" "}
              {OFFER.project.vatNote}
            </div>
            <div className="text-zinc-500 dark:text-zinc-400">
              Vygenerováno jako přehled pro zákazníka.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
