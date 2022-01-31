//Handler for get three news recmended
import axios from 'axios'
import API_KEY from '@/API_KEY.js'

const recomended = container => {
  //Fetch API
  axios.get(`https://newsdata.io/api/1/news?apikey=${ API_KEY }&category=sports`)
    .then(res => {
      const data = res.data
      container.value = data.results.filter(d => d.image_url !== null)
      container.value.forEach(e => e.description = "")
    })
    .catch(err => alert(err))
}

export default recomended;