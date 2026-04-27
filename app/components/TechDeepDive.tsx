import { OFFER } from "@/app/content/offer";
import { CodeBlock } from "@/app/components/CodeBlock";
import { ListCard } from "@/app/components/ListCard";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
      {items.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

const ENTITY_MERMAID = `flowchart TD
  User[User] --> Role[Role]
  Role --> Permission[Permission]
  User --> AuditLog[AuditLog]
  User --> Document[Document]

  Product[Product] --> Category[Category]
  Product --> ProductImage[ProductImage]
  Product --> PricePoint[PricePoint]
  PricePoint --> PriceHistory[PriceHistory]

  User --> Order[Order]
  Order --> OrderItem[OrderItem]

  User --> Investment[Investment]
  Investment --> PortfolioSnapshot[PortfolioSnapshot]

  User --> AffiliatePartner[AffiliatePartner]
  AffiliatePartner --> Referral[Referral]
  Referral --> Commission[Commission]
  Commission --> Payout[Payout]

  User --> VaultKey[VaultKey]
  VaultKey --> VaultOperation[VaultOperation]
  VaultKey --> VaultExport[VaultExport]`;

export function TechDeepDive() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <ListCard title="Role matrix (kdo co smí)">
          <div className="grid gap-4 sm:grid-cols-2">
            {OFFER.technicalDeepDive.roleMatrix.map((r) => (
              <div key={r.title}>
                <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {r.title}
                </div>
                <div className="mt-2">
                  <Bullets items={r.bullets} />
                </div>
              </div>
            ))}
          </div>
        </ListCard>

        <CodeBlock title="Datový model (entity – Mermaid)">
          {`%% vysoká úroveň (MVP)\n${ENTITY_MERMAID}`}
        </CodeBlock>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {OFFER.technicalDeepDive.entities.map((e) => (
          <ListCard key={e.title} title={`Entity přehled – ${e.title}`}>
            <Bullets items={e.bullets} />
          </ListCard>
        ))}
      </div>

      <ListCard title="API detail (příklady payloadů a chybových stavů)">
        <div className="grid gap-4 lg:grid-cols-2">
          {OFFER.api.endpoints.map((ep) => (
            <div
              key={`${ep.method}-${ep.path}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {ep.method} {ep.path}
                  </div>
                  <div className="mt-1 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    {ep.title}
                  </div>
                </div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  Auth: {ep.auth}
                </div>
              </div>

              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {ep.description}
              </p>

              {ep.requestExample ? (
                <div className="mt-3">
                  <div className="mb-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    Request (příklad)
                  </div>
                  <pre className="overflow-auto rounded-xl bg-zinc-50 p-3 text-xs leading-5 text-zinc-800 dark:bg-black/40 dark:text-zinc-200">
                    <code>{ep.requestExample}</code>
                  </pre>
                </div>
              ) : null}

              {ep.responseExample ? (
                <div className="mt-3">
                  <div className="mb-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    Response (příklad)
                  </div>
                  <pre className="overflow-auto rounded-xl bg-zinc-50 p-3 text-xs leading-5 text-zinc-800 dark:bg-black/40 dark:text-zinc-200">
                    <code>{ep.responseExample}</code>
                  </pre>
                </div>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-2">
                {ep.statusCodes.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ListCard>
    </div>
  );
}

