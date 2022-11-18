import Vue from 'vue';
import sibUI from 'sibionics-ui';
import App from './App';
import router from './router';
import store from './store';

// 引入插件集合
import './plugins';

// 引入样式表集合
import './assets/styles';

Vue.use(sibUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
