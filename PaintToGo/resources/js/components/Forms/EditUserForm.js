import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function EditUserForm( {user, setEmployees}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user_id = user.user_id;
    const [firstName, setfirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [user_contact, setuser_contact] = useState(user.user_contact)
    const [email_add, setemail_add] = useState(user.email_add)
    const [password, setpassword] = useState(user.password)
    const [level_name, setlevel_name] = useState(user.level_name);

    const editedEmployee = {user_id, firstName, lastName, user_contact, email_add, password, level_name}

    const submitEdit = async (e) => {
      e.preventDefault();

      const res = await api.editUser(editedEmployee);
      if(res.data.response == 1){
        const refreshEmployee = await api.viewUsers();
        handleClose();
        setEmployees(refreshEmployee.data.users)
      }
  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value= {firstName} onChange={e => setfirstName(e.target.value)}  placeholder="Enter first name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value= {lastName} onChange={e => setlastName(e.target.value)}  placeholder="Enter last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" value= {user_contact} onChange={e => setuser_contact(e.target.value)}  placeholder="Enter contact number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" value= {email_add} onChange={e => setemail_add(e.target.value)}  placeholder="Enter email address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>User Type</Form.Label>
                <Form.Select  defaultValue={level_name} onChange={e => setlevel_name(e.target.value)}>
                  <option value="DEFAULT" disabled>Select User Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Customer">Customer</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Enter password</Form.Label>
                <Form.Control type="password" value= {password} onChange={e => setpassword(e.target.value)} placeholder="Enter password" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="primary" onClick={submitEdit} type="submit">
                  Edit User
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