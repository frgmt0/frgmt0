import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'components': [
            './src/components/Navbar/Navbar.jsx',
            './src/components/Waves/Waves.jsx',
            './src/components/tiltedcard/TitledCard.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});
