import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import InventoryTab from "./BranchInventoryTabs/InventoryTab";
import InventoryOverviewTab from "./BranchInventoryTabs/InventoryOverviewTab";
import {Table, Tabs, Modal, Input, Button} from "antd";
import "../../css/Dashboard.css";
import { NavLink, useNavigate } from "react-router-dom";


const { TabPane } = Tabs;

export default function AdminInventory(){
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    //Tab css over here
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
                    Order
                </NavLink>
                <NavLink to="/AdminInventory">
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
                <TabPane tab="Branch Inventory" key="1">
                    
                    <InventoryTab/>
                </TabPane>
                <TabPane tab="Branch Inventory Overview" key="2">
                    <InventoryOverviewTab/>
                </TabPane>

            </Tabs>
            </div>
        </div>

    )
}