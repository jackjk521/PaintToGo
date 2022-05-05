import React from "react"
import {useNavigate} from "react-router-dom"

export default function Admin(){
   
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    return ( <div> 
        <h1>Admin page</h1> 
        <button onClick = {logOut}> LogOut </button> 
        </div>
    )
}