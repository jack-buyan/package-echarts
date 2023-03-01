
import resize from './resize.js'
require("@/assets/shine")
export default {
    mixins: [resize],
    props: {
        seriesOpeion: {
            type: Object,
            require: true,
            default: () => { }
        },
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
            default: '100%'
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
            this.chart = this.$echarts.init(document.getElementById(this.chartId), 'shine')
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
