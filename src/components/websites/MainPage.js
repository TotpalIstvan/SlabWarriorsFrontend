import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';



export function MainPage()  {

    return(
<div  className='MainPage'>
  <h1>Main Page</h1>
<p id='welcome'>Welcome to our website! If you want to continue you need to <a href='/Registration'>Register</a>!</p>
</div>

    );
   

 


    
}
export default MainPage;