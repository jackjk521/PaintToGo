import {Link, useNavigate} from "react-router-dom"
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
            <div className="content-center">
                <h1>Welcome, dear customer!</h1> 
                
                <div class="customer"><button onClick = {userP} name="toProfile" value={user_id}> PROFILE </button> | <button> <a href="order">MY CART</a> </button> | <button> <a href="consult">CONSULT</a> </button> </div>

                <div class="fillers">
                    <div class="cusbox"><p><AiFillHome/></p> <h3>Home</h3></div> <br/>  
                    <div class="cusbox"><p><AiFillCar/></p> <h3>Car</h3></div> <br/>
                    <div class="cusbox"><p><AiFillTool/></p> <h3>Equipment</h3></div> 
                </div>

                <div class="fillers"><div class="cusbox2"></div><button class="btn btn-primary">Enter</button></div>
                
            </div>
        </div>
    )
} 