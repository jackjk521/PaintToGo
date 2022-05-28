import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";
import NewUserForm from "../Forms/NewUserForm";
import EditUserForm from "../Forms/EditUserForm";
import DeleteUserForm from "../Forms/DeleteUserForm";


export default function EmployeeTab(res){
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
            const res = await api.viewUsers();
            if (isMounted) {
              setEmployees(res.data.users);
            }
          } catch {
            console.log(res.data);
          }
        }
    
        fetchData();
        return () => { isMounted = false };
      }, []);


    const userColumns = [
        {
        key:"1",
        title: 'User ID',
        dataIndex: 'user_id',
        sorter: (a, b) => {
            return a.user_id - b.user_id
            },
        },
        {
        key:"2",
        title: 'First Name',
        dataIndex: 'firstName',
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
                  placeholder="Type first name here"
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
            return record.firstName.toLowerCase().includes(value.toLowerCase());
          },
        sorter: (a, b) => {
                return a.firstName.localeCompare(b.firstName)
            }
        },
        {
        key:"3",
        title: 'Last Name',
        dataIndex: 'lastName',
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
                placeholder="Type last name here"
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
          return record.lastName.toLowerCase().includes(value.toLowerCase());
        },
        sorter: (a, b) => {
              return a.lastName.localeCompare(b.lastName)
            }
        },
        {
        key:"4",
        title: 'Email Address',
        dataIndex: 'email_add',
        sorter: (a, b) => {
            return a.email_add.localeCompare(b.email_add)
            }
        },
        {
        key:"5",
        title: 'User Type',
        dataIndex: 'level_name',
        sorter: (a, b) => {
              return a.level_name.localeCompare(b.level_name)
            },
        filters: [
          {text:'Admin', value:'Admin'},
          {text: 'Manager', value:'Manager'},
          {text: 'Customer', value:'Customer'},
      ],
          onFilter:(value, record)=> {
              return record.level_name.indexOf(value) === 0
          }
        },
        {
          key:"6",
          title: 'Actions',
          render: (record) => (
            <>
              <EditUserForm user={record} setEmployees={setEmployees}/>
              <DeleteUserForm user={record} setEmployees={setEmployees}/>
            </>
          )
          },
    ]

    return(
        <>
            <header className="App-header">
                <NewUserForm setEmployees={setEmployees}/>
                <Table striped bordered hover
                    className="userTable"
                    columns={userColumns}
                    dataSource={employees}>
                </Table>
            </header>
        </>       
    )
}