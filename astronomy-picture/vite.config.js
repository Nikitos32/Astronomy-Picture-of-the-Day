import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:   "/Astronomy-Picture-of-the-Day",
  plugins: [react()],
})
