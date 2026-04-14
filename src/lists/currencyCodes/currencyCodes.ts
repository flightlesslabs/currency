/**
 * ISO 4217 currency codes (subset).
 *
 * A readonly list of standardized 3-letter ISO 4217 currency codes.
 * Each code represents a real-world currency used in international finance and commerce.
 *
 * ⚠️ Notes:
 * - This is a curated subset, not the full ISO 4217 list
 * - All values are uppercase and immutable (`as const`)
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
 * const invalid: CurrencyCode = "ABC"; // ❌ Type error
 * ```
 *
 * 💡 Tip:
 * Use `CurrencyCode` for full type safety across your application.
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
 * Union type of supported ISO 4217 currency codes.
 *
 * Derived from `currencyCodes` to ensure type safety and consistency.
 *
 * @example
 * ```ts
 * const code: CurrencyCode = "USD";
 * const invalid: CurrencyCode = "XXX"; // ❌ Type error
 * ```
 */
export type CurrencyCode = typeof currencyCodes[number];
