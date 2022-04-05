import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.scss';




export function Registration()  {




  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [password_confirm,setPasswordConfirmation]=useState("");

  async function signUp() {
    let item = {name, email, password, password_confirm};
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


    return(
<div className='Registration'>
  
<Form id='RegisterForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Label className='labelok'>Username:</Form.Label>
    <Form.Control type="text" placeholder="Write a username!"  onChange={(e) => setName(e.target.value)} value={name}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='labelok'>Email address:</Form.Label>
    <Form.Control type="email" placeholder="write an email!"   onChange={(e) => setEmail(e.target.value)} value={email}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='labelok'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!"   onChange={(e) =>setPassword(e.target.value)} value={password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='labelok'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!"   onChange={(e) => setPasswordConfirmation(e.target.value)} value={password_confirm}/>
  </Form.Group>

  

  <Button variant="primary" type="submit" onClick={ signUp}>
    Register
  </Button>
  <p> Have you already registered? <a href='/Login'>Sign in</a></p>
</Form>

</div>
    );
   

 


    
}
export default Registration;