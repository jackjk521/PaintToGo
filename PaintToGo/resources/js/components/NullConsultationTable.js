import React, { useEffect, useState } from "react"
import api from "../api/api";

const NullConsultationTable = () =>{
    const [ nullList , setNullList ] = useState([]);
    
    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullC();
            setNullList(res.data.nullConsultations);   
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
            const res = await api.approveCBtn({params : {rowKey : e.target.value}});
         
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

    
    const renderList = () =>{
        
        if (!nullList) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading products...
                    </td>
                </tr>
            );
        };
        if (nullList.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There are no consultations available
                    </td>
                </tr>
            );
        };

        return nullList.map((a) => {
            
           return (<tr key={a.consultation_id} className="table-contents-odd" >
            
           <td>{a.consultation_id}</td>
           <td>{a.lastName}</td>
           <td>
           <button name = 'rowKey' onClick= {approveBtn} value = {a.consultation_id}> Approve </button>
           </td> 

           </tr> ) 

        })
}

    return (
        <div>
            <h1> NULL Consultations Table </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Consultation ID</th>
                            <th>Lastname</th>
                            <th>Approve</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className="table-contents">
                        {renderList()}
                    </tbody>
                </table>
        </div>
        
    );
}

export default NullConsultationTable;