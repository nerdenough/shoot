<template>
  <div class="image-item">
    <image-title :deleteItem="deleteItem"></image-title>
    <image-preview :source="image.source"></image-preview>
    <div v-if="uploading" class="uploading">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
    <image-url v-if="image.url" :url="image.url"></image-url>
  </div>
</template>

<script>
import ImagePreview from './ImagePreview';
import ImageTitle from './ImageTitle';
import ImageUrl from './ImageUrl';

function deleteItem() {
  this.deleteImage(this.index);
}

export default {
  name: 'image-item',
  components: {
    ImagePreview,
    ImageTitle,
    ImageUrl
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
  background: $secondary;
  margin-bottom: $spacing-medium;
}
</style>
