import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';





export function Login()  {

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");

  async function signUp() {
    let item = {name, password, email};
    console.warn(item);

  let result = await fetch("http://localhost:8000/api/users/login", 
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
      
<div className='Login'>
  
<Form id='LoginForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username:</Form.Label>
    <Form.Control type="text"   onChange={(e) => setName(e.target.value)} value={name}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password"   onChange={(e) => setPassword(e.target.value)} value={password}/>
  </Form.Group> 
  <Button variant="primary" type="submit" onClick={ signUp}>
    Login
  </Button>
  <p> Don't have an account? <a href='/Registration'>Create one</a></p>
</Form>
</div>
    );
   

 


    
}
export default Login;