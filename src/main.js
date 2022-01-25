import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'
import '@splidejs/splide/dist/css/splide.min.css';

createApp(App)
.use(router)
.mount('#app')
