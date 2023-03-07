<template>
  <ul class="title_box">
    <li class="title_block"></li>
    <li class="title_picture">
      <img src="../assets/images/sj.png" alt="">
    </li>
    <li class="title_text">{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'chartTitle',
  data(){
    return{

    }
  },
  props:{
    title:{
      type:String(),
      default:'标题'
    }
  }
}
</script>

<style scoped lang="less">
.title_box{
  width: 100%;
  height: 40px;
  display: flex;
  background: rgba(4, 38, 85, 1);
  align-items: center;
  .title_block{
    width: 4px;
    height: 100%;
    background: rgba(27, 126, 242, 1);
  }
  .title_picture{
    margin: 0 8px;
    width: 10px;
    img{
      width: 100%;
      height: 100%;
    }

  }

  .title_text{
    font-size: 18px;
  }
}

</style>
