<template>
  <div id="index">
    <div class="one_box">
      <div class="box_left">
        <div class="box_left_one" style="padding:0.125rem;">
          <ChartTitle title="数据使用情况" />
          <Bar :chart-data="dalBarChart" :chart-option="{ }" :series-opeion="{}" chart-id="dalBarChart" class="chart" />
        </div>
        <div class="box_left_two"></div>
        <div class="box_left_three"></div>
      </div>
      <div class="box_center">center</div>
      <div class="box_right">right</div>
    </div>
  </div>
</template>

<script>
  import Bar from '@/components/Bar.vue';
  import ChartTitle from '@/components/chartTitle.vue';
  export default {
    components: {
      Bar,
      ChartTitle
    },
    data() {
      return {
        dalBarChart: {}
      }
    },
    mounted() {
      this.initPage()
    },
    methods: {
      initPage() {
        //柱状图
        this.dalBarChart = {
          seriesData: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        }
      }
    }

  }
</script>

<style>

</style>