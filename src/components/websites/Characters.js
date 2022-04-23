import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Characters.scss';

export function Characters()  {

    return(
<div className='Characters'>
    <Container>
        <Row>
        <Col>
 <Card className='card'>
          <Card.Img variant='top' src='/Cecilia.png'></Card.Img>
<Card.Body>
    <Card.Title>Cecilia</Card.Title>
<Card.Text>
    <p>Type: Mage</p>
    <p>Ability: </p>
    <p>Once every 2 turns, push a card that you attack back a lane, then attack it.</p>
    <p>Stats: </p>
    <ul>
        <li>level: 1</li>
        <li>hp: 150</li>
        <li>attack: 350</li>
    </ul>
</Card.Text>
</Card.Body>
 </Card>
 </Col>
 </Row>
 </Container>
</div>
    );
   

 


    
}
export default Characters;