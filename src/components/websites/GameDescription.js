import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function GameDescription()  {

    return(
<div className='GameDescription'>
  <h1>About The Game</h1>
  <p><b>Slab Warriors</b> is a turn-based card game,
  where you have to fight on a table which is called Slab.</p>
  <p>
      The point of the game is to destroy the opponent's deck.
  </p>
  <p>
      <h1>Rules</h1>
      <ul>
        <li>
            In each match, you come first.
            </li>
            <li>
            The cards on the field can only attack your opponent, so you must get out of hand first.
            </li>
            <li>
            If the boss's hp reaches 0, you win. If your own fighter has an hp of 0, you have lost.
            </li>
            <li> 
What you can do in each round: you can put 3 cards in your space.
            </li>
            <li>    
The number of cards that can be dealt per round does not accumulate: if you have not placed a card in a round, this amount will not be added to the maximum limit in the next round.
            </li>
            <li>
You can choose up to several of the same cards in the deck, up to a maximum of three.
            </li>
            <li>
When you lay down a card, you can't do anything with that card until the next round. If you have other cards of the same suit in the deck, you can play them regardless of this rule.
</li>
      </ul>
  </p>
</div>
    );
   

 


    
}
export default GameDescription;