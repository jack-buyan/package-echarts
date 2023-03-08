<template>
  <div :style="{width: width, height:height} " :id="chartId" :class="className"></div>

</template>

<script>
  import baseChart from '@/utils/baseChart.js'
  import * as echarts from 'echarts'
  export default {
    mixins: [baseChart],
    methods: {
      getOption() {

        const {
          seriesData,
          data
        } = this.chartData
        const option = {
          title: {
            text: [data[0].value, '数据总数'].join('\n'), // join('\n')作用是换行居中
            left: '97',
            top: '80',
            textAlign: 'center',
            // 可以设置显示的样式
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: 14
            }
          },

          tooltip: {
            show: false,
            trigger: 'item'
          },
          // grid: {
          //   top:'10%',
          //   left: '3%',
          //   right: '4%',
          //   bottom: '0%',
          //   containLabel: true
          // },
          // graphic: {
          //   type: 'text',
          //   left: 'center',
          //   top: 'center',
          //   color:'red',
          //   style: {
          //     text:
          //       datas.reduce((n, i) => {
          //         return (n += i.value);
          //       }, 0) + '\n\n' +'数据总数',
          //
          //     textAlign: 'center',
          //     fill: '#333',
          //     width: 30,
          //     height: 30,
          //     fontSize: 14,
          //   }
          // },

          series: [{
            type: 'pie',
            radius: [60, 80],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            // roseType: 'area',
            // emphasis: {
            //   label: {
            //     formatter: `{c}\n{b}`,
            //     show: true,
            //     fontSize: '14px',
            //     fontWeight: 'bold',
            //     color: () => {
            //     },
            //     // lineHeight: 30
            //   }
            // },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                // 设置饼图的颜色
                color: function (params) {

                  if (params.name == "未归集数") {
                    return 'rgba(112,183,250)'
                  } else {
                    return 'rgba(0,108,209)'
                  }
                }

              },
            },
            data: data
          }]
        };

        return option
      }

    }
  }

</script>

<style>

</style>
