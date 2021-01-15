import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

//解决重复点击页面报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const vueRouter =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {// 首页
      path: '/',
      name: 'index',
      component: () => import('../views/index/index.vue'),
      meta: { nav: true }
    },
    {// 数据
      path: '/data',
      name: 'data',
      component: () => import('../views/data/index.vue'),
      meta: { nav: true }
    },
    {// 用户
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
      meta: { nav: true },
      children: [
        { // 用户列表
          path: '/userlist',
          name: 'userlist',
          component: () => import('../views/user/userlist/index.vue'),
          meta: { nav: true, toplevel: '/user' }
        },
        { // 用户评论
          path: '/usercomment',
          name: 'usercomment',
          component: () => import('../views/user/usercomment/index.vue'),
          meta: { nav: true, toplevel: '/user' }
        },
        { // 用户反馈
          path: '/customerfeedback',
          name: 'customerfeedback',
          component: () => import('../views/user/customerfeedback/index.vue'),
          meta: { nav: true, toplevel: '/user' }
        }
      ]
    },
    {// 内容
      path: '/content',
      name: 'content',
      component: () => import('../views/content/index.vue'),
      meta: { nav: true },
      children: [
        {// 小说
          path: '/novel',
          name: 'novel',
          component: () => import('../views/content/novel/index.vue'),
          meta: { nav: true, toplevel: '/content' }
        },
        {// 漫画
          path: '/comics',
          name: 'comics',
          component: () => import('../views/content/comics/index.vue'),
          meta: { nav: true, toplevel: '/content' }
        },
        // 听书
        {
          path: '/books',
          name: 'Books',
          component: () => import('../views/content/books.vue'),
          meta: { nav: true, toplevel: '/content' }
        },
      ]
    },
    {// 运营
      path: '/operations',
      name: 'operations',
      component: () => import('../views/operations/index.vue'),
      meta: { nav: true }
    },
    {// 分销
      path: '/distribution',
      name: 'distribution',
      component: () => import('../views/distribution/index.vue'),
      meta: { nav: true }
    },
    {// 作者
      path: '/author',
      name: 'author',
      component: () => import('../views/author/index.vue'),
      meta: { nav: true }
    },
    {// 设置
      path: '/setup',
      name: 'setup',
      component: () => import('../views/setup/index.vue'),
      meta: { nav: true }
    },
    {// 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
      meta: { nav: false }
    }
  ]
})

// 全局路由守卫(跳转前)
vueRouter.beforeEach(function (to, from, next) {
  // 通过配置meta.nav属性来控制导航栏的状态
  const { nav } = to.meta
  if (store.state.navbarStatus !== nav) store.commit('setNavbarStatus', { val: nav });
  next()
})

// 全局路由守卫(跳转后)
vueRouter.afterEach(function (to) {

})

export default vueRouter