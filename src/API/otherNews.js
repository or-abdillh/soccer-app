import { news } from '@/config.js'
import axios from 'axios'

export const otherNews = state => {
	//Get top Headlines
 	axios.get(`${news.endpoint}/everything?q=soccer&pageSize=12&apiKey=${news.apiKey}`)
 		.then(res => {
 			state.news = res.data.articles
 		})
 		.catch(err => {
 			state.news = false
 			console.log(err)
 		})
}
