import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Allow PDF files (e.g. resume) to be imported as asset URLs
  assetsInclude: ['**/*.pdf'],
})
