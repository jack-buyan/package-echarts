<template>
  <div id="centerRight1">
    <dv-scroll-board :config="config" class="dv-scr-board" />
    <!-- <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务完成排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    props: {
      chartData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        config: {
          header: ['组件', '分支', '覆盖率'],
          data: this.chartData,
          rowNum: 7, //表格行数
          headerHeight: 35,
          headerBGC: '#1981f6',
          oddRowBGC: 'rgba(0, 44, 81, 0.8)', //奇数行背景色
          evenRowBGC: 'rgba(10, 29, 50, 0.8)', //偶数行背景色
          index: false,
          // columnWidth: [50],
          align: ['center', 'center', 'center']
        }
      }
    },
    mounted() {}
  }

</script>

<style lang="less" scoped>
  @box-height: 100%;
  @box-width: 100%;

  #centerRight1 {
    padding: 15px 0;

    height: @box-height;
    width: @box-width;
    border-radius: 5px;

    .bg-color-black {
      height: @box-height - 30px;
      border-radius: 10px;
    }

    .text {
      color: #c3cbde;
    }

    .body-box {
      border-radius: 10px;
      overflow: hidden;

      .dv-scr-board {
        width: 270px;
        height: 340px;
      }
    }
  }

</style>
