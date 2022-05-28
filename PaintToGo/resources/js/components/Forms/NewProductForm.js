import { globalConfig } from "antd/lib/config-provider";
import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function NewProductForm({setProducts, brands, utilities}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const defaultValue=1;
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState(1);
  const [utility, setUtility] = useState(1);
  const [unitCount, setUnitCount] = useState('gallon');
  const [price, setPrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');

  const newProduct = {productName, brand, utility, unitCount, price, retailPrice}

  const submitProduct = async (e) => {
    e.preventDefault();

    const res = await api.newProduct(newProduct);
    const refreshProducts = await api.viewProducts();
    if(res.data.response == 1){
      handleClose();
      const refreshProducts = await api.viewProducts();
      setProducts(refreshProducts.data.products)
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
              <Form.Select defaultValue={'DEFAULT'} onChange={e => setBrand(e.target.value)} placeholder="Select new product brand" >
              <option value="DEFAULT" disabled>Select Brand</option>
                {brands.map((brand) => (
                  <option value={brand.brand_id}>
                      {brand.brand_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Product Utility</Form.Label>
              <Form.Select defaultValue={'DEFAULT'}  onChange={e => setUtility(e.target.value)}  placeholder="Select new product brand" >
                <option value="DEFAULT" disabled>Select Utility</option>
                {utilities.map((util) => (
                  <option value={util.utility_id}>
                      {util.utility_name}
                  </option>
                ))}
              </Form.Select>
              <Form.Text className="text-muted">
               
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Unit Count</Form.Label>
              <Form.Select  defaultValue={'DEFAULT'} onChange={e => setUnitCount(e.target.value)}  placeholder="Select new product brand" >
                <option value="DEFAULT" disabled>Select Unit Count</option>
                <option value="gallon">Gallon</option>
                <option value="liters">Liters</option>
                <option value="bundle">Bundle</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="number" onChange={e => setPrice(e.target.value)} placeholder="Enter product price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Retail Price</Form.Label>
              <Form.Control type="number"  onChange={e => setRetailPrice(e.target.value)} placeholder="Enter product retail price" />
            </Form.Group>

            <Button variant="primary" onClick={submitProduct} type="submit">
              Add new product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
    
}