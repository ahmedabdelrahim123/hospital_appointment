import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <div >
      <Navbar bg="dark" variant="dark">   
          <Nav className="me-auto navbar_wrapper">
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </Nav>
      </Navbar>
      </div>
    );
  }
  
  export default Header;