import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

//解决重复点击页面报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


/**
 * meta属性说明
 * @title { string } 当前路由中文名称（给面包屑展示用的）
 * @toplevel { string } 当前路由所属顶级模块
 */
const vueRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {// 首页
      path: '/',
      name: 'index',
      component: () => import('../views/index/index.vue'),
      meta: { title: '首页' },
      children: [
        { // 用户列表
          path: '/userlist',
          name: 'userlist',
          component: () => import('../views/user/userlist/index.vue'),
          meta: { title: '用户列表', toplevel: 'tl_user' }
        },
        { // 用户评论
          path: '/usercomment',
          name: 'usercomment',
          component: () => import('../views/user/usercomment/index.vue'),
          meta: { title: '用户评论', toplevel: 'tl_user' }
        },
        { // 用户反馈
          path: '/customerfeedback',
          name: 'customerfeedback',
          component: () => import('../views/user/customerfeedback/index.vue'),
          meta: { title: '用户反馈', toplevel: 'tl_user' }
        },
        {// 小说
          path: '/novel',
          name: 'novel',
          component: () => import('../views/content/novel/index.vue'),
          meta: { title: '小说', toplevel: 'tl_content' }
        },
        {// 漫画
          path: '/comics',
          name: 'comics',
          component: () => import('../views/content/comics/index.vue'),
          meta: { title: '漫画', toplevel: 'tl_content' }
        },
        // 听书
        {
          path: '/books',
          name: 'Books',
          component: () => import('../views/content/books.vue'),
          meta: { title: '听书', toplevel: 'tl_content' }
        },
        { // 首页
          path: '/allindex',
          name: 'Allindex',
          component: () => import('../views/index/allindex/index.vue'),
          meta: { title: '首页', toplevel: 'tl_home' }
        },
        { //数据
          path: '/data',
          name: 'Data',
          component: () => import('../views/data/index.vue'),
          meta: { title: '统计', toplevel: 'tl_data' }
        },
        { //作者
          path: '/author',
          name: 'Author',
          component: () => import('../views/author/index.vue'),
          meta: { title: '新闻公告', toplevel: 'tl_author' }
        },
        { //作者管理
          path: '/penster',
          name: "Penster",
          component: () => import('../views/author/penster/index.vue'),
          meta: { title: '作者管理', toplevel: 'tl_author'}
        },
        { //作者审核
          path: '/toexamine',
          name: "Toexamine",
          component: () => import('../views/author/toexamine/index.vue'),
          meta: {title: '作者审核', toplevel: 'tl_author'}
        },
        { // 作品审核
          path: '/works',
          name: "Works",
          component: () => import('../views/author/works/index.vue'),
          meta: {title: '作品审核', toplevel: 'tl_author'}
        },
        { //责编
          path: '/editorincharge',
          name: "Editorincharge",
          component: () => import('../views/author/editorincharge/index.vue'),
          meta: {title: '责编',toplevel: 'tl_author'}
        },
        { //
          path: '/remuneration',
          name: "Remuneration",
          component: () => import('../views/author/remuneration/index.vue'),
          meta: { title: '稿酬',toplevel: 'tl_author'}
        }
      ]
    },
    {// 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
      meta: { title: '登录' }
    }
  ]
})

// 全局路由守卫(跳转前)
vueRouter.beforeEach(function (to, from, next) {
  store.commit('setTabBarList', { val: to, type: 'add' })
  next()
})

// 全局路由守卫(跳转后)
vueRouter.afterEach(function (to) {

})

export default vueRouter