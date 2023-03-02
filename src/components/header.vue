<template>
    <div class="header">
        <p>数据驾驶舱</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: .875rem;
        position: relative;
        text-align: center;
        background-image: url(../assets/images/top.png);
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        p {
            font-size: .375rem;
            position: absolute;
            font-weight: 700;
            color: white;
        }
    }
</style>