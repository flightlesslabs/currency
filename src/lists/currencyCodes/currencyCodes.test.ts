/**
 * @file currencyCodes.test
 */

import { assert, assertEquals } from '@std/assert';
import { currencyCodes } from './currencyCodes.ts';

Deno.test('currencyCodes is not empty', () => {
  assert(currencyCodes.length > 0);
});

Deno.test('contains commonly used currencies', () => {
  assert(currencyCodes.includes('USD'));
  assert(currencyCodes.includes('EUR'));
  assert(currencyCodes.includes('INR'));
});

Deno.test('all currency codes are valid ISO 4217 format', () => {
  for (const code of currencyCodes) {
    assert(/^[A-Z]{3}$/.test(code), `Invalid code: ${code}`);
  }
});

Deno.test('currency codes are unique (no duplicates)', () => {
  const unique = new Set(currencyCodes);
  assertEquals(unique.size, currencyCodes.length);
});
