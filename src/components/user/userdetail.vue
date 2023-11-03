<template>
  <el-row :gutter="30">
    <el-col :span="12">
      <el-form :model="form" label-width="25px">
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.name" />
        </el-form-item>



        <el-form-item label="性别">
          <el-radio-group v-model="form.gender">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form></el-col>
      <el-col :span="12">2</el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  email: '',
  gender: ''

})

const onSubmit = () => {
  console.log('submit!')
}
</script>
