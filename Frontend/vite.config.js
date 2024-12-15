import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
  },
  server: {
    port: 5173, // Ensure this matches the port shown in Vite logs
  },
});
