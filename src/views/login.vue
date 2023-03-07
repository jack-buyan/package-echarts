<template>
  <div class="login-bg">
    <div class="login-box">
      <div class="login-form">
        <div class="login-dl">登录</div>

        <div class="form-box">
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="section_1 flex-col">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" autocomplete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
            </el-form-item>

            <el-button type="primary" class="deng" style="width:400px;" @click="login">登录
            </el-button>
          </el-form>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{
          required: true,
          message: "请输入登录名称",
          trigger: "blur"
        }],
        password: [{
          required: true,
          message: "请输入登录密码",
          trigger: "blur"
        }]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs.loginForm.validate((valid) => {

        if (valid) {
          this.$router.push({
            path: "/index"
          });
        } else {
          this.$message.error('密码有问题');
        }
      })
    },
    enterLogin() {
      document.onkeydown = (e) => {
        e = window.event || e;
        if (
            this.$route.path == "/" &&
            (e.code == "Enter" || e.code == "enter")
        ) {
          this.login();
        }
      };
    },
  },
  created() {
    this.enterLogin();
  },
}

</script>

<style lang="less" scoped>
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

}

</style>
