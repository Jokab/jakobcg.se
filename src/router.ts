import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

export default router
