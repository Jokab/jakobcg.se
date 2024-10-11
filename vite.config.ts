import type { UserConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Vue from '@vitejs/plugin-vue'
import path from 'node:path'

const config: UserConfig = {
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config
