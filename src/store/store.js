import Vue from 'vue'
import Vuex from 'vuex'

import coins from './modules/cryptocoins'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coins
  }
});