import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function "cn" = classNames
// This function takes an unlimited number of className values (strings, arrays, objects etc.)
// combines them with clsx, and then merges tyhem with twMerge for Tailwind conflict resolution.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
