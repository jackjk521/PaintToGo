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
    

    //Admin CRUD and Branch Inventory
    viewProducts: () => {
        return axios.get(`${BASE_API_URL}/viewProducts`);
    },
    viewUsers: () => {
        return axios.get(`${BASE_API_URL}/viewUsers`);
    },
    viewEmployees: () => {
        return axios.get(`${BASE_API_URL}/viewEmployees`);
    },
    viewBrands: () => {
        return axios.get(`${BASE_API_URL}/viewBrands`);
    },
    viewBranches: () => {
        return axios.get(`${BASE_API_URL}/viewBranches`);
    },
    viewUtility: () => {
        return axios.get(`${BASE_API_URL}/viewUtility`);
    },

    newProduct: (newProduct) => {
        return axios.post(`${BASE_API_URL}/newProduct`, newProduct);
    },
    editProduct: (updatedProduct) => {
        return axios.post(`${BASE_API_URL}/editProduct`, updatedProduct);
    },
    deleteProduct: (deletedProduct) => {
        return axios.post(`${BASE_API_URL}/deleteProduct`, deletedProduct);
    },

    newUser: (newUser) => {
        return axios.post(`${BASE_API_URL}/newUser`, newUser);
    },
    editUser: (editedUser) => {
        return axios.post(`${BASE_API_URL}/editUser`, editedUser);
    },
    deleteUser: (deletedUser) => {
        return axios.post(`${BASE_API_URL}/deleteUser`, deletedUser);
    },

    newBranch: (newBranch) => {
        return axios.post(`${BASE_API_URL}/newBranch`, newBranch);
    },
    editBranch: (editedBranch) => {
        return axios.post(`${BASE_API_URL}/editBranch`, editedBranch);
    },
    deleteBranch: (deletedBranch) => {
        return axios.post(`${BASE_API_URL}/deleteBranch`, deletedBranch);
    },

    newBrand: (newBrand) => {
        return axios.post(`${BASE_API_URL}/newBrand`, newBrand);
    },
    editBrand: (editedBrand) => {
        return axios.post(`${BASE_API_URL}/editBrand`, editedBrand);
    },
    deleteBrand: (deletedBrand) => {
        return axios.post(`${BASE_API_URL}/deleteBrand`, deletedBrand);
    },

    viewBranchInventory: (params) => {
        return axios.get(`${BASE_API_URL}/viewBranchInventory`, params);
    },

    viewBranchInventoryOverview: (params) => {
        return axios.get(`${BASE_API_URL}/viewBranchInventoryOverview`, params);
    },

}