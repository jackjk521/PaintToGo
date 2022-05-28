import React , {useState, useEffect} from "react";
import RequestForm from './RequestForm';
import RequestList from './RequestList';
import MessageQueue, { useMessageQueue } from "./MessageQueue";

const RequestPage = () => {
    const [renderComponent, setRenderComponent] = useState('form');
    const [requestlist, setRequestlist] = useState([]);
    const { addMessage, removeMessage, messages } = useMessageQueue();

    const addItem = (prod, qty, max) => {
        qty = parseInt(qty);
        const found = requestlist.find((x) => x.product_id === prod.product_id);
        
        if(found) {
            setRequestlist(
                requestlist.map((req) => {
                    if(req.product_id === prod.product_id) {
                        if(req.req_quantity + qty > max) {
                            addMessage("Insufficient stock", "error");
                            return req;
                        } else {
                            return {...req, req_quantity: req.req_quantity + qty}
                        }
                    } else {
                        return req;
                    }
                }));
        } else {
            const newReq = {
                product_name : prod.product_name,
                product_id : prod.product_id,
                req_quantity : qty,
            }
            setRequestlist([...requestlist, newReq]);
        }
    }

    const removeItem = (prod, qty) => {
        qty = parseInt(qty);
        const found = requestlist.find((x) => x.product_id === prod.product_id);

        if(found.req_quantity === 1) {
            setRequestlist(requestlist.filter((x) => x.product_id !== prod.product_id));
        } else {
            setRequestlist(
                requestlist.map((req) => 
                req.product_id === prod.product_id ? {...req, req_quantity : (req.req_quantity - qty)} : req
                )
            )
        }
    }

    return (
<<<<<<< HEAD
        <div className="request-page-body">
            <MessageQueue messages={messages} removeMessage={removeMessage} />
            { renderComponent === 'form' && 
                <RequestForm setRenderComponent = {setRenderComponent} 
                            addItem = {addItem}
                            removeItem = {removeItem}
                />
            } 
=======
        <div className="page">
            <div className="content-center">
                <a href="dashboard" class="btn btn-primary" onClick="dashboard">Back to Dashboard</a>
                <div className="request-page-body">
                { renderComponent === 'form' && 
                    <RequestForm setRenderComponent = {setRenderComponent} 
                                addItem = {addItem}
                                removeItem = {removeItem}
                    />
                } 
>>>>>>> 9b2ce85788743d47f830e7220291e12b502112a8

                { renderComponent === 'requestlist' && 
                    <RequestList setRenderComponent = {setRenderComponent} 
                                requestlist = {requestlist}
                                setRequestlist = {setRequestlist}
                                addItem = {addItem}
                                removeItem = {removeItem}
                    />
                }
                </div>
            </div>
        </div>
        
    );
}

export default RequestPage;