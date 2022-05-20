import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom';
import React, { Component } from 'react'
import Profile from './Profile'
import axios from 'axios';

export default function Customer(){
    const user_id = sessionStorage.getItem('user_id');
    const branch_id = sessionStorage.getItem('branch_id');

    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    function prof(){
        navigate('/profile');
    }
    return ( 
        <div> 
            <h1>Customer page {user_id}</h1> 
            <button onClick = {logOut}> LogOut </button>
            <div>
            <Profile />
            {/* <button onClick={prof}>Profile</button> */}
            {/* <Link to={'/profile'} className="my-2 border-0 btn btn-primary btn-sm float-end text-dark bg-light py-3">Profile</Link> */}
            </div>
        </div>
        
    )
}