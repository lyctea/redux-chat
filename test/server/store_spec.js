import { fromJS } from "immutable"
import { expect } from "chai"

import { addRoom } from "../../src/server/actionCreator"
import { makeStore } from "../../src/server/store"

describe("server store",()=>{
    it("dispatch actions",( done )=>{
        const mockState = fromJS({
            rooms:[]
        })
        const store = makeStore( mockState )
        store.subscribe(()=>{
            const state = store.getState()
            expect( state.get("rooms").size).to.equal(1)
            done()
        })
        store.dispatch( addRoom({
            name:"聊天室",owner:"terry"
        }))
    })
})