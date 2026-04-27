import type { BreakdownItem, MoneyCZK } from "@/app/content/offer";

export function sum(items: readonly BreakdownItem[]): MoneyCZK {
  return items.reduce((acc, it) => acc + it.amountCzk, 0);
}

export function percent(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 1000) / 10;
}

