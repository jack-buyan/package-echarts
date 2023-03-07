
import resize from './resize.js'

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      require: true,
      default: () => { }
    },
    chartOption: {
      type: Object,
      default: () => { }
    },
    chartId: {
      type: String,
      require: true,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(chartData) {

        this.updateOption(this.getOption(chartData))
      }
    }
  },
  mounted() {

    this.initChart()

  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      //customed 已注册的主题名称
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId)
        // 'customed'
      )
      const option = this.getOption(this.chartData)
      this.updateOption(option)


    },


    updateOption(option) {
      const { seriesData = [] } = this.chartData
      if (seriesData.length === 0) {
        this.chart.clear()
        this.chart.showLoading({
          text: '暂无数据',
          color: '#fff',
          textColor: '#909399',
          fontSize: '14px'
        })
      } else {
        this.chart.hideLoading()
        this.chart.setOption(option, true)

        if (option.series[0].name == '个人指标'){
          let clockChartTimer = null
          let myIvstrAbility = option.series[0].data[0].value

          let tempVal = 0
          clearInterval(clockChartTimer)
          clockChartTimer = setInterval(() => {
            if (tempVal > myIvstrAbility) {
              clearInterval(clockChartTimer)
              // 最后转到最终数据的地方
              option.series[0].data[0].value = myIvstrAbility
              option.series[0].axisLine.lineStyle.color[0][0] = myIvstrAbility / 100
              // 使用刚指定的配置项和数据显示图表
              this.chart.setOption(option)
              // 初始化渲染完成
              this.renderCompleted = true
              return
            }
            option.series[0].data[0].value = tempVal
            option.series[0].axisLine.lineStyle.color[0][0] = tempVal / 100
            // 使用刚指定的配置项和数据显示图表。
            this.chart.setOption(option)
            tempVal++
          }, 20)
          // 此处监听浏览器的resize，重新渲染图表
          let that = this
          window.addEventListener("resize", function () {
            clearTimeout(that.resizeTimer)
            that.resizeTimer = setTimeout(() => {
              that.chart.resize()
            }, 500)
          })
        }

      }
    },
    getOption(data) {
      const option = {}
      // 合并传入option
      Object.assign(option, this.chartOption)
      return option
    }
  }
}


