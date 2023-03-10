
import { getOneDataAPI } from '@/api/index'
export const dataMixin = {
    data() {
        return {
            sjgkList: [],
            lineChart: {},
            pieChartData: {},
            zdDataTable: [],
            idrr: 100
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

        //重大项目列表
        this.zdDataTable = [
            ['组件1', 'dev-1', "<span  class='colorGrass'>↑75%</span>"],
            ['组件2', 'dev-2', "<span  class='colorRed'>↓33%</span>"],
            ['组件3', 'dev-3', "<span  class='colorGrass'>↑100%</span>"],
            ['组件4', 'rea-1', "<span  class='colorGrass'>↑94%</span>"],
            ['组件5', 'rea-2', "<span  class='colorGrass'>↑95%</span>"],
            ['组件6', 'fix-2', "<span  class='colorGrass'>↑63%</span>"],
            ['组件7', 'fix-4', "<span  class='colorGrass'>↑84%</span>"],
            ['组件8', 'fix-7', "<span  class='colorRed'>↓46%</span>"],
            ['组件9', 'dev-2', "<span  class='colorRed'>↓13%</span>"],
            ['组件10', 'dev-9', "<span  class='colorGrass'>↑76%</span>"]
        ]
    },
    methods: {
        async getHomeData() {
            const res = await getOneDataAPI({ idrr: this.idrr })
            console.log(res,'混入');
        }
    },

}
