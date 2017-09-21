import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/components/home.vue'], resolve);
const usBox = resolve => require(['@/components/us-box.vue'], resolve);
const search = resolve => require(['@/components/search.vue'], resolve);
const movieList = resolve => require(['@/components/movie-list.vue'], resolve);
const movieDetail = resolve => require(['@/components/movie-detail.vue'], resolve);
const me = resolve => require(['@/components/me.vue'], resolve);
const main = resolve => require(['@/components/main.vue'], resolve);
Vue.use(Router);

export default new Router({
	linkActiveClass: 'active',
    routes: [{
        path: '/',
		name: 'Main',
        component: main,
        children: [{
            path: 'home',
            name:'home',
            component: home
        }, {
            path: 'usBox',
            name:'usBox',
            component: usBox
        }, {
            path: 'me',
            name:'me',
            component: me
        }]
    }, {
        path: '/movie-list',
        component: movieList
    }, {
        path: '/movie-detail',
        component: movieDetail
    }, {
        path: '/search',
        component: search
    }]
})