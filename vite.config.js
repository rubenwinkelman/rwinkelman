import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function inlineCssPlugin() {
  return {
    name: 'inline-css-plugin',
    enforce: 'post',
    generateBundle(opts, bundle) {
      const cssFiles = Object.keys(bundle).filter((name) => name.endsWith('.css'))
      const htmlFile = bundle['index.html']
      if (htmlFile && cssFiles.length > 0) {
        let inlinedStyles = ''
        for (const cssName of cssFiles) {
          const chunk = bundle[cssName]
          inlinedStyles += `<style>${chunk.source}</style>`
          delete bundle[cssName]
        }
        htmlFile.source = htmlFile.source.replace(
          /<link rel="stylesheet"[^>]+href="\/assets\/[^"]+\.css"[^>]*>/,
          inlinedStyles
        )
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
  build: {
    target: 'es2022',
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
})
