import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBarMenu() {
    return (
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Random Team Generator</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Saved Teams</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
    );
  }
  
  export default NavBarMenu;