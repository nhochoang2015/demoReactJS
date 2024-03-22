import axios from 'axios'

const intance = axios.create({
    baseURL:'https://fakestoreapi.com',
});

intance.interceptors.response.use(function(response){
    return response.data;
},function(error){
    return Promise.reject(error);
})
export default intance;