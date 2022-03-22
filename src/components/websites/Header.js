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
         <Nav.Link href='MainPage.js' to="/MainPage">Főoldal</Nav.Link>
         </Link>
        <NavDropdown bg="dark" title="Hírek" id="navbarScrollingDropdown">
            <Link to="/Updates">
            <NavDropdown.Item href="Updates.js" to="/Updates">Frissítések</NavDropdown.Item>
            </Link>
            <Link to="/Featured">
            <NavDropdown.Item href="Featured.js" to="/Featured">Featured</NavDropdown.Item>
            </Link>
        </NavDropdown>
        <Link to="/Registration">
            <Nav.Link href="Registration.js" to="/Registration">Regisztráció</Nav.Link>
            </Link>
            <Link to="/GameDescription">
            <Nav.Link href="GameDescription.js" to="/GameDescription">Játékleírás</Nav.Link>
            </Link>
            <Link to="/Leaderboard">
            <Nav.Link href="Leaderboard.js" to="/Leaderboard">Ranglista</Nav.Link>
            </Link>
            <Link to="/Forum">
            <Nav.Link href="Forum.js" to="/Forum">Fórum</Nav.Link>
            </Link>
            <Link to="/DeckRecommendation">
            <Nav.Link href="DeckRecommendation.js" to="/DeckRecommendation">Deck Ajánló</Nav.Link>
            </Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    <Outlet />

    </div>
  );
}
export default Header;

