import { createRouter, createWebHistory } from 'vue-router'
import SearchView from "@/views/SearchView.vue"
import CreateView from "@/views/CreateView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
  ]
})

export default router
