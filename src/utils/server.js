import axios from 'axios'

const server = axios.create({
    baseURL: '',
    timeout: 5000
})

server.interceptors.request.use(config => {
    return config
}, err => {
    console.log(err);
})

server.interceptors.response.use(res => {
    return res
}, err => {
    console.log(err);
})

export default server