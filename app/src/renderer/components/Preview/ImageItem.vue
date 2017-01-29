<template>
    <div class="image-item">
      <div class="preview">
        <img class="image" :src="image">
      </div>
      <div class="grow"></div>
      <button @click="onClick" class="button delete">
        <i class="fa fa-close"></i>
      </button>
    </div>
  </div>
</template>

<script>
function onClick() {
  this.deleteImage(this.index);
}

export default {
  name: 'image-item',
  methods: {
    onClick
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
      type: String,
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

.image-item {
  display: flex;
  flex-direction: row;
  padding: $spacing-medium;
  border-bottom: 1px solid #efefef;

  .preview {
    position: relative;
    width: 100px;
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
    flex-grow: 1;
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
