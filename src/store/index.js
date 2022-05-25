import Vue from 'vue'
import Vuex from 'vuex'
import authorization from './modules/authorization'
import registration from './modules/registration'
import tasks from './modules/tasks'
import info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authorization,
    registration,
    info,
    tasks
  }
})
