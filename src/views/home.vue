<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="title">作业系统</div>
                <div class="login_out">
                    <p class="user">用户:{{username}}</p>
                    <P class="out" @click="loginOut">退出</P>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu unique-opened router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#f6f8fa" text-color="#586069" active-text-color="#279f43">
                        <el-submenu index="1-4-1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            <el-menu-item index="1-4-2">选项1</el-menu-item>
                            <el-menu-item index="1-4-3">选项1</el-menu-item>
                            <el-menu-item index="1-4-4">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-4-1">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项1</el-menu-item>
                            <el-menu-item index="2-4-3">选项1</el-menu-item>
                            <el-menu-item index="2-4-4">选项1</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-4-1">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航三</span>
                            </template>
                            <el-menu-item index="3-4-1">选项1</el-menu-item>
                            <el-menu-item index="3-4-2">选项1</el-menu-item>
                            <el-menu-item index="3-4-3">选项1</el-menu-item>
                            <el-menu-item index="3-4-4">选项1</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    // 点击退出按钮
    loginOut () {
      localStorage.removeItem('username')
      this.$router.push({path: 'login'})
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    console.log(localStorage.getItem('username'))

    this.username = localStorage.getItem('username')
  }
}
</script>

<style lang='scss'>
.home {
  height: 100%;
  //   .el-menu-admin:not(.el-menu--collapse) {
  //     width: 200px;
  //     min-height: 400px;
  //   }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #f6f8fa;
    .user {
      height: 50px;
      width: 100%;
      line-height: 50px;
      text-align: center;
      color: rgb(245, 98, 98);
    }
  }
  .el-main {
    background-color: #ffffff;
  }
  .el-header {
    background: rgb(36, 41, 46);
    display: flex;
    align-items: center;
    color: #fff;
    .title {
      flex: 8;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
    }
    .login_out {
      padding-left: 30px;
      flex: 1;
      font-size: 20px;
      display: flex;
      .out {
        padding-left: 30px;
        color: rgb(47, 141, 254);
        cursor: pointer;
      }
    }
  }
}
</style>
