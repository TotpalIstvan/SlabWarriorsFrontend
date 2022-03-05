import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';


import 'bootstrap/dist/css/bootstrap.min.css';


 export function Header() {

  return (
    <div className='Header'>
      <Navbar bg="dark" variant="dark">
      <Nav.Link href="Header.js" active>Főoldal</Nav.Link>
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
            <Nav.Link href="Registration.js">Regisztráció</Nav.Link>
            <Nav.Link href="gameDescription.js">Játékleírás</Nav.Link>
            <Nav.Link href="Leaderboard.js">Ranglista</Nav.Link>
            <Nav.Link href="Forum.js">Fórum</Nav.Link>
            <Nav.Link href="deckRecommendation.js">Deck Ajánló</Nav.Link>

            </Nav>
            </Navbar.Collapse>
    </Navbar>


    </div>
  );
}
export default Header;

