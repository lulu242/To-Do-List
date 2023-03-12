import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import goalReducer from './goalReducer';
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    todoReducer,
    goalReducer,
    modalReducer
})

export default rootReducer