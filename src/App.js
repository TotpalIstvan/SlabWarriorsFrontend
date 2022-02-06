import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link to='/MainPage.js' active>Főoldal</Nav.Link>
        <NavDropdown bg="dark" title="Hírek" id="navbarScrollingDropdown">
            <NavDropdown.Item href="">Frissítések</NavDropdown.Item>
            <NavDropdown.Item href="">Featured</NavDropdown.Item>
        </NavDropdown>
            <Nav.Link to="/Registration.js">Regisztráció</Nav.Link>
            <Nav.Link to="/gameDescription.js">Játékleírás</Nav.Link>
            <Nav.Link to="/Leaderboard.js">Ranglista</Nav.Link>
            <Nav.Link to="/MainPage.js">Fórum</Nav.Link>
            <Nav.Link to="/deckRecommendation.js">Deck Ajánló</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
