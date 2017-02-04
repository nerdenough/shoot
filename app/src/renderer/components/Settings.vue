<template>
  <div class="settings">
    <div class="settings-forms">
      <settings-toggle v-bind:toggle="this.toggleGeneral" v-bind:visible="this.general" :title="'General'"></settings-toggle>
      <settings-toggle v-bind:toggle="this.toggleAws" v-bind:visible="this.aws" :title="'Amazon S3'"></settings-toggle>
      <aws-settings v-if="this.aws"></aws-settings>
    </div>
    <by-line></by-line>
    <button-done :toggleSettings="toggleSettings"></button-done>
  </div>
</template>

<script>
import SettingsToggle from './Settings/SettingsToggle';
import AwsSettings from './Settings/AwsSettings';
import ButtonDone from './Settings/ButtonDone';
import ByLine from './Settings/ByLine';

function toggleGeneral() {
  this.general = !this.general;
}

function toggleAws() {
  this.aws = !this.aws;
}

export default {
  name: 'settings',
  components: {
    SettingsToggle,
    AwsSettings,
    ButtonDone,
    ByLine
  },
  data: () => ({
    general: true,
    aws: false
  }),
  methods: {
    toggleGeneral,
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
    overflow-y: scroll;
    flex-grow: 1;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
