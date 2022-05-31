import React, { useEffect, useState } from "react";
import api from "../api/api";
import DisplayModal from "../components/DisplayModal";
import "../../css/Admin.css";

const ApprovedOrders = () => {
    const [ approvedO , setApprovedOList ] = useState([]);
    const [ orderList, setOrderList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);

    useEffect(() => {
        fetchApprovedOrders();
    },[]);

    const fetchApprovedOrders = async (e) => {
        try{         
            const resO = await api.approvedO();
            setApprovedOList(resO.data.approvedOrders);
            }
        catch (err){
            //console.log(err);
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

    const renderOrders = () => {
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

        return approvedO.map((a, index) => {
            return (<tr key={a.order_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                        <td>{a.order_id}</td>
                        <td>{a.branch_add}</td>
                        <td>{a.lastName}</td>
                        <td>
                            <button name = 'row_key' class="view" type="text" onClick={fetchOData} value = {a.order_id}>View</button>
                            <DisplayModal 
                                openModal={openModal} 
                                TableHeader={<TableHeader />} 
                                header="View Order" 
                                handleClose={handleClose} 
                                Details={<Details />}  
                            />
                        </td>
                    </tr> //edit here and test from here
                );
        });
    }

    return (
        <div>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Order ID</th>
                            <th>Brand Address</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderOrders()}
                    </tbody>
                </table>

                <br></br>
        </div>
    )
}

export default ApprovedOrders;