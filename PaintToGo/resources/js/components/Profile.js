import { get } from "lodash";
import {Link, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../api/api";
import DisplayModal from "./DisplayModal"
import {BsFillPersonFill} from 'react-icons/bs';

export default function Profile(){
    const user_id = sessionStorage.getItem('user_id');

    const [ orderHistory , setOrderHistory ] = useState([]);
    const [ orderList, setOrderList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }
    
    const f = sessionStorage.getItem('user')
    var storedUser = JSON.parse(f);
    console.log(storedUser.data);


    useEffect(() => {
        fetchOrderList();
     },[]);

    const fetchOrderList = async (ex) => {
        try{
            const res = await api.userHistory({params : {toHistory : ex.target.value}});
            setOrderHistory(res.data.orderList);  
            console.log(res); 
            }
        catch (err){
            console.log(err);
        }
    }

    const fetchOData = async(e) => {
        try{
            const res = await api.viewOList({params : {row_key : e.target.value}});
            setOrderList(res.data.viewOrders);  
            setOpenModal(true);
            if(res.status === 200)
            {
                console.log(res.data);

                console.log("successful");
            }
            else{
                console.log(res);
            }  
        }
        catch(err){
            return (err);
        }
    }

    const renderList = () =>{
    
        const handleClose = () => {
            setOpenModal(false);
        }

        const TableHeader = () => {
            return (
                <thead className="table-header">
                    <tr>
                        <td>Product Name</td>
                        <td>Quantity Ordered</td>
                        <td>Unit Sold At</td>
                        <td>Price</td>
                        <td>Retail Price</td>
                    </tr>
                </thead>
            )
        }

        const Details = () => {
            return (orderList.map((order, index) => {
                return <tr key={index}>
                    <td>{order.product_name}</td>
                    <td>{order.order_quantity}</td>
                    <td>{order.unit_sold_at}</td>
                    <td>{order.price}</td>
                    <td>{order.retail_price}</td>
                </tr>
            })
                
            )
        }

        if (!orderHistory) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading orders...
                    </td>
                </tr>
            );
        };
        if (orderHistory.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no orders available
                    </td>
                </tr>
            );
        };
           
        return orderHistory.map((a, index) => {
           
                return (<tr key={a.order_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.order_id}</td>
                            <td>{a.branch_add}</td>
                            <td>
                                <button name = 'row_key' type="text" onClick={fetchOData} value = {a.order_id}>View</button>
                                <DisplayModal 
                                    openModal={openModal} 
                                    TableHeader={<TableHeader />} 
                                    header="View Order" 
                                    handleClose={handleClose} 
                                    Details={<Details />}  
                                />
                            </td>
                        </tr> 
                )
            }
        )
}

    return (
<div className="page">
            <div class="content-center">
                <a href="dashboard" class="btn btn-primary" onClick="dashboard">Back to Dashboard</a>
                <br/><br/>
                <div class="customer">
                    <h1>User Profile</h1> 
                    <div class="cusbox3"><p><BsFillPersonFill/></p> <h3>{storedUser.data.user.firstName} {storedUser.data.user.lastName}</h3></div>
                    
                    <h4>{storedUser.data.user.email_add}</h4>
                    <h4>{storedUser.data.user.user_contact}</h4>

                    <br/>

                    <button onClick={fetchOrderList} name="toHistory" value={user_id}> View History </button> | <button onClick = {logOut}> LogOut </button> 
                </div>

                <hr/>
            
            <h1> Orders History </h1>

                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Order ID</th>
                            <th>Brand Address</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderList()}
                    </tbody>
                </table>
            </div>

            <br/>

        </div> 
    );
} 