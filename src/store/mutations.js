/*
 * @Author: Marte
 * @Date:   2017-08-09 20:08:25
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-09 20:22:03
 */

'use strict';
import * as types from './types'

const mutations = {
    [types.SET_FOOTER](state, off) {
        state.isFooter = off;
    }
};

export default mutations