import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/kri-boats/',
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names[0] && /\.(wav|mp3|ogg|flac)$/.test(assetInfo.names[0])) {
            return 'audio/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
