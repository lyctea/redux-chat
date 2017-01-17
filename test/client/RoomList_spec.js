import React from 'react'
import ReactDOM from 'react-dom'
import {fromJS,Map,List} from 'immutable'
import {expect} from "chai"

import RoomList from "../../src/client/components/RoomList"

import TestUtil,{
    Simulate,
    renderIntoDocument,
    isCompositeComponentWithType,
    scryRenderedDOMComponentsWithTag,
    scryRenderedDOMComponentsWithClass,
} from "react-addons-test-utils"


describe("RoomList组件",()=>{
    it("render roomlist",()=>{
        const rooms = fromJS([
            {id:"0",name:"room",owner:"eisneim"},
            {id:"1",name:"room2",owner:"terry"}
        ])
    })


    const component = renderIntoDocument(
        <RoomList rooms={rooms} currentRoom="1"/>
    )
    const $rooms = scryRenderedDOMComponentsWithTag(component,"a")
    expect( $rooms.length ).to.equal(2)
    const $active = scryRenderedDOMComponentsWithClass(component,"active")
    expect( $active.length ).to.equal(1)
})