import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';  //plus版本的样式文件
import App from './App.vue'
import router from './route/index.js'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')