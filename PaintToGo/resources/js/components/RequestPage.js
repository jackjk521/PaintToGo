import React , {useState, useEffect} from "react";
import RequestForm from './RequestForm';
import RequestList from './RequestList';

const RequestPage = () => {
    const [renderComponent, setRenderComponent] = useState('form');
    const [requestlist, setRequestlist] = useState([]);

    const addItem = (prod, qty) => {
        qty = parseInt(qty);
        const found = requestlist.find((x) => x.product_id === prod.product_id);
        
        if(found) {
            setRequestlist(
                requestlist.map((req) => 
                req.product_id === prod.product_id ? { ...req, req_quantity: (req.req_quantity + qty)} : req
                )
            );
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
        <div className="request-page-body">
            { renderComponent === 'form' && 
                <RequestForm setRenderComponent = {setRenderComponent} 
                            addItem = {addItem}
                            removeItem = {removeItem}
                />
            } 

            { renderComponent === 'requestlist' && 
                <RequestList setRenderComponent = {setRenderComponent} 
                            requestlist = {requestlist}
                            setRequestlist = {setRequestlist}
                            addItem = {addItem}
                            removeItem = {removeItem}
                />
            }
        </div>
    );
}

export default RequestPage;