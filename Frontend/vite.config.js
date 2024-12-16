import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures correct relative paths in production
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
  },
  server: {
    port: 5173, // Ensure this matches the port shown in Vite logs
  },
});
