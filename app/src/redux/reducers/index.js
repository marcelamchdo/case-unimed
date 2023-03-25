import { combineReducers } from 'redux';
import { user, login } from './user';

const rootReducer = combineReducers({user, login})

export default rootReducer