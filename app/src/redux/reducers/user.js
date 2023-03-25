import { SIGNUP, LOGIN } from "../actions";

const INITIAL_STATE = {message: '', email: ''}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {
        ...state, message: action.payload}
    case LOGIN:
      return {
        ...state,
        email: action.email,
      }
    default: 
        return state
  }
}

export default user