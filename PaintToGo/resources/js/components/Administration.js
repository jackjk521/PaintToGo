import "antd/dist/antd.css";
import Axios from 'axios';
import {Table, Tabs, Modal, Input, Button} from "antd";
import ProductTab from "./AdminTabs/ProductTab";
import EmployeeTab from "./AdminTabs/EmployeeTab";
import BranchTab from "./AdminTabs/BranchTab";
import BrandTab from "./AdminTabs/BrandTab";
import UtilityTab from "./AdminTabs/UtilityTab";
import React, { useEffect, useState } from "react"
import "../../css/Dashboard.css";
import { NavLink, useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

export default function ProductTable(){
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
    }    

    return(
        <div className="page">
            <nav class="navbar fixed-top navbar-dark">
                <a class="navbar-brand px-2" href="dashboard">
                    Color City Paint Store
                </a>
            </nav>
            
            <div className="sidebar">
                <h1 class="mt-4 px-2">Admin</h1>
                <hr/>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink to="/order">
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
                        
             <Tabs defaultActiveKey="1" centered size="large" tabBarStyle={tabStyle}>
                <TabPane tab="Products" key="1">
                    <ProductTab/>    
                </TabPane>
                <TabPane tab="Employees" key="2">
                    <EmployeeTab/>    
                </TabPane>
                <TabPane tab="Branches" key="3">
                    <BranchTab/>
                </TabPane>
                <TabPane tab="Brands" key="4">
                    <BrandTab/>
                </TabPane>

            </Tabs> 
            </div>
        </div>


    )
}