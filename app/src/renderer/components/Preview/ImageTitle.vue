<template>
  <div class="image-title">
    <div class="title"><!-- TODO --></div>
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-title {
  display: flex;
  flex-direction: row;
  background: $tertiary;
  height: 40px;

  .title {
    flex-grow: 1;
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
