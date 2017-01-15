import { addRoom, removeRoom } from "./core"


export default function reducer(state, action) {
    console.log("take action:",action)
    switch (action.type){
        case "ADD_ROOM":
            return addRoom(state, action.room)
        case "REMOVE_ROOM":
            return removeRoom(state,action.payload)
    }
    console.log(state)
    return state
}