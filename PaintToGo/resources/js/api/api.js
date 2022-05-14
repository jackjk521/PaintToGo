const axios = window.axios;

const BASE_API_URL = 'http://127.0.0.1:8000/api';

export default {
    // For Login and Registration
    signUp: (res) => {
        return axios.post(`${BASE_API_URL}/signUp`, res);
    },
    login: (Info) => {
        return axios.post(`${BASE_API_URL}/login`, Info);
    },

    // Queries for Products 
    fetchProducts: () => {
        return axios.get(`${BASE_API_URL}/products`);
    }
}