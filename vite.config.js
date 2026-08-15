import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/psych-sport-site/',  /* <-- ЭТО ВАЖНО! Имя вашего репозитория */
})
