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
<<<<<<< HEAD:src/components/websites/Header.js
            <Nav.Link href="Registration.js">Regisztráció</Nav.Link>
            <Nav.Link href="gameDescription.js">Játékleírás</Nav.Link>
            <Nav.Link href="Leaderboard.js">Ranglista</Nav.Link>
            <Nav.Link href="Forum.js">Fórum</Nav.Link>
            <Nav.Link href="deckRecommendation.js">Deck Ajánló</Nav.Link>
=======
        
            <Nav.Link href='#'>Regisztráció</Nav.Link>
            
            <Nav.Link href='#'>Játékleírás</Nav.Link>
            <Nav.Link href='#'>Ranglista</Nav.Link>
            <Nav.Link href='#'>Fórum</Nav.Link>
            <Nav.Link href='#'>Deck Ajánló</Nav.Link>
>>>>>>> b647053d682fd3df90b0de84a5b8700d20b71d05:src/components/websites/MainPage.js
            </Nav>
            </Navbar.Collapse>
    </Navbar>


    </div>
  );
}
export default Header;

