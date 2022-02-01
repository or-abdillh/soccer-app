import { defineStore } from 'pinia'
import { otherNews } from '@/API/otherNews.js'

export const useOtherNews = defineStore('otherNews', {
	state: () => {
		return {
			news: []
		}
	},
	actions: {
		fillOtherNews() {
			if ( this.news.length <= 0 ) otherNews(this)
		}
	}
})
