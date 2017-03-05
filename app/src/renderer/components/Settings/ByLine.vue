<template>
  <div class="by-line">
    Made with <i class="fa fa-heart heart"></i> by <span @click="link" class="link">Brendan Goodenough</span>
  </div>
</template>

<script>
import { shell } from 'electron';

function link() {
  shell.openExternal('https://goodenough.nz');
}

export default {
  name: 'by-line',
  methods: {
    link
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.by-line {
  height: 40px;
  font-size: 14px;
  font-weight: $bold;
  color: lighten($tertiary, 50%);
  line-height: 40px;
  text-align: center;

  .heart {
    color: $highlight;
  }

  .link {
    cursor: pointer;
  }
}
</style>
