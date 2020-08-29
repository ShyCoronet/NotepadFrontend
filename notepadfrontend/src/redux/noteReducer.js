import { FETCH_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, CHANGE_NOTE, SET_TOKEN} from './types'


const initialState = {
    notes: [],
    activeNoteId: -1,
    token: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {...state, notes: action.payload}
        case ADD_NOTE:
            return {...state, notes: state.notes.concat([action.payload])}
        case CHANGE_NOTE:
            return {...state, notes: action.payload}
        case SET_ACTIVE_NOTE:
            return {...state, activeNoteId: action.payload}
        case SET_TOKEN:
            return {...state, token: action.payload}
        default: return state
    }
}