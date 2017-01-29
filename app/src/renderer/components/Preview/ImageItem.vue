<template>
    <div class="image-item">
      <div class="preview">
        <img class="image" :src="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-item',
  props: {
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-item {
  margin: $spacing-small;
  padding: $spacing-small;
  border-bottom: 1px solid #efefef;

  .preview {
    position: relative;
    max-width: 100px;
    height: 60px;
    text-align: center;

    .image {
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 100%;
      max-height: 100%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
