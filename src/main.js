import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import navbar from './components/navbar/index';
import sidebar from './components/sidebar/index';
import crumbs from './components/crumbs/index';
import topTabbar from './components/topTabbar/index';
import './assets/css/global.scss';
import './assets/font/iconfont.css';
import echarts from 'echarts';

Vue.use(ElementUI);
Vue.config.productionTip = false

// 注册全局组件
Vue.component('navbar', navbar);
Vue.component('sidebar', sidebar)
Vue.component('crumbs', crumbs)
Vue.component('topTabbar', topTabbar)
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
