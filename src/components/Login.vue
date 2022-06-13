<template>
  <el-container>
    <el-header style="line-height: 45px; height: 45px;">
      <el-image :src="require('@/assets/7.png')" style="width: 60px; height: 60px; position: fixed"> </el-image>
      <b class="top_left_text">猫头鹰助理</b>
    </el-header>
    <el-divider class="el-divider--horizontal"></el-divider>
    <el-main style="line-height: 400px;">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-white"></div>
        </el-col>
        <el-col :span="8" style="margin-top: 80px">
          <div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item>
                <el-row style="text-align: center">
                  <b style="font-size: 32px; margin-bottom: 0"> 登录 </b>
                </el-row>
              </el-form-item>
              <el-form-item label="工号" prop="userName">
                <el-input style="width: 400px" placeholder="请输入内容" v-model="ruleForm.userName"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input style="width: 400px" placeholder="请输入内容" type="password" v-model="ruleForm.password"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-row style="text-align: center">
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-row style="text-align: center">
                  <router-link to="/OA">OA登录</router-link>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <el-image :src="require('@/assets/7.png')"
                    style="width: 343px; height: 450px" class="bg_picture">
          </el-image>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    var validateId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入工号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {validator: validateId, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ]
      },
      pass: {
        user_id: '',
        isSucceed: '1',
        token: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          if (this.ruleForm.userName === '1' && this.ruleForm.password === '1') {
            localStorage.setItem('user_id', this.ruleForm.userName)
            localStorage.setItem('token', 'ssd')
            this.$router.push('/main')
          } else {
            this.$message({
              message: '账号或密码不正确！'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col.last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-white {
  background: #ffffff
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.bg_picture {
  left: 30%;
  opacity: 60%;
}

.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 20px 0px;
}
.top_left_text{
  position: absolute;
  left: 80px;
  margin: 10px;
}
</style>
