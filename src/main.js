import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import './index.css'
import '@splidejs/splide/dist/css/splide.min.css';

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
