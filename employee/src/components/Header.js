import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div className=' bg-secondary  text-center ' >
        
      
        {/* <Navbar.Brand href="/"><strong>Employee Management</strong></Navbar.Brand> */}
        <a class="navbar-brand " href="/"><strong style={{fontSize:'x-large'}}>EMPLOYEE MANAGEMENT</strong></a>
          
      
  
    </div>
  )
}

export default Header