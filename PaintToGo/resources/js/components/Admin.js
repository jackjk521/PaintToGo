import React from "react"
import {useNavigate} from "react-router-dom"

export default function Admin(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');
    // const fetchTList = async () => {
    //     const res = await fetch('http://127.0.0.1:8000/api/TList');
    //     return res.json();
    // }

    // const[data, status] = useQuery('TList', fetchTList);
    // console.log(data);
    
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( <div> 
        <h1>Admin page {user_id} {branch_id} </h1> 

        <button onClick = {logOut}> LogOut </button> 
        
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