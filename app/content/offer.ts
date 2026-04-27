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

export type DetailedLayerBreakdownGroup = {
  id: string;
  layerId: string;
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
      "Pod karty s rozpadem jsou dva doplňující se řádkové rozpady (přepínač moduly / vrstev): dle produktu nebo dle fází (Spec → Předání); u řádků orientační částky, součet 520 000 Kč.",
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

    /**
     * Podrobný rozklad dle produktových modulů (dle sitmapy / podkladů).
     * Součet skupin = 520 000 Kč.
     */
    detailed: [
      {
        id: "web-detail",
        moduleId: "web",
        title: "Vstupní web / služby",
        items: [
          { id: "web-1", label: "HERO + primární CTA", amountCzk: 9_000 },
          { id: "web-2", label: "Investiční produkty, služby, výhody (strukturované bloky)", amountCzk: 9_000 },
          { id: "web-3", label: "Bezpečnost investic, důvěryhodnost, sociální důkaz", amountCzk: 8_000 },
          { id: "web-4", label: "Náhled platformy, O nás / tým (MVP rozsah)", amountCzk: 8_000 },
          { id: "web-5", label: "FAQ, závěrečné CTA", amountCzk: 7_000 },
          { id: "web-6", label: "Globální layout, navigace, patička", amountCzk: 7_000 },
          { id: "web-7", label: "Responzivita (mobil–desktop), breakpointy", amountCzk: 7_000 },
          { id: "web-8", label: "SEO základ + konfigurovatelné obsahové bloky / texty", amountCzk: 7_000 },
        ],
      },
      {
        id: "eshop-detail",
        moduleId: "eshop",
        title: "Eshop (investiční kovy)",
        items: [
          { id: "es-1", label: "Katalog: kovy, typ, váha, dostupnost, stránkování", amountCzk: 22_000 },
          { id: "es-2", label: "Detail produktu (mince/slitky) + stavy načítání", amountCzk: 12_000 },
          { id: "es-3", label: "Tržní ceny v produktu, přepočet, vazba na zdroj (MVP)", amountCzk: 16_000 },
          { id: "es-4", label: "Košík, validace, práce s cenou", amountCzk: 12_000 },
          { id: "es-5", label: "Nákupní proces: fixace ceny, objednávka, potvrzení (MVP)", amountCzk: 20_000 },
          { id: "es-6", label: "Historie / stav objednávky (klientská strana, MVP)", amountCzk: 6_000 },
        ],
      },
      {
        id: "admin-detail",
        moduleId: "admin",
        title: "Admin panel (provoz platformy)",
        items: [
          { id: "ad-1", label: "Dashboard: přehled objednávek, tržeb, reg., uživatelů, affil, statistiky kovů", amountCzk: 17_000 },
          { id: "ad-2", label: "Správa produktů: CRUD, kategorie, sklad, marže, obrázky, popisy", amountCzk: 15_000 },
          { id: "ad-3", label: "Správa cen: vazba na zdroj, marže, ruční zásah, historie, log změn", amountCzk: 12_000 },
          { id: "ad-4", label: "Správa objednávek: filtry, stavy, platby, detail, export (MVP)", amountCzk: 12_000 },
          { id: "ad-5", label: "Správa uživatelů: účet, blokace, reset, historie nákupů, vazba na úschovu", amountCzk: 10_000 },
          { id: "ad-6", label: "Affiliate správa: partneři, kódy, tracking, provize, manuál, export", amountCzk: 10_000 },
          { id: "ad-7", label: "Vault / úschova (admin): přehled, kapacita, přiřazení kovů, historie", amountCzk: 10_000 },
          { id: "ad-8", label: "Integrace: monitoring API, chyby, sync, zdraví napojení (MVP)", amountCzk: 7_000 },
          { id: "ad-9", label: "Systémové a audit logy, historie operací", amountCzk: 6_000 },
          { id: "ad-10", label: "Nastavení: marže, provize affil, obchodní podmínky, šablony e‑mailů (MVP)", amountCzk: 7_000 },
          { id: "ad-11", label: "Notifikace: objednávky, registrace, affiliate (základ v adminu)", amountCzk: 6_000 },
          { id: "ad-12", label: "Obrazovky OAuth a bankovního napojení (Fio) – konfigurace MVP", amountCzk: 6_000 },
        ],
      },
      {
        id: "client-detail",
        moduleId: "client",
        title: "Klient panel (investor)",
        items: [
          { id: "cl-1", label: "Dashboard: portfolio, hodnota, transakce, rychlé akce (MVP)", amountCzk: 20_000 },
          { id: "cl-2", label: "Moje investice: držené kovy, váha, nákup vs. tržní hodnota (MVP)", amountCzk: 32_000 },
          { id: "cl-3", label: "Historie objednávek (seznam, stav, detail)", amountCzk: 8_000 },
          { id: "cl-4", label: "Vault / úschova: seznam, množství, celkový přehled (MVP)", amountCzk: 12_000 },
          { id: "cl-5", label: "Profil, dokumenty (Smlouvy, EULA, investiční podklady dle rozsahu)", amountCzk: 10_000 },
          { id: "cl-6", label: "Bezpečnost účtu: heslo, ověření, 2FA, historie přihlášení (MVP)", amountCzk: 14_000 },
          { id: "cl-7", label: "Notifikace (stavy objednávek, affiliate)", amountCzk: 4_000 },
          { id: "cl-8", label: "Výplata provizí, portálové statistiky, referral výkon (MVP)", amountCzk: 20_000 },
          { id: "cl-9", label: "Tracking doporučení, přehledy", amountCzk: 12_000 },
          { id: "cl-10", label: "Přihlášení / OAuth UI", amountCzk: 6_000 },
        ],
      },
      {
        id: "affiliate-detail",
        moduleId: "affiliate",
        title: "Affiliate prostředí",
        items: [
          { id: "af-1", label: "Registrace, aktivace účtu, souhlas, generování kódu", amountCzk: 8_000 },
          { id: "af-2", label: "Referral odkazy, kódy, sdílení (MVP)", amountCzk: 6_000 },
          { id: "af-3", label: "Tracking doporučení, evidence registrovaných klientů (MVP)", amountCzk: 12_000 },
          { id: "af-4", label: "Provizní pravidla, kalkulace, historie (MVP)", amountCzk: 10_000 },
          { id: "af-5", label: "Statistiky partnera, přehled transakcí (MVP)", amountCzk: 8_000 },
          { id: "af-6", label: "Výplaty, exporty, affil dashboard (rychlé souhrny)", amountCzk: 8_000 },
        ],
      },
      {
        id: "vault-detail",
        moduleId: "vault",
        title: "Funkce trezoru (úschova)",
        items: [
          { id: "vt-1", label: "Evidence kovů: slitky/ingoty, identifikace, vazba na majitele (MVP)", amountCzk: 18_000 },
          { id: "vt-2", label: "Přehled majetku: celkem v úschově, hodnota (MVP)", amountCzk: 14_000 },
          { id: "vt-3", label: "Správa úschovy: stavy, dostupnost, sklad (MVP)", amountCzk: 12_000 },
          { id: "vt-4", label: "Historie operací: vklad, výběr, pohyby", amountCzk: 10_000 },
          { id: "vt-5", label: "Exporty, reporty (MVP formáty)", amountCzk: 8_000 },
        ],
      },
    ] satisfies DetailedBreakdownGroup[],

    /**
     * Stejná fixní cena rozpadnutá na fáze „spec → … → předání“ (řádkový rozklad u přepínače Vrstvy).
     * Součet skupin = 520 000 Kč, soulad s byLayer.
     */
    detailedByLayer: [
      {
        id: "layer-spec",
        layerId: "analysis",
        title: "Spec (společná příprava, backlog)",
        items: [
          { id: "l-an-1", label: "Discovery workshopy, hranice MVP, prioritizace backlogu", amountCzk: 12_000 },
          { id: "l-an-2", label: "Use-cases, akceptační scénáře (k čemu je UAT)", amountCzk: 10_000 },
          { id: "l-an-3", label: "Seskupení funkcí dle modulů (soulad s podklady / sitmapou)", amountCzk: 8_000 },
          { id: "l-an-4", label: "Matic role × oprávnění (základ pro RBAC)", amountCzk: 8_000 },
          { id: "l-an-5", label: "Návrh API domén a hranic mezi moduly", amountCzk: 10_000 },
          { id: "l-an-6", label: "Koncept datového modelu (entit) před implementací", amountCzk: 6_000 },
          { id: "l-an-7", label: "Průběžné schůzky, rozhodnutí, zápis změn (mini PM v ceně)", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-dsgn",
        layerId: "uxui",
        title: "Návrh (UX / UI)",
        items: [
          { id: "l-ux-1", label: "Wireframy: eshop a kritický checkout flow", amountCzk: 10_000 },
          { id: "l-ux-2", label: "Wireframy: admin (hlavní pracovní plochy)", amountCzk: 12_000 },
          { id: "l-ux-3", label: "Wireframy: klient + affiliate (dashboardy)", amountCzk: 8_000 },
          { id: "l-ux-4", label: "Design systém: typografie, barvy, knihovna komponent (MVP)", amountCzk: 8_000 },
          { id: "l-ux-5", label: "Responzivní pravidla, stavy (loading, empty, chyby)", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-data",
        layerId: "db",
        title: "Data (Postgres, migrace)",
        items: [
          { id: "l-db-1", label: "Jádro: uživatelé, role, permissions, session", amountCzk: 8_000 },
          { id: "l-db-2", label: "Obchod: produkty, kategorie, ceny, historie, objednávky", amountCzk: 12_000 },
          { id: "l-db-3", label: "Investice, portfolio, snímky hodnot (MVP agregace)", amountCzk: 6_000 },
          { id: "l-db-4", label: "Affiliate: partneři, referral, provize, výplaty", amountCzk: 5_000 },
          { id: "l-db-5", label: "Trezor: evidence kovů/klíčů, operace, exporty", amountCzk: 5_000 },
          { id: "l-db-6", label: "Banka: Fio spojení, transakce, párování (MVP tabulky)", amountCzk: 4_000 },
          { id: "l-db-7", label: "Migrace, seed, indexy, základ výkonu", amountCzk: 4_000 },
        ],
      },
      {
        id: "layer-api",
        layerId: "backend",
        title: "API a business logika (Node.js)",
        items: [
          { id: "l-be-1", label: "Autentizace, session/JWT, napojení na role", amountCzk: 14_000 },
          { id: "l-be-2", label: "Doména produkty, katalog, ceník (MVP pravidla)", amountCzk: 14_000 },
          { id: "l-be-3", label: "Ceny: import tržních dat, historie, validace (MVP)", amountCzk: 12_000 },
          { id: "l-be-4", label: "Objednávky, košík, stavový stroj, napojení na platby (MVP)", amountCzk: 18_000 },
          { id: "l-be-5", label: "Admin: agregace přehledů, CRUD napříč entitami (MVP)", amountCzk: 20_000 },
          { id: "l-be-6", label: "Klientské investice, portfolio, reporty (MVP)", amountCzk: 14_000 },
          { id: "l-be-7", label: "Affiliate: výpočty, stavy, výpisy (MVP)", amountCzk: 10_000 },
          { id: "l-be-8", label: "Trezor: pravidla přístupu, operace, audit (MVP)", amountCzk: 10_000 },
          { id: "l-be-9", label: "Notifikace, exporty souborů (MVP rozsah)", amountCzk: 8_000 },
          { id: "l-be-10", label: "Fio: sync, párování transakcí, hrany chyb (MVP)", amountCzk: 12_000 },
        ],
      },
      {
        id: "layer-ui",
        layerId: "frontend",
        title: "UI (Next.js – všechny portály)",
        items: [
          { id: "l-fe-1", label: "Vstupní web (sekce dle sitmapy)", amountCzk: 14_000 },
          { id: "l-fe-2", label: "Eshop: katalog, detail, košík, checkout (MVP stavy UI)", amountCzk: 28_000 },
          { id: "l-fe-3", label: "Admin: plochy správy (nejširší plocha)", amountCzk: 32_000 },
          { id: "l-fe-4", label: "Klient: portfolio, investice, úschova, profil (MVP)", amountCzk: 22_000 },
          { id: "l-fe-5", label: "Affiliate: onboarding, linky, statistiky, výplaty (MVP)", amountCzk: 10_000 },
          { id: "l-fe-6", label: "Společné: formuláře, validace, chybové stavy, načítání", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-int",
        layerId: "integrations",
        title: "Integrace (MVP)",
        items: [
          { id: "l-in-1", label: "Tržní ceny: import, plánovaný job, edge cases (MVP)", amountCzk: 12_000 },
          { id: "l-in-2", label: "Transakční e‑mail (šablony, odeslání, příjem bounce – základ)", amountCzk: 8_000 },
          { id: "l-in-3", label: "Google OAuth: app, redirect URI, vazba na účet", amountCzk: 14_000 },
          { id: "l-in-4", label: "Fio: tokeny, sync, idempotence volání, základ párování", amountCzk: 12_000 },
          { id: "l-in-5", label: "Exporty CSV/PDF dle dohodnutých míst (MVP)", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-sec",
        layerId: "security",
        title: "Bezpečnost",
        items: [
          { id: "l-sy-1", label: "Ukládání hesel, pravidla síly, reset (MVP)", amountCzk: 6_000 },
          { id: "l-sy-2", label: "Session / JWT, expirace, obnova", amountCzk: 6_000 },
          { id: "l-sy-3", label: "Hardening API: rate limit, validace payloadů, konzistentní chyby", amountCzk: 8_000 },
          { id: "l-sy-4", label: "Audit: co se loguje u citlivých akcí (admin, trezor, platby)", amountCzk: 6_000 },
          { id: "l-sy-5", label: "OAuth: bezpečné redirecty, ochrana tokenů (MVP)", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-qa",
        layerId: "qa",
        title: "Testy a UAT",
        items: [
          { id: "l-qa-1", label: "Smoke a regrese před milníky (kritické flow)", amountCzk: 8_000 },
          { id: "l-qa-2", label: "Příprava a průběh UAT s vámi, zápis neshod", amountCzk: 8_000 },
          { id: "l-qa-3", label: "Opravy v rámci MVP, stabilizace před akceptací", amountCzk: 8_000 },
        ],
      },
      {
        id: "layer-hand",
        layerId: "devops",
        title: "Předání (CI, nasazení, provoz)",
        items: [
          { id: "l-do-1", label: "CI: build, lint, základ kvality při každém merge", amountCzk: 3_000 },
          { id: "l-do-2", label: "Env, šablony, stručný runbook (jak nasadit, co kde nastavit)", amountCzk: 2_000 },
          { id: "l-do-3", label: "OVHcloud, DB přístup, zálohy; e‑mail DNS checklist (SPF/DKIM/DMARC)", amountCzk: 5_000 },
        ],
      },
    ] satisfies DetailedLayerBreakdownGroup[],

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

