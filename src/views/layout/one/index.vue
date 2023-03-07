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
            <div :style="{ height: kHFive + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <rightchart1></rightchart1>
              </dv-border-box-12>
            </div>
            <div :style="{ height: kHSix + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <rightchart2></rightchart2>
              </dv-border-box-12>
            </div>
            <div :style="{ height: kHSeven + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <rightchart3></rightchart3>
              </dv-border-box-12>
            </div>


          </el-col>

          <el-col :span="12">
            <div :style="{ height: kHThree + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <center></center>
              </dv-border-box-12>
            </div>
            <div :style="{ height: kHFour + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <!--                <centerchart1></centerchart1>-->
              </dv-border-box-12>
            </div>
          </el-col>

          <el-col :span="6">

            <div :style="{ height: this.kHOne + 'px'}">
              <dv-border-box-12 style="padding:12px">
                <leftchart1></leftchart1>
              </dv-border-box-12>
            </div>

            <div :style="{ height: kHTwo + 'px'}">
              <!-- style="padding:12px" -->
              <dv-border-box-12 style="padding:12px">
                <leftchart-2></leftchart-2>
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
  import Header from '@/components/Header.vue';
  import {
    drawMixin
  } from '@/utils/layout'
  import {
    formatTime
  } from '@//utils/index.js'
  import leftchart1 from "@/components/ems/left/chart1.vue";
  import leftchart2 from "@/components/ems/left/chart2.vue";
  import center from "@/components/ems/center/center.vue";
  import centerchart1 from "@/components/ems/center/chart1.vue";
  import rightchart1 from "@/components/ems/right/chart1.vue";
  import rightchart2 from "@/components/ems/right/chart2.vue";
  import rightchart3 from "@/components/ems/right/chart3.vue";
  export default {
    name: 'index',
    mixins: [drawMixin],
    components: {
      Header,
      center,
      leftchart1,
      leftchart2,
      centerchart1,
      rightchart1,
      rightchart2,
      rightchart3
    },
    data() {
      return {}
    },
    created() {

    },
    mounted() {
      this.ModifyHeight()
      this.beforeDestroy()
    },

    methods: {
      ModifyHeight() {
        this.kHOne = 500
      }
    }
  }

</script>

<style lang="less" scoped>
</style>
