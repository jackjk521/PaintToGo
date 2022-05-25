import React, { useEffect, useState } from "react"
import api from "../api/api";
import "../../css/Admin.css";
import { useNavigate } from "react-router-dom"
import { renderAList } from "../operations/renderAList";
import NullRequestTable from "./NullRequestTable";
import NullOrderTable from "./NullOrderTable";
import NullConsultationTable from "./NullConsultationTable";
import ApprovedRequests from "./ApprovedRequests";
import ApprovedConsultations from "./ApprovedConsultations";
import ApprovedOrders from "./ApprovedOrders";

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const [ approvedR , setApprovedRList ] = useState([]);
    const [ approvedO , setApprovedOList ] = useState([]);
    const [ approvedC , setApprovedCList ] = useState([]);

    useEffect(() => {
       fetchApprovedList();
    },[]);

        
    // Fetching Approved Status from request, orders and consultations table
    const fetchApprovedList = async (e) => {
        try{
            const resR = await api.approvedR();
            setApprovedRList(resR.data.approvedRequests);          
            const resO = await api.approvedO();
            setApprovedOList(resO.data.approvedOrders);
            const resC = await api.approvedC();
            setApprovedCList(resC.data.approvedConsultations);
            }
        catch (err){
            //console.log(err);
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
                <ApprovedRequests />
                <ApprovedOrders />   
                <ApprovedConsultations />
                
            </div>   

            <div>
                <h1> NULL statuses </h1>
                    <NullRequestTable/>
                    <NullOrderTable/>
                    <NullConsultationTable/>
            </div>

            

        </div>
    )
}