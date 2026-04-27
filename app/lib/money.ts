import type { MoneyCZK } from "@/app/content/offer";

export function formatCzk(amount: MoneyCZK): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(amount);
}

