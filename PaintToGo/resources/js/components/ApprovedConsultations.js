import React, { useEffect, useState } from "react";
import api from "../api/api";
import DisplayModal from "../components/DisplayModal";
import "../../css/Admin.css";

const ApprovedConsultations = () => {
    const [ approvedC , setApprovedCList ] = useState([]);
    const [ consultationList, setconsultationList ] = useState([]);
    const [ openModal, setOpenModal ] = useState(false);

    useEffect(() => {
        fetchApprovedConsultation();
    },[]);

    const fetchApprovedConsultation = async (e) => {
        try{
            const resC = await api.approvedC();
            setApprovedCList(resC.data.approvedConsultations);
            }
        catch (err){
            //console.log(err);
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

    const renderConsultations = () => {
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

        return approvedC.map((a, index) => {
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

    return (
        <div>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th>Consultation ID</th>
                        <th>Lastname</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-contents">
                    {renderConsultations()}
                </tbody>
            </table>

            <br></br>   
        </div>
    );
}

export default ApprovedConsultations;