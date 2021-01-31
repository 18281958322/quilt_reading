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
          key: "/data",
          icon: "el-icon-user"
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
          key: "/usercomment",
          icon: "el-icon-chat-dot-square",
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
          children: [ {
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
      tl_setup: [
        {
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
          title: "短信服务",
          key: "/setup",
          icon: "el-icon-user"
        }
      ],
      tl_distribution: [ // 分销
        {
          key: "tld_data",
          title: "数据",
          icon: 'el-icon-s-marketing',
          children: [
            {
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
          children: [
            {
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
          children: [
            {
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
          children: [
            {
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