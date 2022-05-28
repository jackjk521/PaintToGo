import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function DeleteUserForm({user, setEmployees}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const deletedUser = async (e) => {
    e.preventDefault();
    console.log(user);

    const res = await api.deleteUser(user);
    if(res.data.response == 1){
      const refreshEmployee = await api.viewUsers();
      handleClose();
      setEmployees(refreshEmployee.data.users)
    }
  }

  return(
      <>
      <Button variant="danger" onClick={handleShow}>
        Delete User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Confirm deletion of {user.firstName} {user.lastName}.</Form.Label>
          </Form.Group>
          <Modal.Footer>
          <Button variant="danger" onClick={deletedUser} type="submit">
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