import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://z0p40nv6-8000.inc1.devtunnels.ms',
        changeOrigin: true,
      }
    }
  }
})
