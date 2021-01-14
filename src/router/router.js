import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(Router)

// 解决重复点击页面报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    // 作者
    {
      path: '/author',
      name: 'Author',
      component: () => import('../views/author/index.vue'),
    },
    // 内容
    {
      path: '/content',
      name: 'Content',
      component: () => import('../views/content/index.vue'),
      children: [
        // 小说
        {
          path: '/novel',
          name: 'Novel',
          component: () => import('../views/content/novel/index.vue'),
        },
        // 漫画
        {
          path: '/comics',
          name: 'Comics',
          component: () => import('../views/content/comics/index.vue'),
        },
      ]
    },
    // 数据
    {
      path: '/data',
      name: 'Data',
      component: () => import('../views/data/index.vue'),
    },
    // 分销
    {
      path: '/distribution',
      name: 'Distribution',
      component: () => import('../views/distribution/index.vue'),
    },
    // 首页
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index/index.vue'),
    },
    // 运营
    {
      path: '/operation',
      name: 'Operation',
      component: () => import('../views/operation/index.vue'),
    },
    // 设置
    {
      path: '/setup',
      name: 'Setup',
      component: () => import('../views/setup/index.vue'),
    },
    // 用户
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/user/index.vue'),
      children: [
        // 用户列表
        {
          path: '/userlist',
          name: 'Userlist',
          component: () => import('../views/user/userlist/index.vue'),
        },
        // 用户评论
        {
          path: '/usercomment',
          name: 'Usercomment',
          component: () => import('../views/user/usercomment/index.vue'),
        },
        // 用户反馈
        {
          path: '/customerfeedback',
          name: 'Customerfeedback',
          component: () => import('../views/user/customerfeedback/index.vue'),
        }
      ]
    }
  ]
})