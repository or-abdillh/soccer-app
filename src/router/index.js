import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

//Routes
const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	}
]

export default createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
