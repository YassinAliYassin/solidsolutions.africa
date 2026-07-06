import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const DEFERRED_CHUNKS = ['motion', 'lenis', 'SolidAI', 'SolidLLM', 'ChatBot', 'Documentation', 'BetaAccess', 'ComingSoon'];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
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
              (id.includes('/react/') && !id.includes('react-router'))
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