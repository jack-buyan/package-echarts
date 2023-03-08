<!--  -->
<template>
  <div id="index">
    <!--  DataV-Loading加载动画 -->
    <dv-loading v-if="loading">Loading...</dv-loading>
    <!-- 总体布局-start -->
    <div v-else class="koi-body">
      <!-- 第一部分-头部-start -->
      <Header title="嘉数数据分析驾驶舱" />
      <!-- Element-UI Layout布局 -->
      <div class="layoutHome">
        <el-row>
          <el-col :span="6">
            <div :style="{ height: kHOne + 'px'}" style="padding:10px">
              <ChartTitle title="数据概况" />
              <DataOverview :chart-data="sjgkList" />
            </div>

            <div :style="{ height: kHTwo + 'px'}" style="padding:10px; position:relative;">
              <ChartTitle title="数据调用趋势图" />
              <chartSelect :options.sync="options" @changeFn="changeFn" />
              <ChartLine :chart-option="{}" chart-id="lineChart" :chart-data="lineChart"></ChartLine>
            </div>

            <div :style="{ height: kHTwo + 'px'}" style="padding:10px">
              <ChartTitle title="数据使用情况" />
              <div class="pie_box">
                <div class="pie_bg">
                  <EchartPie class="pieChart" :height="100+'%'" :chart-option="{}" chart-id="pieChart"
                    :chart-data="pieChartData" />
                </div>
                <div class="sj_box">
                  <div class="pie-sj" v-for="(item , index) in pieChartData.data">
                    <p>{{item.value}}</p>
                    <span>{{item.name}}</span>

                    <div style="width: 10px; height: 10px;  border-radius: 50%;"
                      :style="{background:item.name == '已经归集数'? 'rgba(0,108,209)':'rgba(112,183,250)'}">
                    </div>
                  </div>
                  <!-- 
                  <div class="pie-sj">
                    <p>22</p>
                    <span>未归集数</span>
                    <div style="width: 10px; height: 10px; background: rgba(0,108,209); border-radius: 50%;"></div>
                  </div> -->
                </div>



              </div>
            </div>

          </el-col>
          <el-col :span="12">
            <div :style="{ height: kHThree + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
            </div>
            <div :style="{ height: kHFive + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
            </div>
          </el-col>

          <el-col :span="6">

            <div :style="{ height: kHFour + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
            </div>

            <div :style="{ height: kHFour + 'px'}">
              <!-- style="padding:12px" -->
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
            </div>
          </el-col>

        </el-row>
      </div>
      <!-- 总体布局end -->
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import DataOverview from '@/components/echarts1/DataOverview.vue'
  import ChartLine from '@/components/echarts1/chartLine.vue'
  import ChartTitle from '@/components/chartTitle.vue'
  import chartSelect from '@/components/chartSelect.vue'
  import Header from '@/components/Header.vue';
  import EchartPie from '@/components/echarts1/chartPie.vue'
  import {
    drawMixin
  } from '@/utils/layout'
  import {
    dataMixin
  } from '@/utils/dataMixin'
  import {
    formatTime
  } from '@//utils/index.js'

  export default {
    name: 'index',
    mixins: [drawMixin, dataMixin],
    components: {
      Header,
      ChartTitle,
      DataOverview,
      ChartLine,
      chartSelect,
      EchartPie
    },
    data() {
      return {
        // sjgkList: [],
        // lineChart: {},
        // pieChartData: {},
        options: [{
          value: '1',
          label: '1月'
        }]
      }
    },
    created() {

    },
    mounted() {
      console.log(this.pieChartData);


      this.ModifyHeight()
      this.beforeDestroy()
    },

    methods: {
      changeFn(val) {
        console.log(val)
      },
      ModifyHeight() {
        this.kHOne = 290
        this.kHTwo = 356
        this.kHThree = 600
        this.kHFive = 400
      }
    }
  }

</script>

<style lang="less" scoped>
  .pie_box {
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    .pie_bg {
      height: 200px;
      width: 200px;

      background-image: url('@/assets/images/h-pie.png');
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 100%;
    }

    .sj_box {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .pie-sj {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        p {
          font-size: 20px;
        }

        span {
          font-size: 12px;
          padding: 5px 0;
        }
      }
    }
  }

</style>
