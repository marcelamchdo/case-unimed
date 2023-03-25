import { SIGNUP, LOGIN } from "../actions";

const INITIAL_STATE = {message: '', email: '', name: ''}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {
        ...state, message: action.payload}
    case LOGIN:
      return {
        ...state,
        email: action.email,
        name: action.name
      }
    default: 
        return state
  }
}

export default user