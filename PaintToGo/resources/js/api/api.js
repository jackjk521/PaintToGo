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

    // Queries for TransactionLists
    approvedR: () => {
        return axios.get(`${BASE_API_URL}/aRList`);
    },
    approvedO: () => {
        return axios.get(`${BASE_API_URL}/aOList`);
    },
    approvedC: () => {
        return axios.get(`${BASE_API_URL}/aCList`);
    },
    nullR: () => {
        return axios.get(`${BASE_API_URL}/nRList`);
    },
    nullO: () => {
        return axios.get(`${BASE_API_URL}/nOList`);
    },
    nullC: () => {
        return axios.get(`${BASE_API_URL}/nCList`);
    },

    //view requests, orders, consultations
    viewRList: (params) => {
        return axios.get(`${BASE_API_URL}/viewRList`, params);
    },
    viewOList: (params) => {
        return axios.get(`${BASE_API_URL}/viewOList`, params);
    },



    //approvebtns here
    approveRBtn: (params) => {
        return axios.get(`${BASE_API_URL}/approveRBtn`, params);
    },

    approveOBtn: (params) => {
        return axios.get(`${BASE_API_URL}/approveOBtn`, params);
    },

    approveCBtn: (params) => {
        return axios.get(`${BASE_API_URL}/approveCBtn`, params);
    },

    userProfile: (params) => {
        return axios.get(`${BASE_API_URL}/getUser`, params);
    },

    userHistory: (params) => {
        return axios.get(`${BASE_API_URL}/getHistory`, params);
    },
    
}