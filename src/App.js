import React, {useRef,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Form, Button} from "react-bootstrap"

import ListBody from "./components/List/ListBody"

function App() {
  const nameInput = useRef()
  const surnameInput = useRef()
  const emailInput = useRef()
  const messageInput = useRef()

  const [datas, setdatas] = useState([])
  const [id, setid] = useState([-1])

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameInput.current.value
    const surname = surnameInput.current.value
    const email = emailInput.current.value
    const message = messageInput.current.value
    
    setdatas([...datas,{ name: name, surname:surname, email:email, message:message} ])
    nameInput.current.value = ""
    surnameInput.current.value = ""
    emailInput.current.value = ""
    messageInput.current.value = ""
    nameInput.current.focus()
    }

    function deleteList(id){
      datas.splice(id, 1)
      setdatas([...datas])
    }

    function editList(value){
      setid(value.id)
      nameInput.current.value = value.name
      surnameInput.current.value = value.surname
      emailInput.current.value = value.email
      messageInput.current.value = value.message
      nameInput.current.focus()
    }
    function editForm(event){
      event.preventDefault()
      const name = nameInput.current.value
      const surname = surnameInput.current.value
      const email = emailInput.current.value
      const message = messageInput.current.value
      
      let newArray = [...datas]
      newArray[id] = { name: name, surname:surname, email:email, message:message}
      setdatas(newArray)
      setid(-1)
      nameInput.current.value = ""
      surnameInput.current.value = ""
      emailInput.current.value = ""
      messageInput.current.value = ""
    }
    
  return (
    <Container className="mt-5 mb-5 bg-dark text-light">
      <h1 className="text-center pt-5">Contact</h1> 
      <Form onSubmit={id>-1 ? editForm : handleSubmit}>
        <Row className="pt-5">
          <Col>
            <Form.Label >First Name</Form.Label>
            <Form.Control 
            required
            type="text"
            placeholder="First name"
            ref={nameInput} />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            required
            type="text" 
            placeholder="Last name"
            ref={surnameInput} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-3">
            <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            required 
            type="email" 
            placeholder="Enter email"
            ref={emailInput} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control 
              required 
              as="textarea" 
              placeholder="Enter Message"
              rows={3}
              ref={messageInput} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-5 pt-3">
            <Button onSubmit={handleSubmit} type="submit" className="mt-3 btn-success" >
              Submit form</Button>
          </Col>
        </Row>
      </Form> 

      <ListBody datas={datas} deleteList={deleteList} editList={editList} />
    
    </Container>
  );
}

export default App;
