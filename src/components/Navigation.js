import React from 'react'
import { Form, Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
            <img width={100} src='https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/movies" className='nav-item'>Movies</Link>
          </Nav>
          </Navbar.Collapse>
        <Form className='d-flex'>
            <Form.Control type="search" placeholder="Search" className='me-2'/>
            <Button variant='outline-danger'>Search</Button>
        </Form>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
