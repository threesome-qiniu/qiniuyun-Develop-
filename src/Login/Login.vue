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
                    <el-input v-model="loginform.name" placeholder="请输入账号" />


                </el-form-item>

                <el-form-item label="密码">
                    <el-input v-model="loginform.password" placeholder="请输入密码" />
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
                        style="width: 240px; background-color:#07A7E1;">注册</el-button>

                </el-form-item>
            </el-form>

        </el-col>

    </el-row>
</template>

<script lang="ts">

import { reactive } from 'vue'
import request from '../utils/request'


export default {
    name: 'LoginIndex',
    data() {
        return {
            login: true,
        }
    },
    async created() {
        this.goregister()
       
    },
    methods: {
        
        userLogin() {
            this.$router.push('/layout')
        },
        registerUser() {
            this.login = false
        },
        async goregister() {
            // this.login = false
            const res = await request.post('/user/api/v1/register', {
                data: {
                    "username": "roydon",
                    "password": "123456",
                    "confirmPassword": "123456"
                }
            })
            console.log(res);


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
                { required: true, message: '请输入账号', trigger: 'blur' },

            ],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 9, message: '长度必须3到9位', trigger: 'blur' },
            ],
            checkPass: [{ required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 3, max: 9, message: '长度必须3到9位', trigger: 'blur' },
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

        return { loginform, registerform, rules }
    }
}

</script>

<style lang='less' scoped>
.bgimage {
    background-image: url(../assets/affeade4eb186004825a19e2eab59088.jpg);
    background-size: 100% auto;


}

.el-button+.el-button {
    margin-left: 0;
}

#loginHead {
    max-width: 100%;
    height: auto;
    background-repeat: no-repeat;
}
</style>
