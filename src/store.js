import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null // Estado inicial do usuário é nulo (não logado)
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
})