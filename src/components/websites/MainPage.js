import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';



export function MainPage()  {

    return(
<div  className='MainPage'>
  <h1>Main Page</h1>
<p id='welcome'>Welcome to our website! If you want to continue you need to <a href='/Registration'>Register</a>!</p>
<p><a href='/Login'>If you already registered</a></p>
<p><a href='/GameDescription'>If you want to know more about the game</a></p>
 <p><a href='/Characters'>All about the ingame characters</a></p>
 <p><a href='/Leaderboard'>The standings</a></p>
</div>

    );
   

 


    
}
export default MainPage;