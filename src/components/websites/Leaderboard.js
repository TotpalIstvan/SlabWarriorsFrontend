import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Leaderboard.scss';

class Leaderboard extends Component {
  state = {
    students: [],
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
  


if(this.state.loading) {
  
} 
else {

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
       
    
       </tbody>
     </table>
     </div>
   );
   

 


    
}
}
export default Leaderboard;