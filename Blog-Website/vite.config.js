import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://z0p40nv6-8000.inc1.devtunnels.ms/',
        changeOrigin: true,
        secure: false, // Add this if the target uses a self-signed cert
      },
    },
  },
});
