<template>
  <div :id="chartId" :class="className" :style="{width: width, height:height}"></div>
</template>
<script>
  import baseChart from '@/utils/baseChart.js'
  export default {
    mixins: [baseChart],
    methods: {
      getOption() {

        const {
          seriesData,
          xAxisData
        } = this.chartData

        let option = {
          grid: {

            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: xAxisData
          },
          yAxis: {
            type: 'value'
          },
          series: seriesData != undefined ? seriesData.map(i => {
            return Object.assign(i, this.seriesOpeion)
          }) : seriesData
        };

        //合并option，处理组件需要覆盖option属性

        option = Object.assign(option, this.chartOption)
        return option
      }
    }
  }
</script>