import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Если запускаем локально - убираем base, если на GitHub - добавляем
  base: process.env.NODE_ENV === 'production' ? '/psych-sport-site/' : '/',
})