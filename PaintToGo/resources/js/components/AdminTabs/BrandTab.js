import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import NewBrandForm from "../forms/NewBrandForm";
import EditBrandForm from "../forms/EditBrandForm";
import DeleteBrandForm from "../forms/DeleteBrandForm";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";


export default function BrandTab(res){
    const[brands, setBrands] = useState([]);

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res = await api.viewBrands();
            if (isMounted) {
              setBrands(res.data.brands);
            }
          } catch {
            console.log(res.data);
          }
        }
        fetchData();
        return () => { isMounted = false };
      }, []);


    const brandsColumns = [
        {
          key:"1",
          title: 'Brand ID',
          dataIndex: 'brand_id',
          sorter: (a, b) => {
              return a.brand_id - b.brand_id
              },
        },
        {
          key:"2",
          title: 'Brand Name',
          dataIndex: 'brand_name',
          sorter: (a, b) => {
            return a.brand_name.localeCompare(b.brand_name)
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
            return record.brand_name.toLowerCase().includes(value.toLowerCase());
          },
        },
        {
          key:"3",
          title: 'Actions',
          render: (record)=>(
            <>
            <EditBrandForm setBrands={setBrands} brand={record}/>
            <DeleteBrandForm setBrands={setBrands} brand={record}/>
            </>
          )  
        },
    ]

    return(
        <>
            <header className="App-header">
              <NewBrandForm setBrands={setBrands}/>
              <Table striped bordered hover
                  className="brandsTable"
                  columns={brandsColumns}
                  dataSource={brands}> 
              </Table>
            </header>
        </>
               

    )
}