import { FETCH_WEATHER, CLEAR_WEATHER } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //NEVER MUTATE STATE return state.push(action.payload.data);
            //return state.concat([action.payload.data]) //Returns a new array as a new state, not the modified state
            return [action.payload.data, ...state];
        case CLEAR_WEATHER:
            return [];
    }

    return state;
}