import React from 'react'
import { Form, Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="black" expand="lg" variant='dark'>
        <Container fluid>
          <Navbar.Brand href="/">
            <img width={100} src='https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="cinema dream" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav className="me-auto">
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/movies" className='nav-item'>Movies</Link>
              </Nav>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
