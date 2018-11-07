import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'blog',
      component: () => import('@/blog/blog'),
      children: [
        {
          path: '/',
          component: () => import('@/blog/middle/index.vue')
        },
        {
          path: '/blog/article/:id',
          name: 'article',
          component: () => import('@/blog/article/index.vue')
        },
        {
          path: '/blog/about'
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/blog/public/404.vue')
    }
  ]
})
