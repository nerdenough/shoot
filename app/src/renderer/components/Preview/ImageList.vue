<template>
  <div class="image-list">
    <image-item
      v-for="(image, index) in images"
      :image="image"
      :index="index"
      :uploading="image.uploading"
      :deleteImage="deleteImage">
    </image-item>
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
    },
    deleteImage: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-list {
  flex-grow: 1;
  overflow-y: scroll;
  border-bottom: 0;
  padding: $spacing-medium;
}

::-webkit-scrollbar {
  display: none;
}
</style>
