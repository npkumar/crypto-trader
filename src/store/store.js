import Vue from 'vue'
import Vuex from 'vuex'

import coins from './modules/cryptocoins'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coins,
    portfolio,
  }
});