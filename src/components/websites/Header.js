import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'



 export function Header() {

  return (
    <div className='Header'>
      <Navbar bg="dark" variant="dark" id='Navbar'>
         
            <Navbar.Brand>
              <img 
              src='/projekt_logo.png'
              alt='projektlogo'
              height="30"/>
            </Navbar.Brand>
         
       <Navbar.Toggle aria-controls="navbarScroll" />
     
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
         <Nav.Link href='MainPage' to="/MainPage">Main Page</Nav.Link>
        
            <Nav.Link href="Registration" to="/Registration">Registration</Nav.Link>
            <Nav.Link href="Login" to="/Login">Login</Nav.Link>
           
            <Nav.Link href="GameDescription" to="/GameDescription">Game Description</Nav.Link>
            
            <Nav.Link href="Leaderboard" to="/Leaderboard">Leaderboard</Nav.Link>
            
            <Nav.Link href="DeckRecommendation" to="/DeckRecommendation">Deck Recommender</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
            
    </Navbar>
    
    <Outlet />

    </div>
  );
}
export default Header;

