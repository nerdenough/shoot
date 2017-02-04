<template>
  <div class="settings">
    <settings-toggle v-bind:toggle="this.toggleAws" v-bind:visible="this.aws" :title="'AWS Config'"></settings-toggle>
    <aws-settings v-if="this.aws"></aws-settings>
  </div>
</template>

<script>
import SettingsToggle from './Settings/SettingsToggle';
import AwsSettings from './Settings/AwsSettings';

function toggleAws() {
  this.aws = !this.aws;
}

export default {
  name: 'settings',
  components: {
    SettingsToggle,
    AwsSettings
  },
  data: () => ({
    aws: true
  }),
  methods: {
    toggleAws
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.settings {
  background: $primary;
  flex-grow: 1;
  color: white;
  padding: $spacing-medium;
}
</style>
