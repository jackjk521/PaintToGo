import React , {useState, useEffect} from "react";
import "../../css/OrderForm.css";
import Axios from 'axios';
import MessageQueue, { useMessageQueue } from "./MessageQueue";
import NumberCounter from './NumberCounter';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const OrderForm = (props) => {
    const { setRenderComponent, addItem, selectedBranch, setSelectedBranch, branchProducts, setBranchProducts, currProd, setCurrProd, branchId, setBranchId } = props;
    const { addMessage, removeMessage, messages } = useMessageQueue();
    const[prodName, setProdName] = useState("");
    const [inventory, setInventory] = useState([]);
    const[branches, setBranches] = useState([]);

    const [data, setData] = useState({
        orders : null,
        orderLists : null,
        products : null,
    });

    const nameHandler = (e) => {
        setProdName(e.target.value);
    }

    const resetFields = () => {
        setProdName('');
    }

    const searchProduct = () => {
        if(branchProducts != null)
        setCurrProd(branchProducts.filter(product => product.product_name.toLowerCase().includes(prodName.toLowerCase())));
    }

    const openCart = () => {
        setRenderComponent('cart');
    }

    const handleSelect = (e) => {
        const filtered = branches.filter(branch => branch.branch_name === e);

        setBranchId(filtered[0].branch_id);
        setSelectedBranch(e);
    }

    const filterStock = (product_id) => {
        return inventory.filter(item => 
            item.branch_id === branchId).filter(filteredItem => 
                filteredItem.product_id === product_id).map(result =>
                    result.quantity)
      }

    useEffect(() => {
        const products = inventory.filter(inv => inv.branch_id === branchId);
        const current = (data.products != null)? data.products.filter(curr => products.find(prod => prod.product_id === curr.product_id)) : currProd;

        setBranchProducts(current);
        setCurrProd(current);
    }, [branchId]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const getOrders = await Axios.get('api/getOrders');
                const getOrderLists = await Axios.get('api/getOrderLists');
                const getProducts = await Axios.get('api/getProducts');
                const getInventory = await Axios.get('api/getInventory');
                const getBranches = await Axios.get('api/getBranches');
    
                if (isMounted) {
                    setData({
                        orders : getOrders.data,
                        orderLists : getOrderLists.data,
                        products : getProducts.data,
                    });

                    if(selectedBranch === 'Select branch') {
                        setCurrProd(getProducts.data);
                        setBranchProducts(getProducts.data);
                    }
                    setInventory(getInventory.data);
                    setBranches(getBranches.data);
                }
            } catch {
                console.log(err);
            }
        }

        fetchData();
        return () => { isMounted = false };
    }, []);

    useEffect(() => {
        searchProduct();
    }, [prodName]);


  return (
    <div className= "orderFormBody">
        <MessageQueue messages={messages} removeMessage={removeMessage} />
        <h1> Order Overview </h1>
        
        <div className="contents">
          <form id = 'orderForm'>
              <div className = "order-inputs">
                  <div className="request-input">
                    <label className = "content" htmlFor="product_name"> Product name </label>
                    <input type="text" onChange={(e) => {nameHandler(e)}}  id = "nameTxt" className = "content" name="product_name" value={prodName}></input>
                  </div>
              </div>

              <div className="dropdown-input">
                    <label htmlFor="branch"> Branch: </label>
                    <DropdownButton className="dropdown" id="dropdown-item-button" title={selectedBranch} onSelect={handleSelect} disabled = {selectedBranch === 'Select branch' ? false : true}>
                        { 
                            (branches != null)
                            ? branches.map((branch) => (
                                <Dropdown.Item key = {branch.branch_id} eventKey = {branch.branch_name}> {branch.branch_name} </Dropdown.Item>
                            ))
                            : null
                        } 
                    </DropdownButton>
                </div>

            <div className="place-order-btn">
                <button type = 'button' onClick={openCart} className="create-order-btn">Place Order</button>
            </div>
            
            <div className = 'productTable'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                { currProd ?
                    currProd.map((product, index) => (
                    <tr key = {product.product_id}>
                        <td>{product.product_name}</td>
                        <td>{product.price}</td>
                        <td>{product.unit_sold_at}</td>
                        <td>{filterStock(product.product_id)} </td>
                        <td><NumberCounter 
                            product={product} 
                            resetFields={resetFields}
                            addItem = {addItem} 
                            max = {filterStock(product.product_id)}/>
                        </td>
                    </tr>
                    ))
                    : <tr></tr>
                } 
                </tbody>
            </table>
            </div>
          </form>
        </div>
    </div>
    );
};

export default OrderForm;