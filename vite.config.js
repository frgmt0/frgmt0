import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize React plugin
      babel: {
        plugins: [
          // Remove PropTypes in production
          ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]
        ]
      },
      // Use Fast Refresh instead of full reload
      fastRefresh: true
    }),
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
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'react-markdown'
    ],
    // Force include problematic dependencies
    force: true,
    // Optimize dependencies on page load
    esbuildOptions: {
      target: 'es2020',
      // Reduce bundle size by removing console.log in dependencies
      drop: ['console', 'debugger'],
    }
  },
  
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
        pure_funcs: ['console.log', 'console.debug', 'console.info'],
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
    
    // Preload critical chunks
    modulePreload: {
      polyfill: true,
    },
    
    // Optimize CSS
    cssCodeSplit: true,
    
    // Target modern browsers
    target: 'es2020',
  },
  
  // Optimize server during development
  server: {
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
    // Optimize for development
    fs: {
      strict: true,
    },
  },
  
  // Optimize preview server
  preview: {
    port: 5000,
    open: true,
  },
  
  // Resolve configuration
  resolve: {
    // Optimize module resolution
    dedupe: ['react', 'react-dom'],
  },
})
