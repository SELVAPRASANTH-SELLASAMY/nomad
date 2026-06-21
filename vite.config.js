import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((command) => ({
  server:{
    port: 3000,
    open: true,
    host: true
  },
  base: command === 'serve' ? '/nomad/' : '',
  plugins: [react()],
}))
