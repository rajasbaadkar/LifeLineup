import React from "react";
import socketIO from "socket.io-client";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './webchat.css';

const ENDPOINT = 'http://localhost:4500';
const socket = socketIO(ENDPOINT, {transports:['websocket']} );

function App(){

    socket.on("connect", () => {

    })

    return (
        <div className="App">
            <h1>working</h1>
        </div>
    )
}

export default App;