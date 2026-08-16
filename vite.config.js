import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/psych-sport-site/', // Уже есть
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index.js' // Жёстко задаём имя файла
      }
    }
  }
})