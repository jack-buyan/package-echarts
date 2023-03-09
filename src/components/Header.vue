<template>
  <div class="d-flex jc-center title_wrap">
    <div class="title ">
      <span class="title-text" :style="{'font-size':Math.round(screenWidth/50) + 'px'}">{{title}}</span>
    </div>
    <div class="btn_left" v-show="title == '嘉数数据分析驾驶舱'">
      <div class="left1">

        <div v-for="(item ,index) in listLeft" @mouseover="over(index)" @mouseout="out(index)" @click="btn(index+1)">
          <img :src="item.url" alt="">
          <p :style="{'font-size':Math.round(screenWidth/155) + 'px'}">{{item.name}}</p>
        </div>
      </div>
    </div>

    <div class="btn_left" v-show="title !== '嘉数数据分析驾驶舱'" @mouseover="over()" @mouseout="out()" @click="$router.back()">
      <div class="left1">
        <div class="left1_fh">
          <img :src="listLeft[0].url" alt="">
          <p :style="{'font-size':Math.round(screenWidth/155) + 'px'}">返回</p>
        </div>
      </div>
    </div>

    <div class="btn_right" v-show="title == '嘉数数据分析驾驶舱'">
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
  import {
    drawMixin
  } from '@/utils/layout'
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
        timer: null,
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

      //绑定时器
      this.isTimeOut();
    },
    created() {

      //监听点击时间把点击的时间存起来
      window.addEventListener("click", () => {
          // 为了方便，把点击事件的时间直接存到sessionStorage中去，这样方便获取比较
          sessionStorage.setItem("lastClickTime", new Date().getTime());
        },
        true
      );
    },
    beforeDestroy() {
      // 离开页面的时候，清除一下定时器，也解绑点击事件
      clearInterval(this.timer);
      window.removeEventListener("click", () => {}, true);
    },

    methods: {
      isTimeOut() {
        // 使用定时器之前，要清除一下定时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          let lastClickTime = sessionStorage.getItem("lastClickTime") * 1; // 把上次点击时候的字符串时间转换成数字时间
          let nowTime = new Date().getTime(); // 获取当前时间
          console.log("当前时间和之前点击时间", nowTime, lastClickTime);
          // 假设我们需求是：5秒钟不进行点击操作，就提示登录退出
          if (nowTime - lastClickTime > 1000 * 5) {
            // 提示一下用户
            this.$message({
              type: "error",
              message: "超时了，已退出登录"
            });
            //清除token
            localStorage.removeItem('token')
            // 这里要清除定时器，结束任务
            clearInterval(this.timer);
            // 最后返回到登录页
            this.$router.push({
              path: "/login"
            });
          }
        }, 1000);
      },
      btn(index) {
        switch (index) {
          case 1:

            break;
          case 2:
            break;

          case 3:
            this.$router.push('/ana')
            break;
          default:
            break;
        }
      },

      over(index) {

        if (index) {
          this.listLeft[index].transfer = this.listLeft[index].url;
          this.listLeft[index].url = this.listLeft[index].url2
        } else {
          this.listLeft[0].transfer = this.listLeft[0].url;
          this.listLeft[0].url = this.listLeft[0].url2
        }
      },
      rightOver(index) {
        this.listRight[index].transfer = this.listRight[index].url;
        this.listRight[index].url = this.listRight[index].url2
      },
      rightOut(index) {
        this.listRight[index].url = this.listRight[index].transfer
      },
      out(index) {
        if (index) {
          this.listLeft[index].url = this.listLeft[index].transfer
        } else {
          this.listLeft[0].url = this.listLeft[0].transfer
        }
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

      .left1_fh {
        p {
          position: absolute;
          left: 44px;
          top: 7px;
        }
      }

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
          color: white;
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
          color: white;
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
