import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'

const Header = () => {
  return (
    <Navbar className="navbarcontainer fontBold" expand="lg" variant="light">
        <Navbar.Brand className="brandname" as={Link} to={"/"}>
          <h3>Lyfeguard.</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to={"#"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Product"}>Product</Nav.Link>
              <Nav.Link as={Link} to={"#"}>Manage</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header