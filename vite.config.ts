import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { injectHtml } from 'vite-plugin-html';
import * as path from 'path';

export default defineConfig(env => {
  const loadedEnv = loadEnv(env.mode, 'env');

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
    },
    plugins: [react(), injectHtml({ data: loadedEnv })],
  };
});
