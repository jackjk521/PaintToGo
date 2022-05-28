import React, { useEffect, useState } from "react"
import api from "../api/api";
import DisplayModal from "../components/DisplayModal";

const NullRequestTable = () => {
    const [ nullList , setNullList ] = useState([]);
    const [ requestList, setRequestList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);

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
        const renderRequests = () => {

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
            
            return nullList.map((a, index) => {
                return (
                        <tr key={a.request_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.request_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <button name = 'rowKey' onClick= {approveBtn} style={{marginRight:"10px"}} value = {a.request_id}> Approve </button>
                            </td>
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

    return (
        <div>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Request ID</th>
                            <th>Brand Address</th>
                            <th>Lastname</th>
                            <th>Approve</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderRequests()}
                    </tbody>
                </table>

                <br></br>
        </div>
        
    );
}

export default NullRequestTable;