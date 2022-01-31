import { news } from '@/config.js'
import axios from 'axios'

export const topHeadlines = box => {
	//Get top Headlines
 	axios.get(`${news.endpoint}/top-headlines?country=us&category=sports&pageSize=5&apiKey=${news.apiKey}`)
 		.then(res => {
 			box.value = res.data.articles
 		})
 		.catch(err => {
 			box.value = false
 			console.log(err)
 		})
}
