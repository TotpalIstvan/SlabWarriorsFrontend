import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
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
  
  <Button variant="primary" type="submit">
    Bejelentkezés
  </Button>
</Form>
      
    </div>
  );
}

export default App;
