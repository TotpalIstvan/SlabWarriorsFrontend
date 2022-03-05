import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';



<<<<<<< HEAD
export function Registration()   {
=======

export function Registration()  {
>>>>>>> b647053d682fd3df90b0de84a5b8700d20b71d05
    return(
<div>
  <Header />
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
  
<<<<<<< HEAD
  
  <input type="submit" value="Bejelentkezés"></input>
</Form>
</div>
    );
   
=======
 
</Form>
</div>
    );
>>>>>>> b647053d682fd3df90b0de84a5b8700d20b71d05
    
}
export default Registration;