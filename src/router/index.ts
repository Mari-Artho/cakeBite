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

//https://qiita.com/Shiho_anyplus/items/f76422ff3ea03f088b20
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!Store.state.isLogin) {
//       // 認証されていない時、認証画面へ遷移
//       next({
//         path: '/Login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     } else {
//       next();
//     }
//   } else {
//     next(); 
//   }
// });

export default router
