<template>

  <VScaleScreen fullScreen width="1920" height="1080">
    <One />
  </VScaleScreen>

</template>

<script>
  import One from '@/views/layout/one/index.vue'

  export default {
    name: 'home',
    components: {
      One,
    },

    data() {
      return {

      }
    }
  }

</script>

<style lang="less" scoped>
  #index {
    color: #d3d6dd;
    //width: 1920px;
    //height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    overflow: hidden;

  }

  ::v-deep .screen-wrapper {
    //transform: scale(1, 0.98 );
  }

</style>
