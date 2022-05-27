import "antd/dist/antd.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import {Table, Tabs, Modal, Input, Button} from "antd";
import ProductTab from "./AdminTabs/ProductTab";
import EmployeeTab from "./AdminTabs/EmployeeTab";

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
                    Branches CRUD
                </TabPane>
                <TabPane tab="Brands" key="4">
                    Brands CRUD
                </TabPane>
                <TabPane tab="Utility" key="5">
                    Utility CRUD
                </TabPane>
            </Tabs>
        </div>
    )
}