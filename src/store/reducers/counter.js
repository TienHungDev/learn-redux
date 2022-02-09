import { ADD } from '../actions/counterActions';

const initState = { // this is your initial state.
    counter: 0, // variable inside your state, too keep track of the count.
    isTest: false,
};
// assigning initial state and receiving actions as arguments.
const reducer = (state = initState, actions) => { 
    switch (actions.type) {
        case ADD:
            return {
                ...state, // here you copy the state and make changes to it.
                counter: state.counter + 1,
            };
        default:
            return state;  // Have to return state as a default
    }
};
export default reducer;