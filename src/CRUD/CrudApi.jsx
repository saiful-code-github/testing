import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com"
})


// get api
export const getApi = () => {
   return api.get("/products")
}

//post api
export const postApi = (product) => {
    return api.post("/products", product)
}
// put api
export const putApi = (id, product) => {
    return api.put(`/products/${id}`, product)
}
//delete api
export const deleteApi = (id) => {
    return api.delete(`/products/${id}`)
}