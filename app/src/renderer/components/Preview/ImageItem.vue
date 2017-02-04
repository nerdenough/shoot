<template>
  <div class="image-item">
    <div class="top">
      <image-preview :source="image.source"></image-preview>
      <div v-if="uploading" class="uploading">
        <i class="fa fa-refresh fa-spin"></i>
      </div>
      <button v-if="!uploading && !image.url" @click="onClick" class="button delete">
        <i class="fa fa-close"></i>
      </button>
    </div>
    <div class="bottom">
      <div class="grow">
        <input type="text" class="url" v-if="image.url" :value="image.url" disabled>
        <button class="copy" v-if="image.url" @click="copy">
          <i class="fa fa-clipboard"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from 'clipboard-js';
import ImagePreview from './ImagePreview';

function onClick() {
  this.deleteImage(this.index);
}

function copy() {
  clipboard.copy(this.image.url);
}

export default {
  name: 'image-item',
  components: {
    ImagePreview
  },
  methods: {
    onClick,
    copy
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

  .grow {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;

    .url {
      flex-grow: 1;
      height: 100%;
      color: $tertiary;
      background: $secondary;
      border: none;
      padding: 0 $spacing-small;
      font-size: 14px;
    }

    .copy {
      width: 30px;
      color: white;
      background: $material-pink-primary;
      border: none;
      cursor: pointer;
      outline: none;

      &:hover {
        color: $material-pink-secondary;
      }
    }
  }

  .uploading {
    color: $material-pink-primary;
    padding: 0 $spacing-medium;
    font-size: 24px;
    line-height: $image-preview;
  }

  .delete {
    width: 40px;
    background: $highlight;
    color: white;
    cursor: pointer;
    outline: none;
    padding: 0 $spacing-medium;
    border: none;
    font-size: 16px;

    &:hover {
      background: $highlight-dark;
    }
  }
}
</style>
