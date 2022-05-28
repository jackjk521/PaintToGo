import React , {useState, useEffect} from "react";
import OrderForm from './OrderForm';
import OrderCart from './OrderCart';

const OrderPage = () => {
    const [renderComponent, setRenderComponent] = useState('form');
    const [cart, setCart] = useState([]);

    const addItem = (prod, qty) => {
        qty = parseInt(qty);
        const found = cart.find((x) => x.product_id === prod.product_id);
        
        if(found) {
            setCart(
                cart.map((item) => 
                    item.product_id === prod.product_id ? { ...item, order_quantity: (item.order_quantity + qty)} : item
                )
            );
        } else {
            const newProd = {
                product_id : prod.product_id,
                order_quantity : qty,
                product_name : prod.product_name,
                product_price: prod.price
            }
            setCart([...cart, newProd]);
        }
    }

    const removeItem = (prod, qty) => {
        qty = parseInt(qty);
        const found = cart.find((x) => x.product_id === prod.product_id);

        if(found.order_quantity === 1) {
            setCart(cart.filter((x) => x.product_id !== prod.product_id));
        } else {
            setCart(
                cart.map((item) => 
                    item.product_id === prod.product_id ? {...item, order_quantity : (item.order_quantity - qty)} : item
                )
            )
        }
    }

    return (
        <div className="page">
            <div className="content-center">
                <div className="order-page-body">
                    <a href="dashboard" class="btn btn-primary" onClick="dashboard">Back to Dashboard</a>
                        { renderComponent === 'form' && 
                            <OrderForm setRenderComponent = {setRenderComponent} 
                                        addItem = {addItem}
                            />
                        } 

                        { renderComponent === 'cart' && 
                            <OrderCart renderComponent = {renderComponent} 
                                        setRenderComponent = {setRenderComponent} 
                                        cart = {cart}
                                        setCart = {setCart}
                                        addItem = {addItem}
                                        removeItem = {removeItem}
                            />
                        }
                    </div>
            </div>
            
        </div>
       
    );
}

export default OrderPage;