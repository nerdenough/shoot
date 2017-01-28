<template>
  <div class="collapse-toggle">
    <h3>Settings</h3>
    <i class="fa fa-chevron-down toggle"></i>
  </div>
</template>

<script>
export default {
  name: 'collapse-toggle'
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
$height: 30px;

.collapse-toggle {
  display: flex;
  width: 100%;
  height: $height;
  background: $material-grey-primary;
  color: $material-grey-secondary;
  padding: 0 $spacing-small;

  h3 {
    flex-grow: 1;
    font-size: $settings-header;
    font-weight: $bold;
    line-height: $height;
    margin: 0;
  }

  .toggle {
    font-size: $settings-icon;
    line-height: $height;
  }
}
</style>
