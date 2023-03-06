<template>
  <div id="index">
    <!-- 头部 s -->
    <Header title="嘉数数据分析驾驶舱" />

    <el-row>
      <el-col :span="6" style="padding:10px">
        <div class="bg-left">
          <dv-border-box-12>
            <Bar height="300px" :chart-data="dalBarChart" :chart-option="{}" chart-id="dalChart" class="chart" />
          </dv-border-box-12>
        </div>


        <div class="bg-left">
          <dv-border-box-12>
            <Bar height="350px" :chart-data="dalBarChart" :chart-option="{}" chart-id="dalChart" class="chart" />
          </dv-border-box-12>
        </div>

        <div class="bg-left">
          <dv-border-box-12>
            <Bar height="350px" :chart-data="dalBarChart" :chart-option="{}" chart-id="dalChart" class="chart" />
          </dv-border-box-12>
        </div>

      </el-col>

      <el-col :span="12">
        <div class="bg-center">
          <dv-border-box-12 style="padding:12px">

          </dv-border-box-12>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="bg-right">1</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Bar from '@/components/Bar.vue';
  import ChartTitle from '@/components/chartTitle.vue';

  export default {
    components: {
      Bar,
      ChartTitle,
      Header
    },


    data() {
      return {
        dalBarChart: {},

      }
    },
    mounted() {

      this.initPage()

    },
    beforeDestroy() {

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
      },
    }

  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/home.scss';
  @import '@/assets/scss/one.scss';
</style>