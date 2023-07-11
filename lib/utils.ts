import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCountryFlag(iso2: string): string | undefined {
  const countryCodeOffset = 127397
  if (iso2.length !== 2) {
    return undefined // Invalid ISO2 code
  }
  const firstChar = iso2.toUpperCase().charCodeAt(0)
  const secondChar = iso2.toUpperCase().charCodeAt(1)
  if (firstChar < 65 || firstChar > 90 || secondChar < 65 || secondChar > 90) {
    return undefined // Invalid ISO2 code
  }
  return String.fromCodePoint(
    firstChar + countryCodeOffset,
    secondChar + countryCodeOffset
  )
}
