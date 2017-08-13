/*
 * @Author: Marte
 * @Date:   2017-08-09 12:16:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-13 16:56:59
 */

'use strict';
import jsonp from 'common/js/jsonp'

export function getMovies(start, count, type) {
    const url = 'http://api.douban.com/v2/movie/' + type;
    const data = {
        start,
        count
    };

    return jsonp(url, data, {});
}

export function getMovieDetail(id) {
    const url = 'http://api.douban.com/v2/movie/subject/' + id;
    const data = {};
    return jsonp(url, data, {});
}

export function getMovieSearch(start, count, q) {
    const url = 'http://api.douban.com/v2/movie/search';
    const data = {
        start,
        count,
        q
    };
    return jsonp(url, data, {});
}