import React, { useEffect, useState } from "react"
import api from "../api/api";
import {useNavigate} from "react-router-dom"
import { renderAList } from "../operations/Functions";

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const [ approvedR , setApprovedRList ] = useState([]);
    const [ approvedO , setApprovedOList ] = useState([]);
    const [ approvedC , setApprovedCList ] = useState([]);

    const [ nullR , setNullRList ] = useState([]);
    const [ nullO , setNullOList ] = useState([]);
    const [ nullC , setNullCList ] = useState([]);

    
    useEffect(() => {
       fetchApprovedList();
       fetchNullList();
    },[]);

        
    // Fetching Approved Status from request, orders and consultations table
    const fetchApprovedList = async (e) => {
        try{
            const resR = await api.approvedR();
            setApprovedRList(resR.data.approvedRequests);          
            console.log(resR.data);
            const resO = await api.approvedO();
            setApprovedOList(resO.data.approvedOrders);
            const resC = await api.approvedC();
            setApprovedCList(resC.data.approvedConsultations);
            }
        catch (err){
            console.log(err);
        }
    }

    // Fetching Null Status from request, orders and consultations table

    const fetchNullList = async (e) => {
        try{
            const resNR = await api.nullR();
            setNullRList(resNR.data.nullRequests);    
            const resNO = await api.nullO();
            setNullOList(resNO.data.nullOrders);   
            const resNC = await api.nullC();
            setNullCList(resNC.data.nullConsultations);   
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

    return ( 
        <div> 
            <h1>Admin page {user_id} {branch_id} </h1> 

            <button onClick = {logOut}> LogOut </button>

            <div>
                <h1> APPROVED statuses </h1>
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
                        {renderAList(approvedR, 1)}
                    </tbody>
                </table>

                <br></br>

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
                        {renderAList(approvedO, 2)}
                    </tbody>
                </table>

                <br></br>

                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Consultation ID</th>
                            <th>Branch Add</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderAList(approvedC, 3)}
                    </tbody>
                </table>
            </div>

            <br></br>

            <div>
                <h1> View details here  </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Request ID</th>
                            <th>Brand Address</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                   
                    </tbody>
                </table>

                <br></br>

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
                       
                    </tbody>
                </table>

                <br></br>

                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Consultation ID</th>
                            <th>Branch Add</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                    
                    </tbody>
                </table>
            </div>

            <div>
                <h1> NULL statuses </h1>
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
                        {renderAList(nullR, 4)}
                    </tbody>
                </table>

                <br></br>

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
                        {renderAList(nullO, 5)}
                    </tbody>
                </table>

                <br></br>

                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Consultation ID</th>
                            <th>Branch Add</th>
                            <th>Lastname</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderAList(nullC, 6)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}