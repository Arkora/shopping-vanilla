import axios from "axios";

const API =  axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/${id}`)
export const fetchByCategory = (category) => API.get(`/products/category/${category}`)