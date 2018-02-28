import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import todosReducer from './reducer'

const rootReducer = combineReducers({
    todos: todosReducer
})

export default () => {
    return createStore(rootReducer, applyMiddleware( thunk ))
}