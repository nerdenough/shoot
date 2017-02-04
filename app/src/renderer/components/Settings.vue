<template>
  <div class="settings">
    <div class="settings-forms">
      <settings-toggle v-bind:toggle="this.toggleAws" v-bind:visible="this.aws" :title="'AWS Config'"></settings-toggle>
      <aws-settings v-if="this.aws"></aws-settings>
    </div>
    <button-done :toggleSettings="toggleSettings"></button-done>
  </div>
</template>

<script>
import SettingsToggle from './Settings/SettingsToggle';
import AwsSettings from './Settings/AwsSettings';
import ButtonDone from './Settings/ButtonDone';

function toggleAws() {
  this.aws = !this.aws;
}

export default {
  name: 'settings',
  components: {
    SettingsToggle,
    AwsSettings,
    ButtonDone
  },
  data: () => ({
    aws: true
  }),
  methods: {
    toggleAws
  },
  props: {
    toggleSettings: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.settings {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: $primary;
  color: white;

  .settings-forms {
    padding: $spacing-medium;
    flex-grow: 1;
  }
}
</style>
