import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/mini-components': '/src/mini-components',
      '@/pages': '/src/pages',
      '@/utils': '/src/utils',
      '@/styles': '/src/styles',
      '@/assets': '/src/assets',
      '@/firebase': '/src/firebase',
      '@/i18n': '/src/i18n',
    },
  },
})
