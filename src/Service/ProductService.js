import axios from "./requested";


// Lấy mọi sản phẩm từ fakestore
const getAllProducts = () =>{
    return axios.get('/products')
}

export {getAllProducts}