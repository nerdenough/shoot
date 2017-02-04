<template>
  <div class="image-preview">
    <div class="image" :style="{ backgroundImage: `url(${source})`}"></div>
  </div>
</template>

<script>
export default {
  name: 'image-preview',
  props: {
    source: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-preview {
  background: $secondary;

  .image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
  }
}
</style>
