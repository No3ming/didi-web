/**
 * Created by ldm on 2017/11/1.
 */
// Required libs
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

// Setup plugin
Vue.use(Vuex)

// Init global state
// sid for post must data
// bodyData for server bodyData
// upBodyData for localBodyData
// imgUrl for model url
const state = {
  direction: 'forward'
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
