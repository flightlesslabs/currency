import { assert, assertEquals } from '@std/assert';
import { currencies } from './currencies.ts';

Deno.test('currencies is not empty', () => {
  assert(currencies.length > 0);
});

Deno.test('currency codes are valid ISO format', () => {
  for (const c of currencies) {
    assert(/^[A-Z]{3}$/.test(c.currencyCode));
  }
});

Deno.test('currency codes are unique', () => {
  const codes = currencies.map((c) => c.currencyCode);
  assertEquals(new Set(codes).size, codes.length);
});

Deno.test('contains USD', () => {
  assert(currencies.some((c) => c.currencyCode === 'USD'));
});
