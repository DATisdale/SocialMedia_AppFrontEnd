import React, { useState } from 'react';
import "./Signup.css"
import axios from 'axios';

function Signup(props){

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password, setPassword] = useState('');


  async function handleSubmit(e){
    e.preventDefault();
    const postUser={
            name: username,
            email: email,
            password: password,
            isAdmin: false
    };
    let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
    if(response.status == 200){
      window.location = '/login'
    }
  }


    return(
      <form className="signup" onSubmit={handleSubmit}>
        <lable>Username</lable>
        <input value={username} onChange={(event) => setUsername(event.target.value)} type='text' />

        <lable>Password</lable>
        <input value={password} onChange={(event) => setPassword(event.target.value)} type='text' />

        <lable>email</lable>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type='text' />

        <button type='submit'>Create User</button>
      </form>
    )
}

export default Signup;