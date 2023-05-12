import Vue from 'vue'
import Vuex from 'vuex'
import jQuery from 'jquery'
import createMutationsSharer from 'vuex-shared-mutations'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  response_flag: false,
  loading: 'none',
  loadingText: 'Loading...'
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
  }
})
