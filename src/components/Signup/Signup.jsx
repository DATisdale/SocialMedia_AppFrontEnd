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
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        
      </Box>
      </div>

    )
}

export default Signup;