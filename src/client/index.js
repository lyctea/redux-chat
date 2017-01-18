import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

import {createStore} from 'redux'
import rootReducer from './reducer'
import {setState, newMessage } from './actionCreators'
import {getinitialState,saveToStorage} from './store'

import {socket} from "./io"

const store = createStore(rootReducer,getinitialState())

socket.on("state", state=>{
    store.dispatch(setState(state))
})

socket.on("message",message=>{
    console.log("get message from server")
    store.dispatch(newMessage((message, true)))
})

//
// const fakeState = {
//     rooms:fromJS([
//         {id:"0",name:"room",owner:"eisneim"},
//         {id:"1",name:"room2",owner:"terry"},
//     ]),
//     currentRoom: "1",
//     username: "eisneim",
//     messages: fromJS({
//         "1": [
//             {user:"eisneim",content:"react is cool",time:"23:23"},
//             {user:"terry",content:"so is redux",time:"12:33"},
//         ]
//     })
// }

var $app = document.getElementById("app")

function render() {

    const fakeState = store.getState()

    ReactDOM.render(
        <App rooms={fakeState.get("rooms")}
             messages={fakeState.get("messages")}
             currentRoom={fakeState.get("currentRoom")}
             username={fakeState.get("username")} />,
        $app
    )
}
render()

store.subscribe(()=>{
    saveToStorage(store.getState())
})