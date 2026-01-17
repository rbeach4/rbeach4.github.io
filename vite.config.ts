import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { remarkFrontmatterExport } from './src/lib/remark-frontmatter-export'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkFrontmatterExport],
      providerImportSource: '@mdx-js/react',
    }),
    react(),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
