import Vue from 'vue';
import Electron from 'vue-electron';
import VueResource from 'vue-resource';
import shortid from 'shortid';

Vue.use(Electron);
Vue.use(VueResource);
Vue.config.debug = true;

import App from './App';

export let images = [];

export function deleteImage(index) {
  images.splice(index, 1);
}

function onPaste(e) {
  e.clipboardData.types.map((type, i) => {
    if (type.match('Files')) {
      const blob = e.clipboardData.items[i].getAsFile();
      const url = window.URL;
      const ext = blob.type.split('/')[1];
      images.push({
        blob,
        source: url.createObjectURL(blob),
        title: `${shortid.generate()}.${ext}`,
        uploading: false
      });
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
