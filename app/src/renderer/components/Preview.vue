<template>
  <div class="preview">
    <!-- TODO: Hide and trigger file on click -->
    <image-list :images="images" :deleteImage="this.deleteImage"></image-list>
    <div class="buttons">
      <input type="file" class="input-file" id="file" @change="onFileChange"></input>
      <label for="file" class="button">Add File</label>
      <button @click="upload" class="button">Upload</button>
    </div>
    {{ this.url }}
  </div>
</template>

<script>
import ElectronConfig from 'electron-config';
import toBuffer from 'blob-to-buffer';
import ImageList from './Preview/ImageList';
import { images, deleteImage as del } from '../main';
const config = new ElectronConfig();

function deleteImage(index) {
  del(index);
}

function fileUploadSuccess(res) {
  this.url = res.body.url;
}

function fileUploadError(err) {
  console.log(err);
}

function upload() {
  images.map((image) => {
    toBuffer(image.blob, (err, buffer) => {
      if (err) {
        return console.log(err);
      }

      this.$http
        .post('http://localhost:3000/upload', {
          buffer,
          type: image.blob.type
        })
        .then(fileUploadSuccess, fileUploadError);
    });
  });
}

// TODO: Integrate into upload
function onFileChange(e) {
  const files = e.target.files || e.dataTransfer.files;

  if (files && files.length) {
    const file = files[0];

    this.$http
      .post('http://localhost:3000/aws', {
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
    ImageList
  },
  data: () => ({
    url: '',
    images
  }),
  methods: {
    upload,
    onFileChange,
    deleteImage
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.preview {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  background: white;

  .buttons {
    padding: $spacing-medium;
    border-top: 1px solid #cecece;
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
    text-align: center;

    // FIXME: A bit hacky
    button {
      position: relative;
      top: -1px;
    }

    .button {
      display: inline-block;
      width: 120px;
      height: 40px;
      background: $material-pink-primary;
      color: white;
      text-align: center;
      cursor: pointer;
      line-height: 40px;
      font-size: 18px;
      text-transform: uppercase;
      border: 2px solid $material-pink-primary;
      border-radius: $border-radius;
      box-sizing: content-box;
      padding: 0;
      margin: 0 auto;

      &:hover {
        background: white;
        color: $material-pink-primary;
      }
    }

    .input-file {
      display: none;
    }
  }
}
</style>
