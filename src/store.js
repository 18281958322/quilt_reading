import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBarList: [], //页面打开记录(并不是路由history记录)
    sidebarCollapse: false, //侧边收起状态
    sideDefaultActive: '/userlist', //侧边栏默认选中项
    sidebarData: [ //侧边栏数据
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
      }
    ],
  },
  mutations: {
    /**
     * 更改页面打开记录
     * @val { object } 路由对象
     * @type { string } 操作类型
     */
    setTabBarList(state, { val, type }) {
      switch(type) {
        case 'add':
          if (state.tabBarList.filter(item => item.path === val.path).length <= 0) {
            state.tabBarList.push(val)
          }; break
        case 'delete': state.tabBarList.splice(state.tabBarList.findIndex(item => item.path === val.path), 1); break
      }
    },
    /**
     * 更改侧边栏展开状态
     * @val { boolean } true=>收起，false=>展开
     */
    setSidebarCollapse(state, { val }) {
      state.sidebarCollapse = val
    },
    /**
     * 更改侧边栏展开状态
     * @val { boolean } true=>收起，false=>展开
     */
    setSidebarData(state, { val }) {
      state.sidebarData = val
    },
    /**
     * 更改侧边栏默认选中
     * @val { boolean } true=>收起，false=>展开
     */
    setSideDefaultActive(state, { val }) {
      state.sideDefaultActive = val
    },
  },
  actions: {

  }
})
