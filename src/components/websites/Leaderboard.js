import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Leaderboard.scss';

class Leaderboard extends Component {
  state = {
    users: [],
    loading: true,
  }
 async componentDidMount() {
    const response = await axios.get('http://localhost:8000/api/users');
    if(response.data.status === 200) {
      this.setState({
        users: response.data.users,
        loading: false,
      })
    }
  }
render()  {
  

let  users_Table = "";
if(this.state.loading) {
  users_Table = <tr><td colSpan={12}><h2>Loading...</h2></td></tr>
  
} 
else {
  users_Table =
  this.state.users.map( (item) => {
    return(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.email_verified_at}</td>
      <td>{item.password}</td>
      <td>{item.remember_token}</td>
      <td>{item.account_number}</td>
      <td>{item.card_count}</td>
      <td>{item.fighter_count}</td>
      <td>{item.level}</td>
      <td>{item.admin}</td>
      <td>{item.banned}</td>
    </tr>
    );
    });
}
    return(
<div className='Leaderboard'>  
 <table className='table table-bordered table-striped'>
       <thead> 
         <tr>
     <td>id</td> 
     <td>username</td> 
     <td>email</td> 
     <td>email_verified_at</td> 
     <td>password</td> 
     <td>remember_token</td> 
     <td>account_number</td> 
     <td>card_count</td> 
     <td>fighter_count</td> 
     <td>level</td> 
     <td>admin</td> 
     <td>banned</td>
         </tr>
       </thead>
       <tbody>
       {users_Table}
    
       </tbody>
     </table>
     </div>
   );
   

 


    
}
}
export default Leaderboard;