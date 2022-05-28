import React, { useEffect, useState } from "react"
import api from "../api/api";
import DisplayModal from "../components/DisplayModal";
import "../../css/Dashboard.css";

const NullOrderTable = () => {

    const [ nullList , setNullList ] = useState([]);
    const [ orderList, setOrderList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);
    
    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullO();
            setNullList(res.data.nullOrders);   
            }
        catch (err){
            console.log(err);
        }
    }
    function refreshPage() {
        window.location.reload(false);
      
    }

    const approveBtn = async (e) => {
        try{
            const res = await api.approveOBtn({params : {rowKey : e.target.value}});
         
            if(res.status === 200)
            {
                refreshPage();
            }
            else{
                console.log(res);
            }  
        }
        catch(err){
            return (err);
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
    
            if (!nullList) {
                return (
                    <tr>
                        <td colSpan="4">
                            Loading orders...
                        </td>
                    </tr>
                );
            };
            if (nullList.length === 0) {
                return (
                    <tr>
                        <td colSpan="4">
                            There are no orders available
                        </td>
                    </tr>
                );
            };
               
            return nullList.map((a, index) => {
               
                    return (<tr key={a.order_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                                <td>{a.order_id}</td>
                                <td>{a.branch_add}</td>
                                <td>{a.lastName}</td>
                                <td>
                                <button name = 'rowKey' onClick= {approveBtn} style={{marginRight:"10px"}} value = {a.order_id}> Approve </button>
                                </td>
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
        
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Order ID</th>
                                <th>Brand Address</th>
                                <th>Lastname</th>
                                <th>Approve</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody className="table-contents">
                            {renderList()}
                        </tbody>
                    </table>
        
    );
}
export default NullOrderTable;