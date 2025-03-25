import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create a chunk for node_modules
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('markdown') || id.includes('remark') || id.includes('rehype')) {
              return 'vendor-markdown';
            }
            return 'vendor';
          }
          // Create a chunk for components
          if (id.includes('/components/')) {
            return 'components';
          }
          // Create a chunk for pages (except BlogPage)
          if (id.includes('/pages/') && !id.includes('BlogPage')) {
            return 'pages';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500
  }
})
