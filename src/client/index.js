import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

import {socket} from "./io"

socket.on("state", state=>{
    console.log("getInitialState", state)
})

const fakeState = {
    rooms:fromJS([
        {id:"0",name:"room",owner:"eisneim"},
        {id:"1",name:"room2",owner:"terry"},
    ]),
    currentRoom: "1",
    username: "eisneim",
    messages: fromJS({
        "1": [
            {user:"eisneim",content:"react is cool",time:"23:23"},
            {user:"terry",content:"so is redux",time:"12:33"},
        ]
    })
}

var $app = document.getElementById("app")

function render() {
    ReactDOM.render(
        <App rooms={fakeState.rooms}
             messages={fakeState.messages}
             currentRoom={fakeState.currentRoom}
             username={fakeState.username} />,
        $app
    )
}