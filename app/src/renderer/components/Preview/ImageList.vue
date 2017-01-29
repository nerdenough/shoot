<template>
  <div class="image-list">
    <image-item v-for="image in images" :image="image"></image-item>
  </div>
</template>

<script>
import ImageItem from './ImageItem';

export default {
  name: 'image-list',
  components: {
    ImageItem
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-list {
}
</style>
