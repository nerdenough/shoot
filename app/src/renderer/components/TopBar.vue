<template>
  <div class="top-bar">
    <h1 class="app-title">Shoot</h1>
    <button class="close">
      <i class="fa fa-close"></i>
    </button>
  </div>
</template>

<script>
import SettingsToggle from './Settings/SettingsToggle';
import AwsSettings from './Settings/AwsSettings';

function toggle() {
  this.visible = !this.visible;
}

export default {
  name: 'top-bar',
  components: {
    SettingsToggle,
    AwsSettings
  },
  data: () => ({
    visible: false
  }),
  methods: {
    toggle
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.top-bar {
  background: $highlight;
  display: flex;
  flex-direction: row;
  min-height: 50px;
  height: 50px;
  -webkit-app-region: drag;

  .app-title {
    color: white;
    flex-grow: 1;
    font-size: 18px;
    font-weight: $bold;
    margin: 0;
    line-height: 50px;
    padding-left: $spacing-medium;
  }

  .close {
    width: 50px;
    background: transparent;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    border: none;
    -webkit-app-region: no-drag;

    &:hover {
      background: $highlight-dark;
    }
  }
}
</style>
