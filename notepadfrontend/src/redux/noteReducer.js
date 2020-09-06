import { ADD_NOTES , ADD_NOTE, SET_ACTIVE_NOTE, UPDATE_NOTE, REQUEST_FOR_DELETE_NOTE } from './types'


const initialState = {
    notes: [],
    activeNoteId: null,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            return {...state, notes: action.payload}
        case ADD_NOTE:
            return {...state, notes: state.notes.concat([action.payload])}
        case REQUEST_FOR_DELETE_NOTE:
            return {...state, notes: state.notes.filter(note => note.noteId !== action.payload)}
        case UPDATE_NOTE:
            return {...state, notes: state.notes.map(note => {
                if (note.noteId === action.payload.noteId) {
                    return action.payload
                }
                return note
            })}
        case SET_ACTIVE_NOTE:
            return {...state, activeNoteId: action.payload}
        default: return state
    }
}