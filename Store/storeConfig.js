import { createStore } from 'redux'

const initialState = { iterate: 3,  numberInput: [], randomNumber: [], level: 1, enable : false}

function myStoreFunc(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ENABLE_TRUE':
            nextState = {
                ...state,
                enable: true
            }
            return nextState || state

        case 'ENABLE_FALSE':
            nextState = {
                ...state,
                enable: false
            }
            return nextState || state


        case 'INCREMENT_ITERATION':
            nextState = {
                ...state,
                iterate: state.iterate + 1
            }
            return nextState || state

        case 'INCREMENT_LEVEL':
            nextState = {
                ...state,
                level: state.level + 1
            }
            return nextState || state

        case 'REBOOT_ITERATION':
            nextState = {
                ...state,
                iterate: 3
            }
            return nextState || state

        case 'REBOOT_LEVEL':
            nextState = {
                ...state,
                level: 1
            }
            return nextState || state
        case 'REBOOT_NUMBERINPUT':
            nextState = {
                ...state,
                numberInput: []
            }
            return nextState || state

        case 'REBOOT_RANDOMNUMBER':
            nextState = {
                ...state,
                randomNumber: []
            }
            return nextState || state
        default:
            return state
    }
}

export default createStore(myStoreFunc)