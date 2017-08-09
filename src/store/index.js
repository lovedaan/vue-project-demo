/*
 * @Author: Marte
 * @Date:   2017-08-09 20:08:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-09 20:20:54
 */

'use strict';
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import mutations from './mutations'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'



export default new Vuex.Store({
    mutations,
    state,
    actions,
    getters
})