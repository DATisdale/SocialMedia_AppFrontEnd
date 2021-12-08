import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Signup.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Signup =()=>{
    return(
        <div className="signup">
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue="Username"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="Email"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="button-container">
        <Button variant="contained">Sign Up</Button>
        </div>
        
      </Box>
      </div>

    )
}

export default Signup;