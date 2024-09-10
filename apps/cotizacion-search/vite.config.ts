import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log("api server ->", env.API_SERVER);

  return {
  plugins: [react()],
  server: {
    proxy: {
      '^/api/.*': {//Acepta cualquier ruta que empiece por /api
        target: env.API_SERVER,//en desarrollo redirecciona al repo: apps/api
        changeOrigin: true,
      }
    }
  }
  }
})
