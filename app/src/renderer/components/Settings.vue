<template>
  <div class="settings">
    <settings-toggle v-bind:toggle="this.toggle" v-bind:visible="this.visible"></settings-toggle>
    <aws-settings v-if="this.visible"></aws-settings>
  </div>
</template>

<script>
import SettingsToggle from './Settings/SettingsToggle';
import AwsSettings from './Settings/AwsSettings';

function toggle() {
  this.visible = !this.visible;
}

export default {
  name: 'settings',
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

.settings {
  background: darken($material-grey-primary, 4%);
  color: white;
}
</style>
