<template>
  <div class="settings">
    <collapse-toggle></collapse-toggle>
    <div class="form">
      <h3>AWS Config</h3>
      <div class="form-item">
        <label for="bucket">S3 Bucket Name</label>
        <input v-model="bucket" type="text">
      </div>
      <div class="form-item">
        <label for="bucket">Access Key ID</label>
        <input v-model="accessKeyId" type="text">
      </div>
      <div class="form-item">
        <label for="bucket">Secret Access Key</label>
        <input v-model="secretAccessKey" type="text">
      </div>
    </div>
  </div>
</template>

<script>
import ElectronConfig from 'electron-config';
import CollapseToggle from './CollapseToggle';

const config = new ElectronConfig();

export default {
  name: 'settings',
  components: { CollapseToggle },
  data: () => ({
    bucket: config.get('aws.bucket'),
    accessKeyId: config.get('aws.accessKeyId'),
    secretAccessKey: config.get('aws.secretAccessKey')
  })
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.settings {
  background: darken($material-grey-primary, 4%);
  color: white;

  .form {
    padding: $spacing-small;

    h3 {
      font-size: 12px;
      font-weight: $regular;
      margin: 0;
    }

    .form-item {
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
        border: 1px solid lighten($material-grey-primary, 4%);
        outline: none;
        padding: 0 $spacing-small;
      }
    }
  }
}
</style>
