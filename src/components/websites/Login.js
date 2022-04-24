import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';





export function Login()  {

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");

   function login() {
    let item = {name, email};
    console.warn(item);

  let result =  fetch("http://127.0.0.1:8000/api/users/login", 
    {
      mode:'no-cors',
      method: "POST",
      body: JSON.stringify(item),
      headers: {
       "Content-Type":'application/json',
        "Accept" : 'application/json'
      }
    })
    result =  result.json();
    console.warn( JSON.stringify(result));
  }

    return(
      
<div className='Login'>
  
<Form id='LoginForm' method='POST'>
      <Form.Group className="mb-3" controlId="username">
    <Form.Label className='formlabel'>Username:</Form.Label>
    <Form.Control type="text"   onChange={(e) => setName(e.target.value)} value={name} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="email">
    <Form.Label className='formlabel'>Email address:</Form.Label>
    <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} value={email} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label className='formlabel'>Password:</Form.Label>
    <Form.Control type="password"   onChange={(e) => setPassword(e.target.value)} value={password} required/>
  </Form.Group> 
  <Button variant="primary" type="submit" onClick={ login} className='login'>
    Login
  </Button>
  <p> Don't have an account? <a href='/Registration'>Create one</a></p>
</Form>
</div>
    );
   

 


    
}
export default Login;