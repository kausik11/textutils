import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import home from './TextForm'
import about from './About'

const NavbarComp = (props) => {
  return (
    <Navbar expand="lg" bg={props.mode} data-bs-theme={props.mode}>
      <Container fluid>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' style={{margin:"10px"}}>Home</Link>
            <Link to='/about' style={{margin:"10px"}}>About</Link>
          
          </Nav> 
          <Form className="d-flex">
          <Button variant="success" className='mx-2'>Success</Button>
          <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.text}</label>
</div>
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
