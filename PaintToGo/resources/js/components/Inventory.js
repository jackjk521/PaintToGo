import "antd/dist/antd.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import {Table, Tabs, Modal, Input, Button} from "antd";
import InventoryTab from "./BranchInventoryTabs/InventoryTab";

const { TabPane } = Tabs;

export default function Inventory(){

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
    }    

    return(
        <div className="App">
             <Tabs defaultActiveKey="1" centered size="large" animated tabBarStyle={tabStyle}>
                <TabPane tab="Branch Inventory" key="1">
                    <InventoryTab/>
                </TabPane>
                <TabPane tab="Branch Inventory Overview" key="2">

                </TabPane>

            </Tabs>
        </div>
    )
}