import { defineConfig } from 'vite'; // Importa defineConfig de Vite

import react from '@vitejs/plugin-react';

// Exporta la configuración de Vite
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['axios']
    }
  }
});
