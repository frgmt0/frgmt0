import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    // Generate source maps for production builds
    sourcemap: false,
    
    // Minify output
    minify: 'terser',
    
    // Terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown-vendor': ['react-markdown', 'react-syntax-highlighter'],
          'ui-vendor': ['framer-motion', '@heroicons/react'],
        },
        // Optimize chunk size
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // Optimize asset size
    assetsInlineLimit: 4096,
    
    // Improve caching
    chunkSizeWarningLimit: 1000,
  },
  
  // Optimize server during development
  server: {
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  
  // Optimize preview server
  preview: {
    port: 5000,
    open: true,
  },
})
