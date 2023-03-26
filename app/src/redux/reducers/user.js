import { SIGNUP, LOGIN, QUERY, CREATED } from "../actions";

const INITIAL_STATE = {message: '', email: '', name: '', query: '', created: false}

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
    case QUERY:
      return {
        ...state,
        query: action.payload
      }
    case CREATED:
      return {
        ...state, created: action.payload
      }
    default: 
        return state
    }
}

export default user