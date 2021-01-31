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
        {// 新增小说
          path: '/Newnovels',
          name: 'Newnovels',
          component: () => import('../views/content/novel/Newnovels/index.vue'),
          meta: { title: '新增小说', toplevel: 'tl_content' }
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
        },
        // { // 基础信息
        //   path: '/distribution',
        //   name: "Distribution",
        //   component: () => import('../views/distribution/index.vue'),
        //   meta: { title: '基础信息', toplevel: 'tl_setup'}
        // },
        { //客户信息
          path: '/content',
          name: "Content",
          component: () => import('../views/content/index.vue'),
          meta: { title: '客户信息', toplevel: 'tl_setup'}
        },
        { // 图片存储位置
          path: '/operations',
          name: "Operations",
          component: () => import('../views/operations/index.vue'),
          meta: { title: '图片存储位置', toplevel: 'tl_setup'}
        },
        { // 短信服务
          path: '/setup',
          name: "Setup",
          component: () => import('../views/setup/index.vue'),
          meta: { title: '短信服务', toplevel: 'tl_setup'}
        },
        { // 分销=>数据=> 订单统计
          path: '/ordersReceiveStatistics',
          name: "ordersReceiveStatistics",
          component: () => import('../views/distribution/tld_data/ordersReceiveStatistics.vue'),
          meta: { title: '订单统计',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 用户统计
          path: '/userStatistics',
          name: "userStatistics",
          component: () => import('../views/distribution/tld_data/userStatistics.vue'),
          meta: { title: '用户统计',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 平台统计
          path: '/platformStatistics',
          name: "platformStatistics",
          component: () => import('../views/distribution/tld_data/platformStatistics.vue'),
          meta: { title: '平台统计',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 内容统计
          path: '/contentStatistics',
          name: "contentStatistics",
          component: () => import('../views/distribution/tld_data/contentStatistics.vue'),
          meta: { title: '内容统计',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 扣量统计
          path: '/BuckleQuantityStatistics',
          name: "BuckleQuantityStatistics",
          component: () => import('../views/distribution/tld_data/BuckleQuantityStatistics.vue'),
          meta: { title: '扣量统计',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 订单明细
          path: '/orderDetails',
          name: "orderDetails",
          component: () => import('../views/distribution/tld_data/orderDetails.vue'),
          meta: { title: '订单明细',toplevel: 'tl_distribution'}
        },
        { // 分销=>数据=> 粉丝明细
          path: '/fansDetails',
          name: "fansDetails",
          component: () => import('../views/distribution/tld_data/fansDetails.vue'),
          meta: { title: '粉丝明细',toplevel: 'tl_distribution'}
        },
        { // 分销=>推广=> 作品列表
          path: '/ListOfWorks',
          name: "ListOfWorks",
          component: () => import('../views/distribution/tld_spread/ListOfWorks.vue'),
          meta: { title: '作品列表',toplevel: 'tl_distribution'}
        },
        { // 分销=>推广=> 推广链接
          path: '/ToPromoteLinks',
          name: "ToPromoteLinks",
          component: () => import('../views/distribution/tld_spread/ToPromoteLinks.vue'),
          meta: { title: '推广链接',toplevel: 'tl_distribution'}
        },
        { // 分销=>推广=> 常用链接
          path: '/CommonlyUsedLinks',
          name: "CommonlyUsedLinks",
          component: () => import('../views/distribution/tld_spread/CommonlyUsedLinks.vue'),
          meta: { title: '常用链接',toplevel: 'tl_distribution'}
        },
        { // 分销=>推广=> 促销活动
          path: '/promotionActivity',
          name: "promotionActivity",
          component: () => import('../views/distribution/tld_spread/promotionActivity.vue'),
          meta: { title: '促销活动',toplevel: 'tl_distribution'}
        },
        { // 分销=>渠道=> 渠道列表
          path: '/ChannelList',
          name: "ChannelList",
          component: () => import('../views/distribution/tld_channel/ChannelList.vue'),
          meta: { title: '渠道列表',toplevel: 'tl_distribution'}
        },
        { // 分销=>渠道=> 渠道结算单
          path: '/ChannelSettlementStatement',
          name: "ChannelSettlementStatement",
          component: () => import('../views/distribution/tld_channel/ChannelSettlementStatement.vue'),
          meta: { title: '渠道结算单',toplevel: 'tl_distribution'}
        },
        { // 分销=>渠道=> 渠道打款
          path: '/ChannelsToPlayMoney',
          name: "ChannelsToPlayMoney",
          component: () => import('../views/distribution/tld_channel/ChannelsToPlayMoney.vue'),
          meta: { title: '渠道打款',toplevel: 'tl_distribution'}
        },
        { // 分销=>管理=> 扣量设置
          path: '/BuckleAmount',
          name: "BuckleAmount",
          component: () => import('../views/distribution/tld_manage/BuckleAmount.vue'),
          meta: { title: '扣量设置',toplevel: 'tl_distribution'}
        },
        { // 分销=>管理=> 公告管理
          path: '/AnnouncementOfTheManagement',
          name: "AnnouncementOfTheManagement",
          component: () => import('../views/distribution/tld_manage/AnnouncementOfTheManagement.vue'),
          meta: { title: '公告管理',toplevel: 'tl_distribution'}
        },
        { // 分销=>管理=> 素材管理
          path: '/materialManagement',
          name: "materialManagement",
          component: () => import('../views/distribution/tld_manage/materialManagement.vue'),
          meta: { title: '素材管理',toplevel: 'tl_distribution'}
        },
        { // 分销=>管理=> 活动套餐管理
          path: '/EventPackageManagement',
          name: "EventPackageManagement",
          component: () => import('../views/distribution/tld_manage/EventPackageManagement.vue'),
          meta: { title: '活动套餐管理',toplevel: 'tl_distribution'}
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