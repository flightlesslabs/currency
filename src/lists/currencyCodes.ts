/**
 * ISO 4217 currency codes (subset).
 *
 * A readonly list of standardized 3-letter currency codes defined by the ISO 4217 specification.
 * Each code uniquely identifies a currency used in international finance and commerce.
 *
 * ⚠️ Notes:
 * - This is a curated subset, not the complete ISO 4217 list
 * - All codes are uppercase and immutable (`as const`)
 * - Includes widely used global currencies (USD, EUR, INR, etc.)
 *
 * 📦 Use cases:
 * - Validating currency inputs (forms, APIs)
 * - Restricting allowed currency values via TypeScript types
 * - Generating dropdown/select options
 * - Ensuring consistency across services and databases
 *
 * 🚀 Example:
 * ```ts
 * const code: CurrencyCode = "INR"; // ✅ valid
 * const invalid: CurrencyCode = "ABC"; // ❌ TypeScript error
 * ```
 *
 * 💡 Tip:
 * Use the derived `CurrencyCode` type for full type safety across your application.
 */
export const ISO_CURRENCY_CODES = [
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
 * Union type of supported ISO currency codes.
 *
 * Derived from `ISO_CURRENCY_CODES` to ensure type safety and consistency.
 */
export type CurrencyCode = typeof ISO_CURRENCY_CODES[number];
