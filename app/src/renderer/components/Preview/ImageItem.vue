<template>
  <div class="image-item">
    <spinner v-if="uploading"></spinner>
    <image-title :deleteItem="deleteItem" :image="image"></image-title>
    <image-preview :source="image.source"></image-preview>
    <image-url v-if="image.url" :url="image.url"></image-url>
  </div>
</template>

<script>
import ImagePreview from './ImagePreview';
import ImageTitle from './ImageTitle';
import ImageUrl from './ImageUrl';
import Spinner from './Spinner';

function deleteItem() {
  this.deleteImage(this.index);
}

export default {
  name: 'image-item',
  components: {
    ImagePreview,
    ImageTitle,
    ImageUrl,
    Spinner
  },
  methods: {
    deleteItem
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    deleteImage: {
      type: Function,
      required: true
    },
    uploading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

$image-preview: 100px;

.image-item {
  position: relative;
  background: $secondary;
  margin-bottom: $spacing-medium;
}
</style>
