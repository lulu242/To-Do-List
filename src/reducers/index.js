import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    todoReducer,
    modalReducer
})

export default rootReducer