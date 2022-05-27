import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import NewProductForm from "../forms/NewProductForm";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";


export default function ProductTab(res){
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
            const res = await api.viewProducts();
            if (isMounted) {
                setProducts(res.data.products);
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
        dataIndex: 'brand_name',
        sorter: (a, b) => {
              return a.brand_name.localeCompare(b.brand_name)
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
            dataIndex: 'utility_name',
            sorter: (a, b) => {
                return a.utility_name.localeCompare(b.utility_name)
            },
            filters: [
                {text:'Home', value:'Home'},
                {text: 'Vehicles', value:'Vehicles'},
                {text: 'Equipment', value:'Equipment'},
            ],
                onFilter:(value, record)=> {
                    return record.utility_name.indexOf(value) === 0
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
        <>
            <header className="App-header">
                <NewProductForm/>
                <Table striped bordered hover
                    className="productTable"
                    columns={productColumns}
                    dataSource={products}>
                        
                </Table>
            </header>
        </>
               

    )
}