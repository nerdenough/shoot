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

.collapse-toggle {
  display: flex;
  width: 100%;
  height: 30px;
  background: $material-grey-primary;
  color: $material-grey-secondary;
  padding: 0 5px;

  h3 {
    flex-grow: 1;
    font-size: 13px;
    font-weight: 500;
    line-height: 30px;
    margin: 0;
  }

  .toggle {
    font-size: 12px;
    line-height: 30px;
  }
}
</style>
