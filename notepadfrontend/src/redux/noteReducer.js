import { FETCH_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, CHANGE_NOTE, SAVE_CONTENT } from './types'
import { EditorState, convertToRaw, Editor } from 'draft-js'

const initialState = {
    notes: [{
        id: 1,
        creationTime: 3123,
        name: 'fasfd',
        content: convertToRaw(EditorState.createEmpty().getCurrentContent())
    },
    {
        id: 2,
        creationTime: 3123,
        name: 'erwrqs',
        content: convertToRaw(EditorState.createEmpty().getCurrentContent())
    },
    {
        id: 3,
        creationTime: 3123,
        name: 'xvcbxcv',
        content: convertToRaw(EditorState.createEmpty().getCurrentContent())
    }],
    activeNoteId: -1
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
        default: return state
    }
}