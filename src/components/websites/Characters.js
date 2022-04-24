import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Characters.scss';
import { CardGroup } from 'react-bootstrap';

export function Characters()  {

    return(
<div className='Characters'>
    <Container className='container'>
       <CardGroup>
 <Card className='card card1'>
          <Card.Img variant='top' src='/Cecilia.png'></Card.Img>
<Card.Body>
    <Card.Title>Cecilia</Card.Title>

<Card.Text> Type: Mage</Card.Text>
<Card.Text>Ability: Once every 2 turns, push a card that you attack back a lane, then attack it.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 150</li>
        <li>attack: 350</li>
    </ul>
</Card.Body>
 </Card>
 <Card className='card card2'>
          <Card.Img variant='top' src='/catapult.png'></Card.Img>
<Card.Body>
    <Card.Title>Catapult</Card.Title>

<Card.Text> Type: Building</Card.Text>
<Card.Text>Ability: Damaging enemy cards based on the number of people operating it (max 3).</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 150</li>
        <li>attack: 100</li>
    </ul>
</Card.Body>
 </Card>
 <Card className='card card3'>
          <Card.Img variant='top' src='/Chloe.png'></Card.Img>
<Card.Body>
    <Card.Title>Chloe</Card.Title>

<Card.Text> Type: Support</Card.Text>
<Card.Text>Ability: Heals onfield cards by 20% of it's own max hp, every turn.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 550</li>
        <li>attack: 50</li>
    </ul>
</Card.Body>
 </Card>
 

 <Card className='card card4'>
          <Card.Img variant='top' src='/footman.png'></Card.Img>
<Card.Body>
    <Card.Title>footman</Card.Title>

<Card.Text> Type: Support</Card.Text>
<Card.Text>Ability:Only card that can operate the building type cards.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 100</li>
        <li>attack: 0</li>
    </ul>
</Card.Body>
 </Card>
 <Card className='card card5'>
          <Card.Img variant='top' src='/Alejandro.png'></Card.Img>
<Card.Body>
    <Card.Title>Alejandro</Card.Title>

<Card.Text> Type: Soldier</Card.Text>
<Card.Text>Ability: For every soldier type of card onfield, boosts attack and hp by 15%. Max 4 stacks.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 400</li>
        <li>attack: 200</li>
    </ul>
</Card.Body>
 </Card>
 
 
 <Card className='card card6'>
          <Card.Img variant='top' src='/Francis.png'></Card.Img>
<Card.Body>
    <Card.Title>Francis</Card.Title>

<Card.Text> Type: Tank</Card.Text>
<Card.Text>Ability: Decreases incoming damage by 30% if it is on the front lane.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 1000</li>
        <li>attack: 150</li>
    </ul>
</Card.Body>
 </Card>


 <Card className='card card7'>
          <Card.Img variant='top' src='/JohnS.png'></Card.Img>
<Card.Body>
    <Card.Title>John S.</Card.Title>

<Card.Text> Type: Assassin</Card.Text>
<Card.Text>Ability: Automatically dogdes an attack when summoned, and once every 4 turns.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 250</li>
        <li>attack: 450</li>
    </ul>
</Card.Body>
 </Card>
 </CardGroup>
 <CardGroup>
 <Card className='card card1'>
          <Card.Img variant='top' src='/Victor.png'></Card.Img>
<Card.Body>
    <Card.Title>Victor</Card.Title>

<Card.Text> Type: Pirate Captain</Card.Text>
<Card.Text>Ability: You give up your ability to attack for buffing your on-field cards with 20% attack and hp.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 8000</li>
        <li>attack: 0</li>
    </ul>
</Card.Body>
 </Card>
 <Card className='card card2'>
          <Card.Img variant='top' src='/Don.png'></Card.Img>
<Card.Body>
    <Card.Title>Don</Card.Title>

<Card.Text> Type: Conquistador</Card.Text>
<Card.Text>Ability: For 2 turns, you gain 15% extra attack by expending 15% of your current health. It's cooldown is 2 turns.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 7500</li>
        <li>attack: 200</li>
    </ul>
</Card.Body>
 </Card>
 <Card className='card card3'>
          <Card.Img variant='top' src='/Karl.png'></Card.Img>
<Card.Body>
    <Card.Title>Karl</Card.Title>

<Card.Text> Type: Duke</Card.Text>
<Card.Text>Ability: Your card's stats are decreased by 15%, but they also cost 20% less.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 6500</li>
        <li>attack: 250</li>
    </ul>
</Card.Body>
 </Card>
 

 <Card className='card card4'>
          <Card.Img variant='top' src='/Shean.png'></Card.Img>
<Card.Body>
    <Card.Title>Shean</Card.Title>

<Card.Text> Type: Reptilian humanoid</Card.Text>
<Card.Text>Ability: Whenever you're under max hp, you gain 5% of max hp back every turn.</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 6000</li>
        <li>attack: 200</li>
    </ul>
</Card.Body>
 </Card>
 </CardGroup>
 <Card className='card mx-auto' id='card8'>
          <Card.Img variant='top' src='/Yargol.png'></Card.Img>
<Card.Body>
    <Card.Title>Yargol</Card.Title>

<Card.Text> Type: Orc boss</Card.Text>
<Card.Text>Ability: He is the enemy</Card.Text>
<Card.Text>Stats: </Card.Text>
<ul>
        <li>level: 1</li>
        <li>hp: 150000</li>
        <li>attack: 350</li>
    </ul>
</Card.Body>
 </Card>

 
 
 
 </Container>
 <footer><p>Pictures made via: GIMP</p></footer>
</div>
    );
   

 


    
}
export default Characters;