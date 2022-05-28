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
            <nav class="navbar fixed-top navbar-dark">
                <a class="navbar-brand px-2" href="dashboard">
                    Color City Paint Store
                </a>
            </nav>
            
            <div className="sidebar">
                <h1 class="mt-4 px-2">Admin</h1>
                <hr/>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink to="/order">
                    Inventory
                </NavLink>
                <NavLink to="/dashboard">
                    Transactions
                </NavLink>
                <NavLink to="/administration">
                    Admin CRUD
                </NavLink>
                <br/><br/><br/><br/><br/>
                <a class="logout" onClick = {logOut}> Log Out </a>
            </div>

            <div className="content">
                <h1>Admin page {user_id} {branch_id} </h1>

                <br/>


                <div>
                    <h1> NULL statuses </h1>
                        <NullRequestTable/>
                        <NullConsultationTable/>
                </div> 

                <hr/>
                
                <div>
                    <h1> APPROVED statuses </h1>
                    <ApprovedRequests />
                    <ApprovedOrders />   
                    <ApprovedConsultations />
                    
                </div>   
            </div>
            

            

        </div>
    )
}