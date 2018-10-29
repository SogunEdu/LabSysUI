<template>
    <div class="login">
        <div class="form">
            <img src="../assets/images/timg.jpg" alt="">
            <div class="text">作业系统</div>
            <div class="login_form">
                <el-form :model="loginForm" label-position='top' :rules="rules" ref="loginForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="username" v-model="loginForm.username" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password"  @keyup.native.13="submitForm('loginForm')"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/api/index'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入正确的用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入正确的密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.loginForm)
          // 发送请求
          login(this.loginForm).then(res => {
            // let expireDays = 1000 * 60 * 60

            // this.setCookie('session', res.errData.token, expireDays) // 设置Session

            // this.setCookie('u_uuid', res.errData.u_uuid, expireDays) // 设置用户编号

            // if (this.$route.query.redirect) {
            //   this.$router.push(this.$route.query.redirect)
            // } else {
            //   this.$router.push('/') // 跳转用户中心页
            // }
            console.log(res)
            if (res.data.meta.status === 200) {
            //  this.$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]])   //return this
            // this.$cookies.get(keyName)       // return value
            // this.$cookies.remove(keyName [, path [, domain]])   // return  false or true , warning： next version return this； use isKey(keyname) return true/false,please

              this.$message.success(res.data.meta.msg)
              localStorage.setItem('username', res.data.data.username)
              this.$router.push({path: '/'})
            } else {
              this.$message.error(res.data.meta.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // resetForm (formName) {
    //   // 清空表单
    //   this.$refs[formName].resetFields()
    // }
  },
  mounted () {
    // getToken().then(res => {
    //   localStorage.setItem('csrftoken', res.data.token)
    // })
  }
}
</script>

<style lang="scss" >
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(249, 249, 249);
  .form {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    // width: 500px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50% 50%;
      margin:80px auto  30px;
      border: 2px solid rgb(208, 252, 255);
    }
    .text {
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      padding-bottom: 30px;
    }
    .login_form {
      width: 450px !important;
      padding: 0 20px;
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      border: solid rgb(233, 233, 233) 1px;
      width: 280px;
      margin: 0 auto;
      color: #000;
    }
  }
}
.el-input__inner {
  //   width: 100%;
  background-color: rgb(250, 255, 189);
  height: 30px;
  //   border: rgb(219, 219, 219) 1px solid;
}

.el-form--label-top .el-form-item__label {
  padding: 0;
  color: #000;
}
.el-button {
  width: 100%;
  height: 35px;
  line-height: 1px;
  margin: 20px 0;
  background-image: linear-gradient(to top, rgb(38, 159, 66), rgb(46, 199, 81));
  font-weight: 600;
}
.el-form-item {
  margin: 12px;
}
</style>
