<template>
  <div>
    <One/>
<!--    <Bar :chart-data="barChartData" :chart-option="{}" :series-opeion="{}" chart-id="barChart" class="chart" />-->

<!--    <Bar :chart-data="dalChartData" :chart-option="{}" :series-opeion="{showBackground: true,}" chart-id="barChart2" class="chart" />-->
  </div>
</template>

<script>
  import One from '@/views/layout/one/index.vue'

  export default {
    name: 'Home',
    components: {
      One
    },
    data() {
      return  {
        barChartData:{

        },
        dalChartData:{}
      }
    },
    mounted() {
      this.initPage()
    },
    methods: {
      initPage() {

        this.dalChartData = {
          name: '双型柱状图',
          xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          seriesData: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
          },
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
            }
          ],
          chartOption: {

          }
        }
        //柱状图
        this.barChartData = {
          name: '单型柱状图',
          xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          seriesData: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        }
      }
    }
  }
</script>