import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {v4 as uuidv4 } from 'uuid';
import { Button, Stack } from '@mui/material';

export default function SignIn() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [id, setId] = useState(uuidv4());
    const [redirect, setRedirect] = useState(false);
    function handleSubmit(evt) {
        evt.preventDefault();
        navigate('/buzzer', {state: {id: id, user: user}});
    }

    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    }
    const buttonStyle = {
        display: 'block',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlign: "center", 
        backgroundColor: '#2a4269', 
        color: "#ffffff"
    }

    return (
        <div style = {flexStyle}>
        <Box
            component="form"
            noValidate
            autoComplete="off"
            style = {{textAlign: 'center'}}>
            <Stack spacing = {2}>
            <div></div>
            <TextField 
            sx={{input : {textAlign: 'center'}}}
            onChange={e => setUser(e.target.value)}
            id='outlined-basic' 
            label="Name" 
            variant='outlined' 
            color="success" 
            focused style={{color: '#ffffff', maxWidth: '100%'}}/>
            <Button onClick={handleSubmit} style={buttonStyle}>Play</Button>
            </Stack>
            </Box>
        </div>
    )
}