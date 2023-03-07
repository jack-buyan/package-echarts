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
              <ChartTitle title="数据概况"/>
              <DataOverview :chart-data="sjgkList"/>
            </div>
            <div :style="{ height: kHTwo + 'px'}" style="padding:10px; position:relative;">
              <ChartTitle title="数据调用趋势图"/>
              <chartSelect :options.sync="options" @changeFn= "changeFn"/>
              <ChartLine :chart-option="{}" chart-id="lineChart" :chart-data="lineChart"></ChartLine>
            </div>
            <div :style="{ height: kHTwo + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
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
  import {
    drawMixin
  } from '@/utils/layout'
  import {
    formatTime
  } from '@//utils/index.js'

  export default {
    name: 'index',
    mixins: [drawMixin],
    components: {
      Header,
      ChartTitle,
      DataOverview,
      ChartLine,
      chartSelect
    },
    data() {
      return {
        sjgkList:[],
        lineChart:{},
        options: [{
          value: '1',
          label: '1月'
        }]
      }
    },
    created() {

    },
    mounted() {
      //数据概况
      this.sjgkList=[
        {
          name:'重大应用数',
          value:'88'
        },
        {
          name:'数据编目总数',
          value:'98'
        },
        {
          name:'数据归集总数',
          value:'88'
        },
        {
          name:'数据申请总数',
          value:'88'
        },
        {
          name:'数据共享总数',
          value:'88'
        },
        {
          name:'数据调用总次数',
          value:'88'
        }
      ]

      //数据调用趋势
      this.lineChart={
        xAxis:['1月', '2月', '3月', '4月', '5月', '6月'],
        seriesData: [
          {
            data1:[25, 75, 48, 65, 87, 13],
            data2:[65, 108, 315, 471, 210, 612]
          }
        ]
      }


      this.ModifyHeight()
      this.beforeDestroy()
    },

    methods: {
      changeFn(val){
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
</style>
