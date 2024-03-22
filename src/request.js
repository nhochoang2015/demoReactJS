import axios from 'axios'


export const request = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})