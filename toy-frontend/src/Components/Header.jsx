import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Toy Shop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>

      <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
      
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Dropdown>
        <Dropdown.Toggle className="mx-4 justify-content-end" variant="success" id="dropdown-basic">
          Admin Panel
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/admin/addproduct">Add Product</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
