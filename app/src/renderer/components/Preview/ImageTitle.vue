<template>
  <div class="image-title">
    <div class="title">
      <input type="text" class="input title-input" v-model="image.title" placeholder="Enter a filename">
    </div>
    <button @click="deleteItem" class="button delete">
      <i class="fa fa-close"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'image-title',
  props: {
    deleteItem: {
      type: Function,
      required: true
    },
    image: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-title {
  display: flex;
  flex-direction: row;
  background: $secondary;
  height: 40px;

  .title {
    font-weight: $bold;
    line-height: 40px;
    flex-grow: 1;

    .title-input {
      width: 100%;
      font-weight: $bold;
      background: $secondary;
      color: lighten($tertiary, 10%);
      border: none;
      font-size: 16px;
      outline: none;
      padding: 0 $spacing-medium;

      &::-webkit-input-placeholder {
        color: $tertiary;
        font-style: italic;
      }

      &:hover {
        color: lighten($tertiary, 20%);
      }

      &:focus {
        color: lighten($tertiary, 50%);
      }
    }
  }

  .delete {
    width: 40px;
    height: 100%;
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
