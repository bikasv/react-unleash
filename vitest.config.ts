import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig((configEnv) => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      coverage: {
        exclude: [
          'mocks/**',
          'src/**/index.ts',
          'src/globalStyles.ts',
          'src/hooks/redux.ts',
          'src/main.tsx',
          'src/routes/**',
          'src/routeTree.gen.ts',
        ],
        include: [
          'src/**',
        ],
        provider: 'v8',
        reporter: ['lcov', 'json', 'text'],
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: './mocks/setupTest.ts',
      silent: false,
    },
  }),
));
