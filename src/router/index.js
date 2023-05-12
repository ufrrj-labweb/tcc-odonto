import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";
import QuestionarioView from '../views/QuestionarioView.vue'
import DashboardView from '../views/DashboardView.vue'
import PerguntaView from '../views/PerguntaView.vue'
import RegisterView from '../views/RegisterView.vue'
import SigninView from '../views/SigninView.vue'
import store from '../store' // Importe o store Vuex aqui
import createPersistedState from 'vuex-persistedstate';

const auth = getAuth();

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
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        const user = store.getters.getUser // Acessar getters do store Vuex
        if (user) {
          next()
        } else {
          next("/register")
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
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
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: async (to, from, next) => {
        await auth.signOut(); 
        store.dispatch('setUser', null);
        next('signin');
      }
    }
  ]
})

createPersistedState()(store);

export default router