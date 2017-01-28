<template>
  <div class="preview">
    <div class="buttons">
      <div class="button" title="Take a screenshot">
        <i class="fa fa-camera icon"></i>
      </div>
      <div class="button" title="Record your screen">
        <i class="fa fa-video-camera icon"></i>
      </div>
      <input type="file" @change="onFileChange" class="button" title="Upload an existing file">
        <i class="fa fa-file icon"></i>
      </input>
    </div>
  </div>
</template>

<script>
function fileUploadSuccess() {
  console.log('SUCCESS');
}

function fileUploadError() {
  console.log('ERROR');
}

function onFileChange(e) {
  const files = e.target.files || e.dataTransfer.files;

  if (files && files.length) {
    const file = files[0];

    this.$http
      .post('http://localhost:3000/upload', {
        path: file.path
      })
      .then(fileUploadSuccess, fileUploadError);
  }
}

export default {
  name: 'preview',
  methods: {
    onFileChange
  }
};
</script>

<style lang="scss" scoped>
@import '../../variables.scss';
$button-size: 100px;

.preview {
  position: relative;
  flex-grow: 1;
  background: $bg-primary;

  .buttons {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .button {
      width: $button-size;
      height: $button-size;
      text-align: center;
      cursor: pointer;
      border: 2px solid $material-pink-primary;
      border-radius: $button-size;
      margin: 0 $spacing-medium;

      &:hover {
        background: $material-pink-primary;

        .icon {
          color: white;
        }
      }

      .icon {
        color: $material-pink-primary;
        font-size: 24px;
        line-height: $button-size;
      }
    }
  }
}
</style>
