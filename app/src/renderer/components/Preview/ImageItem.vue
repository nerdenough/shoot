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

.top {
  display: flex;
  flex-direction: row;
  margin-bottom: $spacing-medium;
  background: $secondary;

  .uploading {
    color: $material-pink-primary;
    padding: 0 $spacing-medium;
    font-size: 24px;
    line-height: $image-preview;
  }
}
</style>
