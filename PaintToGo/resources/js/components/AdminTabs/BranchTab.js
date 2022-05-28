import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import NewBranchForm from "../forms/NewBranchForm";
import DeleteBranchForm from "../forms/DeleteBranchForm";
import EditBranchForm from "../forms/EditBranchForm";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";

export default function BranchTab(res){
    const[branches, setBranches] = useState([]);
    const[employees, setEmployees] = useState([]);

    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    useEffect(() => {
        let isMounted = true; 
        const fetchData = async () => {
          try {
            const res = await api.viewBranches();
            const res1 = await api.viewEmployees();
            if (isMounted) {
              setBranches(res.data.branches);
              setEmployees(res1.data.employees);
            }
          } catch {
            console.log(res.data.branches);
          }
        }
    
        fetchData();
        return () => { isMounted = false };
      }, []);


    const branchesColumn = [
        {
          key:"1",
          title: 'Branch ID',
          dataIndex: 'branch_id',
          sorter: (a, b) => {
              return a.branch_id - b.branch_id
              },
        },
        {
          key:"2",
          title: 'Branch Name',
          dataIndex: 'branch_name',
          sorter: (a, b) => {
            return a.branch_name.localeCompare(b.branch_name)
          }
        },
        {
          key:"3",
          title: 'Manager Name',
          dataIndex: 'manager_name',
          render: (text,record) => (
            <span>{record.firstName} {record.lastName}</span>
          )
        },
        {
          key:"4",
          title: 'Branch Address',
          dataIndex: 'branch_add',
          sorter: (a, b) => {
                return a.branch_add.localeCompare(b.branch_add)
          }
        },
        {
          key:"5",
          title: 'Branch Contact',
          dataIndex: 'branch_contact',
        },
        {
          key:"6",
          title: 'Actions',
          render: (record) => (
            <>
              <EditBranchForm branch={record} setBranches={setBranches} employees={employees}/>
              <DeleteBranchForm  branch={record} setBranches={setBranches}/>
            </>
          )
        },
    ]

    return(
        <>
            <header className="App-header">
                <NewBranchForm setBranches={setBranches} employees={employees}/>
                <Table striped bordered hover
                    className="branchesTable"
                    columns={branchesColumn}
                    dataSource={branches}>
                        
                </Table>
            </header>
        </>
               

    )
}