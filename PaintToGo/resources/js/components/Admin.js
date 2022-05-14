import React, { useEffect, useState } from "react"
import "../../css/Admin.css";
import api from "../api/api";
import {useNavigate} from "react-router-dom"

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');
    const [ products, setProducts ] = useState([]);
    // const fetchTList = async () => {
    //     const res = await fetch('http://127.0.0.1:8000/api/TList');
    //     return res.json();
    // }

    useEffect(() => {
        fetchProducts();
    },[]);

    // const[data, status] = useQuery('TList', fetchTList);
    // console.log(data);
    
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    const fetchProducts = () => {
        api.fetchProducts().then(res =>  {
            const results = res;
            setProducts(results.data.data);
        })
    }

    const renderProduct = () => {
        if (!products) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading products...
                    </td>
                </tr>
            );
        };
        if (products.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no products available
                    </td>
                </tr>
            );
        };


        // For the actions, simply add another <td> with buttons or links towards an action

        return products.map((product) => {
            return (
                product.product_id % 2 != 0 ?
                    <tr key={product.product_id} className="table-contents-odd" >
                        <td>{product.product_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.utility_id}</td>
                        <td>{product.product_name}</td>
                        <td>Php {product.price}</td>
                        <td>Php {product.retail_price}</td>
                        <td>{product.unit_sold_at}</td>
                    </tr>
                :   <tr key={product.product_id} className="table-contents-even" >
                        <td>{product.product_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.utility_id}</td>
                        <td>{product.product_name}</td>
                        <td>Php {product.price}</td>
                        <td>Php {product.retail_price}</td>
                        <td>{product.unit_sold_at}</td>
                    </tr>
            );
        });
    }

    return ( 
        <div> 
            <h1>Admin page {user_id} {branch_id} </h1> 

            <button onClick = {logOut}> LogOut </button>

            <div>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Product ID</th>
                            <th>Brand ID</th>
                            <th>Utility ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Retail Price</th>
                            <th>Unit Sold At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderProduct()}
                    </tbody>
                </table>
            </div>
            
            {/* {status === 'error' && (
                <div> Error fetching data </div>
            )}

            {status === 'success' && (
                <div> 
                    success
                </div>
            )} */}
        
        </div>
    )
}