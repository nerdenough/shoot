<template>
  <div class="app">
    <preview></preview>
    <settings></settings>
  </div>
</template>

<script>
import Preview from './components/Preview';
import Settings from './components/Settings';

export default {
  components: { Preview, Settings }
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
  border-radius: 5px;
  overflow: hidden;
}
</style>
