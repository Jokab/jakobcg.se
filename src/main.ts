// src/main.ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from "./router";

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  router.options,
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)
