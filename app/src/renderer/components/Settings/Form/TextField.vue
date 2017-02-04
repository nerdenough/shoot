<template>
  <div class="text-field">
    <label>{{ this.label }}</label>
    <input type="text" :value="this.value" @input="$emit('change', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: {
    label: {
      type: String,
      required: true
    },
    value: String
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../variables.scss';

.text-field {
  width: 100%;

  label {
    display: block;
    color: lighten($tertiary, 4%);
    font-size: 16px;
    font-weight: $bold;
  }

  input {
    width: 100%;
    height: 40px;
    background: $tertiary;
    color: white;
    font-size: 16px;
    font-weight: $bold;
    outline: none;
    padding: 0 $spacing-small;
    border: 1px none;
    margin-top: $spacing-small;
    margin-bottom: $spacing-medium;

    &:hover {
      color: darken(white, 20%);
    }

    &:focus {
      background: $highlight-dark;
      color: white;
    }
  }
}
</style>
