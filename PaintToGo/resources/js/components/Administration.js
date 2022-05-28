import "antd/dist/antd.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import {Table, Tabs, Modal, Input, Button} from "antd";
import ProductTab from "./AdminTabs/ProductTab";
import EmployeeTab from "./AdminTabs/EmployeeTab";
import BranchTab from "./AdminTabs/BranchTab";
import BrandTab from "./AdminTabs/BrandTab";
import UtilityTab from "./AdminTabs/UtilityTab";

const { TabPane } = Tabs;

export default function ProductTable(){

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
    }    

    return(
        <div className="App">
             <Tabs defaultActiveKey="1" centered size="large" animated tabBarStyle={tabStyle}>
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
    )
}