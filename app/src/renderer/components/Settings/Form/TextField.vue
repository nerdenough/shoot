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
    color: $material-grey-secondary;
    font-size: 12px;
    margin-top: $spacing-medium;
    margin-bottom: $spacing-small;
  }

  input {
    width: 100%;
    height: 30px;
    background: $material-grey-primary;
    color: $material-grey-secondary;
    font-size: 14px;
    font-weight: $bold;
    outline: none;
    padding: 0 $spacing-small;
    border: 1px solid lighten($material-grey-primary, 4%);
    border-radius: $border-radius;
  }
}
</style>
