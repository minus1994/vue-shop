<template>
  <el-container class="home-container">
    <!--头部-->
    <el-header style="height: 80px">
      <div class="login_icon">
        <img src="../assets/logo.png" />
        <span>后台管理系统</span>
      </div>
      <div class="rightTab">
        <el-button @click="logout" type="primary">退出登录</el-button>
      </div>
    </el-header>
    <el-container>
      <!--侧边导航-->
      <el-aside width="200px">Aside</el-aside>
      <!--内容-->
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      //清空token
      window.sessionStorage.clear()
      //跳转到登录页
      this.$router.push('/login')
    },
  },
}

</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  .el-header {
    background-color: #373d41;
    padding-left: 0;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .login_icon {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #fff;
        margin: 0 30px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
}
</style>