import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { seoPrerenderPlugin } from './vite-plugin-seo-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPrerenderPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
