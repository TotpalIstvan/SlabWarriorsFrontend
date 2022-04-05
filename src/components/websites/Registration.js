import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';



<<<<<<< HEAD
const fields = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8).max(50),
  password_confirm: Yup.string().oneOf([Yup.ref('password'),null])
});
=======
>>>>>>> 13f75dcd4e61f0594810ad8d920125c68afac1fa

export function Registration()  {




  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
<<<<<<< HEAD
  const [password_confirm, setPasswordConfirm] = useState("");
=======
  const [password_confirm,setPasswordConfirmation]=useState("");

>>>>>>> 13f75dcd4e61f0594810ad8d920125c68afac1fa
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
<<<<<<< HEAD
    


<Form id='RegisterForm' noValidate onSubmit={handleSubmit}>
=======
<div className='Registration'>
  
<Form id='RegisterForm'>
      <Form.Group className="mb-3" controlId="Name">
>>>>>>> 13f75dcd4e61f0594810ad8d920125c68afac1fa

      <Form.Group className="mb-3" controlId="UsernameField" required>
    <Form.Label className='labelok' required isinvalid="true">Username:</Form.Label>
    <Form.Control type="text" placeholder="Write a username!" value={name}  onChange={(e) => setName(e.target.value)}  isValid={touched.email && !errors.name}/>
  </Form.Group>
<<<<<<< HEAD
    <Form.Control.Feedback type="invalid">
    {errors.name}
  </Form.Control.Feedback>

  <Form.Group className="mb-3" controlId="EmailField" required>
=======
  <Form.Group className="mb-3" controlId="Email">
>>>>>>> 13f75dcd4e61f0594810ad8d920125c68afac1fa
    <Form.Label className='labelok'>Email address:</Form.Label>
    <Form.Control type="email" placeholder="write an email!" value={email}    onChange={(e) => setEmail(e.target.value)} isValid={touched.email &&!errors.email}/>
    <Form.Control.Feedback type="invalid">
    {errors.email}
  </Form.Control.Feedback>
  </Form.Group>

<<<<<<< HEAD

 
  <Form.Group className="mb-3" controlId="PasswordField" required>
    <Form.Label className='labelok'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!"   onChange={(e) => setPassword(e.target.value)} value={password} isValid={touched.password && !errors.password}/>
    <Form.Control.Feedback type="invalid">
   {errors.password}
  </Form.Control.Feedback>
  </Form.Group>


 
  <Form.Group className="mb-3" controlId="PasswordConfirmField" required>
    <Form.Label className='labelok'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!"   onChange={(e) => setPasswordConfirm(e.target.value)} value={password_confirm} isValid={touched.password_confirm && !errors.password_confirm}/>
=======
  <Form.Group className="mb-3" controlId="Password">
    <Form.Label className='labelok'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!"   onChange={(e) =>setPassword(e.target.value)} value={password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="PasswordConfirm">
    <Form.Label className='labelok'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!"   onChange={(e) => setPasswordConfirmation(e.target.value)} value={password_confirm}/>
>>>>>>> 13f75dcd4e61f0594810ad8d920125c68afac1fa
  </Form.Group>
 
  

  <Button variant="primary" type="submit" onClick={ signUp}>
    Register
  </Button>
  <p> Have you already registered? <a href='/Login'>Sign in</a></p>
</Form>



    );
   

 


    
      }
export default Registration;