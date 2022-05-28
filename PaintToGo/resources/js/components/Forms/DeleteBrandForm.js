import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function DeleteBrandForm({brand, setBrands}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const deleteBrand = async (e) => {
    e.preventDefault();

    const res = await api.deleteBrand(brand);
    if(res.data.response == 1){
      handleClose();
      const refreshData = await api.viewBrands();
      setBrands(refreshData.data.brands)
    }
  }

  return(
      <>
      <Button variant="danger" onClick={handleShow}>
        Delete Brand
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Confirm deletion of {brand.brand_name}.</Form.Label>
          </Form.Group>
          <Modal.Footer>
          <Button variant="danger" onClick={deleteBrand} type="submit">
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Cancel
          </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
    
}