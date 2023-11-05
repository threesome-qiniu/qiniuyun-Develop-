<template>
  <el-row>
    <el-col :span="12" class="bgimage" style="min-height:100vh">


    </el-col>

    <el-col :span="6" :offset="3" style="height: 100%; margin-top: 250px;">
      <div style="height: 90px;width: 90px; transform: translateX(200px);">
        <img id="loginHead" src="../assets/268303cadd2e4579bf35faecb5d5914b.jpeg">
      </div>
      <!-- 登陆页面的表单 -->
      <el-form :model="loginform" label-width="120px" v-if="login">
        <el-form-item label="账号">
          <el-input v-model="loginform.name" placeholder="请输入账号"/>


        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="loginform.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-button @click="userLogin" type="primary" style="width: 240px;">登录</el-button>
          <el-button @click="registerUser" type="primiry" style="width: 240px;">注册</el-button>

        </el-form-item>

      </el-form>
      <!-- 注册页面的表单 -->
      <el-form v-else :model="registerform" status-icon="true" :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input type="text" v-model="registerform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerform.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registerform.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 20px;">
          <el-button @click="goregister" type="primiry"
                     style="width: 240px; background-color:#07A7E1;">注册
          </el-button>

        </el-form-item>
      </el-form>

    </el-col>

  </el-row>
</template>

<script lang="ts">

import {reactive} from 'vue'
import request from '../utils/request'
import {ElMessage} from 'element-plus'
import {userLogin} from '@/api/user'
import {useUserStore} from '@/store/useUserStore'

export default {
  name: 'LoginIndex',
  data() {
    return {
      login: true,
    }
  },
  async created() {

  },
  methods: {


    // 登录
    async userLogin() {

      const res = await userLogin(this.loginform.name, this.loginform.password)
      if (res.code != 200) {
        ElMessage({
          message: res.msg,
          type: 'warning',
        })

      } else {
        const userstore = useUserStore()
        userstore.settoken(res.data.token)
        console.log(localStorage.getItem('user'));
        ElMessage({
          message: res.msg,
          type: 'success',
        })
        await this.$router.push('/')

      }
      console.log(res);


    },
    registerUser() {
      this.login = false
    },
    // 注册
    async goregister() {
      // this.login = true
      const res = await request.post('/user/api/v1/register', {
        username: this.registerform.name,
        password: this.registerform.password,
        confirmPassword: this.registerform.checkPass
      })
      // 消息提示 判断code值

      console.log(res);
      if (res.code != 200) {
        this.login = false
        ElMessage({
          message: res.msg,
          type: 'warning',
        })

      } else {
        this.login = true
        ElMessage({
          message: res.msg,
          type: 'success',
        })

      }
    }
  },
  setup() {
    const loginform = reactive({
      name: '',
      password: ''
    })
    const registerform = reactive({
          name: '',
          password: '',
          checkPass: ''
        }
    )
    const rules = {
      name: [
        {required: true, message: '请输入账号', trigger: 'blur'},

      ],
      password: [{required: true, message: '请输入密码', trigger: 'blur'},
        {min: 3, max: 9, message: '长度必须3到9位', trigger: 'blur'},
      ],
      checkPass: [{required: true, message: '请再次输入密码', trigger: 'blur'},
        {min: 3, max: 9, message: '长度必须3到9位', trigger: 'blur'},
        {
          validator: (rules: any, value: any, callback: any) => {
            if (value == registerform.password) {
              callback()
            } else {
              callback(new Error('两次输入密码不正确'))
            }

          }
        }

      ]
    }

    return {loginform, registerform, rules}
  }
}

</script>

<style lang='less' scoped>
.bgimage {
  background-image: url(../assets/affeade4eb186004825a19e2eab59088.jpg);
  background-size: 100% auto;


}

.el-button + .el-button {
  margin-left: 0;
}

#loginHead {
  max-width: 100%;
  height: auto;
  background-repeat: no-repeat;
}
</style>
