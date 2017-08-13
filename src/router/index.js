import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import pic from '@/components/pic'
import news from '@/components/news'
import movieList from '@/components/movie-list'
import movieDetail from '@/components/movie-detail'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/pic',
        component: pic
    }, {
        path: '/news',
        component: news
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