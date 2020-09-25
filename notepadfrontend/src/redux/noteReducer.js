import {ADD_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, UPDATE_NOTE, DELETE_NOTE, SET_SORT_TYPE, SET_SEARCH_VALUE} from './types'
import {SORT_BY_CREATION_TIME} from "../components/SortSettingsMenu/sortTypes";


const initialState = {
    notes: [],
    activeNoteId: null,
    noteSortPredicate: SORT_BY_CREATION_TIME,
    searchBarValue: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            return {...state, notes: action.payload}
        case ADD_NOTE:
            return {...state, notes: state.notes.concat([action.payload])}
        case DELETE_NOTE:
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
        case SET_SORT_TYPE:
            return {...state, noteSortPredicate: action.payload}
        case SET_SEARCH_VALUE:
            return {...state, searchBarValue: action.payload}
        default: return state
    }
}