import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    open: true,
  },
  server: {
    open: true,
  },
  root: 'src',
  publicDir: '../public',
})
