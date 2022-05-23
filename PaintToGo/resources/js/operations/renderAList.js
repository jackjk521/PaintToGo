import React, { useEffect, useState } from "react"
import api from "../api/api";

export const renderAList = (query, approvedList) => { 

    const [requestList, setRequestList] = useState([]);
    const [orderList, setOrderList] = useState([]);

   
    const fetchRData = async(e) => {
        try{
            const res = await api.viewRList({params : {row_key : e.target.value}});
            setRequestList(res.data.viewRequest);  
         
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
            return query.map((a) => {
                return (
                        <tr key={a.request_id} className="table-contents-odd" >
                            <td>{a.request_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td>
                            <button name = 'row_key' type="text" onClick= {fetchRData} value = {a.request_id}> View  </button>
                            </td> 
                            
                        </tr> //edit here and test from here
                );
            });
        }
        else if(approvedList === 2){
            return query.map((a) => {
                return (
                        <tr key={a.order_id} className="table-contents-odd" >
                            <td>{a.order_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td>
                            <button name = 'row_key' type="text" onClick= {fetchOData} value = {a.order_id}> View  </button>
                            </td>
                        </tr> //edit here and test from here

                );
            });
        }
        else if (approvedList === 3){
            return query.map((a) => {
                return (
                        <tr key={a.consultation_id} className="table-contents-odd" >
                            <td>{a.consultation_id}</td>
                            <td>{a.lastName}</td>    
                        </tr> //edit here and test from here

                );
            });

        }
}