/// <reference  types="vitest" />
/// <reference  types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8'
    }
  },
})
