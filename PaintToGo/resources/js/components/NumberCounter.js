import React , {useState, useEffect} from "react";
import addIcon from "../assets/add.png";
import minusIcon from "../assets/minus.png";
import styled from "styled-components";
import MessageQueue, { useMessageQueue } from "./MessageQueue";

const Icon = styled.img`
  width: 30px;
  height: 30px;
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

const NumberCounter = (props) => {
    const {product, resetFields, addItem, max} = props;
    const [qty, setQty] = useState(0);
    const { addMessage, removeMessage, messages } = useMessageQueue();

    const qtyHandler = (e) => {
        const re = /^[0-9\b]+$/;
    
        if (e.target.value === '' || re.test(e.target.value)) {
          (parseInt(e.target.value) > max)? setQty(max) : setQty(parseInt(e.target.value));
        }    
      }
    
      function incrementCount() {
        if(isNaN(qty)) {
          setQty(0);   
        } else if(qty == '') {
          setQty(1);
        } else if (qty >= max) {
          setQty(max);
        } else {
          setQty(parseInt(qty) + 1);
        }
      }
    
      function decrementCount() {
        if(qty > 0) {
            setQty(parseInt(qty) - 1);
        }
      }

      const checkQty = () => {
        if(qty == 0) {
          addMessage("Please choose quantity", "error");
        } else {
          addItem(product, qty, max);
          resetFields();
          setQty(0);
        }
      }

    return (
        <div className="request-input">
          <MessageQueue messages={messages} removeMessage={removeMessage} />
            <Icon src={minusIcon} onClick={decrementCount} type="minus"/>
            <input type="text" onChange={qtyHandler} id = "qtyTxt"  value = {((qty))? qty : 0} name="quantity"></input>
            <Icon src={addIcon} onClick={incrementCount} type="add"/>
            <button type='button' onClick={checkQty} className="add-to-cart-btn buttons"> Add to Cart </button>  
      </div>
    )
}

export default NumberCounter;