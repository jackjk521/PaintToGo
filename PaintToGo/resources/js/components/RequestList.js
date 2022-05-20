import React , {useState, useEffect} from "react";
import "../../css/RequestList.css";
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

const RequestList = (props) => {
    const { setRenderComponent, requestlist, setRequestlist, addItem, removeItem} = props;
    const { addMessage, removeMessage, messages } = useMessageQueue();
    const[requestItem, setrequestItem] = useState({
        user_id : '1',
        branch_id : '1',
        status : 3,
    });

    const openForm = () => {
        setRenderComponent('form');
    }

    const createRequest = async () => {
        try {
          const res = await Axios.post('/api/addRequestItem', requestItem);
          return res.data.id;
        } catch(err) {
          console.log(err);
        }
      }

      const submitRequest = async () => {
        if(requestlist.length == 0) {
            addMessage("Please add requests", "error");
        } else {
            const request_id = await createRequest();
            const arr = requestlist.map((request) => {
                delete request.product_name
                request = {...request, request_id : request_id};
                return request;
            });
            setRequestlist([]);
            arr.map((request) => {
                Axios.post('api/addRequestList', request)
                .catch((err) => {
                    addMessage(err.message, "error");
                });
            })

            addMessage("Sucessfully added to request list", "success");
        }
      }

    return (
        <div className="request-list-body">
            <MessageQueue messages={messages} removeMessage={removeMessage} />
            <button type="button" onClick={openForm} className="create-order-btn"> Back </button>
            <h1> Request List </h1>
            <button type='button' onClick={submitRequest} className="buttons" id="buttonSend">Confirm request</button>

            <div className = 'request-list-table'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        requestlist.map((request) => (
                        <tr key = {request.product_id}>
                            <td>{request.product_id}</td>
                            <td>{request.product_name}</td>
                            <td>
                                <Icon src={minusIcon} onClick={() => removeItem(request, 1)} type="minus"/>
                                {request.req_quantity}
                                <Icon src={addIcon} onClick={() => addItem(request, 1)} type="add"/>
                            </td>
                        </tr>
                        ))
                    } 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RequestList;