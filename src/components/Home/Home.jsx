import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Home.css";
import axios from 'axios';

function Home(props){
  // const [username,getUsername]=useState('');
  const[email, getEmail]=useState('');
  const[password, getPassword]= useState('');

  async function handlesubmit(e){
    e.preventDefault();
    const getUser={
      email:email,
      password:password,
    };
    let response = await axios.post(`http://localhost:5000/api/users/login`, getUser);
    if(response.status==200){console.log(response.data)}
  }
        return (
          <form className="signup" onSubmit={handlesubmit}>
          <lable>Username</lable>
          <input value={email} onChange={(event) => getEmail(event.target.value)} type='text' />
  
          <lable>Password</lable>
          <input value={password} onChange={(event) => getPassword(event.target.value)} type='text' />          
          <button type='submit'>Log in</button>
          <Button href="/Signup" variant="text">Signup</Button>
        </form>
            );
    }
 
export default Home;