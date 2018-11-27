
const initialState = { iterate: 3 }


function iterateRed(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'INCREMENT_ITERATION' :
            nextState = {
                ...state,
                iterate: iterate +1
            }
            return nextState || state
        default:
            return state
    }
  }