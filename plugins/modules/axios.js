import axios from 'axios'

const CONFIG = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

export const HTTP = axios.create(CONFIG)
