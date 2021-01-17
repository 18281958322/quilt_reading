import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbarStatus: true, //导航栏状态
    crumbStatus: true, //面包屑状态
  },
  mutations: {
    /**
     * 更改导航栏状态
     * @val { boolean } true=>显示，false=>隐藏 
     */
    setNavbarStatus(state, { val }) {
      state.navbarStatus = val
    },
    /**
     * 更改面包屑状态
     * @val { boolean } true=>显示，false=>隐藏 
     */
    setCrumbStatus(state, { val }) {
      state.crumbStatus = val
    },
  },
  actions: {

  }
})
