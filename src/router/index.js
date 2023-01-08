import { createRouter, createWebHistory } from 'vue-router'
import QuestionarioView from '../views/QuestionarioView.vue'
import DashboardView from '../views/DashboardView.vue'
import PerguntaView from '../views/PerguntaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

export default router
