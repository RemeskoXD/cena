import { OFFER } from "@/app/content/offer";
import { CodeBlock } from "@/app/components/CodeBlock";

const MERMAID = `flowchart TD
  User[User] --> WebApp[WebApp_NextJS]
  Admin[AdminUser] --> AdminApp[AdminPanel_NextJS]
  Partner[Partner] --> AffiliateApp[AffiliatePortal_NextJS]

  WebApp --> Api[NodeAPI]
  AdminApp --> Api
  AffiliateApp --> Api

  Api --> Db[(Postgres)]
  Api --> Storage[FileStorage]
  Api --> Email[EmailProvider]
  Api --> Payment[PaymentGateway]

  Api --> Audit[AuditLogs]`;

export function ApiOverview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
        <h3 className="text-base font-semibold">Autentizace & oprávnění</h3>
        <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {OFFER.api.auth.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <CodeBlock title="Architektura (Mermaid)">
        {`%% vložte do Mermaid rendereru\n${MERMAID}`}
      </CodeBlock>

      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
        {OFFER.api.groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-950"
          >
            <h3 className="text-base font-semibold">{g.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {g.endpoints.map((e) => (
                <li key={e} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-mono text-[12px] leading-5">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

