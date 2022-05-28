import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function EditProductForm( {Product, setProducts, brands, utilities}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = Product.product_id;
    const [productName, setProductName] = useState(Product.product_name);
    const [brand, setBrand] = useState(Product.brand_id);
    const [utility, setUtility] = useState(Product.utility_id);
    const [unitCount, setUnitCount] = useState(Product.unit_sold_at);
    const [price, setPrice] = useState(Product.price);
    const [retailPrice, setRetailPrice] = useState(Product.retail_price);

    const updatedProduct = {id, productName, brand, utility, unitCount, price, retailPrice}

    const submitEdit = async (e) => {
      e.preventDefault();

      const res = await api.editProduct(updatedProduct);
      const refreshProducts = await api.viewProducts();
      if(res.data.response == 1){
        handleClose();
        setProducts(refreshProducts.data.products)
      }
  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit Product
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text"  value= {productName} onChange={e => setProductName(e.target.value)}  placeholder="Enter new product name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Brand</Form.Label>
                <Form.Select defaultValue={brand} onChange={e => setBrand(e.target.value)} placeholder="Select new product brand" >
                  {brands.map((brand) => (
                    <option value={brand.brand_id}>
                        {brand.brand_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Utility</Form.Label>
                <Form.Select defaultValue={utility} onChange={e => setUtility(e.target.value)}  placeholder="Select new product brand" >
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
                <Form.Control type="text" value= {unitCount} onChange={e => setUnitCount(e.target.value)}  placeholder="Enter unit count (gallon, kg, pc, etc.)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" value= {price} onChange={e => setPrice(e.target.value)} placeholder="Enter product price" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control type="number" value= {retailPrice} onChange={e => setRetailPrice(e.target.value)} placeholder="Enter product retail price" />
              </Form.Group>

              <Button variant="primary" onClick={submitEdit} type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
    
}