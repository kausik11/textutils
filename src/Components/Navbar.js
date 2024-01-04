import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggle} />
  <label class="form-check-label" htmlFor="flexSwitchCheckChecked">{props.text}</label>
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
