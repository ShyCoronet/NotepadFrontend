import {ADD_USER, DELETE_USER} from "./types"

const initialState = {
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {...state, user: action.payload}
        case DELETE_USER:
            return {}
        default: return state
    }
}