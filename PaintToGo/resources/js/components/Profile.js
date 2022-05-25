import { get } from "lodash";
import {Link, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../api/api";

export default function Profile(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    function refreshPage() {
        window.location.reload(false);
    }
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }
    const f = sessionStorage.getItem('user')
    var storedUser = JSON.parse(f);
    console.log(storedUser.data);

    const historyP = async (e) =>{
        try{
            const res = await api.userHistory({params : {toHistory : e.target.value}});

            if(res.status === 200)
            {   
                console.log(res);
            }
        }
            catch(err){
                console.log(err);
                return (err);
            }
    }
    return ( 
        <div> 
            <h1>User Profile</h1> 
                <h3>Name: {storedUser.data.user.firstName} {storedUser.data.user.lastName}</h3>
                <h3>Email: {storedUser.data.user.email_add}</h3>
                <h3>Contact Number: {storedUser.data.user.user_contact}</h3>

                <br></br>
                
                <button onClick={historyP} name="toHistory" value={user_id}>View History</button>
                <br></br>
            <button onClick = {logOut}> LogOut </button> 
        </div>
    )
} 