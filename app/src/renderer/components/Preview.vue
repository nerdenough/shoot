<template>
  <div class="preview">
    <!-- TODO: Hide and trigger file on click -->
    <input type="file" @change="onFileChange"></input>
    <image-item v-for="image in images" :image="image"></image-item>
    <div class="buttons">
      <div class="button">Upload</div>
    </div>
    {{ this.url }}
  </div>
</template>

<script>
import ImageItem from './Preview/ImageItem';
import ElectronConfig from 'electron-config';
import { images } from '../main';
const config = new ElectronConfig();

function fileUploadSuccess(res) {
  this.url = res.body.url;
}

function fileUploadError(err) {
  console.log(err);
}

function onFileChange(e) {
  const files = e.target.files || e.dataTransfer.files;

  if (files && files.length) {
    const file = files[0];

    this.$http
      .post('http://localhost:3000/upload', {
        path: file.path,
        type: file.type,
        url: config.get('aws.url'),
        bucket: config.get('aws.bucket'),
        accessKeyId: config.get('aws.accessKeyId'),
        secretAccessKey: config.get('aws.secretAccessKey')
      })
      .then(fileUploadSuccess, fileUploadError);
  }
}

export default {
  name: 'preview',
  components: {
    ImageItem
  },
  data: () => ({
    url: '',
    images
  }),
  methods: {
    onFileChange
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.preview {
  position: relative;
  flex-grow: 1;
  background: white;

  .buttons {
    .button {
      width: 200px;
      height: 60px;
      background: $material-pink-primary;
      color: white;
      text-align: center;
      cursor: pointer;
      line-height: 60px;
      font-size: 32px;
      text-transform: uppercase;
      border-radius: $border-radius;
      box-sizing: content-box;
      border: 2px solid $material-pink-primary;
      margin: 0 auto;

      &:hover {
        background: white;
        color: $material-pink-primary;
      }
    }
  }
}
</style>
