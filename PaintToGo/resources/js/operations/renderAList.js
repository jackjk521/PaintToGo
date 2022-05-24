import React, { useEffect, useState } from "react"
import api from "../api/api";
import DisplayModal from "../components/DisplayModal";

export const renderAList = (query, approvedList) => { 

    const [ requestList, setRequestList ] = useState([]);
    const [ orderList, setOrderList ] = useState([]);
    const [ consultationList, setconsultationList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);
   
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

    const fetchCData = async(e) => {
        try{
            const res = await api.viewCList({params : {row_key : e.target.value}});
            setconsultationList(res.data.viewConsultations);  
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

    // query options 
    if (!query) {
        return (
            <tr>
                <td colSpan="4">
                    Loading products...
                </td>
            </tr>
        );
    };

    if (query.length === 0) {
        return (
            <tr>
                <td colSpan="4">
                    There are no requests available
                </td>
            </tr>
        );
    };
    
    // For the actions, simply add another <td> with buttons or links towards an action
        if (approvedList === 1){
            console.log(requestList);

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
            
            return query.map((a, index) => {
                return (
                        <tr key={a.request_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.request_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <button name = 'row_key' type="text" onClick={fetchRData} value={a.request_id} >View</button>
                                <DisplayModal 
                                    openModal={openModal} 
                                    TableHeader={<TableHeader />} 
                                    header="View Request" 
                                    handleClose={handleClose} 
                                    Details={<Details />}  
                                />
                            </td> 
                            
                        </tr> //edit here and test from here
                );
            });
        }
        else if(approvedList === 2){

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

            return query.map((a, index) => {
                return (<tr key={a.order_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.order_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
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
                        </tr> //edit here and test from here
                    );
            });
        }
        else if (approvedList === 3) {
        
            const handleClose = () => {
                setOpenModal(false);
            }
    
            const TableHeader = () => {
                return (
                    <thead className="table-header">
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Contact No</td>
                            <td>Account Level</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                )
            }
    
            const Details = () => {
                return (consultationList.map((consultation, index) => {
                    return <tr key={index}>
                        <td style={{width:"10%"}} >{consultation.firstName}</td>
                        <td style={{width:"10%"}} >{consultation.lastName}</td>
                        <td style={{width:"15%"}}>{consultation.email_add}</td>
                        <td style={{width:"15%"}}>{consultation.user_contact}</td>
                        <td style={{width:"10%"}}>{consultation.level_name}</td>
                        <td style={{width:"40%"}}>{consultation.consult_description}</td>
                    </tr>
                })
                    
                )
            }

            return query.map((a, index) => {
                return (
                        <tr key={a.consultation_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.consultation_id}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <button name = 'row_key' type="text" onClick={fetchCData} value = {a.consultation_id}>View</button>
                                <DisplayModal 
                                    openModal={openModal} 
                                    TableHeader={<TableHeader />} 
                                    header="View Consultation" 
                                    handleClose={handleClose} 
                                    Details={<Details />}  
                                />   
                            </td>
                             
                        </tr> //edit here and test from here

                );
            });

        }
}