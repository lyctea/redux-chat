import {socket} from "./io"

socket.on("state", state=>{
    console.log("getInitialState", state)
})