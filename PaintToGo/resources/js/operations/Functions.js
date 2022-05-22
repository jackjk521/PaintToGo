import React, { useEffect, useState } from "react"
import api from "../api/api";

export const renderAList = (query, approvedList) => { 
    // approvedList is an int that corresponds to the 
    // if and else if as each has a unique id that is saved in each row
    // and i cant find a way how to get the id for each without doing this

    const [requestList, setRequestList] = useState([]);

    const approveBtn = () => {
            console.log("approve btn pressed");
    }

    const viewBtn  = async (e) =>{;

        try{
            const res = await api.viewRList({params : {row_key : e.target.value}});
            setRequestList(res.data.viewRequest);    
            console.log(requestList); 

            if(res.status === 200)
            {
                console.log(res.data);

                console.log("successful");
            }
            else{
                console.log(res);
            }
        }
        catch (err){
            console.log(err);
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
                            <button name = 'row_key' type="text" onClick={viewBtn} value = {a.request_id}> View  </button>
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
        if (approvedList === 4){  // null status lists starts here
            return query.map((a) => {
                return (
                        <tr key={a.request_id} className="table-contents-odd" >
                            <td>{a.request_id}</td>
                            <td>{a.branch_add}</td>
                            <td><button onClick = {approveBtn}> Approve</button> </td> 
                        </tr> //add the approve function here 

                );
            });
        }
        else if(approvedList === 5){
            return query.map((a) => {
                return (
                        <tr key={a.order_id} className="table-contents-odd" >
                            <td>{a.order_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td><button onClick = {approveBtn}> Approve</button> </td>
                        </tr> //edit here and test from here

                );
            });
        }
        else if (approvedList === 6){
            return query.map((a) => {
                return (
                        <tr key={a.consultation_id} className="table-contents-odd" >
                            <td>{a.consultation_id}</td>
                            <td>{a.lastName}</td>
                            <td><button onClick = {approveBtn}> Approve</button> </td>
                        </tr> //edit here and test from here

                );
            });
        }
}