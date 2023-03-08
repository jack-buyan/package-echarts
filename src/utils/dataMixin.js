export const dataMixin = {
    data() {
        return {
            sjgkList: [],
            lineChart: {},
            pieChartData: {},
        }
    },
    created() {

    },
    mounted() {
        //数据概况
        this.sjgkList = [{
            name: '重大应用数',
            value: '88'
        },
        {
            name: '数据编目总数',
            value: '98'
        },
        {
            name: '数据归集总数',
            value: '88'
        },
        {
            name: '数据申请总数',
            value: '88'
        },
        {
            name: '数据共享总数',
            value: '88'
        },
        {
            name: '数据调用总次数',
            value: '88'
        }
        ]

        //数据调用趋势
        this.lineChart = {
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
            seriesData: [{
                data1: [25, 75, 48, 65, 87, 13],
                data2: [65, 108, 315, 471, 210, 612]
            }]
        }

        //数据使用情况
        this.pieChartData = {
            data: [
                { value: 873, name: '未归集数' },
                { value: 735, name: '已经归集数' }
            ],
            seriesData: [{}]
        }
    },
    methods: {

    },

}