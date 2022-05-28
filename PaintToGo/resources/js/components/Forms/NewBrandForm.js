import { globalConfig } from "antd/lib/config-provider";
import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function NewBrandForm({setBrands}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brand_name, setbrand_name] = useState('');

  const newBrand = {brand_name}

  const submitBrand = async (e) => {
    e.preventDefault();

    const res = await api.newBrand(newBrand);
    if(res.data.response == 1){
      handleClose();
      const refreshData = await api.viewBrands();
      setBrands(refreshData.data.brands);
    }
}

  return(
      <>
      <Button variant="primary" onClick={handleShow}>
        New Brand
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Brand</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" onChange={e => setbrand_name(e.target.value)}  placeholder="Enter Brand name" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" onClick={submitBrand} type="submit">
                Add new brand
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
    
}