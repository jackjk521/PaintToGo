import React, { useEffect, useState } from "react"
import api from "../api/api";
import {useNavigate} from "react-router-dom"
import { renderAList } from "../operations/renderAList";
import NullRequestTable from "./NullRequestTable";
import NullOrderTable from "./NullOrderTable";
import NullConsultationTable from "./NullConsultationTable";
import ApprovedRequests from "./ApprovedRequests";
import ApprovedConsultations from "./ApprovedConsultations";
import ApprovedOrders from "./ApprovedOrders";
import "../../css/Dashboard.css";
import {BsFillPersonFill} from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


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
            console.log(err);
        }
    }

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( 
        <div className="page">            
            <div className="sidebar">
                <h1 class="mt-4 px-2">Admin</h1>
                <hr/>
                <HashLink smooth to='#null'> Dashboard </HashLink>
                <NavLink to="/adminInventory">Inventory</NavLink>
                <HashLink smooth to='#approved'> Transactions </HashLink>
                <NavLink to="/administration">Admin CRUD</NavLink>                
                <br/><br/><br/>
                <a class="logout" onClick = {logOut}> Log Out </a>
            </div>

            <div className="content">
                <div id="null">
                    <h1> PENDING </h1>
                        <NullRequestTable/>
                        <NullConsultationTable/>
                </div> 

                <hr/>

                <div id="approved">
                    <h1> APPROVED </h1>
                    <ApprovedRequests />
                    <ApprovedOrders />   
                    <ApprovedConsultations />
                    
                </div>   
            </div>

            

            

        </div>
    )
}