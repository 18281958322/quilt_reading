import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbarStatus: true
  },
  mutations: {
    /**
     * 更改导航栏状态
     * @val { boolean } true=>显示，false=>隐藏 
     */
    setNavbarStatus(state, { val }) {
      state.navbarStatus = val
    },
  },
  actions: {

  }
})
