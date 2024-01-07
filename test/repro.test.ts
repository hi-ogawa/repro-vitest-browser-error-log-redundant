import { test } from 'vitest';

test('error', async () => {
  throw new Error("boom!")
});
