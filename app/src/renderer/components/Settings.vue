<template>
  <div class="settings">
    <collapse-toggle v-bind:collapse="this.collapse" v-bind:collapsed="this.collapsed"></collapse-toggle>
    <aws-settings v-if="!this.collapsed"></aws-settings>
  </div>
</template>

<script>
import CollapseToggle from './Settings/CollapseToggle';
import AwsSettings from './Settings/AwsSettings';

function collapse() {
  this.collapsed = !this.collapsed;
}

export default {
  name: 'settings',
  components: {
    CollapseToggle,
    AwsSettings
  },
  data: () => ({
    collapsed: true
  }),
  methods: {
    collapse
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
