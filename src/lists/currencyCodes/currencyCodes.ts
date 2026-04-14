/**
 * ISO 4217 currency codes (subset).
 *
 * A readonly list of standardized 3-letter ISO 4217 currency codes.
 * Each code represents a real-world currency used in global finance and commerce.
 *
 * @remarks
 * - Subset of ISO 4217 (not exhaustive)
 * - All values are uppercase and immutable (`as const`)
 * - Designed for type-safe validation and UI usage
 *
 * @example
 * ```ts
 * import { currencyCodes, type CurrencyCode } from "@flightlesslabs/currency";
 *
 * const code: CurrencyCode = "USD"; // ✅ valid
 * currencyCodes.includes(code); // true
 * ```
 */
export const currencyCodes = [
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'AOA',
  'ARS',
  'AUD',
  'AWG',
  'AZN',
  'BAM',
  'BBD',
  'BDT',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BRL',
  'BSD',
  'BTN',
  'BWP',
  'BYN',
  'BZD',
  'CAD',
  'CHF',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CUP',
  'CZK',
  'DKK',
  'DOP',
  'DZD',
  'EGP',
  'ETB',
  'EUR',
  'FJD',
  'GBP',
  'GEL',
  'GHS',
  'HKD',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'IQD',
  'IRR',
  'ISK',
  'JPY',
  'KES',
  'KRW',
  'KWD',
  'KZT',
  'LKR',
  'MAD',
  'MXN',
  'MYR',
  'NGN',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PKR',
  'PHP',
  'PLN',
  'QAR',
  'RUB',
  'SAR',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'USD',
  'VND',
  'ZAR',
] as const;

/**
 * ISO 4217 currency code type.
 *
 * Derived from `currencyCodes` to ensure full type safety.
 *
 * @example
 * ```ts
 * const code: CurrencyCode = "EUR";
 * const invalid: CurrencyCode = "ABC"; // ❌ Type error
 * ```
 */
export type CurrencyCode = typeof currencyCodes[number];
