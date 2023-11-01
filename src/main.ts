import { createApp } from 'vue'
import { createPinia } from 'pinia'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index.ts'
import './style.css'
import App from './App.vue'

import {
    parseTime,
    resetForm,
    addDateRange,
    handleTree
} from "@/utils/roydon";

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.handleTree = handleTree

app.use(router)
app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
