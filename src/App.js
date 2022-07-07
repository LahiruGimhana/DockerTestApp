import { useState, useEffect } from 'react';
import './App.css';
// import axios  from 'axios';
const axios = require('axios');

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setusername] = useState('');

  useEffect(() => {
    console.log("++++++++++++++++");
    axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        console.log(response);
        setListOfUsers(response.data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);


  const createNewUser = () => {
    axios.post("http://localhost:3001/createUsers", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name, age, username }])
    })
  }


  const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
  const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;

  return (
    <div className="App">
      <div style={{ backgroundColor: "yellow", height: '10vh' }}>
        <h2>React Test App</h2>
      </div>
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name : {user.name}</h1>
              <h1>Age : {user.age}</h1>
              <h1>User Name : {user.username}</h1>
            </div>
          )
        })}
      </div>


      <div>
        <input type="text" placeholder='Name' onChange={(event) => setName(event.target.value)} />
        <input type="number" placeholder='age' onChange={(event) => setAge(event.target.value)} />
        <input type="text" placeholder='username' onChange={(event) => setusername(event.target.value)} />
        <button onClick={createNewUser}>create new user</button>
      </div>

      <div style={{ height: '20vh' }}>

      </div>
    </div>
  );
}

export default App;
