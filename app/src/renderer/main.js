import Vue from 'vue';
import Electron from 'vue-electron';
import VueResource from 'vue-resource';

Vue.use(Electron);
Vue.use(VueResource);
Vue.config.debug = true;

import App from './App';

export const images = [];

function onPaste(e) {
  e.clipboardData.types.map((type, i) => {
    if (type.match('Files')) {
      const blob = e.clipboardData.items[i].getAsFile();
      const url = window.URL;
      const source = url.createObjectURL(blob);
      images.push(source);
      console.log(images);
    }
  });
}

/* eslint-disable no-new */
new Vue({
  ...App,
  created: () => {
    document.addEventListener('paste', onPaste);
  }
}).$mount('#app');
