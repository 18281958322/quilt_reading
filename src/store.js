import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/router'
import {
  Message
} from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBarList: [], //页面打开记录(并不是路由history记录)
    sidebarCollapse: false, //侧边收起状态
    sideDefaultActive: '/userlist', //侧边栏默认选中项
    sidebarAllDatas: { // 侧边栏总目录配置 key: 菜单唯一标识; title: 菜单显示名称; icon: 菜单显示图标; children: 下级菜单
      tl_home: [ // 首页
        {
          title: "首页",
          key: "/allindex",
          icon: "el-icon-user"
        }
      ],
      tl_data: [ // 数据
        {
          title: "统计",
          key: "/data_data",
          icon: "el-icon-user",
          children: [{
            title: "用户统计",
            key: "/user_data",
            icon: "el-icon-user",
          }, {
            title: "内容统计",
            key: "/content_data",
            icon: "el-icon-user",
          }, {
            title: "订单统计",
            key: "/order_data",
            icon: "el-icon-user",
            children: [{
              title: "app",
              key: "/app_data",
              icon: "el-icon-user",
            }, {
              title: "公众号",
              key: "/official_data",
              icon: "el-icon-user",
            }, {
              title: "pc",
              key: "/pc_data",
              icon: "el-icon-user",
            }]
          }, {
            title: "提现统计",
            key: "/withdrawal_data",
            icon: "el-icon-user",
          }, {
            title: "分销统计",
            key: "/distribution_data",
            icon: "el-icon-user",
          }, ]
        },
        {
          title: "记录",
          key: "/record_data",
          icon: "el-icon-user",
          children: [{
            title: "订单明细",
            key: "/order_record",
            icon: "el-icon-user",
          }, {
            title: "消费明细",
            key: "/consumption_record",
            icon: "el-icon-user",
          }, {
            title: "扣量明细",
            key: "/Deduction_record",
            icon: "el-icon-user",
          }, {
            title: "阅读明细",
            key: "/read_record",
            icon: "el-icon-user",
          }, ]
        }
      ],
      tl_content: [ // 内容
        {
          title: "小说",
          key: "/novel",
          icon: "el-icon-user",
        },
        {
          title: "漫画",
          key: "/comics",
          icon: "el-icon-chat-dot-square",
        },
        {
          title: "听书",
          key: "/books",
          icon: "el-icon-edit-outline",
        }
      ],
      tl_user: [ // 用户
        //修改侧边栏数据
        {
          title: "用户列表",
          key: "/userlist",
          icon: "el-icon-user",
        },
        {
          title: "用户评论",
          key: "/User_comments",
          icon: "el-icon-chat-dot-square",
          children: [{
            title: "小说",
            key: "/usercomment",
            icon: "el-icon-user",
          }, {
            title: "漫画",
            key: "/cartoon",
            icon: "el-icon-user",
          }, {
            title: "听书",
            key: "/books",
            icon: "el-icon-user",
          }]
        },
        {
          title: "用户反馈",
          key: "/customerfeedback",
          icon: "el-icon-edit-outline",
        },
      ],
      tl_author: [ // 作者
        {
          title: "新闻公告",
          key: "/author",
          icon: "el-icon-user",
        },
        {
          title: "作者列表",
          key: "1",
          icon: "el-icon-user",
          children: [{
            title: "作者管理",
            key: "/penster",
            icon: "el-icon-user",
          }, {
            title: "作者审核",
            key: "/toexamine",
            icon: "el-icon-user"
          }, ]
        },
        {
          title: "作品列表",
          key: "2",
          icon: "el-icon-user",
          children: [{
            title: "作品审核",
            key: "/works",
            icon: "el-icon-user"
          }]
        },
        {
          title: "稿酬",
          key: "/remuneration",
          icon: "el-icon-user"
        },
        {
          title: "责编",
          key: "/editorincharge",
          icon: "el-icon-user"
        }
      ],
      tl_setup: [{
          title: "基础信息",
          key: "/basics",
          icon: "el-icon-user"
        },
        {
          title: "客户信息",
          key: "/content",
          icon: "el-icon-user"
        },
        {
          title: "图片存储设置",
          key: "/operations",
          icon: "el-icon-user"
        },
        {
          title: "接口密匙",
          key: "/setup",
          icon: "el-icon-user"
        }
      ],
      tl_distribution: [ // 分销
        {
          key: "tld_data",
          title: "数据",
          icon: 'el-icon-s-marketing',
          children: [{
              key: "/ordersReceiveStatistics",
              title: "订单统计",
              icon: 'el-icon-s-marketing',
            },
            {
              key: "/userStatistics",
              title: "用户统计",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/platformStatistics",
              title: "平台统计",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/contentStatistics",
              title: "内容统计",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/BuckleQuantityStatistics",
              title: "扣量统计",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/orderDetails",
              title: "订单明细",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/fansDetails",
              title: "粉丝明细",
              icon: 'el-icon-s-marketing'
            }
          ]
        },
        {
          key: "tld_spread",
          title: "推广",
          icon: 'el-icon-s-marketing',
          children: [{
              key: "/ListOfWorks",
              title: "作品列表",
              icon: 'el-icon-s-marketing',
            },
            {
              key: "/ToPromoteLinks",
              title: "推广链接",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/CommonlyUsedLinks",
              title: "常用链接",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/promotionActivity",
              title: "促销活动",
              icon: 'el-icon-s-marketing'
            }
          ]
        },
        {
          key: "tld_channel",
          title: "渠道",
          icon: 'el-icon-s-marketing',
          children: [{
              key: "/ChannelList",
              title: "渠道列表",
              icon: 'el-icon-s-marketing',
            },
            {
              key: "/ChannelSettlementStatement",
              title: "渠道结算单",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/ChannelsToPlayMoney",
              title: "渠道打款",
              icon: 'el-icon-s-marketing'
            }
          ]
        },
        {
          key: "tld_manage",
          title: "管理",
          icon: 'el-icon-s-marketing',
          children: [{
              key: "/BuckleAmount",
              title: "扣量设置",
              icon: 'el-icon-s-marketing',
            },
            {
              key: "/AnnouncementOfTheManagement",
              title: "公告管理",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/materialManagement",
              title: "素材管理",
              icon: 'el-icon-s-marketing'
            },
            {
              key: "/EventPackageManagement",
              title: "活动套餐管理",
              icon: 'el-icon-s-marketing'
            }
          ]
        },
      ],
      tl_app: [ //app设置
        {
          title: "功能设置",
          key: "/goon",
          icon: "el-icon-user"
        },
        {
          title: "App应用",
          key: "/appapplication",
          icon: "el-icon-user"
        }
      ],
      tl_account: [ //公众号设置
        {
          title: "配置管理",
          key: "/sign",
          icon: "el-icon-user"
        },
        {
          title: "签到设置",
          key: "/configure",
          icon: "el-icon-user"
        },
        {
          title: "支付设置",
          key: "/payment",
          icon: "el-icon-user"
        },
        {
          title: "wap站支付设置",
          key: "/wap",
          icon: "el-icon-user"
        }
      ],
      tl_pc: [ //pc设置
        {
          title: "基础设置",
          key: "/basics_item",
          icon: "el-icon-user"
        },
        {
          title: "第三方登录设置",
          key: "/threelogin",
          icon: "el-icon-user"
        },
        {
          title: "第三方支付设置",
          key: "/tripartitepayment",
          icon: "el-icon-user"
        }
      ],
      GeneralOperating: [ //通用运营
        {
          title: "热搜热词",
          key: "/GOHotHotWords",
          icon: "el-icon-s-marketing"
        },
        {
          title: "排行榜",
          key: "/GO_rankingList",
          icon: "el-icon-s-marketing"
        },
      ],
      AppOperating: [ //App运营
        {
          title: "应用",
          key: "/AoUse",
          icon: "el-icon-s-marketing",
          children: [{
              title: "启动页",
              key: "/BootPage",
            },
            {
              title: "广告位",
              key: "/AdvertisingPosition",
            },
            {
              title: "首页频道",
              key: "/HomePageChannel",
            },
            {
              title: "Banner列表",
              key: "/BannerList",
            },
            {
              title: "图文导航",
              key: "/ImgTextNavigation",
            },
            {
              title: "推荐位",
              key: "/FeaturedFirst",
            },
            {
              title: "重点推荐作品",
              key: "/highlyRecommended",
            },
            {
              title: "公告管理",
              key: "/AnnouncementManagement",
            },
            {
              title: "常见问题",
              key: "/commonProblem",
            },
            {
              title: "版本控制",
              key: "/versionControl",
            },
          ]
        },
        {
          title: "充值",
          key: "/recharge",
          icon: "el-icon-s-marketing",
          children: [{
              title: "充值套餐",
              key: "/RechargeCombo",
            },
            {
              title: "充值通道",
              key: "/RechargeHatchway",
            },
          ]
        },
        {
          title: "提现",
          key: "/withdrawDeposit",
          icon: "el-icon-s-marketing",
          children: [{
              title: "提现项",
              key: "/withdrawItems",
            },
            {
              title: "提现审核",
              key: "/withdrawAudit",
            },
          ]
        },
        {
          title: "任务",
          key: "/Task",
          icon: "el-icon-s-marketing",
          children: [{
              title: "福利任务",
              key: "/welfareTask",
            },
            {
              title: "转盘活动",
              key: "/RotaryActivities",
            },
          ]
        },
        {
          title: "消息推送",
          key: "/PushNotification",
          icon: "el-icon-s-marketing",
        },
        {
          title: "打赏礼物",
          key: "/ExceptionalGifts",
          icon: "el-icon-s-marketing",
        },
        {
          title: "分销推广",
          key: "/OAO_DistributionToPromote",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "分销作品列表",
              key: "/OAOD_productions",
            },
            {
              title: "推广链接",
              key: "/OAOD_ToPromoteLinks",
            },
            {
              title: "推广素材",
              key: "/OAOD_material",
            },
          ]
        },
        {
          title: "分销渠道",
          key: "/OAO_channelOfDistribution",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "渠道列表",
              key: "/OAOC_ChannelList",
            },
            {
              title: "渠道结算单",
              key: "/OAOC_ChannelSettlementStatement",
            },
            {
              title: "渠道打款",
              key: "/OAOC_ChannelsToPlayMoney",
            },
          ]
        },
        {
          title: "分销管理",
          key: "/OAO_DistributionManagement",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "扣量设置",
              key: "/OAOD_BuckleAmount",
            },
            {
              title: "公告管理",
              key: "/OAOD_AnnouncementOfTheManagement",
            },
            {
              title: "推广域名",
              key: "/OAOD_ExtendDomainName",
            },
          ]
        }
      ],
      OA_Operating: [ //公众号运营
        {
          title: "应用",
          key: "/OAOUse",
          icon: "el-icon-s-marketing",
          children: [{
              title: "广告位",
              key: "/OAOU_AdvertisingPosition",
            },
            {
              title: "首页频道",
              key: "/OAOU_HomePageChannel",
            },
            {
              title: "Banner列表",
              key: "/OAOU_BannerList",
            },
            {
              title: "图文导航",
              key: "/OAOU_ImgTextNavigation",
            },
            {
              title: "推荐位",
              key: "/OAOU_FeaturedFirst",
            },
            {
              title: "重点推荐作品",
              key: "/OAOU_highlyRecommended",
            },
            {
              title: "公告管理",
              key: "/OAOU_AnnouncementOfTheManagement",
            },
          ]
        },
        {
          title: "公众号管理",
          key: "/OA_Manager",
          icon: "el-icon-s-marketing",
          children: [{
              title: "自定义菜单",
              key: "/OAM_customizeMenus",
            },
            {
              title: "自动回复",
              key: "/OAM_autoResponse",
            },
            {
              title: "群发消息",
              key: "/OAM_GroupSentMessage",
            },
            {
              title: "生成代码",
              key: "/OAM_generatingCode ",
            },
            {
              title: "智能推送",
              key: "/OAM_IntelligentPush",
            },
          ]
        },
        {
          title: "充值",
          key: "/OAO_recharge",
          icon: "el-icon-s-marketing",
        },
        {
          title: "分销推广",
          key: "/OAO_DistributionToPromote",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "分销作品列表",
              key: "/OAOD_productions",
            },
            {
              title: "推广链接",
              key: "/OAOD_ToPromoteLinks",
            },
            {
              title: "推广素材",
              key: "/OAOD_material",
            },
          ]
        },
        {
          title: "分销渠道",
          key: "/OAO_channelOfDistribution",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "渠道列表",
              key: "/OAOC_ChannelList",
            },
            {
              title: "渠道结算单",
              key: "/OAOC_ChannelSettlementStatement",
            },
            {
              title: "渠道打款",
              key: "/OAOC_ChannelsToPlayMoney",
            },
          ]
        },
        {
          title: "分销管理",
          key: "/OAO_DistributionManagement",
          icon: "el-icon-s-marketing",
          children: [
            {
              title: "扣量设置",
              key: "/OAOD_BuckleAmount",
            },
            {
              title: "公告管理",
              key: "/OAOD_AnnouncementOfTheManagement",
            },
            {
              title: "推广域名",
              key: "/OAOD_ExtendDomainName",
            },
          ]
        }
      ],
      PC_Operating: [ // PC运营
        {
          title: "应用",
          key: "/PCOUse",
          icon: "el-icon-s-marketing",
          children: [{
              title: "广告位",
              key: "/PCOU_AdvertisingPosition",
            },
            {
              title: "Banner列表",
              key: "/PCOU_BannerList",
            },
            {
              title: "公告管理",
              key: "/PCOU_AnnouncementOfTheManagement",
            },
            {
              title: "推荐位",
              key: "/PCOU_FeaturedFirst",
            },
            {
              title: "友情链接",
              key: "/PCOU_highlyRecommended",
            },
            {
              title: "底部导航",
              key: "/PCOU_bottomNavigation",
            },
          ]
        },
        {
          title: "引导客户端",
          key: "/PCOBootstrapClient",
          icon: "el-icon-s-marketing",
        },
        {
          title: "TDK设置",
          key: "/PCOTDKSet",
          icon: "el-icon-s-marketing",
        },
      ]
    },
    sidebarAllDataActiv: 'tl_home', // 侧边栏总目录当前选中对象
    sidebarData: [], //侧边栏当前显示数据

  },
  mutations: {
    /**
     * 更改页面打开记录
     * @val { object } 路由对象
     * @type { string } 操作类型
     */
    setTabBarList(state, {
      val,
      type
    }) {
      if (type === 'add') {
        if (state.tabBarList.filter(item => item.path === val.path).length <= 0) {
          state.tabBarList.push(val)
        }
      } else {
        let index = state.tabBarList.findIndex(item => item.path === val.path)
        let brotherIndex = state.tabBarList.length <= 1 ? false : index - 1 < 0 ? index + 1 : index - 1
        if (router.currentRoute.path === val.path) {
          if (brotherIndex === false) {
            Message({
              showClose: true,
              message: '请至少打开一个页面 ！',
              type: 'warning',
              duration: 2000,
            })
            return
          }
          let {
            path,
            meta
          } = state.tabBarList[brotherIndex]
          if (state.sidebarAllDataActiv !== meta.toplevel) {
            state.sidebarAllDataActiv = meta.toplevel
            state.sidebarData = state.sidebarAllDatas[meta.toplevel]
          }
          state.sideDefaultActive = path
          router.push(path)
        }
        state.tabBarList.splice(index, 1)
      }
    },
    /**
     * 更改侧边栏展开状态
     * @val { boolean } true=>收起，false=>展开
     */
    setSidebarCollapse(state, {
      val
    }) {
      state.sidebarCollapse = val
    },
    /**
     * 更改侧边栏数据
     * @val { Object } 树形数组
     */
    setSidebarData(state, {
      val
    }) {
      state.sidebarAllDataActiv = val
      state.sidebarData = state.sidebarAllDatas[val]
    },
    /**
     * 更改侧边栏默认选中
     * @val { string } 菜单的唯一标识key
     */
    setSideDefaultActive(state, {
      val
    }) {
      state.sideDefaultActive = val
    },
  },
  actions: {

  }
})