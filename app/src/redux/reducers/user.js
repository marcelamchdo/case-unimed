import { SIGNUP } from "../actions";

const INITIAL_STATE = {user: ''}
const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGNUP:
      return {user: action.payload}
    default: 
        return state
  }
}

export default user