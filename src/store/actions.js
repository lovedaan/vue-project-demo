/*
 * @Author: Marte
 * @Date:   2017-08-09 20:08:25
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-09 20:18:31
 */

'use strict';
import * as types from './types'
export const setFooter = function({
    commit
}, lock) {
    commit(types.SET_FOOTER, lock);
}