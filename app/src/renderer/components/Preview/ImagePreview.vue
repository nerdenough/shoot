<template>
  <div class="image-preview" :style="{ backgroundImage: `url(${source})`}"></div>
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
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
}
</style>
