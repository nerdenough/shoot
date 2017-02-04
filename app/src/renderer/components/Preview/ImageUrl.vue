<template>
  <div class="image-url">
    <input type="text" class="url" v-if="url" :value="url" disabled>
    <button class="copy" v-if="url" @click="copy">
      <i class="fa fa-clipboard"></i>
    </button>
  </div>
</template>

<script>
import clipboard from 'clipboard-js';

function copy() {
  clipboard.copy(this.url);
}

export default {
  name: 'image-url',
  methods: {
    copy
  },
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.image-url {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  position: relative;

  .url {
    flex-grow: 1;
    height: 100%;
    color: $tertiary;
    background: white;
    border: none;
    padding: 0 $spacing-medium;
    font-size: 14px;
  }

  .copy {
    width: 40px;
    color: white;
    background: $green;
    border: none;
    cursor: pointer;
    outline: none;

    &:hover {
      background: darken($green, 10%);
    }
  }
}
</style>
