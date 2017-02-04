<template>
  <div class="upload">
    <button @click="upload" class="button">Upload</button>
  </div>
</template>

<script>
export default {
  name: 'upload',
  props: {
    upload: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.upload {
  padding: $spacing-medium;
  background: $secondary;
  border-top: 1px solid $secondary;
  text-align: center;

  button {
    position: relative;
    top: -1px;
  }

  .button {
    display: inline-block;
    width: 120px;
    height: 40px;
    background: $highlight;
    color: white;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    font-size: 18px;
    border: none;
    border-radius: $border-radius;
    box-sizing: content-box;
    padding: 0;
    margin: 0 auto;
    outline: none;

    &:hover {
      background: darken($highlight, 10%);
    }
  }

  .input-file {
    display: none;
  }
}
</style>
