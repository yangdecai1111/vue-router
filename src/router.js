import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('./views/Index/home.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Index/center.vue')
        },
        {
          path: 'about',
          component: () => import('./views/Index/about.vue')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/Card',
      component: () => import('./views/Card/index.vue'),
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Login',
      component: () => import('./views/Login/index.vue')
    },
    {
      path: '/Money',
      component: () => import('./views/Money/index.vue'),
      meta: {
        requireLogin: true
      }
    },
    {
      name: 'Infomation',
      path: '/Infomation/:id',
      component: () => import(/* webpackChunkName: "Infomation" */'./views/Infomation/index.vue'),
      beforeEnter: (to, from, next) => {
        console.log('详情页独享')
        next()
      },
      meta: {
        requireLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.requireLogin) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
export default router
