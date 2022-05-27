import {Link, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../api/api";
import "../../css/Dashboard.css";
import {BsFillPersonFill} from 'react-icons/bs';
import { pullAt } from "lodash";
import Profile from "./Profile";

export default function Customer(){
    const user_id = sessionStorage.getItem('user_id');

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    const userP = async (e) =>{
        try{
            const res = await api.userProfile({params : {toProfile : e.target.value}});

            if(res.status === 200)
            {   
                var objs = JSON.stringify(res);
                sessionStorage.setItem("user",objs);
                
               navigate('/profile');
            }
        }
            catch(err){
                return (err);
            }
    }
    return ( 

        <div className="page">
            <div className="content-center">
                <h1>Customer page {user_id}</h1> 
                
                <button onClick = {logOut}> LogOut </button>
                <button onClick = {userP} name="toProfile" value={user_id}> PROFILE </button>    
            </div>
        </div>
    )
} 