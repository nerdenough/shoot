<template>
  <div class="help-text">
    <span class="message">Paste an image</span>
  </div>
</template>

<script>
function onClick() {
  this.deleteImage(this.index);
}

export default {
  name: 'help-text'
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.help-text {
  position: relative;
  flex-grow: 1;

  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 200px;
    color: $secondary;
    font-size: 48px;
    text-align: center;
    font-weight: $bold;
    transform: translate(-50%, -50%);
  }
}
</style>
