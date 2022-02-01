import { defineStore } from 'pinia'
import { topHeadlines } from '@/API/topHeadlines.js'

export const useHeadlines = defineStore('headlines', {
	state: () => {
		return {
			news: []
		}
	},
	actions: {
		fillHeadlines() {
			//Fill data if headlines length is zero
			if ( this.news.length <= 0 ) topHeadlines(this)
		}
	}
})
