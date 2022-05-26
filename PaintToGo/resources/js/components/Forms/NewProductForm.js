import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import axios from "axios";

 export default function NewProductForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [productName, setProductName] = useState('');
    const [brand, setBrand] = useState('1');
    const [utility, setUtility] = useState('1');
    const [unitCount, setUnitCount] = useState('');
    const [price, setPrice] = useState('');
    const [retailPrice, setRetailPrice] = useState('');

    const postData = async (e) => {
      e.preventDefault();

      const res = await axios.post('http://127.0.0.1:8000/api/new_product', {
        productName: productName,
        brand_id: brand,
        utility_id: utility,
        price: price,
        unit_sold_at: unitCount,
        retail_price: retailPrice, 
      });
      
      if(res.data.status === 1){
        console.log(res.data.message)
        setProductName('');
        setBrand('1');
        setUtility('1');
        setUnitCount('');
        setPrice('');
        setRetailPrice('');
      }

  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          New Product
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Product</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text"  onChange={e => setProductName(e.target.value)}  placeholder="Enter new product name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Brand</Form.Label>
                <Form.Select defaultValue="0" onChange={e => setBrand(e.target.value)} placeholder="Select new product brand" >
                  <option value=""  disabled hidden>Select product brand</option>
                  <option value="Brlkjdsa">Default select</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Utility</Form.Label>
                <Form.Select defaultValue="0" onChange={e => setUtility(e.target.value)}  placeholder="Select new product brand" >
                  <option value=""  disabled hidden>Select product utility</option>
                  <option value="1">Default select</option>
                </Form.Select><br/>
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Unit Count</Form.Label>
                <Form.Control type="text" onChange={e => setUnitCount(e.target.value)}  placeholder="Enter unit count (gallon, kg, pc, etc.)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" onChange={e => setPrice(e.target.value)} placeholder="Enter product price" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control type="number" onChange={e => setRetailPrice(e.target.value)} placeholder="Enter product retail price" />
              </Form.Group>

              <Button variant="primary" onClick={postData} type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          
        </Modal>
      </>
    );
    
}