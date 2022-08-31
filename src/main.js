import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/assets/styles/variables.scss";
import "@/assets/styles/global.scss";
import "@/assets/styles/responsive/xs/xs.scss";
import "@/assets/styles/responsive/sm/sm.scss";
import "@/assets/styles/responsive/md/md.scss";
import "@/assets/styles/responsive/lg/lg.scss";
import "@/assets/styles/responsive/xl/xl.scss";
import "@/assets/styles/responsive/xxl/xxl.scss";
import "@/assets/styles/responsive/xxxl/xxxl.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
