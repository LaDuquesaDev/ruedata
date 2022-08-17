import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../styles/addpet.css'
// import { AddPet } from './Functions'

export default function AddPet({ getData, showInitialModal, setShowInitialModal, selectedPet, mode, setMode }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specie, setSpecie] = useState("");
  const [form, setState] = useState({
    name: '',
    age: '',
    specie: ''
  });

  const handleClose = () => {
    setShow(false)
    setShowInitialModal(false)
  };

  const handleShow = () => {
    setShow(true)
    setMode('Create')
  };

  // const updateField = e => setState({
  //   ...form, //spread
  //   [e.target.name]: e.target.value
  // });  

  useEffect(() => {
    setShow(showInitialModal)
    if (selectedPet) {
      setState(currentForm => {
        currentForm.title = selectedPet.title;
        currentForm.content = selectedPet.content;
        return currentForm
      })
    }
  }, [showInitialModal])

  const payload = {
    name: name,
    age: age,
    specie: specie
  }

  // const printValues = e => {
  //   e.preventDefault();
  // };

  const eventsSaveBtn = (e, petID) => {
    if (mode === 'Edit') {
      axios.put(`http://localhost:8000/pet/${petID}`)
        .then((response) => {
          getData()
          handleClose();
        });
    } else if (mode === 'Create') {
      axios.post("http://localhost:8000/", payload
      ).then(
        getData(),
        handleClose()
      ).catch(error => console.log(error))
    }
  };

  return (
    <>
      <Button className='addPet-button' variant="primary" size="sm" onClick={handleShow}>
        Add Pet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pet Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={form.name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                value={form.age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Enter Age"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Specie</Form.Label>
              <Form.Control
                value={form.specie}
                onChange={(e) => setSpecie(e.target.value)}
                type="text"
                placeholder="Enter Specie"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={eventsSaveBtn}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}