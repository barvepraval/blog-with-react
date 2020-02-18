import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';




function Header() {

  function handleClick() {
    document.activeElement.blur()
  }

  return (
    <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="/home" className="brand">
            React Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navlink" activeKey="/">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/compose">Compose</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search Post" className="mr-sm-2" />
            <Button variant="outline-dark" onClick={handleClick}>Search</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
