import axios from 'axios'
import config  from './config'

const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})

api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        if (error?.response?.status === 401) {
            window.location.replace(config.apiUrl + '/auth/login')
        }
        throw error
    },
)

export { api }
