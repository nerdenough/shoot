<template>
  <div class="upload-error">
    <span class="message">{{ message }}</span>
  </div>
</template>

<script>
import clipboard from 'clipboard-js';

export default {
  name: 'upload-error',
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.upload-error {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  position: relative;
  padding: 0 $spacing-medium;
  background: $highlight-dark;

  .message {
    color: white;
    line-height: 40px;
    font-weight: $bold;
  }
}
</style>
