import {
    ADD_TODO,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case FETCH_TODOS_SUCCESS:
            return [...state, ...action.payload]
        case FETCH_TODOS_FAILURE:
            return [...state, { id: 9999, title: 'ERROR IN API CALL' }]
        default:
            return state
    }
}