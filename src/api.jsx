import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-token-auth-exe-new-novo.vercel.app/'
  // baseURL: 'http://localhost:5000/'
})

export default api