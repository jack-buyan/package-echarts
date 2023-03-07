<template>
  <ul class="gk_box">
    <li v-for="(item , index) in chartData" class="gk_child">
      <img class="child_bg" :src="require(`@/assets/images/sj-${index+1}.png`)" alt="">
      <p class="child_text">{{ item.value }}</p>
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DataOverview',
  props:{
    chartData:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">
.gk_box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .gk_child{
    padding: 6px;
    width:33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .child_bg{
      width: 60px;
      height: 60px;

    }
    .child_text{
      font-size: 20px;
      margin-top: 5px;
      color: RGBA(0, 255, 244, 1);
      font-weight: 700;
    }
    span{
      font-size: 12px;
    }
  }
}

</style>
