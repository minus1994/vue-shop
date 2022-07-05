<template>
  <div class="login">
    <div class="login_box">
      <div class="logoBox"><img src="../assets/logo.png" /></div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="last_form">
          <el-button
            type="primary"
            @click="onSubmit('form')"
            style="width: 100%; margin-left: 0"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    //登录
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data: res } = await this.$http.post("login", this.form);
          if (res.meta.status !== 200) {
            this.$message({
              message: `${res.meta.msg}`,
              type: "warning",
            });
          }else{
            //1.将登录成功之后的token保存到客户端的sessionStorage中
            //   -项目中除了登录之外的其他api接口，必须登录才能访问
           //    -token只应在当前网站打开期间生效，所以将token保存在sessionStorage中
           window.sessionStorage.setItem("token",res.data.token)
           //2.通过编程式导航跳转到后台主页，路由地址是/home
           this.$router.push({path:'/home'})
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/images/1.webp") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .login_box {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .logoBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -50px;
      z-index: 1;
      width: 100px;
      height: 100px;
      border: 1px solid #c2bcbc;
      border-radius: 50px;
      background-color: #fff;
      img {
        width: 75px;
        // height:60px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .el-form {
      padding: 80px 50px;
    }
  }
}
</style>