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
            <div :style="{ height: kHOne + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
            </div>
            <div :style="{ height: kHTwo + 'px'}">
              <dv-border-box-12 style="padding:12px">

              </dv-border-box-12>
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
