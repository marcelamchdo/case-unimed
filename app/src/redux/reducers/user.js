import { SIGNUP } from "../actions";

const INITIAL_STATE = {message: ''}
const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {message: action.payload}
    default: 
        return state
  }
}

export default user