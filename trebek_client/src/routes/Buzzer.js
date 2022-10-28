import { useLocation } from "react-router";
import { React, useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import { Button } from "@mui/material";

export default function Buzzer() {
    const {state} = useLocation()
    const {id} = state;
    const {user} = state;
    const [blocked, setBlocked] = useState(true)
    const [background, setBackground] = useState("#000000");
    const [cooldown, setCooldown] = useState(true);
    const [result, setResult] = useState("");
    const client = new W3CWebSocket('wss://vast-eyrie-16564.herokuapp.com');
    // const client = new W3CWebSocket('ws://127.0.0.1:8000');


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


    client.onopen = () => {
      var joinMsg = {"type": "join", "player":state}
      client.send(JSON.stringify(joinMsg));
      console.log('WebSocket Client Connected');
    };
    useEffect(() => {
        client.onmessage = (message) => {
          var signal = JSON.parse(message.data);
          switch (signal.type) {
            case "congratulations":
              setBackground("green");
              setResult("The winner is " + user);
              setBlocked(false)
              break;
            case "err":
              setCooldown(false);
              setBackground("#e5f505")
              setResult("Too Early!")
              setTimeout(() => {
                setResult("");
                setBackground("#000000");
              }, 500)
              setTimeout(() => {
                setBackground("#000000")
              }, 500);
              setTimeout(()=> {
                setCooldown(true);
              })
              break;
            case "winner":
              setBackground("red");
              setResult("The winner is " + signal.content);
              setBlocked(false)
              break;
            case "reset":
              setBackground("#000000")
              setResult("")
              setBlocked(true)
          }
        };  
      }) 
    const buzzer = () => {
        var message = {"type": "buzz", "player": state}
        client.send(JSON.stringify(message))  
    }
    return (
        <div style = {flexStyle}>
        <div style={{backgroundColor: `${background}`, textAlign: "center", height:"100vh"}}> 
        {blocked && 
        <> 
         {cooldown && <Button
          style={{backgroundColor: '#2a4269', color: '#ffffff'}}
            onClick = {buzzer}
          >Buzz</Button> }
          </> }
            <div style={{color: "black"}}>
                {`${result}`}
            </div>
        </div>
      </div>
    );
}