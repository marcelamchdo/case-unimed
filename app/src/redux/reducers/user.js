import { SIGNUP } from "../actions";
import { LOGIN } from "../actions"

const INITIAL_STATE = {message: ''}
const EMAIL = {email: ''}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {message: action.payload}
    default: 
        return state
  }
}

const login = (state = EMAIL, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        email: action.email,
      }
    }
    default:
      return state;
  }
};

export { user, login }