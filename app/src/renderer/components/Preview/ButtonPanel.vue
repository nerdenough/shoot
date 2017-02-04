<template>
  <div class="button-panel">
    <button class="button">
      <i class="fa fa-plus"></i>
    </button>

    <button @click="upload" class="button upload">
      <i class="fa fa-arrow-up"></i>
    </button>

    <button class="button" @click="toggleSettings">
      <i class="fa fa-cog"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'button-panel',
  props: {
    upload: {
      type: Function,
      required: true
    },
    toggleSettings: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.button-panel {
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

  .upload {
    color: white;
    background: $highlight;

    &:hover {
      background: $highlight-dark;
    }
  }

  .input-file {
    display: none;
  }
}
</style>
