import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

//Routes
const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Read',
		path: '/read',
		component: () => import('@/views/Read.vue')
	},
	{
		name: 'Collections',
		path: '/collections',
		component: () => import('@/views/Collections.vue')
	}
]

export default createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})
