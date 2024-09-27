import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

import './styles/markdown.css'

export const createApp = ViteSSG(
  App,
  { routes },
)
