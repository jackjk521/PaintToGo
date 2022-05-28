import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function deleteProductForm({Product, setProducts}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const deleteProduct = async (e) => {
    e.preventDefault();
    console.log(Product);

    const res = await api.deleteProduct(Product);
    if(res.data.response == 1){
      const refreshProducts = await api.viewProducts();
      handleClose();
      
      setProducts(refreshProducts.data.products)
    }
  }

  return(
      <>
      <Button variant="danger" onClick={handleShow}>
        Delete Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="">
              <Form.Label>Confirm deletion of {Product.product_name}.</Form.Label>
              
              </Form.Group>
            <Button variant="danger" onClick={deleteProduct} type="submit">
              Delete
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Cancel
            </Button>

        </Modal.Body>
      </Modal>
    </>
  );
    
}