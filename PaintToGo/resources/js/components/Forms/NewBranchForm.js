import { globalConfig } from "antd/lib/config-provider";
import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import api from "../../api/api";

 export default function NewBranchForm({setBranches, employees}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [branch_name, setbranch_name] = useState('');
  const [user_id, setuser_id] = useState('');
  const [branch_add, setbranch_add] = useState('');
  const [branch_contact, setbranch_contact] = useState('');
  const [branch_type, setbranch_type] = useState('Branch');

  const newBranch = {branch_name, user_id, branch_add, branch_contact, branch_type}

  const submitBranch = async (e) => {
    e.preventDefault();

    const res = await api.newBranch(newBranch);
    if(res.data.response == 1){
      handleClose();
      const refreshData = await api.viewBranches();
      setBranches(refreshData.data.branches)
    }
}

  return(
      <>
      <Button variant="primary" onClick={handleShow}>
        New Branch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Branch</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Branch Name</Form.Label>
              <Form.Control type="text" onChange={e => setbranch_name(e.target.value)}  placeholder="Enter Branch name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Branch Manager</Form.Label>
              <Form.Select  defaultValue={'DEFAULT'} onChange={e => setuser_id(e.target.value)}>
                <option value="DEFAULT" disabled>Select Branch Manager</option>
                {employees.map((employee) => (
                  <option value={employee.user_id}>
                      {employee.firstName} {employee.lastName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Branch Address</Form.Label>
              <Form.Control type="text" onChange={e => setbranch_add(e.target.value)}  placeholder="Enter branch address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Branch Contact</Form.Label>
              <Form.Control type="text" onChange={e => setbranch_contact(e.target.value)}  placeholder="Enter branch contact number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Branch Type</Form.Label>
              <Form.Select  defaultValue={'DEFAULT'} onChange={e => setbranch_type(e.target.value)}>
                <option value="DEFAULT" disabled>Select Branch Type</option>
                <option value="Main">Main</option>
                <option value="Branch">Branch</option>               
              </Form.Select>
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" onClick={submitBranch} type="submit">
                Add new branch
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