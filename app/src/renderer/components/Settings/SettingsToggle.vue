<template>
  <div @click="toggle" class="settings-toggle">
    <h3>{{ title }}</h3>
    <i v-if="visible" class="fa fa-chevron-up chevron"></i>
    <i v-if="!visible" class="fa fa-chevron-down chevron"></i>
  </div>
</template>

<script>
export default {
  name: 'settings-toggle',
  props: {
    toggle: {
      type: Function,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';
$height: 30px;

.settings-toggle {
  display: flex;
  width: 100%;
  height: $height;
  background: $secondary;
  color: lighten($tertiary, 20%);
  padding: 0 $spacing-medium;
  cursor: pointer;

  h3 {
    flex-grow: 1;
    font-size: $settings-header;
    font-weight: $bold;
    line-height: $height;
    margin: 0;
  }

  .chevron {
    font-size: $settings-icon;
    line-height: $height;
  }
}
</style>
