import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// px2rem 自适应
import 'lib-flexible'


// import VScaleScreen from 'v-scale-screen'
// Vue.use(VScaleScreen)


// 引入全局css
import '@/assets/scss/style.scss';
import '@/assets/scss/oneStyle.scss';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
