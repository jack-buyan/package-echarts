<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 布局  -->
        <One />
      </div>
    </div>
  </div>



</template>

<script>
  import drawMixin from "../utils/drawMixin";

  import One from '@/views/layout/one/index.vue'
  import {
    formatTime
  } from '../utils/formatTime'
  export default {
    mixins: [drawMixin],
    data() {
      return {
        timing: null,
        loading: true,
        dateDay: null,
        dateYear: null,
        dateWeek: null,
        weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      }
    },
    components: {
      One
    },
    mounted() {
      this.timeFn()
      this.cancelLoading()
    },
    beforeDestroy() {
      clearInterval(this.timing)
    },
    methods: {
      timeFn() {
        this.timing = setInterval(() => {
          this.dateDay = formatTime(new Date(), 'HH: mm: ss')
          this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
          this.dateWeek = this.weekday[new Date().getDay()]
        }, 1000)
      },
      cancelLoading() {
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  //.scale-wrap{
  //  margin:0px !important;
  //
  //}
  @import '../assets/scss/home.scss';
</style>