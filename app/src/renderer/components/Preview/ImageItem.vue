<template>
    <div class="image-item">
      <div class="preview">
        <img class="image" :src="image.source">
      </div>
      <div class="grow">
        <input type="text" class="url" v-if="image.url" :value="image.url" disabled>
        <button class="copy" v-if="image.url" @click="copy">
          <i class="fa fa-clipboard"></i>
        </button>
      </div>
      <div v-if="uploading" class="uploading">
        <i class="fa fa-refresh fa-spin"></i>
      </div>
      <button v-if="!uploading && !image.url" @click="onClick" class="button delete">
        <i class="fa fa-close"></i>
      </button>
    </div>
  </div>
</template>

<script>
import clipboard from 'clipboard-js';

function onClick() {
  this.deleteImage(this.index);
}

function copy() {
  clipboard.copy(this.image.url);
}

export default {
  name: 'image-item',
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

.image-item {
  display: flex;
  flex-direction: row;
  padding: $spacing-medium;
  border-bottom: 1px solid #efefef;

  .preview {
    position: relative;
    min-width: 50px;
    height: 50px;
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

  .grow {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
    padding: $spacing-medium 0;
    margin-left: $spacing-medium;

    .url {
      flex-grow: 1;
      height: 100%;
      color: $material-grey-secondary;
      background: darken(white, 5%);
      border: 1px solid darken(white, 10%);
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
    line-height: 50px;
  }

  .delete {
    background: transparent;
    color: $material-grey-secondary;
    cursor: pointer;
    outline: none;
    padding: 0 $spacing-medium;
    border: none;
    font-size: 16px;

    &:hover {
      color: $material-pink-primary;
    }
  }
}
</style>
