import type { CurrencyCode } from './lists/currencyCodes.ts';

/**
 * Represents a currency entry mapped to a country.
 *
 * Combines human-readable currency metadata with a strongly typed
 * ISO 4217 currency code.
 *
 * - `country`: Common English name of the country or region
 * - `currencyName`: Display name of the currency
 * - `currencyCode`: ISO 4217 3-letter currency code (type-safe)
 *
 * 📦 Use cases:
 * - Currency dropdowns / selectors
 * - Mapping country → currency
 * - Displaying currency labels in UI
 * - Validating currency data with strict types
 *
 * 💡 Example:
 * ```ts
 * const india: Currency = {
 *   country: "India",
 *   currencyName: "Indian rupee",
 *   currencyCode: "INR",
 * };
 * ```
 *
 * ⚠️ Note:
 * A single currency can be used by multiple countries (e.g. EUR, USD),
 * but this type represents a single country–currency pairing.
 */
export type Currency = {
  country: string;
  currencyName: string;
  currencyCode: CurrencyCode;
};
