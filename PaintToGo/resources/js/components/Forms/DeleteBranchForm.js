import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function DeleteBranchForm({branch, setBranches}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const deleteBranch = async (e) => {
    e.preventDefault();

    const res = await api.deleteBranch(branch);
    if(res.data.response == 1){
      handleClose();
      const refreshData = await api.viewBranches();
      setBranches(refreshData.data.branches)
    }
  }

  return(
      <>
      <Button variant="danger" onClick={handleShow}>
        Delete Branch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Branch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Confirm deletion of {branch.branch_name}.</Form.Label>
          </Form.Group>
          <Modal.Footer>
          <Button variant="danger" onClick={deleteBranch} type="submit">
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