import { createApp } from 'vue'
import './style.css'
import App from './App2.vue'
import router from "./router";

createApp(App)
    .use(router)
    .mount('#app')

