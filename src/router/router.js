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
  routes: [{ // 首页
      path: '/',
      name: 'index',
      component: () => import('../views/index/index.vue'),
      meta: {
        title: '首页'
      },
      children: [{ // 用户列表
          path: '/userlist',
          name: 'userlist',
          component: () => import('../views/user/userlist/index.vue'),
          meta: {
            title: '用户列表',
            toplevel: 'tl_user'
          }
        },
        { // 用户编辑
          path: '/edit',
          name: 'Edit',
          component: () => import('../views/user/userlist/edit/index.vue'),
          meta: {
            title: '用户编辑',
            toplevel: 'tl_user'
          }
        },
        { // 小说
          path: '/usercomment',
          name: 'usercomment',
          component: () => import('../views/user/usercomment/index.vue'),
          meta: {
            title: '小说',
            toplevel: 'tl_user'
          }
        },
        { // 漫画
          path: '/cartoon',
          name: 'Cartoon',
          component: () => import('../views/user/cartoon/index.vue'),
          meta: {
            title: '漫画',
            toplevel: 'tl_user'
          }
        }, { // 听书
          path: '/books',
          name: 'Books',
          component: () => import('../views/content/books/index.vue'),
          meta: {
            title: '听书',
            toplevel: 'tl_user'
          }
        },
        { // 用户反馈
          path: '/customerfeedback',
          name: 'customerfeedback',
          component: () => import('../views/user/customerfeedback/index.vue'),
          meta: {
            title: '用户反馈',
            toplevel: 'tl_user'
          }
        },
        { // 小说
          path: '/novel',
          name: 'novel',
          component: () => import('../views/content/novel/index.vue'),
          meta: {
            title: '小说',
            toplevel: 'tl_content'
          }
        },
        { // 新增小说
          path: '/Newnovels',
          name: 'Newnovels',
          component: () => import('../views/content/novel/Newnovels/index.vue'),
          meta: {
            title: '新增小说',
            toplevel: 'tl_content'
          }
        },
        { // 章节管理
          path: '/chapter',
          name: 'chapter',
          component: () => import('../views/content/novel/listofNovels/chapter/index.vue'),
          meta: {
            title: '章节管理',
            toplevel: 'tl_content'
          }
        },
        { // 漫画
          path: '/comics',
          name: 'comics',
          component: () => import('../views/content/comics/index.vue'),
          meta: {
            title: '漫画',
            toplevel: 'tl_content'
          }
        },
        // 听书
        {
          path: '/books',
          name: 'Books',
          component: () => import('../views/content/books.vue'),
          meta: {
            title: '听书',
            toplevel: 'tl_content'
          }
        },
        { // 首页
          path: '/allindex',
          name: 'Allindex',
          component: () => import('../views/index/allindex/index.vue'),
          meta: {
            title: '首页',
            toplevel: 'tl_home'
          }
        },
        { //数据
          path: '/user_data',
          name: 'Data',
          component: () => import('../views/data/index.vue'),
          meta: {
            title: '统计',
            toplevel: 'tl_data'
          }
        },
        { // 统计-用户
          path: '/user_data',
          name: 'User',
          component: () => import('../views/data/user_data/index.vue'),
          meta: {
            title: '用户统计',
            toplevel: 'tl_data'
          }
        },
        { // 统计-内容
          path: '/content_data',
          name: 'Content',
          component: () => import('../views/data/content_data/index.vue'),
          meta: {
            title: '内容统计',
            toplevel: 'tl_data'
          }
        },
        { // 统计-订单-app
          path: '/app_data',
          name: 'App',
          component: () => import('../views/data/order_data/app_data/index.vue'),
          meta: {
            title: 'app',
            toplevel: 'tl_data'
          }
        },
        { // 统计-订单-公众号
          path: '/official_data',
          name: 'Official',
          component: () => import('../views/data/order_data/official_data/index.vue'),
          meta: {
            title: '公众号',
            toplevel: 'tl_data'
          }
        },
        { // 统计-订单-pc
          path: '/pc_data',
          name: 'Pc',
          component: () => import('../views/data/order_data/pc_data/index.vue'),
          meta: {
            title: 'pc',
            toplevel: 'tl_data'
          }
        },
        { // 统计-分销
          path: '/distribution_data',
          name: 'Distribution',
          component: () => import('../views/data/distribution_data/index.vue'),
          meta: {
            title: '分销统计',
            toplevel: 'tl_data'
          }
        },
        { // 统计-提现
          path: '/withdrawal_data',
          name: 'Withdrawal',
          component: () => import('../views/data/withdrawal_data/index.vue'),
          meta: {
            title: '提现统计',
            toplevel: 'tl_data'
          }
        },
        { // 记录-订单明细
          path: '/order_record',
          name: 'Order',
          component: () => import('../views/data/record_data/order_record/index.vue'),
          meta: {
            title: '订单明细',
            toplevel: 'tl_data'
          }
        },
        { // 记录-消费明细
          path: '/consumption_record',
          name: 'Consumption',
          component: () => import('../views/data/record_data/consumption_record/index.vue'),
          meta: {
            title: '消费明细',
            toplevel: 'tl_data'
          }
        },
        { // 记录-扣量明细
          path: '/Deduction_record',
          name: 'Deduction',
          component: () => import('../views/data/record_data/Deduction_record/index.vue'),
          meta: {
            title: '扣量明细',
            toplevel: 'tl_data'
          }
        },
        { // 记录-阅读明细
          path: '/read_record',
          name: 'Read',
          component: () => import('../views/data/record_data/read_record/index.vue'),
          meta: {
            title: '阅读明细',
            toplevel: 'tl_data'
          }
        },
        { //作者
          path: '/author',
          name: 'Author',
          component: () => import('../views/author/index.vue'),
          meta: {
            title: '新闻公告',
            toplevel: 'tl_author'
          }
        },
        { //作者管理
          path: '/penster',
          name: "Penster",
          component: () => import('../views/author/penster/index.vue'),
          meta: {
            title: '作者管理',
            toplevel: 'tl_author'
          }
        },
        { //新增作者
          path: '/newauthor',
          name: "Newauthor",
          component: () => import('../views/author/penster/Newauthor/index.vue'),
          meta: {
            title: '新增作者',
            toplevel: 'tl_author'
          }
        },
        { //编辑章节
          path: '/eide',
          name: "Eide",
          component: () => import('../views/author/penster/eide/index.vue'),
          meta: {
            title: '编辑章节',
            toplevel: 'tl_author'
          }
        },
        { //作者审核
          path: '/toexamine',
          name: "Toexamine",
          component: () => import('../views/author/toexamine/index.vue'),
          meta: {
            title: '作者审核',
            toplevel: 'tl_author'
          }
        },
        { // 作品审核
          path: '/works',
          name: "Works",
          component: () => import('../views/author/works/index.vue'),
          meta: {
            title: '作品审核',
            toplevel: 'tl_author'
          }
        },
        { //责编
          path: '/editorincharge',
          name: "Editorincharge",
          component: () => import('../views/author/editorincharge/index.vue'),
          meta: {
            title: '责编',
            toplevel: 'tl_author'
          }
        },
        { // 
          path: '/remuneration',
          name: "Remuneration",
          component: () => import('../views/author/remuneration/index.vue'),
          meta: {
            title: '稿酬',
            toplevel: 'tl_author'
          }
        },
        { // 基础信息
          path: '/basics',
          name: "Basics",
          component: () => import('../views/content/basics/index.vue'),
          meta: {
            title: '基础信息',
            toplevel: 'tl_setup'
          }
        },
        { //客户信息
          path: '/content',
          name: "Content",
          component: () => import('../views/content/index.vue'),
          meta: {
            title: '客户信息',
            toplevel: 'tl_setup'
          }
        },
        { // 图片存储位置
          path: '/operations',
          name: "Operations",
          component: () => import('../views/operations/index.vue'),
          meta: {
            title: '图片存储位置',
            toplevel: 'tl_setup'
          }
        },
        { // 接口密匙
          path: '/setup',
          name: "Setup",
          component: () => import('../views/setup/index.vue'),
          meta: {
            title: '接口密匙',
            toplevel: 'tl_setup'
          }
        },
        { // App应用
          path: '/appapplication',
          name: "Appapplication",
          component: () => import('../views/setup/app/appapplication/index.vue'),
          meta: {
            title: 'App应用',
            toplevel: 'tl_app'
          }
        },
        { // 功能设置
          path: '/goon',
          name: "Goon",
          component: () => import('../views/setup/app/goon/index.vue'),
          meta: {
            title: '功能设置',
            toplevel: 'tl_app'
          }
        },
        { // 配置管理
          path: '/sign',
          name: "Sign",
          component: () => import('../views/setup/account/sign/index.vue'),
          meta: {
            title: '配置管理',
            toplevel: 'tl_account'
          }
        },
        { // 签到设置
          path: '/configure',
          name: "Configure",
          component: () => import('../views/setup/account/configure/index.vue'),
          meta: {
            title: '签到设置',
            toplevel: 'tl_account'
          }
        },
        { // 支付设置
          path: '/payment',
          name: "Payment",
          component: () => import('../views/setup/account/payment/index.vue'),
          meta: {
            title: '支付设置',
            toplevel: 'tl_account'
          }
        },
        { // wap站支付设置
          path: '/wap',
          name: "Wap",
          component: () => import('../views/setup/account/wap/index.vue'),
          meta: {
            title: 'wap站支付设置',
            toplevel: 'tl_account'
          }
        },
        { // 基础设置
          path: '/basics_item',
          name: "Basics",
          component: () => import('../views/setup/pc/basics/index.vue'),
          meta: {
            title: '基础设置',
            toplevel: 'tl_pc'
          }
        },
        { // 第三方登录设置
          path: '/threelogin',
          name: "Threelogin",
          component: () => import('../views/setup/pc/threelogin/index.vue'),
          meta: {
            title: '第三方登录设置',
            toplevel: 'tl_pc'
          }
        },
        { // 第三方支付设置
          path: '/tripartitepayment',
          name: "Tripartitepayment",
          component: () => import('../views/setup/pc/tripartitepayment/index.vue'),
          meta: {
            title: '第三方支付设置',
            toplevel: 'tl_pc'
          }
        },
        { // 分销=>数据=> 订单统计
          path: '/ordersReceiveStatistics',
          name: "ordersReceiveStatistics",
          component: () => import('../views/distribution/tld_data/ordersReceiveStatistics.vue'),
          meta: {
            title: '订单统计',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 用户统计
          path: '/userStatistics',
          name: "userStatistics",
          component: () => import('../views/distribution/tld_data/userStatistics.vue'),
          meta: {
            title: '用户统计',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 平台统计
          path: '/platformStatistics',
          name: "platformStatistics",
          component: () => import('../views/distribution/tld_data/platformStatistics.vue'),
          meta: {
            title: '平台统计',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 内容统计
          path: '/contentStatistics',
          name: "contentStatistics",
          component: () => import('../views/distribution/tld_data/contentStatistics.vue'),
          meta: {
            title: '内容统计',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 扣量统计
          path: '/BuckleQuantityStatistics',
          name: "BuckleQuantityStatistics",
          component: () => import('../views/distribution/tld_data/BuckleQuantityStatistics.vue'),
          meta: {
            title: '扣量统计',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 订单明细
          path: '/orderDetails',
          name: "orderDetails",
          component: () => import('../views/distribution/tld_data/orderDetails.vue'),
          meta: {
            title: '订单明细',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>数据=> 粉丝明细
          path: '/fansDetails',
          name: "fansDetails",
          component: () => import('../views/distribution/tld_data/fansDetails.vue'),
          meta: {
            title: '粉丝明细',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 作品列表
          path: '/ListOfWorks',
          name: "ListOfWorks",
          component: () => import('../views/distribution/tld_spread/ListOfWorks.vue'),
          meta: {
            title: '作品列表',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 作品列表 => 作品推广
          path: '/WorkSpread',
          name: "WorkSpread",
          component: () => import('../views/distribution/tld_spread/WorkSpread.vue'),
          meta: {
            title: '作品推广',
            toplevel: 'tl_distribution'
          },
        },
        { // 分销=>推广=> 推广链接
          path: '/ToPromoteLinks',
          name: "ToPromoteLinks",
          component: () => import('../views/distribution/tld_spread/ToPromoteLinks.vue'),
          meta: {
            title: '推广链接',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 推广链接 => 订单明细
          path: '/tpl_orderDetails',
          name: "tpl_orderDetails",
          component: () => import('../views/distribution/tld_spread/tpl_orderDetails.vue'),
          meta: {
            title: '订单明细',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 常用链接
          path: '/CommonlyUsedLinks',
          name: "CommonlyUsedLinks",
          component: () => import('../views/distribution/tld_spread/CommonlyUsedLinks.vue'),
          meta: {
            title: '常用链接',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 促销活动
          path: '/promotionActivity',
          name: "promotionActivity",
          component: () => import('../views/distribution/tld_spread/promotionActivity.vue'),
          meta: {
            title: '促销活动',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>推广=> 促销活动
          path: '/pa_createActivity',
          name: "pa_createActivity",
          component: () => import('../views/distribution/tld_spread/pa_createActivity.vue'),
          meta: {
            title: '新增活动',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>渠道=> 渠道列表
          path: '/ChannelList',
          name: "ChannelList",
          component: () => import('../views/distribution/tld_channel/ChannelList.vue'),
          meta: {
            title: '渠道列表',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>渠道=> 渠道结算单
          path: '/ChannelSettlementStatement',
          name: "ChannelSettlementStatement",
          component: () => import('../views/distribution/tld_channel/ChannelSettlementStatement.vue'),
          meta: {
            title: '渠道结算单',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>渠道=> 渠道打款
          path: '/ChannelsToPlayMoney',
          name: "ChannelsToPlayMoney",
          component: () => import('../views/distribution/tld_channel/ChannelsToPlayMoney.vue'),
          meta: {
            title: '渠道打款',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>管理=> 扣量设置
          path: '/BuckleAmount',
          name: "BuckleAmount",
          component: () => import('../views/distribution/tld_manage/BuckleAmount.vue'),
          meta: {
            title: '扣量设置',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>管理=> 公告管理
          path: '/AnnouncementOfTheManagement',
          name: "AnnouncementOfTheManagement",
          component: () => import('../views/distribution/tld_manage/AnnouncementOfTheManagement.vue'),
          meta: {
            title: '公告管理',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>管理=> 素材管理
          path: '/materialManagement',
          name: "materialManagement",
          component: () => import('../views/distribution/tld_manage/materialManagement.vue'),
          meta: {
            title: '素材管理',
            toplevel: 'tl_distribution'
          }
        },
        { // 分销=>管理=> 活动套餐管理
          path: '/EventPackageManagement',
          name: "EventPackageManagement",
          component: () => import('../views/distribution/tld_manage/EventPackageManagement.vue'),
          meta: {
            title: '活动套餐管理',
            toplevel: 'tl_distribution'
          }
        },
        { //运营=>通用运营=>热搜热词
          path: '/GOHotHotWords',
          name: "GOHotHotWords",
          component: () => import('../views/operations/GeneralOperating/GOHotHotWords.vue'),
          meta: {
            title: '热搜热词',
            toplevel: 'GeneralOperating'
          }
        },
        { //运营=>通用运营=>排行榜
          path: '/GO_rankingList',
          name: "GO_rankingList",
          component: () => import('../views/operations/GeneralOperating/GO_rankingList.vue'),
          meta: {
            title: '排行榜',
            toplevel: 'GeneralOperating'
          }
        },
        { //运营=>通用运营=>排行榜=>新增榜单
          path: '/addRanking',
          name: "addRanking",
          component: () => import('../views/operations/GeneralOperating/addRanking.vue'),
          meta: {
            title: '新增榜单',
            toplevel: 'GeneralOperating'
          }
        },
        { //运营=>通用运营=>排行榜=>编辑榜单
          path: '/setRanking',
          name: "setRanking",
          component: () => import('../views/operations/GeneralOperating/setRanking.vue'),
          meta: {
            title: '编辑榜单',
            toplevel: 'GeneralOperating'
          }
        },
        { //运营=>通用运营=>排行榜=>榜单作品
          path: '/rankingProduction',
          name: "rankingProduction",
          component: () => import('../views/operations/GeneralOperating/rankingProduction.vue'),
          meta: {
            title: '榜单作品',
            toplevel: 'GeneralOperating'
          }
        },
        { //运营=>App运营=>应用=>启动页
          path: '/BootPage',
          name: "BootPage",
          component: () => import('../views/operations/AppOperating/BootPage.vue'),
          meta: {
            title: '启动页',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>启动页=>新增启动页
          path: '/addBootPage',
          name: "addBootPage",
          component: () => import('../views/operations/AppOperating/addBootPage.vue'),
          meta: {
            title: '新增启动页',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>启动页=>编辑启动页
          path: '/setBootPage',
          name: "setBootPage",
          component: () => import('../views/operations/AppOperating/setBootPage.vue'),
          meta: {
            title: '编辑启动页',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>广告位
          path: '/AdvertisingPosition',
          name: "AdvertisingPosition",
          component: () => import('../views/operations/AppOperating/AdvertisingPosition.vue'),
          meta: {
            title: '广告位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>广告位=>广告列表
          path: '/AdvertisingPositionList',
          name: "AdvertisingPositionList",
          component: () => import('../views/operations/AppOperating/AdvertisingPositionList.vue'),
          meta: {
            title: '广告列表',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>广告位=>广告列表=>新增广告
          path: '/addAdvertising',
          name: "addAdvertising",
          component: () => import('../views/operations/AppOperating/addAdvertising.vue'),
          meta: {
            title: '新增广告',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>应用=>广告位=>编辑广告
          path: '/setAdvertising',
          name: "setAdvertising",
          component: () => import('../views/operations/AppOperating/setAdvertising.vue'),
          meta: {
            title: '编辑广告',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>首页频道
          path: '/HomePageChannel',
          name: "HomePageChannel",
          component: () => import('../views/operations/AppOperating/HomePageChannel.vue'),
          meta: {
            title: '首页频道',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>Banner列表
          path: '/BannerList',
          name: "BannerList",
          component: () => import('../views/operations/AppOperating/BannerList.vue'),
          meta: {
            title: 'Banner列表',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>Banner列表=>新增Banner图
          path: '/addBanner',
          name: "addBanner",
          component: () => import('../views/operations/AppOperating/addBanner.vue'),
          meta: {
            title: '新增Banner图',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>Banner列表=>修改Banner图
          path: '/setBanner',
          name: "setBanner",
          component: () => import('../views/operations/AppOperating/setBanner.vue'),
          meta: {
            title: '修改Banner图',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>图文导航
          path: '/ImgTextNavigation',
          name: "ImgTextNavigation",
          component: () => import('../views/operations/AppOperating/ImgTextNavigation.vue'),
          meta: {
            title: '图文导航',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>图文导航=>新增图文导航
          path: '/addImgTextNavigation',
          name: "addImgTextNavigation",
          component: () => import('../views/operations/AppOperating/addImgTextNavigation.vue'),
          meta: {
            title: '新增图文导航',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>图文导航=>编辑图文导航
          path: '/setImgTextNavigation',
          name: "setImgTextNavigation",
          component: () => import('../views/operations/AppOperating/setImgTextNavigation.vue'),
          meta: {
            title: '编辑图文导航',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>图文导航=>编辑图文导航=>管理书籍
          path: '/itn_manageBooks',
          name: "itn_manageBooks",
          component: () => import('../views/operations/AppOperating/itn_manageBooks.vue'),
          meta: {
            title: '管理书籍',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位
          path: '/FeaturedFirst',
          name: "FeaturedFirst",
          component: () => import('../views/operations/AppOperating/FeaturedFirst.vue'),
          meta: {
            title: '推荐位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>新增推荐位
          path: '/addFeaturedFirst',
          name: "addFeaturedFirst",
          component: () => import('../views/operations/AppOperating/addFeaturedFirst.vue'),
          meta: {
            title: '新增推荐位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>编辑推荐位
          path: '/setFeaturedFirst',
          name: "setFeaturedFirst",
          component: () => import('../views/operations/AppOperating/setFeaturedFirst.vue'),
          meta: {
            title: '编辑推荐位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>推荐作品
          path: '/RecommendedWork',
          name: "RecommendedWork",
          component: () => import('../views/operations/AppOperating/RecommendedWork.vue'),
          meta: {
            title: '推荐作品',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>发现页=>新增推荐位
          path: '/addFeaturedFirst_Fx',
          name: "addFeaturedFirst_Fx",
          component: () => import('../views/operations/AppOperating/addFeaturedFirst_Fx.vue'),
          meta: {
            title: '新增推荐位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>发现页=>编辑推荐位
          path: '/setFeaturedFirst_fx',
          name: "setFeaturedFirst_fx",
          component: () => import('../views/operations/AppOperating/setFeaturedFirst_fx.vue'),
          meta: {
            title: '编辑推荐位',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>推荐位=>发现页=>推荐作品
          path: '/RecommendedWork_fx',
          name: "RecommendedWork_fx",
          component: () => import('../views/operations/AppOperating/RecommendedWork_fx.vue'),
          meta: {
            title: '推荐作品',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>重点推荐作品
          path: '/highlyRecommended',
          name: "highlyRecommended",
          component: () => import('../views/operations/AppOperating/highlyRecommended.vue'),
          meta: {
            title: '重点推荐作品',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>公告管理
          path: '/AnnouncementManagement',
          name: "AnnouncementManagement",
          component: () => import('../views/operations/AppOperating/AnnouncementManagement.vue'),
          meta: {
            title: '公告管理',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>公告管理=>新增公告
          path: '/addAnnouncementManagement',
          name: "addAnnouncementManagement",
          component: () => import('../views/operations/AppOperating/addAnnouncementManagement.vue'),
          meta: {
            title: '新增公告',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>公告管理=>编辑公告
          path: '/setAnnouncementManagement',
          name: "setAnnouncementManagement",
          component: () => import('../views/operations/AppOperating/setAnnouncementManagement.vue'),
          meta: {
            title: '编辑公告',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>常见问题
          path: '/commonProblem',
          name: "commonProblem",
          component: () => import('../views/operations/AppOperating/commonProblem.vue'),
          meta: {
            title: '常见问题',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>常见问题=>新增问答
          path: '/addcommonProblem',
          name: "addcommonProblem",
          component: () => import('../views/operations/AppOperating/addcommonProblem.vue'),
          meta: {
            title: '新增问答',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>常见问题=>编辑问答
          path: '/setcommonProblem',
          name: "setcommonProblem",
          component: () => import('../views/operations/AppOperating/setcommonProblem.vue'),
          meta: {
            title: '编辑问答',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>版本控制
          path: '/versionControl',
          name: "versionControl",
          component: () => import('../views/operations/AppOperating/versionControl.vue'),
          meta: {
            title: '版本控制',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>版本控制=>新增版本(IOS)
          path: '/addversionControl_IOS',
          name: "addversionControl_IOS",
          component: () => import('../views/operations/AppOperating/addversionControl_IOS.vue'),
          meta: {
            title: '新增版本(IOS)',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>版本控制=>编辑版本(IOS)
          path: '/setversionControl_IOS',
          name: "setversionControl_IOS",
          component: () => import('../views/operations/AppOperating/setversionControl_IOS.vue'),
          meta: {
            title: '编辑版本(IOS)',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>版本控制=>新增版本(Android)
          path: '/addversionControl_Android',
          name: "addversionControl_Android",
          component: () => import('../views/operations/AppOperating/addversionControl_Android.vue'),
          meta: {
            title: '新增版本(Android)',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>版本控制=>编辑版本(Android)
          path: '/setversionControl_Android',
          name: "setversionControl_Android",
          component: () => import('../views/operations/AppOperating/setversionControl_Android.vue'),
          meta: {
            title: '编辑版本(Android)',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值套餐
          path: '/RechargeCombo',
          name: "RechargeCombo",
          component: () => import('../views/operations/AppOperating/RechargeCombo.vue'),
          meta: {
            title: '充值套餐',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值套餐=>充值比例
          path: '/rechargeProportion',
          name: "rechargeProportion",
          component: () => import('../views/operations/AppOperating/rechargeProportion.vue'),
          meta: {
            title: '充值比例',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值套餐=>编辑充值套餐
          path: '/setrechargeProportion',
          name: "setrechargeProportion",
          component: () => import('../views/operations/AppOperating/setrechargeProportion.vue'),
          meta: {
            title: '编辑充值套餐',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值套餐=>新增充值套餐
          path: '/addrechargeProportion',
          name: "addrechargeProportion",
          component: () => import('../views/operations/AppOperating/addrechargeProportion.vue'),
          meta: {
            title: '新增充值套餐',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>会员套餐=>新增会员套餐
          path: '/addMembersPackage',
          name: "addMembersPackage",
          component: () => import('../views/operations/AppOperating/addMembersPackage.vue'),
          meta: {
            title: '新增会员套餐',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>会员套餐=>编辑会员套餐
          path: '/setMembersPackage',
          name: "setMembersPackage",
          component: () => import('../views/operations/AppOperating/setMembersPackage.vue'),
          meta: {
            title: '编辑会员套餐',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值通道
          path: '/RechargeHatchway',
          name: "RechargeHatchway",
          component: () => import('../views/operations/AppOperating/RechargeHatchway.vue'),
          meta: {
            title: '充值通道',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>充值=>充值通道=>编辑充值通道
          path: '/setRechargeHatchway',
          name: "setRechargeHatchway",
          component: () => import('../views/operations/AppOperating/setRechargeHatchway.vue'),
          meta: {
            title: '编辑充值通道',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>提现=>提现项
          path: '/withdrawItems',
          name: "withdrawItems",
          component: () => import('../views/operations/AppOperating/withdrawItems.vue'),
          meta: {
            title: '提现项',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>提现=>提现审核
          path: '/withdrawAudit',
          name: "withdrawAudit",
          component: () => import('../views/operations/AppOperating/withdrawAudit.vue'),
          meta: {
            title: '提现审核',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>任务=>福利任务
          path: '/welfareTask',
          name: "welfareTask",
          component: () => import('../views/operations/AppOperating/welfareTask.vue'),
          meta: {
            title: '福利任务',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>任务=>转盘活动
          path: '/RotaryActivities',
          name: "RotaryActivities",
          component: () => import('../views/operations/AppOperating/RotaryActivities.vue'),
          meta: {
            title: '转盘活动',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>任务=>编辑转盘活动
          path: '/setRotaryActivities',
          name: "setRotaryActivities",
          component: () => import('../views/operations/AppOperating/setRotaryActivities.vue'),
          meta: {
            title: '编辑转盘活动',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>消息推送
          path: '/PushNotification',
          name: "PushNotification",
          component: () => import('../views/operations/AppOperating/PushNotification.vue'),
          meta: {
            title: '消息推送',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>消息推送=>辅助推送通道
          path: '/auxiliaryPushNotification',
          name: "auxiliaryPushNotification",
          component: () => import('../views/operations/AppOperating/auxiliaryPushNotification.vue'),
          meta: {
            title: '辅助推送通道',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>消息推送=>新增消息推送
          path: '/addPushNotification',
          name: "addPushNotification",
          component: () => import('../views/operations/AppOperating/addPushNotification.vue'),
          meta: {
            title: '新增消息推送',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>消息推送=>编辑消息推送
          path: '/setPushNotification',
          name: "setPushNotification",
          component: () => import('../views/operations/AppOperating/setPushNotification.vue'),
          meta: {
            title: '编辑消息推送',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>打赏礼物
          path: '/ExceptionalGifts',
          name: "ExceptionalGifts",
          component: () => import('../views/operations/AppOperating/ExceptionalGifts.vue'),
          meta: {
            title: '打赏礼物',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>打赏礼物=>新增礼物
          path: '/addExceptionalGifts',
          name: "addExceptionalGifts",
          component: () => import('../views/operations/AppOperating/addExceptionalGifts.vue'),
          meta: {
            title: '新增礼物',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>App运营=>打赏礼物=>编辑礼物
          path: '/setExceptionalGifts',
          name: "setExceptionalGifts",
          component: () => import('../views/operations/AppOperating/setExceptionalGifts.vue'),
          meta: {
            title: '编辑礼物',
            toplevel: 'AppOperating'
          }
        },
        { //运营=>公众号运营=>应用=>广告位
          path: '/OAOU_AdvertisingPosition',
          name: "OAOU_AdvertisingPosition",
          component: () => import('../views/operations/OA_Operating/OAOU_AdvertisingPosition.vue'),
          meta: {
            title: '广告位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>广告位=>广告列表
          path: '/OAOU_AdvertisingPositionList',
          name: "OAOU_AdvertisingPositionList",
          component: () => import('../views/operations/OA_Operating/OAOU_AdvertisingPositionList.vue'),
          meta: {
            title: '广告列表',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>广告位=>广告列表=>新增广告
          path: '/addAdvertising_OAOU',
          name: "addAdvertising_OAOU",
          component: () => import('../views/operations/OA_Operating/addAdvertising_OAOU.vue'),
          meta: {
            title: '新增广告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>广告位=>广告列表=>编辑广告
          path: '/setAdvertising_OAOU',
          name: "setAdvertising_OAOU",
          component: () => import('../views/operations/OA_Operating/setAdvertising_OAOU.vue'),
          meta: {
            title: '编辑广告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>首页频道
          path: '/OAOU_HomePageChannel',
          name: "OAOU_HomePageChannel",
          component: () => import('../views/operations/OA_Operating/OAOU_HomePageChannel.vue'),
          meta: {
            title: '编辑广告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>Banner列表
          path: '/OAOU_BannerList',
          name: "OAOU_BannerList",
          component: () => import('../views/operations/OA_Operating/OAOU_BannerList.vue'),
          meta: {
            title: 'Banner列表',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>Banner列表=>新增Banner
          path: '/addOAOU_BannerList',
          name: "addOAOU_BannerList",
          component: () => import('../views/operations/OA_Operating/addOAOU_BannerList.vue'),
          meta: {
            title: '新增Banner',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>Banner列表=>编辑Banner
          path: '/setOAOU_BannerList',
          name: "setOAOU_BannerList",
          component: () => import('../views/operations/OA_Operating/setOAOU_BannerList.vue'),
          meta: {
            title: '编辑Banner',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>图文导航
          path: '/OAOU_ImgTextNavigation',
          name: "OAOU_ImgTextNavigation",
          component: () => import('../views/operations/OA_Operating/OAOU_ImgTextNavigation.vue'),
          meta: {
            title: '图文导航',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>图文导航=>新增图文导航
          path: '/addOAOU_ImgTextNavigation',
          name: "addOAOU_ImgTextNavigation",
          component: () => import('../views/operations/OA_Operating/addOAOU_ImgTextNavigation.vue'),
          meta: {
            title: '新增图文导航',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>图文导航=>编辑图文导航
          path: '/setOAOU_ImgTextNavigation',
          name: "setOAOU_ImgTextNavigation",
          component: () => import('../views/operations/OA_Operating/setOAOU_ImgTextNavigation.vue'),
          meta: {
            title: '编辑图文导航',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>图文导航=>自定义导航=>管理书籍
          path: '/OAO_itn_manageBooks',
          name: "OAO_itn_manageBooks",
          component: () => import('../views/operations/OA_Operating/OAO_itn_manageBooks.vue'),
          meta: {
            title: '管理书籍',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位
          path: '/OAOU_FeaturedFirst',
          name: "OAOU_FeaturedFirst",
          component: () => import('../views/operations/OA_Operating/OAOU_FeaturedFirst.vue'),
          meta: {
            title: '推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>新增推荐位
          path: '/addOAOU_FeaturedFirst',
          name: "addOAOU_FeaturedFirst",
          component: () => import('../views/operations/OA_Operating/addOAOU_FeaturedFirst.vue'),
          meta: {
            title: '新增推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>编辑推荐位
          path: '/setOAOU_FeaturedFirst',
          name: "setOAOU_FeaturedFirst",
          component: () => import('../views/operations/OA_Operating/setOAOU_FeaturedFirst.vue'),
          meta: {
            title: '编辑推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>推荐作品
          path: '/OAOU_RecommendedWork',
          name: "OAOU_RecommendedWork",
          component: () => import('../views/operations/OA_Operating/OAOU_RecommendedWork.vue'),
          meta: {
            title: '推荐作品',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>发现页=>推荐作品
          path: '/OAOU_RecommendedWork_fx',
          name: "OAOU_RecommendedWork_fx",
          component: () => import('../views/operations/OA_Operating/OAOU_RecommendedWork_fx.vue'),
          meta: {
            title: '推荐作品',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>发现页=>新增推荐位
          path: '/addOAOU_FeaturedFirst_fx',
          name: "addOAOU_FeaturedFirst_fx",
          component: () => import('../views/operations/OA_Operating/addOAOU_FeaturedFirst_fx.vue'),
          meta: {
            title: '新增推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>推荐位=>发现页=>编辑推荐位
          path: '/setOAOU_FeaturedFirst_fx',
          name: "setOAOU_FeaturedFirst_fx",
          component: () => import('../views/operations/OA_Operating/setOAOU_FeaturedFirst_fx.vue'),
          meta: {
            title: '编辑推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>重点推荐位
          path: '/OAOU_highlyRecommended',
          name: "OAOU_highlyRecommended",
          component: () => import('../views/operations/OA_Operating/OAOU_highlyRecommended.vue'),
          meta: {
            title: '重点推荐位',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>公告管理
          path: '/OAOU_AnnouncementOfTheManagement',
          name: "OAOU_AnnouncementOfTheManagement",
          component: () => import('../views/operations/OA_Operating/OAOU_AnnouncementOfTheManagement.vue'),
          meta: {
            title: '公告管理',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>公告管理=>新增公告
          path: '/addOAOU_AnnouncementOfTheManagement',
          name: "addOAOU_AnnouncementOfTheManagement",
          component: () => import('../views/operations/OA_Operating/addOAOU_AnnouncementOfTheManagement.vue'),
          meta: {
            title: '新增公告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>应用=>公告管理=>编辑公告
          path: '/setOAOU_AnnouncementOfTheManagement',
          name: "setOAOU_AnnouncementOfTheManagement",
          component: () => import('../views/operations/OA_Operating/setOAOU_AnnouncementOfTheManagement.vue'),
          meta: {
            title: '编辑公告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>自定义菜单
          path: '/OAM_customizeMenus',
          name: "OAM_customizeMenus",
          component: () => import('../views/operations/OA_Operating/OAM_customizeMenus.vue'),
          meta: {
            title: '自定义菜单',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>自动回复
          path: '/OAM_autoResponse',
          name: "OAM_autoResponse",
          component: () => import('../views/operations/OA_Operating/OAM_autoResponse.vue'),
          meta: {
            title: '自动回复',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>自动回复=>新增关键词
          path: '/addOAM_autoResponse',
          name: "addOAM_autoResponse",
          component: () => import('../views/operations/OA_Operating/addOAM_autoResponse.vue'),
          meta: {
            title: '新增关键词',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>群发消息
          path: '/OAM_GroupSentMessage',
          name: "OAM_GroupSentMessage",
          component: () => import('../views/operations/OA_Operating/OAM_GroupSentMessage.vue'),
          meta: {
            title: '群发消息',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>群发消息=>新建消息
          path: '/addOAM_GroupSentMessage',
          name: "addOAM_GroupSentMessage",
          component: () => import('../views/operations/OA_Operating/addOAM_GroupSentMessage.vue'),
          meta: {
            title: '新建消息',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>群发消息=>编辑消息
          path: '/setOAM_GroupSentMessage',
          name: "setOAM_GroupSentMessage",
          component: () => import('../views/operations/OA_Operating/setOAM_GroupSentMessage.vue'),
          meta: {
            title: '编辑消息',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>生成代码
          path: '/OAM_generatingCode',
          name: "OAM_generatingCode",
          component: () => import('../views/operations/OA_Operating/OAM_generatingCode.vue'),
          meta: {
            title: '生成代码',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>智能推送
          path: '/OAM_IntelligentPush',
          name: "OAM_IntelligentPush",
          component: () => import('../views/operations/OA_Operating/OAM_IntelligentPush.vue'),
          meta: {
            title: '智能推送',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>充值
          path: '/OAO_recharge',
          name: "OAO_recharge",
          component: () => import('../views/operations/OA_Operating/OAO_recharge.vue'),
          meta: {
            title: '充值',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>充值=>新增充值
          path: '/addOAO_recharge',
          name: "addOAO_recharge",
          component: () => import('../views/operations/OA_Operating/addOAO_recharge.vue'),
          meta: {
            title: '新增充值',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公众号管理=>充值=>编辑充值
          path: '/setOAO_recharge',
          name: "setOAO_recharge",
          component: () => import('../views/operations/OA_Operating/setOAO_recharge.vue'),
          meta: {
            title: '编辑充值',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>分销作品列表
          path: '/OAOD_productions',
          name: "OAOD_productions",
          component: () => import('../views/operations/OA_Operating/OAOD_productions.vue'),
          meta: {
            title: '分销作品列表',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>分销作品列表=>作品推广
          path: '/OA_workSpread',
          name: "OA_workSpread",
          component: () => import('../views/operations/OA_Operating/OA_workSpread.vue'),
          meta: {
            title: '作品推广',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>推广链接
          path: '/OAOD_ToPromoteLinks',
          name: "OAOD_ToPromoteLinks",
          component: () => import('../views/operations/OA_Operating/OAOD_ToPromoteLinks.vue'),
          meta: {
            title: '推广链接',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>推广链接=>订单明细
          path: '/OAOD_orderDetails',
          name: "OAOD_orderDetails",
          component: () => import('../views/operations/OA_Operating/OAOD_orderDetails.vue'),
          meta: {
            title: '订单明细',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>推广链接=>粉丝列表
          path: '/OAOD_fansList',
          name: "OAOD_fansList",
          component: () => import('../views/operations/OA_Operating/OAOD_fansList.vue'),
          meta: {
            title: '粉丝列表',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>分销推广=>推广素材
          path: '/OAOD_material',
          name: "OAOD_material",
          component: () => import('../views/operations/OA_Operating/OAOD_material.vue'),
          meta: {
            title: '推广素材',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道列表
          path: '/OAOC_ChannelList',
          name: "OAOC_ChannelList",
          component: () => import('../views/operations/OA_Operating/OAOC_ChannelList.vue'),
          meta: {
            title: '渠道列表',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道列表=>新增渠道
          path: '/addOAOC_Channe',
          name: "addOAOC_Channe",
          component: () => import('../views/operations/OA_Operating/addOAOC_Channe.vue'),
          meta: {
            title: '新增渠道',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道列表=>编辑渠道
          path: '/setOAOC_Channe',
          name: "setOAOC_Channe",
          component: () => import('../views/operations/OA_Operating/setOAOC_Channe.vue'),
          meta: {
            title: '编辑渠道',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道列表=>数据统计
          path: '/OAOC_dataStatistics',
          name: "OAOC_dataStatistics",
          component: () => import('../views/operations/OA_Operating/OAOC_dataStatistics.vue'),
          meta: {
            title: '数据统计',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道结算单
          path: '/OAOC_ChannelSettlementStatement',
          name: "OAOC_ChannelSettlementStatement",
          component: () => import('../views/operations/OA_Operating/OAOC_ChannelSettlementStatement.vue'),
          meta: {
            title: '渠道结算单',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>渠道打款
          path: '/OAOC_ChannelsToPlayMoney',
          name: "OAOC_ChannelsToPlayMoney",
          component: () => import('../views/operations/OA_Operating/OAOC_ChannelsToPlayMoney.vue'),
          meta: {
            title: '渠道打款',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>扣量设置
          path: '/OAOD_BuckleAmount',
          name: "OAOD_BuckleAmount",
          component: () => import('../views/operations/OA_Operating/OAOD_BuckleAmount.vue'),
          meta: {
            title: '扣量设置',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公告管理
          path: '/OAOD_AnnouncementOfTheManagement',
          name: "OAOD_AnnouncementOfTheManagement",
          component: () => import('../views/operations/OA_Operating/OAOD_AnnouncementOfTheManagement.vue'),
          meta: {
            title: '公告管理',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公告管理=>新增公告
          path: '/addOAOD_Announcement',
          name: "addOAOD_Announcement",
          component: () => import('../views/operations/OA_Operating/addOAOD_Announcement.vue'),
          meta: {
            title: '新增公告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>公告管理=>编辑公告
          path: '/setOAOD_Announcement',
          name: "setOAOD_Announcement",
          component: () => import('../views/operations/OA_Operating/setOAOD_Announcement.vue'),
          meta: {
            title: '编辑公告',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>公众号运营=>推广域名
          path: '/OAOD_ExtendDomainName',
          name: "OAOD_ExtendDomainName",
          component: () => import('../views/operations/OA_Operating/OAOD_ExtendDomainName.vue'),
          meta: {
            title: '推广域名',
            toplevel: 'OA_Operating'
          }
        },
        { //运营=>PC运营=>应用=>广告位
          path: '/PCOU_AdvertisingPosition',
          name: "PCOU_AdvertisingPosition",
          component: () => import('../views/operations/PC_Operating/PCOU_AdvertisingPosition.vue'),
          meta: {
            title: '广告位',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>广告位=>广告列表
          path: '/PCOU_AdvertisingPositionList',
          name: "PCOU_AdvertisingPositionList",
          component: () => import('../views/operations/PC_Operating/PCOU_AdvertisingPositionList.vue'),
          meta: {
            title: '广告列表',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>广告位=>广告列表=>新增广告
          path: '/addAdvertising_PCOU',
          name: "addAdvertising_PCOU",
          component: () => import('../views/operations/PC_Operating/addAdvertising_PCOU.vue'),
          meta: {
            title: '新增广告',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>广告位=>广告列表=>编辑广告
          path: '/setAdvertising_PCOU',
          name: "setAdvertising_PCOU",
          component: () => import('../views/operations/PC_Operating/setAdvertising_PCOU.vue'),
          meta: {
            title: '编辑广告',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>banner列表
          path: '/PCOU_BannerList',
          name: "PCOU_BannerList",
          component: () => import('../views/operations/PC_Operating/PCOU_BannerList.vue'),
          meta: {
            title: 'banner列表',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>banner列表=>编辑banner
          path: '/setPCOU_BannerList',
          name: "setPCOU_BannerList",
          component: () => import('../views/operations/PC_Operating/setPCOU_BannerList.vue'),
          meta: {
            title: '编辑banner',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>banner列表=>新增banner
          path: '/addPCOU_BannerList',
          name: "addPCOU_BannerList",
          component: () => import('../views/operations/PC_Operating/addPCOU_BannerList.vue'),
          meta: {
            title: '新增banner',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理
          path: '/PCOU_AnnouncementOfTheManagement',
          name: "PCOU_AnnouncementOfTheManagement",
          component: () => import('../views/operations/PC_Operating/PCOU_AnnouncementOfTheManagement.vue'),
          meta: {
            title: '公告管理',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>新增公告
          path: '/addPCOU_Announcement',
          name: "addPCOU_Announcement",
          component: () => import('../views/operations/PC_Operating/addPCOU_Announcement.vue'),
          meta: {
            title: '新增公告',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>编辑公告
          path: '/setPCOU_Announcement',
          name: "setPCOU_Announcement",
          component: () => import('../views/operations/PC_Operating/setPCOU_Announcement.vue'),
          meta: {
            title: '编辑公告',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>推荐位
          path: '/PCOU_FeaturedFirst',
          name: "PCOU_FeaturedFirst",
          component: () => import('../views/operations/PC_Operating/PCOU_FeaturedFirst.vue'),
          meta: {
            title: '推荐位',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>推荐位=>新增首页推荐位
          path: '/addPCOUFeaturedFirst_sy',
          name: "addPCOUFeaturedFirst_sy",
          component: () => import('../views/operations/PC_Operating/addPCOUFeaturedFirst_sy.vue'),
          meta: {
            title: '新增推荐位',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>推荐位=>编辑首页推荐位
          path: '/setPCOUFeaturedFirst_sy',
          name: "setPCOUFeaturedFirst_sy",
          component: () => import('../views/operations/PC_Operating/setPCOUFeaturedFirst_sy.vue'),
          meta: {
            title: '编辑推荐位',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>公告管理=>推荐位=>推荐作品
          path: '/PCOU_RecommendedWork',
          name: "PCOU_RecommendedWork",
          component: () => import('../views/operations/PC_Operating/PCOU_RecommendedWork.vue'),
          meta: {
            title: '推荐作品',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>友情链接
          path: '/PCOU_highlyRecommended',
          name: "PCOU_highlyRecommended",
          component: () => import('../views/operations/PC_Operating/PCOU_highlyRecommended.vue'),
          meta: {
            title: '友情链接',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>应用=>底部导航
          path: '/PCOU_bottomNavigation',
          name: "PCOU_bottomNavigation",
          component: () => import('../views/operations/PC_Operating/PCOU_bottomNavigation.vue'),
          meta: {
            title: '底部导航',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>引导客户端
          path: '/PCOBootstrapClient',
          name: "PCOBootstrapClient",
          component: () => import('../views/operations/PC_Operating/PCOBootstrapClient.vue'),
          meta: {
            title: '引导客户端',
            toplevel: 'PC_Operating'
          }
        },
        { //运营=>PC运营=>TDK设置
          path: '/PCOTDKSet',
          name: "PCOTDKSet",
          component: () => import('../views/operations/PC_Operating/PCOTDKSet.vue'),
          meta: {
            title: 'TDK设置',
            toplevel: 'PC_Operating'
          }
        },
        { //系统成员=>角色管理
          path: '/roleMangement',
          name: "roleMangement",
          component: () => import('../views/MemberSystem/roleMangement.vue'),
          meta: {
            title: '角色管理',
            toplevel: 'tl_MemberSystem'
          }
        },
        { //系统成员=>角色管理=>授权
          path: '/authorization',
          name: "authorization",
          component: () => import('../views/MemberSystem/authorization.vue'),
          meta: {
            title: '授权',
            toplevel: 'tl_MemberSystem'
          }
        },
        { //系统成员=>系统成员
          path: '/MemberSystem',
          name: "MemberSystem",
          component: () => import('../views/MemberSystem/MemberSystem.vue'),
          meta: {
            title: '系统成员',
            toplevel: 'tl_MemberSystem'
          }
        },
      ]
    },
    { // 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
      meta: {
        title: '登录'
      }
    }
  ]
})

// 全局路由守卫(跳转前)
vueRouter.beforeEach(function (to, from, next) {
  store.commit('setTabBarList', {
    val: to,
    type: 'add'
  })
  next()
})

// 全局路由守卫(跳转后)
vueRouter.afterEach(function (to) {

})

export default vueRouter