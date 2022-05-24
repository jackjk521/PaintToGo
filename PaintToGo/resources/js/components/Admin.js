import React, { useEffect, useState } from "react"
import api from "../api/api";
import "../../css/Admin.css";
import { useNavigate } from "react-router-dom"
import { renderAList } from "../operations/renderAList";
import NullRequestTable from "./NullRequestTable";
import NullOrderTable from "./NullOrderTable";
import NullConsultationTable from "./NullConsultationTable";
import DisplayModal from "./DisplayModal";

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const [ approvedR , setApprovedRList ] = useState([]);
    const [ approvedO , setApprovedOList ] = useState([]);
    const [ approvedC , setApprovedCList ] = useState([]);

    const [ openModal, setOpenModal ] = useState(false);


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

    const open = () => {
        setOpenModal(true);
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
                <h1> NULL statuses </h1>
                    <NullRequestTable/>
                    <NullOrderTable/>
                    <NullConsultationTable/>
            </div>

            

        </div>
    )
}