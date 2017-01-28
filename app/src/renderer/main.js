import Vue from 'vue';
import Electron from 'vue-electron';
import VueResource from 'vue-resource';

Vue.use(Electron);
Vue.use(VueResource);
Vue.config.debug = true;

import App from './App';

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app');
