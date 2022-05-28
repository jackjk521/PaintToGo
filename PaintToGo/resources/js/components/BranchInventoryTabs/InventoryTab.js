import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";

export default function InventoryTab(res){
    const[inventory, setInventory] = useState([]);
    sessionStorage.getItem('branch_id')
    const branch = sessionStorage.getItem('branch_id');

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }


    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res = await api.viewBranchInventory({
              params: { branch }});
            if (isMounted) {
                setInventory(res.data.inventory);
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
          },filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) => {
            return (
              <>
                <Input
                  autoFocus
                  placeholder="Type product name here"
                  value={selectedKeys[0]}
                  onChange={(e) => {
                    setSelectedKeys(e.target.value ? [e.target.value] : []);
                    confirm({ closeDropdown: false });
                  }}
                  onPressEnter={() => {
                    confirm();
                  }}
                  onBlur={() => {
                    confirm();
                  }}
                ></Input>
                <Button
                  onClick={() => {
                    confirm();
                  }}
                  type="primary"
                >
                  Search
                </Button>
                <Button
                  onClick={() => {
                    clearFilters();
                  }}
                  type="danger"
                >
                  Reset
                </Button>
              </>
            );
          },
          filterIcon: () => {
            return <SearchOutlined />;
          },
          onFilter: (value, record) => {
            return record.product_name.toLowerCase().includes(value.toLowerCase());
          },
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
          title: 'Retail Price',
          dataIndex: 'retail_price', 
          sorter: (a, b) => {
            return a.retail_price - b.retail_price
          },
        },
        {
          key:"5",
          title: 'Price',
          dataIndex: 'price', 
          sorter: (a, b) => {
            return a.price - b.price
          },
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