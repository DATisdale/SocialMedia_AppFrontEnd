import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Home.css";

const Home=()=>{
        return (
          <div>
            <section class ="home">
            <div class="card" >
                <div class="card-body">
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username/Email" variant="outlined" />
      <div>
      <TextField id="filled-basic" label="Password" variant="filled" />
      <div className="button">
      <Button variant="contained">Login</Button>
      </div>
      </div>
    </Box>
                </div>
                <div>
                <Button variant="text">Signup</Button>
                </div>
                <div>
                <Button variant="text">Forgot Password</Button>
                </div>
              </div>
        </section>
        </div>
          );
    }
 
export default Home;