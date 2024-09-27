import type { UserConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'unplugin-vue-markdown/vite'
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
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Markdown({
      wrapperClasses: 'prose prose-sm text-left',
      headEnabled: true,
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },

}

export default config
