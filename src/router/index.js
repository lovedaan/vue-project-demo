import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import pic from '@/components/pic'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/pic',
      component: pic
    },
    {
      path: '/news',
      component: news
    }
  ]
})
