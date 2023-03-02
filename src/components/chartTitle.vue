<template>
    <div class="box">
        <div class="chart_left"></div>
        <div class="chart_center"></div>
        <div class="chart_right">{{ title }}</div>
    </div>
</template>
<script>
    export default {
        name: 'chartTitle',
        props: {
            title: {
                type: String,
                default: '标题'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        width: 100%;
        display: flex;
        align-items: center;
        background: rgba(4, 38, 85, 0.4);
        margin-bottom: 5px;

        .chart_left {
            width: .0375rem;
            height: 100%;
            height: .5rem;
            background: rgba(25, 129, 246);
            margin-right: .05rem;
        }

        .chart_center {
            background-image: url("@/assets/images/sj.png");
            width: 10px;
            height: 20px;
            background-size: 60%;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: .075rem;
        }

        .chart_right {
            font-size: .2rem;

            color: white;
        }
    }
</style>