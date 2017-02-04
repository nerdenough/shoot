<template>
  <div class="settings aws">
    <text-field label="URL" @change="onUrlChange" v-model="this.url"></text-field>
    <text-field label="S3 Bucket Name" @change="onBucketChange" v-model="this.bucket"></text-field>
    <text-field label="Access Key Id" @change="onAccessKeyIdChange" v-model="this.accessKeyId"></text-field>
    <text-field label="Secret Access Key" @change="onSecretAccessKeyChange" v-model="this.secretAccessKey"></text-field>
  </div>
</template>

<script>
import TextField from './Form/TextField';
import ElectronConfig from 'electron-config';
const config = new ElectronConfig();

function onUrlChange(url) {
  console.log(url);
  config.set('aws.url', url);
}

function onBucketChange(bucket) {
  config.set('aws.bucket', bucket);
}

function onAccessKeyIdChange(accessKeyId) {
  config.set('aws.accessKeyId', accessKeyId);
}

function onSecretAccessKeyChange(secretAccessKey) {
  config.set('aws.secretAccessKey', secretAccessKey);
}

export default {
  name: 'aws-settings',
  components: { TextField },
  data: () => ({
    url: config.get('aws.url'),
    bucket: config.get('aws.bucket'),
    accessKeyId: config.get('aws.accessKeyId'),
    secretAccessKey: config.get('aws.secretAccessKey')
  }),
  methods: {
    onUrlChange,
    onBucketChange,
    onAccessKeyIdChange,
    onSecretAccessKeyChange
  }
};
</script>

<style lang="scss" scoped>
@import '../../../variables.scss';

.settings {
  padding: 0 $spacing-medium;
}
</style>
