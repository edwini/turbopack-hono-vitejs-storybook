import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api/.*': {//Acepta cualquier ruta que empiece por /api
        target: "http://localhost:8787",//en desarrollo redirecciona al repo: apps/api
        changeOrigin: true,
      }
    }
  }
})
