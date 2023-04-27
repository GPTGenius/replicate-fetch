import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 120000,
  },
  esbuild: {
    target: 'node16',
  },
});
