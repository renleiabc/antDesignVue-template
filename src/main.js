/*
 * @Author: abc
 * @Date: 2020-11-06 13:07:04
 * @LastEditors: abc
 * @LastEditTime: 2020-11-06 13:09:32
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
