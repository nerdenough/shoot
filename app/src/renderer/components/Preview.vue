<template>
  <div class="preview">
    <help-text v-if="!images.length"></help-text>
    <image-list v-if="images.length" :images="images" :deleteImage="this.deleteImage"></image-list>
    <button-panel :upload="upload"></button-panel>
  </div>
</template>

<script>
import ElectronConfig from 'electron-config';
import toBuffer from 'blob-to-buffer';
import HelpText from './Preview/HelpText';
import ImageList from './Preview/ImageList';
import ButtonPanel from './Preview/ButtonPanel';
import { images, deleteImage as del } from '../main';
const config = new ElectronConfig();

function deleteImage(index) {
  del(index);
}

function fileUploadSuccess(res, image) {
  image.url = res.body.url;
  image.uploading = false;
}

function fileUploadError(err) {
  console.log(err);
}

function upload() {
  images.map((image) => {
    // Only upload if the image has not been uploaded already
    if (!image.url) {
      image.uploading = true;

      // Convert blob to buffer
      toBuffer(image.blob, (err, buffer) => {
        if (err) {
          return console.log(err);
        }

        // Upload buffer as array
        this.$http
          .post('http://localhost:3000/upload', {
            buffer,
            type: image.blob.type
          })
          .then((res) => fileUploadSuccess(res, image), fileUploadError);
      });
    }
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
    ButtonPanel,
    HelpText,
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
  background: $primary;
}
</style>
