import React , {useState, useEffect} from "react";
import "../../css/OrderForm.css";
import Axios from 'axios';
import MessageQueue, { useMessageQueue } from "./MessageQueue";
import NumberCounter from './NumberCounter';

const OrderForm = (props) => {
    const { setRenderComponent, addItem} = props;
    const { addMessage, removeMessage, messages } = useMessageQueue();
    const[currProd, setCurrProd] = useState([]);
    const[prodName, setProdName] = useState("");
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
        if(data.products != null)
        setCurrProd(data.products.filter(product => product.product_name.toLowerCase().includes(prodName.toLowerCase())));
    }

    const openCart = () => {
        setRenderComponent('cart');
    }

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const getOrders = await Axios.get('api/getOrders');
                const getOrderLists = await Axios.get('api/getOrderLists');
                const getProducts = await Axios.get('api/getProducts');
    
                if (isMounted) {
                    setData({
                        orders : getOrders.data,
                        orderLists : getOrderLists.data,
                        products : getProducts.data,
                    });

                    setCurrProd(getProducts.data);
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
                        <td><NumberCounter 
                            product={product} 
                            resetFields={resetFields}
                            addItem = {addItem} />
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