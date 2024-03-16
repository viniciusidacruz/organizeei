import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function limit_text(text?: string | null, limit: number = 10): string {
  if (!text) return "";

  if (text.length > limit) {
    return `${text.slice(0, limit)}...`;
  }

  return text;
}
