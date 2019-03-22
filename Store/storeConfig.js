import { createStore } from 'redux'

const initialState = { iterate: 3,  numberInput: [], level: 1 }

function myStoreFunc(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'INCREMENT_ITERATION':
            nextState = {
                ...state,
                iterate: iterate + 1
            }
            return nextState || state

        case 'REBOOT_ITERATION':
            nextState = {
                ...state,
                iterate: 3
            }
            return nextState || state

        case 'REBOOT_NUMBERINPUT':
            nextState = {
                ...state,
                numberInput: []
            }
            return nextState || state

        default:
            return state
    }
}

export default createStore(myStoreFunc)