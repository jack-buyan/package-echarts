<template>
  <div id="index">
    <Header />
    <div class="localTime"> {{ dateYear }}{{ dateWeek }} {{ dateDay }}</div>
    <One />
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  import One from '@/views/layout/one/index.vue'
  import {
    formatTime
  } from '../utils/formatTime';

  export default {
    name: 'Home',
    components: {
      One,
      Header
    },
    data() {
      return {
        //时间
        dateDay: null,
        dateYear: null,
        dateWeek: null,
        weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        timer: null
      }
    },
    mounted() {
      this.timeInterval()
    },
    methods: {
      timeInterval() {
        this.timer = setInterval(() => {
          this.dateDay = formatTime(new Date(), 'HH:mm: ss')
          this.dateYear = formatTime(new Date(), 'yyyy/MM/dd')
          this.dateWeek = this.weekday[new Date().getDay()]

        }, 1000)

      }
    }
  }
</script>