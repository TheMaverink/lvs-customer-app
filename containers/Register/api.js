import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api'

const apiRegister = (userData) => {
  console.log('FROM API')
  console.log(userData)
  return axios.post('/customer/register', userData)
}

export default apiRegister
