import { globalConfig } from "antd/lib/config-provider";
import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function EditBrandForm({setBrands, brand}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const brand_id = brand.brand_id;
  const [brand_name, setbrand_name] = useState(brand.brand_name);

  const editedBrand = {brand_id, brand_name}

  const submitBrand = async (e) => {
    e.preventDefault();
    console.log(editedBrand);
    const res = await api.editBrand(editedBrand);
    
    if(res.data.response == 1){
      handleClose();
      const refreshData = await api.viewBrands();
      setBrands(refreshData.data.brands);
    }
}

  return(
      <>
      <Button variant="primary" onClick={handleShow}>
        Edit Brand
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Brand</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" value={brand_name} onChange={e => setbrand_name(e.target.value)}  placeholder="Enter Brand name" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" onClick={submitBrand} type="submit">
                Edit brand
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