/*
* @Author: Marte
* @Date:   2017-08-09 12:16:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-09 12:19:06
*/

'use strict';
import jsonp from 'common/js/jsonp'

export function getTop250(start,count){
    const url = 'http://api.douban.com/v2/movie/top250';
    const data = {
        start,
        count
    };

    return jsonp(url,data,{});
}