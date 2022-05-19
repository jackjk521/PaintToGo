import React, { useEffect, useState } from "react"
import api from "../api/api";
import {useNavigate} from "react-router-dom"

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const [ approvedR , setApprovedRList ] = useState([]);


    useEffect(() => {
       fetchApprovedList();
       fetchNullList();
    },[]);

        
    // Fetching Approved Status from request, orders and consultations table
    const fetchApprovedList = async (e) => {
        try{
            const resR = await api.approvedR();
            setApprovedRList(resR.data);
            console.log(approvedR);
            const resO = await api.approvedO();
            const resC = await api.approvedC();
           
          
                // console.log(resR);
                // console.log(resO);
                // console.log(resC);
            }
        catch (err){
            console.log(err);
        }
    }

    // Fetching Null Status from request, orders and consultations table

    const fetchNullList = async (e) => {
        try{
            const resNR = await api.nullR();
            const resNO = await api.nullO();
            const resNC = await api.nullC();
                // setApprovedList(res.data.data);
                // console.log(resNR);
                // console.log(resNO);
                // console.log(resNC);
            }
        catch (err){
            console.log(err);
        }
    }



    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    

    const renderATList = () => {
        if (!approvedR) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading products...
                    </td>
                </tr>
            );
        };
        if (approvedR.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no requests available
                    </td>
                </tr>
            );
        };


        // For the actions, simply add another <td> with buttons or links towards an action

        return approvedR.map((a) => {
            return (
                    <tr key={a.request_id} className="table-contents-odd" >
                        <td>{a.request_id}</td>
                        <td>{a.branch_add}</td>
                        <td>{a.lastName}</td>
                    </tr> //edit here and test from here
                    

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
                        {renderATList()}
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