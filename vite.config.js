import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 5280 },
  build: isSsrBuild
    ? {}
    : { rollupOptions: { output: { manualChunks: { react: ['react', 'react-dom'] } } } }
}))
