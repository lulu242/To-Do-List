import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import goalReducer from './goalReducer';

const rootReducer = combineReducers({
    todoReducer,
    goalReducer
})

export default rootReducer