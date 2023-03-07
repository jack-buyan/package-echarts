<template>
  <div :id="chartId" :class="className" :style="{width: width, height:height} "></div>

</template>

<script>
import baseChart from '@/utils/baseChart.js'
import * as echarts from 'echarts'
export default {
  mixins: [baseChart],
  methods: {
    getOption() {

      const { seriesData ,xAxis} = this.chartData
      const option = {
        title: {

        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
        },
        grid: {

          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: xAxis,
          boundaryGap: false, // 不留白，从原点开始
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            // show:false,
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(31,99,163,.2)",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(31,99,163,.1)",
            },
          },
          axisLabel: {
            color: "#7EB7FD",
            fontWeight: "500",
          },
        },
        series:[
          {
            name: 'Union',
            type: 'line',
            smooth: true,
            symbol: "none", //去除点
            color: "rgba(41, 241, 250, 1)",
            data: seriesData[0].data1,
            areaStyle: {
              normal: {
                //右，下，左，上
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [{
                    offset: 0,
                    color: "rgba(9,202,243,.7)",
                  },
                    {
                      offset: 1,
                      color: "rgba(9,202,243,.0)",
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: 'Email',
            type: 'line',
            smooth: true,
            symbol: "none", //去除点
            color: "rgba(27, 126, 242, 1)",
            data:seriesData[0].data2 ,
            areaStyle: {
              normal: {
                //右，下，左，上
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [{
                    offset: 0,
                    color: "rgba(27, 126, 242, 1)",
                  },
                    {
                      offset: 1,
                      color: "rgba(27, 126, 242, .0)",
                    },
                  ],
                  false
                ),
              },
            },
          },
        ]

      };

      return option
    }

  }
}

</script>

<style>
</style>
