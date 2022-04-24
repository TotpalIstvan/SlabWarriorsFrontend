import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.scss';
import * as yup from "yup";
import { useFormik } from "formik";



const initialValues = {
  username: "",
  email: "",
  password: "",
  password_confirm: ""
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("A username is required")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username shouldn't be more than 50 charcters"),
  email: yup
    .string()
    .email()
    .required("You cannot register without an email address"),
  password: yup
    .string()
    .required("You have to give a password")
    .matches(
      /^.*(?=.{8,50})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters with one uppercase letter, but 50 is max"
    )
    .min(8)
    .max(50),
  password_confirm: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});

export function Registration({onSubmit})  {


  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  
   function signUp() {
    let item = {username, email};
    console.warn(item);

 fetch("http://localhost:8000/api/users/register", 
    {mode:'no-cors',
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Access-Control-Allow-Credentials" : true,
        "Content-Type":'application/json',
        "Accept" : 'application/json',
       
      }
    })
    .then(response => response.json())
  .then(json => console.log(json))
    .then(function(response) {                     
      if(response.ok)
      {
        return response.text();         
      }
else {
      throw new Error('Something went wrong.');
    }
  })  
  .then(function(text) {                          
    console.log('Request successful', text);  
  })  
  .catch(function(error) {                       
    console.log('Request failed', error);
  });
  

  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  const usernameProps = formik.getFieldProps("username");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const passwordconfrimProps = formik.getFieldProps("password_confirm");

  
    return(
    


<Form id='RegisterForm' onSubmit={formik.handleSubmit} method="POST">

      <Form.Group className="mb-3" controlId="UsernameField">
    <Form.Label className='formlabel'  isinvalid="true">Username:</Form.Label>
    <Form.Control type="text" placeholder="Write a username!" value={username}   onChange={(e) => setUsername(e.target.value)}   {...usernameProps} required/>
  </Form.Group>
   <label>
    {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}
      </label>

  <Form.Group className="mb-3" controlId="EmailField" >
    <Form.Label className='formlabel'>Email address:</Form.Label>
    <Form.Control type="email" placeholder="write an email!" value={email}  onChange={(e) => setEmail(e.target.value)}    {...emailProps} required/>
  </Form.Group>
  <label>
  {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
    </label>

 
  <Form.Group className="mb-3" controlId="PasswordField" >
    <Form.Label className='formlabel'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!" value={password}   onChange={(e) => setPassword(e.target.value)}  {...passwordProps} required/>
  </Form.Group>
  <label>
  {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
    </label>

 
  <Form.Group className="mb-3" controlId="PasswordConfirmField">
    <Form.Label className='formlabel'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!" value={password_confirm}   onChange={(e) => setPasswordConfirm(e)}  {...passwordconfrimProps} required/>
  </Form.Group>
  <label>
  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}
  </label>
  

  <Button variant="primary" type="button" onClick={ signUp} className='registerButton'>
    Register
  </Button>
  <p> Have you already registered? <a href='/Login'>Sign in</a></p>
</Form>



    );
   

 


    
      }
export default Registration;