import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditPage = () => {

const users={
  fname:"",
  lname:"",
  email:"",
  password:""
}

const {id}=useParams();
const navigate=useNavigate();
const [user,setUser]=useState(users);
const [showPassword, setShowPassword] = useState(false); // State to track password visibility
const inputUpdateHandler=(e)=>{
  const {name,value}=e.target;
  setUser({...user,[name]:value})
  console.log(user);

}

useEffect(()=>{
axios.get(`http://localhost:5000/employees/getOne/${id}`)
.then((response)=>{
setUser(response.data);
})
.catch((error)=>{
  console.log(error);
})
},[id])

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

const submitForm=async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:5000/employees/update/${id}`,user)
  .then((response)=>{
// console.log(response);
toast.success(" Employee updated successfully",{position:'top-right'})
  navigate("/")
console.log(response.data);
}).catch(error=>console.log(error))
}

  return (
    <div > 
      
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog >
        
        
        <Modal.Header style={{backgroundColor:"black"}}>

          <Modal.Title className='text-white'>Update User</Modal.Title>
                  
          <div style={{marginLeft:"280px"}}>
        <button style={{borderRadius:'10px',backgroundColor:'secondary',fontSize:'large'}}> <Link style={{textDecoration:'none'}} to={'/'}><strong>Back</strong></Link></button>
        </div>

        </Modal.Header>
        
<Modal.Body style={{backgroundColor:"black"}}>
  <Form onSubmit={submitForm}>
        <Form.Label htmlFor="fname"><strong className='text-white'>First name</strong></Form.Label>
<Form.Control
  type="text"
  id="fname"
  name="fname"
  placeholder="First Name"
  aria-describedby="passwordHelpBlock"
  onChange={inputUpdateHandler}
 value={user.fname}
/>

<Form.Label htmlFor="lname"><strong className='text-white'>Last name</strong></Form.Label>
<Form.Control
  type="text"
  id="lname"
  name="lname"
placeholder="Last Name"
  aria-describedby="passwordHelpBlock"
  onChange={inputUpdateHandler}
  value={user.lname}

/>

<Form.Label htmlFor="email"><strong className='text-white'> Email</strong></Form.Label>
<Form.Control
  type="email"
  id="email"
  name="email"
  placeholder="Email"
  aria-describedby="passwordHelpBlock"
  onChange={inputUpdateHandler}
  value={user.email}

/>
{/* Add toggle button for password visibility */}
<strong>
  <Form.Check className='text-white'
                type="checkbox"
                id="showPassword"
                label="Show Password"
                onChange={togglePasswordVisibility}
              />
</strong>
<Form.Label htmlFor="inputPassword5"><strong className='text-white'>Password</strong></Form.Label>
<Form.Control
              name="password"
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Password"
              onChange={inputUpdateHandler}
              value={user.password}
            />


        <Modal.Footer>
            <Button type='submit' variant="secondary">Update User</Button>

        </Modal.Footer>
        </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
        </div>
  )
}

export default EditPage