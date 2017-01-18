import {Map,fromJS} from 'immutable'

const STATE_SKY = "CHAT_APP_STATE"

export function saveToStorage(state) {
    var data = JSON.stringify(state.toJS ? state.toJS() : state)
    localStorage.setItem(STATE_SKY, data)
}

export function getinitialState() {
    var stateString = localStorage.getItem(STATE_SKY)
    if (!stateString) {
        return fromJS({
            rooms:[], messages:{},
            username:prompt("用户名")
        })
    }
    return fromJS(JSON.parse(stateString))
}