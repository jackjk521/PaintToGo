import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import NewProductForm from "../forms/NewProductForm";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";


export default function UtilityTab(res){
    const[utility, setUtility] = useState([]);

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res = await api.viewUtility();
            if (isMounted) {
              setUtility(res.data.utility);
            }
          } catch {
            console.log(res.data);
          }
        }
        fetchData();
        return () => { isMounted = false };
      }, []);


    const utilityColumns = [
        {
          key:"1",
          title: 'Utility ID',
          dataIndex: 'utility_id',
          sorter: (a, b) => {
              return a.utility_id - b.utility_id
              },
        },
        {
          key:"2",
          title: 'Utility Name',
          dataIndex: 'utility_name',
          sorter: (a, b) => {
            return a.utility_name.localeCompare(b.utility_name)
          }
        },
        {
          key:"3",
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
               
                <Table striped bordered hover
                    className="utilityTable"
                    columns={utilityColumns}
                    dataSource={utility}>
                        
                </Table>
            </header>
        </>
               

    )
}