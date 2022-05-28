import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import {Table, Input, Button} from "antd";
import api from "../../api/api";
import { EditOutlined, DeleteOutlined, SearchOutlined  } from "@ant-design/icons";

export default function InventoryOverviewTab(res){
    const[inventory, setInventory] = useState([
      {
        product: "Hudson Thinners",
        Branch1: 100,
        Branch2: 17,
        Branch3: 39,
        Branch4: 10,
        Utility: "Vehicle"
      },  {
        product: "McGill Red Oxide",
        Branch1: 100,
        Branch2: 91,
        Branch3: 10,
        Branch4: 24,
        Utility: "Vehicle"
      },  {
        product: "Weber Urethane Thinner",
        Branch1: 100,
        Branch2: 6,
        Branch3: 32,
        Branch4: 10,
        Utility: "Vehicle"
      },  {
        product: "Crocodile 1-inch Sandpaper",
        Branch1: 100,
        Branch2: 62,
        Branch3: 41,
        Branch4: 2,
        Utility: "Equipment"
      },  {
        product: "Powered Air Purifying Respirator Painters Kit",
        Branch1: 50,
        Branch2: 10,
        Branch3: 30,
        Branch4: 2,
        Utility: "Equipment"
      },  {
        product: "Magnum 257025 Project Painter Plus Paint Sprayer",
        Branch1: 25,
        Branch2: 2,
        Branch3: 0,
        Branch4: 11,
        Utility: "Equipment"
      },  {
        product: "Assorted Masking Paper",
        Branch1: 100,
        Branch2: 16,
        Branch3: 2,
        Branch4: 17,
        Utility: "Home"
      },  {
        product: "Linen White Chalked Ultra Matte Paint",
        Branch1: 100,
        Branch2: 13,
        Branch3: 3,
        Branch4: 28,
        Utility: "Home"
      },

    ]);


    //Tab css over here
    const tabStyle = {
        display: 'flex',
        flexDirection: 'column',
        
    }

    const inventoryColumn = [
        {
          key:"1",
          title: 'Product Name',
          dataIndex: 'product',
          sorter: (a, b) => {
              return a.product.localeCompare(b.product)
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
            return record.product.toLowerCase().includes(value.toLowerCase());
          },
        },
        {
          key:"2",
          title: 'Main Branch',
          dataIndex: 'Branch1',
          sorter: (a, b) => {
            return a.Branch1 - b.Branch1
          }
        },
        {
          key:"3",
          title: 'Color City Paint Trade Center',
          dataIndex: 'Branch2', 
          sorter: (a, b) => {
            return a.Branch2 - b.Branch2
          },
        },
        {
          key:"4",
          title: 'Color City Paint Trade',
          dataIndex: 'Branch3', 
          sorter: (a, b) => {
            return a.Branch3 - b.Branch3
          },
        },
        {
          key:"5",
          title: 'Kwikmix',
          dataIndex: 'Branch4', 
          sorter: (a, b) => {
            return a.Branch4 - b.Branch4
          },
        },{
          key:"6",
          title: 'Utility',
          dataIndex: 'Utility',
          sorter: (a, b) => {
              return a.Utility.localeCompare(b.Utility)
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