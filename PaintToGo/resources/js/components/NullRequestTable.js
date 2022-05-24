import React, { useEffect, useState } from "react"
import api from "../api/api";
import DisplayModal from "./DisplayModal";

export default function NullRequestTable () {
    const [ nullList , setNullList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);
    const [ requestList, setRequestList ] = useState([]);

    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullR();
            setNullList(res.data.nullRequests);   
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
            const res = await api.approveRBtn({params : {rowKey : e.target.value}});
         
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

    const fetchRData = async(e) => {
        try{
            const res = await api.viewRList({params : {row_key : e.target.value}});
            setRequestList(res.data.viewRequest);
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
                        <td>Quantity Requested</td>
                        <td>Unit Sold At</td>
                        <td>Price</td>
                        <td>Retail Price</td>
                    </tr>
                </thead>
            )
        }

        const Details = () => {
            return (requestList.map((request, index) => {
                return <tr key={index}>
                    <td>{request.product_name}</td>
                    <td>{request.req_quantity}</td>
                    <td>{request.unit_sold_at}</td>
                    <td>{request.price}</td>
                    <td>{request.retail_price}</td>
                </tr>
            })
                
            )
        }

        if (!nullList) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading requests...
                    </td>
                </tr>
            );
        };
        if (nullList.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no requests available
                    </td>
                </tr>
            );
        };

        return nullList.map((a, index) => {
            
           return (<tr key={a.request_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
            
                        <td>{a.request_id}</td>
                        <td>{a.branch_add}</td>
                        <td>{a.lastName}</td>
                        <td>
                            <button name = 'rowKey' onClick= {approveBtn} style={{marginRight:"10px"}} value = {a.request_id}> Approve </button>
                            <button name = 'row_key' type="text" onClick={fetchRData} value={a.request_id} >View</button>
                            <DisplayModal 
                                openModal={openModal} 
                                TableHeader={<TableHeader />} 
                                header="View Request" 
                                handleClose={handleClose} 
                                Details={<Details />}  
                            />
                        </td> 
                    </tr> 
                ) 
        })
}

    return (
        <div>
            <h1> NULL Request Table </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Request ID</th>
                            <th>Brand Address</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderList()}
                    </tbody>
                </table>
        </div>
        
    );
}