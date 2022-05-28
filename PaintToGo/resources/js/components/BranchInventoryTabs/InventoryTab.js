import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";

export default function InventoryTab(res){
    const[inventory, setInventory] = useState([]);
    const branch_id = sessionStorage.getItem('branch_id');

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res1 = await api.viewBranchInventory(branch_id);
            if (isMounted) {
                setInventory(res1.data.inventory);
            }
          } catch {
            console.log();
          }
        }
    
        fetchData();
        return () => { isMounted = false };
      }, []);


    const inventoryColumn = [
        {
          key:"1",
          title: 'Product ID',
          dataIndex: 'product_id',
          sorter: (a, b) => {
              return a.product_id - b.product_id
              },
        },
        {
          key:"2",
          title: 'Product Name',
          dataIndex: 'product_name',
          sorter: (a, b) => {
            return a.product_name.localeCompare(b.product_name)
          }
        },
        {
          key:"3",
          title: 'Inventory Quantity',
          dataIndex: 'quantity', 
          sorter: (a, b) => {
            return a.quantity - b.quantity
        },
        },
        {
          key:"4",
          title: 'Actions',
          render: (record) => (
            <>
            </>
          )
        },
    ]

    return(
        <>
            <header className="App-header">
                <Table striped bordered hover
                    className="inventoryTable"
                    columns={inventoryColumn}
                    dataSource={inventory}>
                        
                </Table>
            </header>
        </>
               

    )
}