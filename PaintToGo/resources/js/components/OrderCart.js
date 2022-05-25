import React , {useState, useEffect} from "react";
import "../../css/OrderCart.css";
import Axios from 'axios';
import MessageQueue, { useMessageQueue } from "./MessageQueue";
import addIcon from "../assets/add.png";
import minusIcon from "../assets/minus.png";
import styled from "styled-components";

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.type === "add") return "#B9F8D3";
    if (props.type === "minus") return "#FFA8A8";
  }};
`;

const OrderCart = (props) => {
    const user_id = sessionStorage.getItem('user_id');
    const {setRenderComponent, cart, setCart, addItem, removeItem, branchId, setBranchId, selectedBranch, setSelectedBranch} = props;
    const { addMessage, removeMessage, messages } = useMessageQueue();

    const openForm = () => {
        setRenderComponent('form');
    }

    const createOrder = async (newOrders) => {
        try {
          const res = await Axios.post('/api/addOrders', newOrders);
          return res.data.id;
        } catch(err) {
          console.log(err);
        }
    }

    const submitRequest = async () => {
        if(selectedBranch !== "Select branch") {
            const newOrders = {
                user_id : user_id,
                branch_id : branchId,
                status : 3
            }
            setBranchId(1);
            setSelectedBranch('Select branch');
    
            const newOrderId = await createOrder(newOrders);
    
            const arr = cart.map((product) => {
                delete product.product_name;
                delete product.product_price;
                product = {...product, order_id : newOrderId};
                return product;
            });
    
            setCart([]);
    
            
            arr.map((product) => {
                Axios.post('../api/addOrderList', product)
                .catch((err) => {
                    addMessage(err.message, "error");
                });
            });
    
            addMessage("Sucessfully added to orders", "success");
        } else {
            addMessage("Please pick a branch", "error");
        }
    }

    return (
        <div className ="orderCartBody">
            <MessageQueue messages={messages} removeMessage={removeMessage} />
            <button type="button" onClick={openForm} className="create-order-btn"> Back </button>
            <h1> Order Cart </h1>

            <div className="contents">
                <div className = 'productTable'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    { cart.length > 0 ?
                        cart.map((product, index) => (
                        <tr key = {product.product_id}>
                            <td>{product.product_name}</td>
                            <td>{product.product_price}</td>
                            <td>
                                <Icon src={minusIcon} onClick={() => removeItem(product, 1)} type="minus"/>
                                {product.order_quantity}
                                <Icon src={addIcon} onClick={() => addItem(product, 1)} type="add"/>
                            </td>
                            <td>{product.order_quantity * product.product_price}</td>
                        </tr>
                        ))
                        : <tr></tr>
                    } 
                    </tbody>
                </table>
                </div>
                <div className="place-order-btn">
                    <button type='button' onClick={submitRequest} className="buttons" id="buttonSend"> Checkout </button>
                </div>
            </div>
        </div>
    );
}

export default OrderCart;