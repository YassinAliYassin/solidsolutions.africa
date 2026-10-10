import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const DEFERRED_CHUNKS = ['motion', 'ChatBot', 'SolidAI', 'SolidLLM', 'Documentation', 'BetaAccess', 'ComingSoon'];

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      sourcemap: false,
      modulePreload: {
        resolveDependencies: (_filename, deps) =>
          deps.filter((dep) => !DEFERRED_CHUNKS.some((chunk) => dep.includes(chunk))),
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;

            if (id.includes('react-router')) return 'router';
            if (
              id.includes('react-dom') ||
              id.includes('react/jsx-runtime') ||
              id.includes('react/jsx-dev-runtime') ||
              id.includes('scheduler') ||
              (id.includes('/react/') && !id.includes('react-router') && !id.includes('motion'))
            ) {
              return 'react-vendor';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
