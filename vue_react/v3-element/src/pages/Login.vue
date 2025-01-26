<template>
  <el-form
  style="position: absolute;left:45%;"
  ref="formRef"
  :model="form"
  :rules="rules"
  label-width="auto"
  >
  <el-form-item label="用户名" prop="name">
    <el-input v-model="form.name" placeholder="请输入用户名" size="small"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="form.password" placeholder="请输入密码" type="password" size="small"></el-input>
  </el-form-item> 
  <el-form-item>
    <el-button type="primary" size="small" @click="onSubmit" :loading="loading">登录</el-button>
  </el-form-item>
  </el-form>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { login } from '../api/index'
import { useRouter } from 'vue-router'
const formRef = ref(null)
const form = reactive({
  name: '',
  password: '',
})
const loading = ref(false)
const router = useRouter()
const onSubmit = async () => {
    loading.value = true
    await formRef.value.validate(async(valid) => {
    if (valid) {
      console.log('验证成功');
      const res = await login(form)
      if(res.data.code === 200) {
        // console.log(res.data.data)
        let token = res.data.data
        localStorage.setItem('token', token)
        router.push('/')
      }
      else {
        console.log(res.data.msg)
      }
    } else {
      console.log('验证失败');
    }
  });
}
const rules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
}
</script>

<style scoped>

</style>