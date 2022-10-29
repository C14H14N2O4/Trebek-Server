import React, { useState } from 'react';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {v4 as uuidv4 } from 'uuid';



export default function Moderator() {
    // const client = new W3CWebSocket('wss://vast-eyrie-16564.herokuapp.com');
    const client = new W3CWebSocket('ws://127.0.0.1:8000');
    const [result, setResult] = useState("");
    const [playerList, setPlayerList] = useState("")
    const [user, setUser] = useState("SecretModeratorName");
    const [id, setId] = useState(uuidv4());



    const flexStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
    }
    const buttonStyle = {
        display: 'block',
        width: '100%',
        height: '20%',
        textAlign: 'center',
        textAlign: "center",
    }

    useEffect(() => {
        client.onopen = () => {
            var joinMsg = {"type": "join", "player":{id: id, user: user}}
            client.send(JSON.stringify(joinMsg));
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            var signal = JSON.parse(message.data);
            if (signal.type === "winner") {
                setResult("The winner is " + signal.content);
            }
            if (signal.type === "list") {
                console.log(typeof signal.content)
                console.log(signal.content.split(',').join(', '))
                setPlayerList(signal.content.split(',').join(', '))
            }
        };
    })

    const start = () => {
        var message = {"type": "start"}
        client.send(JSON.stringify(message))
    }

    const reset = () => {
        var message = {"type": "reset"}
        setResult("");
        client.send(JSON.stringify(message))
    }

    return (
        <div style = {flexStyle}> 
            <button style = {buttonStyle} onClick = {start}>
                Start
            </button>
           <button style = {buttonStyle} onClick = {reset}>
                Reset
           </button>
           <div style={{fontSize: 'large'}}>
                {`${result}`}
                <br/>
                {`${playerList}`}
            </div>
        </div>
    );
}