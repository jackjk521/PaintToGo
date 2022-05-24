import React, { useEffect, useState } from "react"
import api from "../api/api";

const NullOrderTable = () => {

    const branch_id = sessionStorage.getItem('branch_id');
    const user_level = sessionStorage.getItem('level_name');
    const [ nullList , setNullList ] = useState([]);
    
    useEffect(() => {
        fetchNullList();
     },[]);

    const fetchNullList = async (e) => {
        try{
            const res = await api.nullO();
            setNullList(res.data.nullOrders);   
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
            const res = await api.approveOBtn({params : {rowKey : e.target.value}});
         
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
                        There are no orders available
                    </td>
                </tr>
            );
        };
<<<<<<< HEAD

        return nullList.map((a) => {

            if(a.branch_id == branch_id){
                return (<tr key={a.order_id} className="table-contents-odd" >
                        
                    <td>{a.order_id}</td>
                    <td>{a.branch_add}</td>
                    <td>{a.lastName}</td>
                    <td>
                    <button name = 'rowKey' onClick= {approveBtn} value = {a.order_id}> Approve </button>
                    </td> 
        
                    </tr> ) 
        
                }
            })
           
=======
           
        return nullList.map((a, index) => {
            if(a.branch_id == branch_id || user_level === "Admin"){
                return (<tr key={a.order_id} className={index % 2 !== 0 ? "table-contents-even" : "table-contents-odd"} >
                            <td>{a.order_id}</td>
                            <td>{a.branch_add}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <button name = 'rowKey' onClick= {approveBtn} style={{marginRight:"10px"}} value = {a.order_id}> Approve </button>
                                
                            </td> 
                            <td>
                                <button name = 'row_key' type="text" onClick={fetchOData} value = {a.order_id}>View</button>
                                <DisplayModal 
                                    openModal={openModal} 
                                    TableHeader={<TableHeader />} 
                                    header="View Order" 
                                    handleClose={handleClose} 
                                    Details={<Details />}  
                                />
                            </td>
                        </tr> 
                )
            }
        })
>>>>>>> ac0e4bd85c8b0ee9524eafd13b33b914891e6c3d
}

    return (
        <div>
            <h1> NULL Orders Table </h1>
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Order ID</th>
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
export default NullOrderTable;