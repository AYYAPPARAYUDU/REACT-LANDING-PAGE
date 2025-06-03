import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/REACT-LANDING-PAGE/',
  build: {
    rollupOptions: {
      input: '/index.html',
      output: {
        entryFileNames: `main.js`, // Force consistent name
      },
    },
  },
})