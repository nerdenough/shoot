<template>
  <div class="button-done">
    <button @click="toggleSettings" class="button done">
      <i class="fa fa-arrow-left"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'button-done',
  props: {
    toggleSettings: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.button-done {
  display: flex;
  flex-direction: row;
  min-height: 60px;
  height: 60px;
  background: $secondary;
  text-align: center;

  .button {
    flex-grow: 1;
    height: 100%;
    color: $tertiary;
    background: $secondary;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    font-size: 24px;
    border: none;
    box-sizing: content-box;
    padding: 0;
    margin: 0 auto;
    outline: none;

    &:hover {
      background: darken($secondary, 2%);
    }
  }
}
</style>
