<template>
  <div class="app">
    <top-bar></top-bar>
    <preview v-if="!settings" :toggleSettings="toggleSettings"></preview>
    <settings v-if="settings"></settings>
  </div>
</template>

<script>
import Preview from './components/Preview';
import Settings from './components/Settings';
import TopBar from './components/TopBar';

function toggleSettings() {
  this.settings = !this.settings;
}

export default {
  components: {
    Preview,
    Settings,
    TopBar
  },
  data: () => ({
    settings: false
  }),
  methods: {
    toggleSettings
  }
};
</script>

<style lang="scss">
@import '../variables.scss';

html, body {
  margin: 0;
  padding: 0;
  font-family: Roboto, Calibri, Arial, sans-serif;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
