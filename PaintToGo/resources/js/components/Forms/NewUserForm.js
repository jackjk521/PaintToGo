import { globalConfig } from "antd/lib/config-provider";
import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function NewUserForm({setEmployees}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [user_contact, setuser_contact] = useState('');
  const [email_add, setemail_add] = useState('');
  const [password, setpassword] = useState('');
  const [level_name, setlevel_name] = useState('Customer');

  const newEmployee = {firstName, lastName, user_contact, email_add, password, level_name}

  const submitEmployee = async (e) => {
    e.preventDefault();

    const res = await api.newUser(newEmployee);
    if(res.data.response == 1){
      handleClose();
      const refreshUsers = await api.viewUsers();
      setEmployees(refreshUsers.data.users)
    }
}

  return(
      <>
      <Button variant="primary" onClick={handleShow}>
        New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" onChange={e => setfirstName(e.target.value)}  placeholder="Enter first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" onChange={e => setlastName(e.target.value)}  placeholder="Enter last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" onChange={e => setuser_contact(e.target.value)}  placeholder="Enter contact number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" onChange={e => setemail_add(e.target.value)}  placeholder="Enter email address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>User Type</Form.Label>
              <Form.Select  defaultValue={'DEFAULT'} onChange={e => setlevel_name(e.target.value)}>
                <option value="DEFAULT" disabled>Select User Type</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Customer">Customer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Enter password</Form.Label>
              <Form.Control type="password" onChange={e => setpassword(e.target.value)} placeholder="Enter password" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" onClick={submitEmployee} type="submit">
                Add new user
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