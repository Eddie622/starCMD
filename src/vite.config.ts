import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/index.tsx'],
      refresh: true,
    }),
    react(),
  ],
  build: {
    target: 'esnext', // Ensure we're targeting the latest JavaScript features
  },
  server: {
    port: 5173,
    host: '0.0.0.0',  // Binding to 0.0.0.0 ensures that the server is accessible externally
    hmr: {
      host: 'localhost', // Ensures HMR is bound to localhost even inside Docker
    },
  },
});