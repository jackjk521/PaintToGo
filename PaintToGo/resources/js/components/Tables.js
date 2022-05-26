import "antd/dist/antd.css";
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import {Table, Tabs, Modal, Input, Button} from "antd";
import NewProductForm from "./forms/NewProductForm";
import api from "../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function ProductTable(){
    const [dataSource, setDataSource] = useState([])
    const[products, setProducts] = useState([]);


    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res = await Axios.get('api/getProducts');
            if (isMounted) {
                setProducts(res.data);
            }
          } catch {
            console.log(res.data);
          }
        }
    
        fetchData();
        return () => { isMounted = false };
      }, []);


    const productColumns = [
        {
        key:"1",
        title: 'Product ID',
        dataIndex: 'product_id',
        sorter: (a, b) => {
            return a.product_id > b.product_id
            },
        },
        {
        key:"2",
        title: 'Product Name',
        dataIndex: 'product_name',
        filterDropdown: ({
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
        sorter: (a, b) => {
                return a.product_name.localeCompare(b.product_name)
            }
        },
        {
        key:"3",
        title: 'Brand',
        dataIndex: 'brand_id',
        sorter: (a, b) => {
                return a.brand_id > b.brand_id
            }
        },
        {
        key:"4",
        title: 'Price',
        dataIndex: 'price',
        sorter: (a, b) => {
                return a.price > b.price
            }
        },
        {
        key:"5",
        title: 'Retail Price',
        dataIndex: 'retail_price',
        sorter: (a, b) => {
                return a.retail_price > b.retail_price
            }
        },
        {
        key:"6",
        title: 'Unit Count',
        dataIndex: 'unit_sold_at',
        sorter: (a, b) => {
                return a.unit_sold_at.localeCompare(b.unit_sold_at)
            }
        },
        {
            key:"7",
            title: 'Utility',
            dataIndex: 'utility_id',
            render:(utility_id)=> {
                if(utility_id==1){
                    return  <p>Paint</p>
                }
                else{
                    return <p>Other Stuff</p>
                }
                
                },
            sorter: (a, b) => {
                return a.utility_id > b.utility_id
                },
            filters: [
                {text:'Paint', value:'Paint'},
                {text: 'Other Stuff', value:'Other Stuff'},
                {text: '3', value:'3'},
                {text: '4', value:'4'},
                {text: '5', value:'5'},
            ],
                onFilter:(value, record)=> {
                    return record.utility_id.indexOf(value) === 0
                }
            },
        {
        key:"8",
        title: 'Actions',
        render: (record)=>{
            <>
                <EditOutlined
                    onClick={() => {
                    onEditStudent(record);
                    }}
                />
                <DeleteOutlined
                    onClick={() => {
                    onDeleteStudent(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                 />
            </>
        }
        },
    ]

    return(
        <div className="App">
             <Tabs defaultActiveKey="1" centered size="large" animated tabBarStyle={tabStyle}>
                <TabPane tab="Products" key="1">
                    <header className="App-header">
                        <NewProductForm/>
                        <Table striped bordered hover
                            className="productTable"
                            columns={productColumns}
                            dataSource={products}>
                            
                        </Table>
                    </header>
                </TabPane>
                <TabPane tab="Employees" key="2">
                    Employees CRUD
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