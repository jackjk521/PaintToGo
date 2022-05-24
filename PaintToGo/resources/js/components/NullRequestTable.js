import React, { useEffect, useState } from "react"
import api from "../api/api";

const NullRequestTable = () => {
    const [ nullList , setNullList ] = useState([]);
    
    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullR();
            setNullList(res.data.nullRequests);   
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
            const res = await api.approveRBtn({params : {rowKey : e.target.value}});
         
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
                        There are no requests available
                    </td>
                </tr>
            );
        };

        return nullList.map((a) => {
            
           return (<tr key={a.request_id} className="table-contents-odd" >
            
           <td>{a.request_id}</td>
           <td>{a.branch_add}</td>
           <td>{a.lastName}</td>
           <td>
           <button name = 'rowKey' onClick= {approveBtn} value = {a.request_id}> Approve </button>
           </td> 

           </tr> ) 

        })
}

    return (
        <div>
            <h1> NULL Request Table </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Request ID</th>
                            <th>Brand Address</th>
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

export default NullRequestTable;