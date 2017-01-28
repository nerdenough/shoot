<template>
  <div class="app">
    <settings></settings>
  </div>
</template>

<script>
import Settings from './components/Settings';

export default {
  components: { Settings }
};
</script>

<style lang="scss">
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
  width: 100%;
  height: 100%;
  background: white;
}
</style>
