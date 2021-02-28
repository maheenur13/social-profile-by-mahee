// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/user/User';
import userData from './fakeData/data.json';
function App() {
  const [users,setUser] = useState([]);
  useEffect(()=>{
    setUser(userData);
  },[])
  return (
    <div className="container">
      {/* <h2>Total user : {users.length}</h2> */}
      <div className="user-container">
        {
          users.map(user=> <User user ={user} key={user.id}></User>)
        }
      </div>
      <div>
        this is cart
      </div>
    </div>
  );
}

export default App;
