export type MoneyCZK = number;

export type BreakdownItem = {
  id: string;
  title: string;
  amountCzk: MoneyCZK;
  includes: string[];
};

/** Drobný řádkový rozklad uvnitř modulu (součet = amountCzk dané skupiny). */
export type DetailedLineItem = {
  id: string;
  label: string;
  amountCzk: MoneyCZK;
};

export type DetailedBreakdownGroup = {
  id: string;
  moduleId: string;
  title: string;
  items: DetailedLineItem[];
};

export type ApiEndpointGroup = {
  title: string;
  endpoints: string[];
};

export type NamedList = {
  title: string;
  bullets: string[];
};

export type ApiSpec = {
  title: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  auth: "public" | "user" | "admin" | "affiliate";
  description: string;
  requestExample?: string;
  responseExample?: string;
  statusCodes: string[];
};

export type ScreenApiMap = {
  area:
    | "MarketingWeb"
    | "Eshop"
    | "AdminPanel"
    | "KlientPanel"
    | "Affiliate"
    | "Vault";
  screen: string;
  role: "public" | "client" | "admin" | "affiliate";
  reads: string[];
  writes: string[];
  notes?: string[];
};

export const OFFER = {
  project: {
    name: "Portál / investiční ekosystém (MVP)",
    priceTotalCzk: 520_000 as MoneyCZK,
    currencyLabel: "Kč",
    vatNote: "Nejsem plátce DPH (cena je bez DPH).",
    stack: {
      frontend: "Next.js (React, App Router) + Tailwind",
      backend: "Node.js API (REST)",
      database: "PostgreSQL",
    },
  },

  executiveSummary: {
    bullets: [
      "Fixní cena 520 000 Kč bez DPH za dodání MVP aplikace (web + eshop + admin + klient + affiliate + trezor).",
      "Rozpad ceny odpovídá tomu, jak bych projekt reálně skládal ve spolupráci s vámi: nejdřív společná spec a datový model, pak backend a rozhraní po milnících, integrace zvlášť, nakonec testy a předání (viz moduly i vrstvy níže).",
      "Součást MVP jsou integrace: Google přihlášení (OAuth) a Fio bank API (sync transakcí + základní párování).",
      "Hosting aplikace (OVHcloud), databázi i e‑mail zajišťuje dodavatel; doménu/DNS typicky zajišťuje klient (dle dohody).",
      "Google OAuth je společně: realizace a nastavení v rámci projektu, následně může běžet na Google projektu klienta.",
      "Dodávka probíhá po fázích s demy a UAT; změny scope řešíme change requestem.",
    ],
  },

  scope: {
    web: [
      "Hero sekce",
      "Sekce produktů",
      "Výhody / benefity",
      "Uživatelské recenze",
      "Bezpečnostní sekce",
      "Platforma a lokalizace systému",
      "FAQ",
      "CTA",
    ],
    integrations: {
      api: ["Evidenční klíčů", "Produkty", "Objednávky", "Uživatelé"],
      dataSync: ["Importy/Exporty", "Příprava na integrace 3. stran"],
      security: ["Hashování hesel", "Role a práva", "Audit logy"],
    },
    modules: [
      {
        title: "Eshop",
        description:
          "Nákupní část – katalog produktů, detail produktu a objednávkový proces. Slouží k prodeji a sběru objednávek.",
        bullets: [
          "Produkty (názvy, popisy, obrázky, cena, slevy)",
          "Tržní ceny (import, historie, grafy)",
          "Nákupní proces (košík, objednávka, potvrzení, fakturace/platební návaznosti dle scope)",
        ],
      },
      {
        title: "Admin panel",
        description:
          "Správa systému – produktová data, ceny, objednávky, uživatelé, role, audit a integrační nastavení. Slouží pro interní obsluhu.",
        bullets: [
          "Dashboard (metriky, grafy)",
          "Správa produktů (CRUD, kategorie, import/export)",
          "Správa cen (napojení na tržní cenu, historie, grafy)",
          "Správa objednávek (stav, historie, exporty)",
          "Správa uživatelů (role, přístupy, historie)",
          "Affiliate správa (partneři, provize, payouty)",
          "Notifikace (email/administrátorské logy dle scope)",
          "Vault / úschova (přehled, správa klíčů, historie)",
          "Integrace & systém (logy, monitoring, nastavení)",
        ],
      },
      {
        title: "Klient panel",
        description:
          "Klientská zóna – investor vidí svoje investice/portfolio, historii, dokumenty a trezor. Slouží pro samoobsluhu klientů.",
        bullets: [
          "Dashboard investora (metriky, grafy, KPI)",
          "Moje investice (stav, výnosy, nákupní cena, odhady)",
          "Tracking doporučení (sledování referral výkonu)",
          "Historie objednávek",
          "Vault / úschova (vlastní klíče, historie, exporty)",
          "Profil uživatele (osobní údaje, bezpečnost)",
          "Statistiky portálu (přehledy)",
          "Výplata provizí (přehled a historie výplat)",
          "Mini dashboard (rychlé souhrny)",
          "Dokumenty (obchodní podmínky, KYC/AML dle scope, dokumenty k investici)",
        ],
      },
      {
        title: "Affiliate prostředí",
        description:
          "Partnerské prostředí – registrace, referral odkazy, tracking a provize. Slouží k růstu přes partnery a měření výkonu.",
        bullets: [
          "Registrace affiliate partnera",
          "Přehled provizí a payoutů",
          "Referral odkazy (generování, statistiky)",
          "Tracking doporučení a konverzí",
        ],
      },
      {
        title: "Funkce Trezoru",
        description:
          "Trezor/úschova – evidence klíčů a operací, přehled majetku a exporty. Slouží jako bezpečný přehled a auditní stopa.",
        bullets: [
          "Evidence klíčů (unikátní identifikace, přístupová práva)",
          "Přehled majetku (stav, vývoj hodnoty)",
          "Správa úschovy",
          "Historie operací (vklady/výběry, změny)",
          "Exporty / reporty",
        ],
      },
    ],
  },

  pricing: {
    /** Moduly: jak bych váhu rozdal mezi produktové části (součet = 520 000 Kč). */
    byModule: [
      {
        id: "web",
        title: "Marketingový web",
        amountCzk: 62_000,
        includes: [
          "Beru to jako rychlé iterace s vámi: nejdřív kostra sekcí, pak doladění obsahu a vizuálu přímo v prohlížeči",
          "Hero až FAQ, responzivita, základní SEO",
          "Obsah zůstane čitelně strukturovaný (konfigurace bloků, ne „zabetonovaný“ v kódu)",
        ],
      },
      {
        id: "eshop",
        title: "Eshop",
        amountCzk: 88_000,
        includes: [
          "Katalog a detail jako první prodejní priorita",
          "Košík a checkout v MVP — nejvíc rizik, nejvíc pozornosti (stav objednávky, chyby, hrany)",
          "Napojení na API (produkty, ceny, objednávky) srozumitelné pro uživatele i pro admin",
        ],
      },
      {
        id: "admin",
        title: "Admin panel",
        amountCzk: 118_000,
        includes: [
          "Dashboard a metriky jako přehled provozu, ne jen ozdoba",
          "CRUD produktů, cen, objednávek — stavové stroje a exporty, které opravdu použijete",
          "Uživatelé, role, audit; obrazovky pro OAuth a banku v rozumném MVP rozsahu",
        ],
      },
      {
        id: "client",
        title: "Klient panel",
        amountCzk: 138_000,
        includes: [
          "Největší unikátní vrstva: dashboard, portfolio, investice — ladíme s reálnými daty a vaší terminologií",
          "Objednávky, tracking, profil, dokumenty (MVP)",
          "Trezor z pohledu klienta + výplaty provizí a souhrnné statistiky",
        ],
      },
      {
        id: "affiliate",
        title: "Affiliate prostředí",
        amountCzk: 52_000,
        includes: [
          "Registrace a přístup partnera bez zbytečné složitosti",
          "Referral + měření; provize a payout přehledně",
        ],
      },
      {
        id: "vault",
        title: "Trezor (úschova)",
        amountCzk: 62_000,
        includes: [
          "Citlivá doména: evidence klíčů, práva, auditní stopa",
          "Historie operací, přehled majetku, exporty v MVP rozsahu",
        ],
      },
    ] satisfies BreakdownItem[],

    /** Stejná fixní cena, rozpadnutá na menší kroky podle modulů (součet = 520 000 Kč). */
    detailed: [
      {
        id: "web-detail",
        moduleId: "web",
        title: "Marketingový web",
        items: [
          { id: "web-1", label: "Kostra layoutu, navigace, patička (první společný náhled)", amountCzk: 11_000 },
          { id: "web-2", label: "Hero, CTA, produktové a benefitní bloky", amountCzk: 11_000 },
          { id: "web-3", label: "Reference, bezpečnost, FAQ (obsah doladíme s vámi)", amountCzk: 12_000 },
          { id: "web-4", label: "Responzivita napříč breakpointy", amountCzk: 10_000 },
          { id: "web-5", label: "SEO základ (meta, struktura, sitemap rozumně)", amountCzk: 10_000 },
          { id: "web-6", label: "Konfigurovatelné bloky / napojení textů", amountCzk: 8_000 },
        ],
      },
      {
        id: "eshop-detail",
        moduleId: "eshop",
        title: "Eshop",
        items: [
          { id: "es-1", label: "Katalog: list, řazení, stránkování", amountCzk: 25_000 },
          { id: "es-2", label: "Detail produktu včetně stavů načítání / chyb", amountCzk: 17_000 },
          { id: "es-3", label: "Košík: session, ceny, validace", amountCzk: 14_000 },
          { id: "es-4", label: "Checkout a potvrzení (MVP, hrany stavů)", amountCzk: 20_000 },
          { id: "es-5", label: "Klient + API: produkty, ceny, objednávky", amountCzk: 12_000 },
        ],
      },
      {
        id: "admin-detail",
        moduleId: "admin",
        title: "Admin panel",
        items: [
          { id: "ad-1", label: "Dashboard a klíčové metriky", amountCzk: 17_000 },
          { id: "ad-2", label: "Produkty: CRUD, kategorie, média (MVP)", amountCzk: 22_000 },
          { id: "ad-3", label: "Ceny: tržní data, import, historie", amountCzk: 19_000 },
          { id: "ad-4", label: "Objednávky: stavy, detail, exporty", amountCzk: 17_000 },
          { id: "ad-5", label: "Uživatelé, role, audit", amountCzk: 18_000 },
          { id: "ad-6", label: "Obrazovky integrací (OAuth, Fio – konfigurace MVP)", amountCzk: 13_000 },
          { id: "ad-7", label: "Systém: logy, notifikace, základní nastavení", amountCzk: 12_000 },
        ],
      },
      {
        id: "client-detail",
        moduleId: "client",
        title: "Klient panel",
        items: [
          { id: "cl-1", label: "Dashboard: metriky, grafy, KPI (ladění s reálnými daty)", amountCzk: 26_000 },
          { id: "cl-2", label: "Portfolio a investice (jádro klientské hodnoty)", amountCzk: 35_000 },
          { id: "cl-3", label: "Objednávky a tracking doporučení", amountCzk: 14_000 },
          { id: "cl-4", label: "Profil, dokumenty, bezpečnost", amountCzk: 22_000 },
          { id: "cl-5", label: "Trezor (klient): klíče, historie, exporty", amountCzk: 14_000 },
          { id: "cl-6", label: "Provize, výplaty, portálové statistiky", amountCzk: 17_000 },
          { id: "cl-7", label: "Přihlášení / OAuth UI flow", amountCzk: 10_000 },
        ],
      },
      {
        id: "affiliate-detail",
        moduleId: "affiliate",
        title: "Affiliate",
        items: [
          { id: "af-1", label: "Onboarding partnera (registrace, přístup)", amountCzk: 11_000 },
          { id: "af-2", label: "Referral odkazy a měření konverzí", amountCzk: 17_000 },
          { id: "af-3", label: "Provize, stavy, payout přehled", amountCzk: 14_000 },
          { id: "af-4", label: "Partnerské přehledy a statistiky (MVP)", amountCzk: 10_000 },
        ],
      },
      {
        id: "vault-detail",
        moduleId: "vault",
        title: "Trezor (úschova)",
        items: [
          { id: "vt-1", label: "Model klíčů, práva, audit (návrh + implementace)", amountCzk: 17_000 },
          { id: "vt-2", label: "Historie operací a konzistence dat", amountCzk: 16_000 },
          { id: "vt-3", label: "Přehled majetku", amountCzk: 14_000 },
          { id: "vt-4", label: "Exporty a reporty (MVP)", amountCzk: 15_000 },
        ],
      },
    ] satisfies DetailedBreakdownGroup[],

    /** Vrstvy: jak bych si rozvrhl čas a rizika napříč celým projektem (součet = 520 000 Kč). */
    byLayer: [
      {
        id: "analysis",
        title: "Společná příprava (specifikace & backlog)",
        amountCzk: 62_000,
        includes: [
          "Workshopy / krátké smyčky: use-cases, MVP hranice, co je až po spuštění",
          "Role a oprávnění zapsané tak, aby z toho šlo rovnou stavět RBAC",
          "API domény + datový model — nejdřív papír (nebo doc), pak teprve masivní kód",
          "Průběžná synchronizace a rozhodnutí (včetně „mini PM“ v rámci dodávky)",
        ],
      },
      {
        id: "uxui",
        title: "UX/UI (wireframy → design systém)",
        amountCzk: 46_000,
        includes: [
          "Wireframy rizikových flow (eshop, admin, klient)",
          "Design systém v míře potřebné pro MVP (ne galerie pro galerii)",
          "Responzivní pravidla, aby FE neřešil každou obrazovku od nuly",
        ],
      },
      {
        id: "db",
        title: "Databáze (Postgres) + migrace",
        amountCzk: 44_000,
        includes: [
          "Schéma podle domén (uživatelé, produkty, objednávky, investice, affiliate, trezor, banka)",
          "Migrace + seed pro vývoj a demo",
          "Indexy a základní výkon (ať se neproboríme až na konci)",
        ],
      },
      {
        id: "backend",
        title: "Backend + API (Node.js) — jádro systému",
        amountCzk: 132_000,
        includes: [
          "REST API napříč doménami; kontrakty držíme čitelné pro FE i pro vás",
          "Byznys pravidla, validace, stavy — nejen „CRUD přes HTTP“",
          "RBAC, audit citlivých akcí, základ notifikací a exportů",
        ],
      },
      {
        id: "frontend",
        title: "Frontend (Next.js) — všechny povrchy",
        amountCzk: 114_000,
        includes: [
          "Marketing + eshop + admin + klient + affiliate jako propojená aplikace",
          "Formuláře, stavy načítání, chybové stavy (to často zabere víc než „happy path“)",
          "OAuth obrazovky v MVP podobě",
        ],
      },
      {
        id: "integrations",
        title: "Integrace (MVP) — zvlášť, ať je vidět složitost",
        amountCzk: 54_000,
        includes: [
          "Tržní ceny: import + historie",
          "Transakční e‑mail; dodavatel službu, vy doménu/DNS dle potřeby",
          "Google OAuth: konfigurace + propojení s účty",
          "Fio: sync transakcí + základní párování (pravidla doladíme ve fázi 0)",
        ],
      },
      {
        id: "security",
        title: "Bezpečnost (nad rámec „máme login“)",
        amountCzk: 34_000,
        includes: [
          "Hesla, session/JWT, základní hardening API",
          "Rate limit a vstupní validace tam, kde to bolí",
          "OAuth bezpečně (redirect URI, token handling)",
        ],
      },
      {
        id: "qa",
        title: "Testování, UAT, stabilizace",
        amountCzk: 24_000,
        includes: [
          "Smoke a regrese klíčových flow před každým větším milníkem",
          "UAT s vámi: checklist, rozlišení blokující vs. neblokující",
          "Fixy v rámci MVP, ne až „nekonečný patch backlog“",
        ],
      },
      {
        id: "devops",
        title: "DevOps + předání prostředí",
        amountCzk: 10_000,
        includes: [
          "CI (build, lint), env šablony, stručný runbook nasazení",
          "OVHcloud: základní konfigurace dle přístupů; DB přístupy a zálohy dle dohody",
          "E‑mail: checklist SPF/DKIM/DMARC + ověření odesílání (DNS typicky u vás)",
        ],
      },
    ] satisfies BreakdownItem[],
  },

  api: {
    auth: [
      "Auth: email+heslo (login, logout, refresh)",
      "OAuth: Google přihlášení (redirect, callback, link účtu)",
      "RBAC: role (admin, klient, affiliate) + oprávnění",
      "Audit: logování citlivých operací",
    ],
    groups: [
      {
        title: "Uživatelé & role",
        endpoints: [
          "POST /api/auth/register",
          "POST /api/auth/login",
          "POST /api/auth/logout",
          "GET /api/auth/google/start",
          "GET /api/auth/google/callback",
          "GET /api/me",
          "GET /api/admin/users",
          "PATCH /api/admin/users/:id",
          "GET /api/admin/roles",
        ],
      },
      {
        title: "Produkty",
        endpoints: [
          "GET /api/products",
          "GET /api/products/:id",
          "POST /api/admin/products",
          "PATCH /api/admin/products/:id",
          "DELETE /api/admin/products/:id",
        ],
      },
      {
        title: "Ceny & tržní data",
        endpoints: [
          "GET /api/prices?productId=…",
          "POST /api/admin/prices/import",
          "GET /api/admin/prices/history?productId=…",
        ],
      },
      {
        title: "Objednávky",
        endpoints: [
          "POST /api/cart/checkout",
          "GET /api/orders",
          "GET /api/orders/:id",
          "GET /api/admin/orders",
          "PATCH /api/admin/orders/:id",
          "POST /api/admin/orders/:id/export",
        ],
      },
      {
        title: "Bankovní napojení (Fio)",
        endpoints: [
          "POST /api/admin/bank/fio/connect",
          "POST /api/admin/bank/fio/sync",
          "GET /api/admin/bank/transactions?from=…&to=…",
          "POST /api/admin/bank/reconcile",
        ],
      },
      {
        title: "Platby (Fio)",
        endpoints: [
          "POST /api/payments/fio/start",
          "POST /api/payments/fio/callback",
          "GET /api/payments/:id",
        ],
      },
      {
        title: "Investice (klient)",
        endpoints: [
          "GET /api/investments",
          "GET /api/investments/summary",
          "GET /api/investments/:id",
        ],
      },
      {
        title: "Affiliate",
        endpoints: [
          "POST /api/affiliate/register",
          "GET /api/affiliate/referrals",
          "POST /api/affiliate/referrals/link",
          "GET /api/affiliate/commissions",
          "GET /api/affiliate/payouts",
        ],
      },
      {
        title: "Trezor (úschova)",
        endpoints: [
          "GET /api/vault/keys",
          "POST /api/vault/keys",
          "PATCH /api/vault/keys/:id",
          "GET /api/vault/history",
          "POST /api/vault/exports",
        ],
      },
    ] satisfies ApiEndpointGroup[],

    // Detailnější „spec“ pro nabídku (ne OpenAPI), aby klient viděl přesah až k payloadům.
    endpoints: [
      {
        title: "Login",
        method: "POST",
        path: "/api/auth/login",
        auth: "public",
        description: "Přihlášení uživatele (email + heslo). Vrací session/JWT dle implementace.",
        requestExample: `{
  "email": "user@example.com",
  "password": "••••••••"
}`,
        responseExample: `{
  "user": { "id": "usr_123", "role": "client" },
  "token": "jwt_or_session_token"
}`,
        statusCodes: ["200 OK", "400 Bad Request", "401 Unauthorized", "429 Too Many Requests"],
      },
      {
        title: "Google OAuth – start",
        method: "GET",
        path: "/api/auth/google/start",
        auth: "public",
        description:
          "Zahájí OAuth flow. Přesměruje uživatele na Google consent screen (redirect URI je whitelisted).",
        responseExample: `HTTP 302 Redirect -> https://accounts.google.com/o/oauth2/v2/auth?...`,
        statusCodes: ["302 Found", "400 Bad Request", "429 Too Many Requests"],
      },
      {
        title: "Google OAuth – callback",
        method: "GET",
        path: "/api/auth/google/callback",
        auth: "public",
        description:
          "OAuth callback: výměna code za token, načtení profilu, vytvoření / spárování účtu a založení session.",
        responseExample: `HTTP 302 Redirect -> /app (logged in)`,
        statusCodes: ["302 Found", "400 Bad Request", "401 Unauthorized", "429 Too Many Requests"],
      },
      {
        title: "Produkty – list",
        method: "GET",
        path: "/api/products",
        auth: "public",
        description: "Seznam produktů pro web/eshop (filtrování, stránkování).",
        responseExample: `{
  "items": [
    { "id": "prd_1", "name": "Produkt A", "price": 1990, "currency": "CZK" }
  ],
  "page": 1,
  "pageSize": 20,
  "total": 42
}`,
        statusCodes: ["200 OK", "400 Bad Request"],
      },
      {
        title: "Objednávka – checkout",
        method: "POST",
        path: "/api/cart/checkout",
        auth: "user",
        description:
          "Vytvoření objednávky z košíku (MVP) + napojení na platební bránu Fio banky (zahájení platby + potvrzení/párování).",
        requestExample: `{
  "items": [{ "productId": "prd_1", "qty": 1 }],
  "billing": { "name": "Jan Novak", "email": "jan@example.com" }
}`,
        responseExample: `{
  "orderId": "ord_123",
  "status": "created",
  "payment": { "provider": "fio", "state": "pending" }
}`,
        statusCodes: ["201 Created", "400 Bad Request", "401 Unauthorized", "409 Conflict"],
      },
      {
        title: "Admin – správa produktu (update)",
        method: "PATCH",
        path: "/api/admin/products/:id",
        auth: "admin",
        description: "Úprava produktu v adminu (název, popis, cena/sleva, aktivita).",
        requestExample: `{
  "name": "Produkt A (nově)",
  "active": true
}`,
        responseExample: `{
  "id": "prd_1",
  "name": "Produkt A (nově)",
  "active": true
}`,
        statusCodes: ["200 OK", "400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"],
      },
      {
        title: "Affiliate – referral link",
        method: "POST",
        path: "/api/affiliate/referrals/link",
        auth: "affiliate",
        description: "Vytvoří nebo vrátí referral odkaz pro partnera.",
        responseExample: `{
  "code": "ABC123",
  "url": "https://example.com/?ref=ABC123"
}`,
        statusCodes: ["200 OK", "401 Unauthorized", "403 Forbidden"],
      },
      {
        title: "Trezor – evidence klíčů (list)",
        method: "GET",
        path: "/api/vault/keys",
        auth: "user",
        description: "Seznam evidovaných klíčů pro uživatele (případně admin podle role).",
        responseExample: `{
  "items": [
    { "id": "key_1", "label": "Ledger #1", "createdAt": "2026-01-01T10:00:00Z" }
  ]
}`,
        statusCodes: ["200 OK", "401 Unauthorized", "403 Forbidden"],
      },
      {
        title: "Fio – sync transakcí",
        method: "POST",
        path: "/api/admin/bank/fio/sync",
        auth: "admin",
        description:
          "Spustí načtení transakcí z Fio API do databáze (MVP: ručně z adminu nebo cron job).",
        requestExample: `{
  "from": "2026-01-01",
  "to": "2026-01-31"
}`,
        responseExample: `{
  "imported": 124,
  "skipped": 3
}`,
        statusCodes: ["200 OK", "400 Bad Request", "401 Unauthorized", "403 Forbidden"],
      },
      {
        title: "Platba (Fio) – start",
        method: "POST",
        path: "/api/payments/fio/start",
        auth: "user",
        description:
          "Zahájení platby pro objednávku přes Fio (vytvoří platební instrukce / QR / redirect dle možností brány).",
        requestExample: `{
  "orderId": "ord_123",
  "amount": 1990,
  "currency": "CZK"
}`,
        responseExample: `{
  "paymentId": "pay_123",
  "provider": "fio",
  "state": "pending",
  "instructions": { "vs": "123456", "iban": "CZ...", "qr": "..." }
}`,
        statusCodes: ["200 OK", "400 Bad Request", "401 Unauthorized", "409 Conflict"],
      },
      {
        title: "Platba (Fio) – callback",
        method: "POST",
        path: "/api/payments/fio/callback",
        auth: "public",
        description:
          "Notifikace/potvrzení platby (pokud je k dispozici). Alternativně se stav potvrzuje párováním transakcí ze syncu.",
        requestExample: `{
  "paymentId": "pay_123",
  "state": "paid",
  "paidAt": "2026-04-27T10:00:00Z"
}`,
        responseExample: `{
  "ok": true
}`,
        statusCodes: ["200 OK", "400 Bad Request", "401 Unauthorized"],
      },
    ] satisfies ApiSpec[],
  },

  schedule: {
    totalRange: "8–14 týdnů",
    note:
      "Harmonogram počítá s rychlou zpětnou vazbou a dodáním podkladů (produkty, textace, pravidla). Při čekání na podklady se termín posouvá.",
  },

  milestones: [
    {
      title: "Po Fázi 0 (specifikace)",
      bullets: [
        "Schválené MVP use‑cases + backlog",
        "Návrh rolí a oprávnění",
        "Datový model (entity) + API domény",
        "Dohodnuté integrační hranice (Google OAuth, Fio sync/párování – MVP)",
      ],
    },
    {
      title: "Po Fázi 1 (základ platformy)",
      bullets: [
        "Funguje přihlášení + role (včetně Google OAuth)",
        "Admin skeleton + základ správy produktů",
        "Katalog produktů + základ objednávek",
      ],
    },
    {
      title: "Po Fázi 2 (klient/affiliate/trezor)",
      bullets: [
        "Klient dashboard + investice (MVP)",
        "Affiliate tracking + provize (MVP)",
        "Trezor: evidence klíčů + historie + exporty (MVP)",
      ],
    },
    {
      title: "Po Fázi 3 (stabilizace a nasazení)",
      bullets: [
        "Fio sync transakcí + základní párování (MVP)",
        "Regrese + UAT + akceptace",
        "Nasazení dle checklistu (hosting/DB/email zajišťuje dodavatel; doména/DNS dle dohody)",
      ],
    },
  ] satisfies NamedList[],

  paymentTerms: {
    note:
      "Níže je doporučený návrh platebního rozvrhu pro fixní cenu (lze upravit dle dohody).",
    proposal: [
      {
        title: "30 % – zahájení (rezervace kapacity)",
        bullets: [
          "Po podpisu objednávky/smlouvy",
          "Krytí analýzy/specifikace a zahájení vývoje",
        ],
      },
      {
        title: "40 % – po dodání Fáze 2 (demo klíčových modulů)",
        bullets: [
          "Po předvedení klient/affiliate/trezor v MVP podobě",
          "Před UAT a stabilizací",
        ],
      },
      {
        title: "30 % – po akceptaci a předání",
        bullets: [
          "Po UAT a akceptaci dle checklistu",
          "Po nasazení / předání produkčního buildu",
        ],
      },
    ] satisfies NamedList[],
  },

  timeline: [
    {
      title: "Fáze 0 – upřesnění scope (1–2 týdny)",
      bullets: [
        "workshopy a prioritizace MVP",
        "specifikace obrazovek a flow",
        "API + DB návrh (včetně Google OAuth a Fio integrace – MVP rozsah)",
      ],
    },
    {
      title: "Fáze 1 – základ platformy (2–4 týdny)",
      bullets: [
        "auth + role (včetně Google OAuth)",
        "admin skeleton + základ správy produktů",
        "produktový katalog",
        "základ objednávek (bez komplexní platební automatizace)",
      ],
    },
    {
      title: "Fáze 2 – klient + affiliate + trezor (3–6 týdnů)",
      bullets: [
        "dashboardy (admin/klient) + investice",
        "affiliate tracking + provize (MVP)",
        "vault evidence + historie",
        "exporty + základní reporty",
      ],
    },
    {
      title: "Fáze 3 – stabilizace a předání (2–4 týdny)",
      bullets: [
        "Fio sync transakcí + základní párování (MVP)",
        "regrese + UAT",
        "dokumentace",
        "nasazení (hosting/email zajišťuje klient – dodáme checklist a konfiguraci)",
      ],
    },
  ],

  delivery: {
    deliverables: [
      {
        title: "Design & specifikace",
        bullets: [
          "MVP specifikace (use-cases + prioritizace)",
          "Návrh rolí a oprávnění (RBAC)",
          "API domény + datový model (DB návrh)",
        ],
      },
      {
        title: "Aplikace (frontend)",
        bullets: [
          "Marketing web + e‑shop (MVP)",
          "Admin panel (správa produktů/cen/objednávek/uživatelů)",
          "Klientská zóna (dashboard, investice, profil, dokumenty – MVP)",
          "Affiliate portál (ref linky, tracking, provize – MVP)",
        ],
      },
      {
        title: "Backend & databáze",
        bullets: [
          "Node.js REST API dle přehledu endpointů",
          "Postgres schéma + migrace + seed pro MVP",
          "Audit logy citlivých operací",
        ],
      },
      {
        title: "Předání & nasazení",
        bullets: [
          "Produkční build + instrukce k nasazení",
          "Základní dokumentace (spuštění, konfigurace, role)",
          "UAT podpora a opravy v rámci MVP",
        ],
      },
    ] satisfies NamedList[],

    acceptanceCriteria: [
      "Rozpad cen na webu sedí (součet = 520 000 Kč).",
      "Funguje přihlášení a role (admin/klient/affiliate) pro MVP scénáře.",
      "Admin umí spravovat produkty, ceny a objednávky dle scope.",
      "Klient vidí dashboard/portfolio a historii objednávek (MVP).",
      "Affiliate umí generovat referral odkaz a vidí přehled provizí (MVP).",
      "Trezor: evidence klíčů + historie operací + export (MVP).",
      "Základní exporty/reporty fungují pro dohodnuté formáty.",
      "Aplikace je responzivní a projde smoke testem klíčových flow.",
    ],

    risks: [
      {
        title: "Nejasný rozsah integrací (platby/KYC/AML/externí data)",
        bullets: [
          "Mitigace: v nabídce je MVP integrační vrstva, konkrétní provider je mimo scope bez upřesnění.",
          "Dopad: může změnit čas i cenu, pokud se vybere komplexní provider.",
        ],
      },
      {
        title: "Kvalita a dostupnost podkladů (produkty, pravidla, textace, procesy)",
        bullets: [
          "Mitigace: fáze 0 (specifikace) + průběžná validace s klientem.",
          "Dopad: bez podkladů se prodlužují termíny a roste počet změn.",
        ],
      },
      {
        title: "Bezpečnostní požadavky nad MVP (audity, pen-test, SLA)",
        bullets: [
          "Mitigace: v MVP dodáme základní bezpečnost (RBAC, audit, validace).",
          "Dopad: formální audit / pen-test je typicky samostatná položka.",
        ],
      },
    ] satisfies NamedList[],

    supportOptions: [
      {
        title: "Start podpora (doporučeno)",
        bullets: [
          "1–2 týdny hypercare po spuštění (rychlé opravy, monitoring, ladění).",
          "Prioritní kanál pro bugy a dotazy během prvních týdnů.",
        ],
      },
      {
        title: "Dlouhodobá údržba (volitelné)",
        bullets: [
          "Měsíční balíček hodin (bugfix, drobné úpravy, konzultace).",
          "Pravidelné aktualizace závislostí a bezpečnostní fixy.",
        ],
      },
    ] satisfies NamedList[],

    communication: {
      note: "Komunikace se zákazníkem probíhá průběžně přes domluvené kanály.",
      channels: [
        {
          title: "Online schůzky",
          bullets: [
            "Google Meet (workshopy, demo, UAT průchody)",
            "Typicky 30–60 min dle potřeby",
          ],
        },
        {
          title: "Operativa a domluva",
          bullets: ["E‑mail (shrnutí, podklady, rozhodnutí)", "Telefon", "WhatsApp"],
        },
      ] satisfies NamedList[],
    },
  },

  operationalCosts: {
    note: "Provozní náklady jsou typicky měsíční/roční položky. V tomto projektu hosting aplikace (OVHcloud), databázi i e‑mail zajišťuje dodavatel; klient obvykle řeší doménu/DNS (dle dohody). Cena hostingu se nedá dopředu přesně určit na 1 rok, protože závisí na reálném provozu (návštěvnost, objem dat, výkon, škálování).",
    items: [
      {
        title: "Hosting aplikace (OVHcloud)",
        bullets: [
          "Zajišťuje dodavatel (OVHcloud).",
          "Dimenzování (CPU/RAM/SSD) podle reálného provozu; škálování dle potřeby.",
        ],
      },
      {
        title: "Databáze (Postgres)",
        bullets: [
          "Zajišťuje dodavatel (provisioning, přístupy).",
          "Důležité: zálohy + obnova + retence (nastaví se ve fázi 0/1).",
        ],
      },
      {
        title: "Doména + DNS",
        bullets: [
          "Typicky zajišťuje klient (registrace domény, DNS provider).",
          "Nutné: DNS záznamy pro web a e‑mail (SPF/DKIM/DMARC).",
        ],
      },
      {
        title: "E-mail (transakční)",
        bullets: [
          "Zajišťuje dodavatel (integrace a odesílání).",
          "Klient dodá doménu/DNS pro ověření odesílání (SPF/DKIM/DMARC).",
        ],
      },
      {
        title: "Google OAuth",
        bullets: [
          "Realizace a nastavení je společně; po předání může běžet na Google projektu klienta.",
          "Nutné: správné redirect URI a schválení consent screen dle typu aplikace.",
        ],
      },
      {
        title: "Fio API",
        bullets: [
          "Bez přímých poplatků v běžném režimu, ale záleží na podmínkách banky",
          "Nutné: token management, limity volání, případně IP allowlist",
        ],
      },
    ] satisfies NamedList[],
  },

  technicalDeepDive: {
    roleMatrix: [
      {
        title: "Admin",
        bullets: [
          "Správa produktů, cen, objednávek, uživatelů a rolí",
          "Audit logy, exporty, systémové nastavení",
          "Přístup k trezoru (dle práv) a k affiliate přehledům",
        ],
      },
      {
        title: "Klient (investor)",
        bullets: [
          "Dashboard, portfolio/investice, historie objednávek",
          "Vault/úschova: klíče, historie operací, exporty",
          "Profil, bezpečnost, dokumenty",
        ],
      },
      {
        title: "Affiliate partner",
        bullets: [
          "Referral linky, tracking, provize, payouty",
          "Základní profil partnera a statistiky",
        ],
      },
      {
        title: "Guest (nepřihlášený)",
        bullets: ["Marketing web", "Prohlížení katalogu", "Registrace / přihlášení"],
      },
    ] satisfies NamedList[],

    entities: [
      {
        title: "Core",
        bullets: [
          "User, Role, Permission",
          "AuditLog",
          "Document",
        ],
      },
      {
        title: "Eshop",
        bullets: [
          "Product, ProductImage, Category",
          "PricePoint (market/import), PriceHistory",
          "Cart, Order, OrderItem",
        ],
      },
      {
        title: "Investice",
        bullets: ["Investment, PortfolioSnapshot, KPI/Stats aggregates"],
      },
      {
        title: "Affiliate",
        bullets: ["AffiliatePartner, Referral, Commission, Payout"],
      },
      {
        title: "Bankovní napojení",
        bullets: ["BankConnection (Fio), BankAccount, BankTransaction, Reconciliation"],
      },
      {
        title: "Trezor (vault)",
        bullets: ["VaultKey, VaultAccess, VaultOperation, VaultExport"],
      },
    ] satisfies NamedList[],

    screenToApi: [
      {
        area: "MarketingWeb",
        screen: "Homepage (hero, produkty, výhody, reference, FAQ, CTA)",
        role: "public",
        reads: ["GET /api/products", "GET /api/prices?productId=…"],
        writes: [
          "POST /api/auth/register",
          "POST /api/auth/login",
          "GET /api/auth/google/start",
          "GET /api/auth/google/callback",
        ],
        notes: ["Obsahové bloky lze řešit staticky nebo přes jednoduché CMS (mimo scope)."],
      },
      {
        area: "Eshop",
        screen: "Katalog produktů",
        role: "public",
        reads: ["GET /api/products", "GET /api/products/:id"],
        writes: [],
      },
      {
        area: "Eshop",
        screen: "Košík & checkout",
        role: "client",
        reads: ["GET /api/me"],
        writes: ["POST /api/cart/checkout"],
        notes: [
          "Checkout je napojený na platební bránu Fio banky (MVP: vytvoření platby + párování).",
        ],
      },
      {
        area: "AdminPanel",
        screen: "Dashboard (metriky, grafy)",
        role: "admin",
        reads: ["GET /api/admin/orders", "GET /api/admin/prices/history?productId=…"],
        writes: [],
      },
      {
        area: "AdminPanel",
        screen: "Správa produktů (CRUD)",
        role: "admin",
        reads: ["GET /api/products", "GET /api/products/:id"],
        writes: [
          "POST /api/admin/products",
          "PATCH /api/admin/products/:id",
          "DELETE /api/admin/products/:id",
        ],
      },
      {
        area: "AdminPanel",
        screen: "Správa cen (import + historie + grafy)",
        role: "admin",
        reads: ["GET /api/admin/prices/history?productId=…", "GET /api/prices?productId=…"],
        writes: ["POST /api/admin/prices/import"],
      },
      {
        area: "AdminPanel",
        screen: "Správa objednávek",
        role: "admin",
        reads: ["GET /api/admin/orders", "GET /api/orders/:id"],
        writes: ["PATCH /api/admin/orders/:id", "POST /api/admin/orders/:id/export"],
      },
      {
        area: "AdminPanel",
        screen: "Bankovní napojení (Fio) – transakce & párování",
        role: "admin",
        reads: ["GET /api/admin/bank/transactions?from=…&to=…"],
        writes: [
          "POST /api/admin/bank/fio/connect",
          "POST /api/admin/bank/fio/sync",
          "POST /api/admin/bank/reconcile",
        ],
        notes: [
          "MVP: sync lze spouštět ručně z adminu; později automatizace přes cron/webhook.",
          "Párování typicky podle VS/částky/datum/poznámky; pravidla se doladí ve fázi 0.",
        ],
      },
      {
        area: "KlientPanel",
        screen: "Dashboard investora",
        role: "client",
        reads: ["GET /api/investments/summary", "GET /api/investments"],
        writes: [],
      },
      {
        area: "KlientPanel",
        screen: "Moje investice (detail)",
        role: "client",
        reads: ["GET /api/investments/:id"],
        writes: [],
      },
      {
        area: "KlientPanel",
        screen: "Historie objednávek",
        role: "client",
        reads: ["GET /api/orders", "GET /api/orders/:id"],
        writes: [],
      },
      {
        area: "Affiliate",
        screen: "Registrace partnera & přehled",
        role: "affiliate",
        reads: ["GET /api/affiliate/referrals", "GET /api/affiliate/commissions", "GET /api/affiliate/payouts"],
        writes: ["POST /api/affiliate/register", "POST /api/affiliate/referrals/link"],
      },
      {
        area: "Vault",
        screen: "Evidence klíčů",
        role: "client",
        reads: ["GET /api/vault/keys", "GET /api/vault/history"],
        writes: ["POST /api/vault/keys", "PATCH /api/vault/keys/:id"],
      },
      {
        area: "Vault",
        screen: "Exporty / reporty",
        role: "client",
        reads: [],
        writes: ["POST /api/vault/exports"],
      },
    ] satisfies ScreenApiMap[],
  },

  assumptions: {
    included: [
      "MVP rozsah dle přiložených podkladů (bez detailních enterprise integrací).",
      "REST API s RBAC a audit logy pro citlivé operace.",
      "Základní importy/exporty a tržní ceny v MVP podobě.",
      "Hosting aplikace (OVHcloud), databázi i e‑mail zajišťuje dodavatel; klient typicky zajišťuje doménu/DNS (dle dohody).",
      "Google OAuth je společně; po předání může být převeden na Google projekt klienta.",
      "Google OAuth a Fio bank API integrace v MVP rozsahu (bez komplexní účetní automatizace).",
    ],
    excluded: [
      "Plně automatizované KYC/AML integrace (pokud nebude výslovně doplněno).",
      "Pokročilé platební scénáře nad rámec Fio (např. více providerů, složité refundace a chargeback flow).",
      "Nativní mobilní aplikace.",
      "SLA 24/7 a pokročilý monitoring (nad rámec základu).",
      "Pravidelné provozní poplatky (hosting/email/API) – hradí klient dodavateli (poskytovatelem služeb je dodavatel).",
    ],
  },
} as const;

