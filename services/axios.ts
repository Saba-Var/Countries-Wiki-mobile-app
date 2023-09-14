import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_COUNTRIES_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
