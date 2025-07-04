import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SD/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
