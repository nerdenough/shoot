<template>
  <div class="spinner">
    <div class="icon">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'spinner'
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

$image-preview: 100px;

.spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba($secondary, 0.96);

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 48px;
  }
}
</style>
