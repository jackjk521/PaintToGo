import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import InventoryTab from "./BranchInventoryTabs/InventoryTab";
import {Table, Tabs, Modal, Input, Button} from "antd";
import "../../css/Dashboard.css";
import { NavLink, useNavigate } from "react-router-dom";


const { TabPane } = Tabs;

export default function Inventory(){
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/');
    }

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column'
    }    

    return(
        <div className="page">
            <div className="content-center">
            <a href="dashboard" class="btn btn-primary" onClick="dashboard">Back to Dashboard</a>
            <div className="inventories">
                <Tabs defaultActiveKey="1" centered size="large" tabBarStyle={tabStyle}>
                    <TabPane tab="Branch Inventory" key="1">
                        
                        <InventoryTab/>
                    </TabPane>

                </Tabs>
            </div>           
            </div>
        </div>

    )
}