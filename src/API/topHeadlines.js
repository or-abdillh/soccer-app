import { news } from '@/config.js'
import axios from 'axios'

export const topHeadlines = state => {
	//Get top Headlines
 	axios.get(`${news.endpoint}/top-headlines?category=sports&q=soccer&pageSize=5&apiKey=${news.apiKey}`)
 		.then(res => {
 			state.news = res.data.articles
 		})
 		.catch(err => {
 			state.news = false
 			console.log(err)
 		})
}
