<template>
  <div class="d-flex jc-center title_wrap">
    <div class="title ">
      <span class="title-text" :style="{'font-size':Math.round(screenWidth/50) + 'px'}">{{title}}</span>
    </div>
    <div class="btn_left">
      <div class="left1">

        <div v-for="(item ,index) in listLeft" @mouseover="over(index)" @mouseout="out(index)">
          <img :src="item.url" alt="">
          <p :style="{'font-size':Math.round(screenWidth/155) + 'px'}">{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="btn_right">
      <div class="right">
        <div v-for="(item , index) in listRight" @mouseover="rightOver(index)" @mouseout="rightOut(index)">
          <img :src="item.url" alt="">
          <p :style="{'font-size':Math.round(screenWidth/155) + 'px'}">{{item.name}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {drawMixin} from '@/utils/layout'
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    },
     mixins: [drawMixin],
    data() {
      return {
        listLeft: [{
            url: require('../assets/images/btn_left.png'),
            url2: require('../assets/images/hover_left.png'),
            name: '数据资源概括'
          },
          {
            url: require('../assets/images/btn_left.png'),
            url2: require('../assets/images/hover_left.png'),
            name: '数据使用概括'
          },
          {
            url: require('../assets/images/btn_left.png'),
            url2: require('../assets/images/hover_left.png'),
            name: '数据质量分析'
          },
        ],
        listRight: [{

            url: require('../assets/images/btn_right.png'),
            url2: require('../assets/images/hover_right.png'),
            name: 'IRS指标概况'
          },
          {
            url: require('../assets/images/btn_right.png'),
            url2: require('../assets/images/hover_right.png'),
            name: '部门画像'
          }
        ]
      }
    },
    mounted() {
      this.beforeDestroy()

    },

    methods: {

      over(index) {
        this.listLeft[index].transfer = this.listLeft[index].url;
        this.listLeft[index].url = this.listLeft[index].url2
      },
      rightOver(index) {
        this.listRight[index].transfer = this.listRight[index].url;
        this.listRight[index].url = this.listRight[index].url2
      },
      rightOut(index) {
        this.listRight[index].url = this.listRight[index].transfer
      },
      out(index) {
        this.listLeft[index].url = this.listLeft[index].transfer
      }
    }
  }

</script>

<style lang="less" scoped>
.btn_left {
  height: 100%;
  position: absolute;
  top: 0;
  left: 10px;

  .left1 {
    width: 100%;
    height: 65%;
    display: flex;



    div {
      margin-top: 8px;
      width: 120px;
      height: 100%;
      position: relative;
      cursor: pointer;


      img {
        width: 100%;
        height: 70%;
      }

      p {
        position: absolute;
        left: 24px;
        top: 7px;
      }
    }



  }
}

.btn_right {
  height: 100%;
  right: 10px;
  position: absolute;
  top: 0px;

  .right {
    width: 100%;
    height: 65%;
    display: flex;

    div {
      margin-top: 8px;
      width: 120px;
      height: 100%;
      position: relative;
      cursor: pointer;


      img {
        width: 100%;
        height: 70%;
      }

      p {
        position: absolute;
        right: 25px;
        top: 7px;
      }


    }

    div:last-child p {
      left: 35px;
    }

  }
}

.title {
  text-align: center;
  line-height: 70px;
  font-size: 30px;
  font-weight: 700;
  color: white;
  // position: relative;
  // // width: 500px;
  // text-align: center;
  // background-size: cover;
  // color: transparent;
  // height: 60px;
  // line-height: 86px;

  // .title-text {
  //     font-size: 38px;
  //     font-weight: 900;
  //     letter-spacing: 6px;
  //     width: 100%;
  //     color: white;
  //     // background: linear-gradient(92deg, #ffffff 0%, #ffffff 48.8525390625%, #ffffff 100%);
  //     text-shadow: 0px 7px 4px #012d4f;
  //     // -webkit-background-clip: text;
  //     // -webkit-text-fill-color: transparent;
  // }
}

</style>
