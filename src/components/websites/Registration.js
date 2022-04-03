<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React,{ useState } from 'react';
=======
import React from 'react';
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
import React from 'react';
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
import React from 'react';
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.scss';





export function Registration()  {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function signUp() {
    let item = {name, password, email};
    console.warn(item);

  let result = await fetch("http://localhost:8000/api/users/register", 
    {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type":'application/json',
        "Accept" : 'application/json'
      }
    })
    result = await result.json();
    console.warn( JSON.stringify(result));
  }

=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
    return(
<div className='Registration'>
  
<Form id='RegisterForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
<<<<<<< HEAD
    <Form.Label className='labelok'>Username:</Form.Label>
    <Form.Control type="text" placeholder="Write a username!"  onChange={(e) => setName(e.target.value)} value={name}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='labelok'>Email address:</Form.Label>
    <Form.Control type="email" placeholder="write an email!"   onChange={(e) => setEmail(e.target.value)} value={email}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='labelok'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!"   onChange={(e) => setPassword(e.target.value)} value={password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='labelok'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!"   onChange={(e) => setPassword(e.target.value)} value={password}/>
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='labelok'>BirthDate:</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  

  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  <Button variant="primary" type="submit" onClick={ signUp}>
    Register
=======
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
=======
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
  <Button variant="primary" type="submit">
    Bejelentkezés
>>>>>>> parent of 5492b85 (Footer +  api csatlakozás megkezdése)
  </Button>
  <p> Have you already registered? <a href='/Login'>Sign in</a></p>
</Form>

</div>
    );
   

 


    
}
export default Registration;