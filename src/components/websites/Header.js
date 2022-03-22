import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



 export function Header() {

  return (
    <div className='Header'>
      <Navbar bg="dark" variant="dark">
       <Navbar.Toggle aria-controls="navbarScroll" />
     
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/MainPage">
         <Nav.Link href='MainPage.js'>Főoldal</Nav.Link>
         </Link>
        <NavDropdown bg="dark" title="Hírek" id="navbarScrollingDropdown">
            <Link to="/Updates">
            <NavDropdown.Item href="Updates.js">Frissítések</NavDropdown.Item>
            </Link>
            <Link to="/Featured">
            <NavDropdown.Item href="Featured.js">Featured</NavDropdown.Item>
            </Link>
        </NavDropdown>
        <Link to="/Registration">
            <Nav.Link href="Registration.js">Regisztráció</Nav.Link>
            </Link>
            <Link to="/gameDescription">
            <Nav.Link href="gameDescription.js">Játékleírás</Nav.Link>
            </Link>
            <Link to="/Leaderboard">
            <Nav.Link href="Leaderboard.js">Ranglista</Nav.Link>
            </Link>
            <Link to="/Forum">
            <Nav.Link href="Forum.js">Fórum</Nav.Link>
            </Link>
            <Link to="/deckRecommendation">
            <Nav.Link href="deckRecommendation.js">Deck Ajánló</Nav.Link>
            </Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    <Outlet />

    </div>
  );
}
export default Header;

