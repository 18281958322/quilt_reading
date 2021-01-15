import Vue from 'vue'
import Router from 'vue-router'
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
    },
    {// 数据
      path: '/data',
      name: 'data',
      component: () => import('../views/data/index.vue'),
    },
    {// 用户
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
      children: [
        { // 用户列表
          path: '/userlist',
          name: 'userlist',
          component: () => import('../views/user/userlist/index.vue'),
        },
        { // 用户评论
          path: '/usercomment',
          name: 'usercomment',
          component: () => import('../views/user/usercomment/index.vue'),
        },
        { // 用户反馈
          path: '/customerfeedback',
          name: 'customerfeedback',
          component: () => import('../views/user/customerfeedback/index.vue'),
        }
      ]
    },
    {// 内容
      path: '/content',
      name: 'content',
      component: () => import('../views/content/index.vue'),
      children: [
        {// 小说
          path: '/novel',
          name: 'novel',
          component: () => import('../views/content/novel/index.vue'),
        },
        {// 漫画
          path: '/comics',
          name: 'comics',
          component: () => import('../views/content/comics/index.vue'),
        },
        // 听书
        {
          path: '/books',
          name: 'Books',
          component: () => import('../views/content/books.vue'),
        },
      ]
    },
    {// 运营
      path: '/operations',
      name: 'operations',
      component: () => import('../views/operations/index.vue'),
    },
    {// 分销
      path: '/distribution',
      name: 'distribution',
      component: () => import('../views/distribution/index.vue'),
    },
    {// 作者
      path: '/author',
      name: 'author',
      component: () => import('../views/author/index.vue'),
    },
    {// 设置
      path: '/setup',
      name: 'setup',
      component: () => import('../views/setup/index.vue'),
    },
    {// 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

// 全局路由守卫(跳转前)
vueRouter.beforeEach(function (to, from, next) {
  // 这里可以写全局路由跳转拦截器
  next()
})

// 全局路由守卫(跳转后)
vueRouter.afterEach(function (to) {

})

export default vueRouter