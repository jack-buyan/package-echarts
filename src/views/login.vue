<template>
  <div class="login-bg">
    <div class="login-box">
      <div class="login-form">
        <div class="login-dl">登录</div>

        <div class="form-box">
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="section_1 flex-col">
            <el-form-item prop="loginName">
              <el-input v-model="loginForm.loginName" autocomplete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item prop="code" class="text-wrapper">
              <el-input type="text" v-model="loginForm.code" autocomplete="off" placeholder="请输入图形验证码"></el-input>
              <img :src="url" @click="changeCode" alt="">
            </el-form-item>
            <el-button type="primary" class="deng" style="width:400px;" @click="btnLogin">登录
            </el-button>
          </el-form>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {
    loginYz,
    login
  } from '@/api/login'
  import cryptoObj from '@/utils/cryp'

  export default {
    data() {
      return {
        loginForm: {
          loginName: "",
          password: "",
          code: "",
          uuid: ''
        },
        url: '',
        rules: {
          loginName: [{
            required: true,
            message: "请输入登录名称",
            trigger: "blur"
          }],
          password: [{
            required: true,
            message: "请输入登录密码",
            trigger: "blur"
          }],
          code: [{
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }]
        }
      }
    },
    methods: {
      btnLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            login(this.loginForm).then(res => {
              if (res.code == 0) {
                this.refResh()
                localStorage.setItem('token', JSON.stringify(cryptoObj.encryptFunc(
                  `${this.loginForm.loginName}&${this.loginForm.password}&${cryptoObj.gettime()}`)))
                this.$router.replace('/')


              } else {
                this.$message.error(res.msg);
              }
            }).catch(err => {
              this.$message.error(err.msg);
            })
            this.getLoginYz()
          }
        })
      },
      refResh() {
        // 存第一份点击的时间
        sessionStorage.setItem("lastClickTime", new Date().getTime());
        // 存一个token
        sessionStorage.setItem('token', JSON.stringify(cryptoObj.encryptFunc(
          `${this.loginForm.loginName}&${this.loginForm.password}&${cryptoObj.gettime()}`)))
      },

      // login(formName) {
      //   this.$refs.loginForm.validate((valid) => {

      //     if (valid) {
      //       // const res = await login(this.loginForm)
      //       // console.log(res);
      //       login(this.loginForm).then(res => {
      //         console.log(res);
      //       })
      //       console.log(this.loginForm);
      //       // this.$router.push({
      //       //   path: "/index"
      //       // });
      //     } else {
      //       this.$message.error('密码有问题');
      //     }
      //   })
      // },
      enterLogin() {
        document.onkeydown = (e) => {
          e = window.event || e;
          if (
            this.$route.path == "/" &&
            (e.code == "Enter" || e.code == "enter")
          ) {
            this.btnLogin();
          }
        };
      },

      async getLoginYz() {
        const res = await loginYz()
        this.url = res.data.imgpath
        this.loginForm.uuid = res.data.uuid


      },

      changeCode() {
        this.getLoginYz()
      }
    },
    created() {
      this.enterLogin();
      this.getLoginYz()

    },
  }

</script>

<style lang="less" scoped>
  .text-wrapper {
    width: 265px;
    height: 34px;



    img {
      position: absolute;
      width: 100px;
      right: -139px;
    }
  }

  .login-bg {
    width: 100%;
    height: 100vh;
    background: rgb(32, 37, 81);

    .login-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      align-items: center;


      .login-form {
        width: 500px;
        height: 300px;
        background: white;
        border-radius: 5px;
        padding-top: 10px;

        .login-dl {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
        }




      }
    }


  }

  .el-button--primary {
    margin-left: 0px !important;
  }

  .el-form {}

  .section_1 {
    margin: 20px 0 0 0px;
  }

  .flex-col {
    display: flex;
    flex-direction: column;

  }

  .form-box {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

  }

</style>
