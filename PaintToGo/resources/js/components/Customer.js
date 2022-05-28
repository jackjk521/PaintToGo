import {NavLink, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import api from "../api/api";
import "../../css/Dashboard.css";
import {AiFillHome} from 'react-icons/ai';
import {AiFillCar} from 'react-icons/ai';
import {AiFillTool} from 'react-icons/ai';
import { pullAt } from "lodash";
import Profile from "./Profile";
import OrderForm from "./OrderForm";

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
<<<<<<< HEAD
            <nav class="navbar fixed-top navbar-dark">
                <a class="navbar-brand px-2" href="dashboard">
                    Color City Paint Store
                </a>
            </nav>
            
            <div className="sidebar">
                <h1 class="mt-4 px-2">Admin</h1>
                <hr/>
                <NavLink to="/order">
                    Order
                </NavLink>
                <NavLink to="/inventory">
                    Inventory
                </NavLink>
                <NavLink to="/dashboard">
                    Transactions
                </NavLink>
                <NavLink to="/administration">
                    Admin CRUD
                </NavLink>
                <br/><br/><br/><br/><br/>
                <a class="logout" onClick = {logOut}> Log Out </a>
            </div>

            <div className="content">
                <h1>Customer page {user_id}</h1> 
            
                <button onClick = {userP} name="toProfile" value={user_id}> PROFILE </button>    
=======
            <div className="content-center">
                <h1>Welcome, dear customer!</h1> 
                
                <div class="customer"><button onClick = {userP} name="toProfile" value={user_id}> PROFILE </button> | <button> <a href="order">MY CART</a> </button></div>

                <div class="fillers">
                    <div class="cusbox"><p><AiFillHome/></p> <h3>Home</h3></div> <br/>  
                    <div class="cusbox"><p><AiFillCar/></p> <h3>Car</h3></div> <br/>
                    <div class="cusbox"><p><AiFillTool/></p> <h3>Equipment</h3></div> 
                </div>

                <div class="fillers"><div class="cusbox2"></div><button class="btn btn-primary">Enter</button></div>
                <OrderForm/>
>>>>>>> 9b2ce85788743d47f830e7220291e12b502112a8
            </div>
        </div>
    )
} 