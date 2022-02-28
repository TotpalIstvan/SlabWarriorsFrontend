import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export function Form()  {
    return(
<div>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Felhasználónév:</Form.Label>
    <Form.Control type="text" placeholder="Írj be egy felhasználó nevet!" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email cím:</Form.Label>
    <Form.Control type="email" placeholder="Írj be egy email címet!" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Jelszó:</Form.Label>
    <Form.Control type="password" placeholder="Írj be egy jelszót!" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Születési dátum:</Form.Label>
    <Form.Control type="date" placeholder="Születési év" />
  </Form.Group>
  
  <Button variant="primary">
    
    <span>Bejelentkezés</span>
  </Button>
</Form>
</div>
    );
    export default Form;
}