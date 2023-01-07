import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestionarioView from '../views/QuestionarioView.vue'
import DashboardView from '../views/DashboardView.vue'
import PerguntaView from '../views/PerguntaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '',
      name: 'questionario',
      component: QuestionarioView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/nova-pergunta',
      name: 'novaPergunta',
      component: PerguntaView
    },
    {
      path: '/editar-pergunta/:idPergunta',
      name: 'editarPergunta',
      component: PerguntaView
    },
    // {
    //   path: '/questionario',
    //   name: 'questionario',
    //   component: QuestionarioView
    // }
  ]
})

export default router
