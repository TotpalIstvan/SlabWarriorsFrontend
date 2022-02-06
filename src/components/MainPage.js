import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown bg="dark" title="Hírek" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Frissítések</NavDropdown.Item>
            <NavDropdown.Item href="#">Featured</NavDropdown.Item>
        </NavDropdown>
            <Nav.Link href="#">Regisztráció</Nav.Link>
            <Nav.Link href="#">Játékleírás</Nav.Link>
            <Nav.Link href="#">Ranglista</Nav.Link>
            <Nav.Link href="#">Fórum</Nav.Link>
            <Nav.Link href="#">Deck Ajánló</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
