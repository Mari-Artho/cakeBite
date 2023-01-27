import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import CafeView from '../views/CafeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin:id',
      name: 'admin',
      component: AdminView,
      meta: {
        requiresAuth: true   // Defined to be viewable only when authenticated
      }
    },
    {
      path: '/cafe/:id',
      name: 'cafe',
      component: CafeView
    }
  ]
})

export default router
