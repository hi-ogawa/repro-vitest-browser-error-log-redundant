/// <reference types="vitest" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      name: 'chromium',
    },
  },
});
