import React , {useState, useEffect} from "react";
import "../../css/RequestForm.css";
import Axios from 'axios';
import MessageQueue, { useMessageQueue } from "./MessageQueue";
import NumberCounter from './NumberCounter';

const RequestForm = (props) => {
  const {setRenderComponent, addItem, removeItem} = props;
  const { addMessage, removeMessage, messages } = useMessageQueue();
  const[prodName, setProdName] = useState("");
  const[products, setProducts] = useState([]);
  const[currProd, setCurrProd] = useState([]);
  const [inventory, setInventory] = useState([]);

  const nameHandler = (e) => {
      setProdName(e.target.value);
  }

  const resetFields = () => {
    document.getElementById("requestForm").reset();
    setProdName('');
    searchProduct();
  }

  const searchProduct = () => {
    setCurrProd(products.filter(product => product.product_name.toLowerCase().includes(prodName.toLowerCase())));
  }

  const openList = () => {
    setRenderComponent('requestlist');
  }

  const filterStock = (product_id) => {
    return inventory.filter(item => 
      item.product_id === product_id).map(filtered => 
      filtered.quantity)
  }

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await Axios.get('api/getProducts');
        const inv = await Axios.get('api/getInventory');
        if (isMounted) {
          setProducts(res.data);
          setCurrProd(res.data);
          setInventory(inv.data);
        }
      } catch {
        console.log(err);
      }
    }

    fetchData();
    return () => { isMounted = false };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if(isMounted) 
    searchProduct();

    return () => {isMounted = false};
  }, [prodName]);

  return (
    <div className= "requestFormBody">
        <MessageQueue messages={messages} removeMessage={removeMessage} />
        <h1> Create request</h1>

        <div className="request-fields">
          <form id = 'requestForm'>
            <div className="request-input">
              <label className = "content" htmlFor="product_name"> Product name </label>
              <input type="text" onChange={(e) => {nameHandler(e)}}  id = "nameTxt" className = "content" name="product_name"></input>
            </div>

            <div className="create-request-btn">
              <button type='button' onClick={openList} className="buttons" id="buttonSend">Add request</button>
            </div>
          </form>
        </div>

        <div className = 'productTable'>
          <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Unit</th>
                    <th>Stock</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
              { 
                currProd.map((product) => (
                  <tr key = {product.product_id}>
                      <td>{product.product_id}</td>
                      <td>{product.product_name}</td>
                      <td>{product.price}</td>
                      <td>{product.unit_sold_at}</td>
                      <td>{filterStock(product.product_id)}</td>
                      <td><NumberCounter
                        product={product} 
                        resetFields={resetFields}
                        addItem = {addItem}
                        removeItem = {removeItem}
                        max = {filterStock(product.product_id)} />
                      </td>
                  </tr>
                  ))
              } 
            </tbody>
          </table>
        </div>
    </div>
    );
};

export default RequestForm;