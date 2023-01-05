import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './',
  base: '/vue-tailwind-portfolio/',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
  },
})
