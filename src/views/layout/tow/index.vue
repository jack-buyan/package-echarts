<template>
  <div id="index">
    <dv-loading v-if="loading">Loading...</dv-loading>

    <div v-else class="koi-body">
      <Header title="数据质量分析" />

    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import {
    drawMixin
  } from '@/utils/layout'
  export default {
    mixins: [drawMixin],
    components: {
      Header
    },
    data() {
      return {

      }
    },
    mounted() {
      this.beforeDestroy()
    },
    methods: {

    }
  }

</script>

<style>

</style>
