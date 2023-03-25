import { SIGNUP, LOGIN } from "../actions";

const INITIAL_STATE = {message: '', email: '', name: ''}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {
        message: action.payload.message,
        email: action.payload.email,
        name: action.payload.name
      
      }
    case LOGIN:
      return {
        ...state,
        name: action.payload.name
      }
    default: 
        return state
  }
}

export default user