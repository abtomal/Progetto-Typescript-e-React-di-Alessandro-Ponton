import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Desktop\Progetto Typescript e React di Alessandro Ponton/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: 'localhost', 
    port: 5173,        
    strictPort: true, 
    open: true         
  }
});
