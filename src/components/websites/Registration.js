import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.scss';
import * as yup from "yup";
import { useFormik } from "formik";


const initialValues = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Username shouldn't be more than 50 charcters"),
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,50})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters with one uppercase letter, but 50 is max"
    )
    .min(8)
    .max(50),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});

export function Registration({onSubmit})  {

  

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  
  async function signUp() {
    let item = {name, email, password};
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  const nameProps = formik.getFieldProps("name");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const passwordconfrimProps = formik.getFieldProps("confirmPassword");


    return(
    


<Form id='RegisterForm' onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3" controlId="UsernameField" required>
    <Form.Label className='text' required isinvalid="true">Username:</Form.Label>
    <Form.Control type="text" placeholder="Write a username!" value={name}  onChange={(e) => setName(e.target.value)} {...nameProps} required/>
  </Form.Group>
   <label>
    {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      </label>

  <Form.Group className="mb-3" controlId="EmailField" required>
    <Form.Label className='text'>Email address:</Form.Label>
    <Form.Control type="email" placeholder="write an email!" value={email}    onChange={(e) => setEmail(e.target.value)} {...emailProps} required/>
  </Form.Group>
  <label>
  {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
    </label>

 
  <Form.Group className="mb-3" controlId="PasswordField" required>
    <Form.Label className='text'>Password:</Form.Label>
    <Form.Control type="password" placeholder="write a password!"   onChange={(e) => setPassword(e.target.value)} value={password} {...passwordProps} required/>
  </Form.Group>
  <label>
  {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
    </label>

 
  <Form.Group className="mb-3" controlId="PasswordConfirmField" required>
    <Form.Label className='text'>Password Confirmation:</Form.Label>
    <Form.Control type="password" placeholder="write your password again!"   onChange={(e) => setPasswordConfirm(e)} value={password_confirm} {...passwordconfrimProps} required/>
  </Form.Group>
  <label>
  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}
  </label>
  

  <Button variant="primary" type="submit" onClick={ signUp}>
    Register
  </Button>
  <p> Have you already registered? <a href='/Login'>Sign in</a></p>
</Form>



    );
   

 


    
      }
export default Registration;