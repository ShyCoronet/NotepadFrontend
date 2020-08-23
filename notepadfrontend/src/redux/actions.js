import { FETCH_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, CHANGE_NOTE, SET_TOKEN } from './types'
import { EditorState, convertToRaw} from 'draft-js'

export function fetchNotes(token) {
    return async dispatch => {
        await fetch('https://localhost:44321/api/notes', 
        {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-type' : 'application/json'
            }
        }).then(response => response.json())
            .then(notes => dispatch({
                type: FETCH_NOTES, payload: notes
                }))
    }
}


export function createNote(token) {
    return async dispatch => {
        await fetch('https://localhost:44321/api/note',
        {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    name: 'Новая заметка',
                    creationTime: 'Только что',
                    content: convertToRaw(EditorState.createEmpty().getCurrentContent())
                }
            )
        }).then(response => response.json())
            .then(note => dispatch({
                type: ADD_NOTE, payload: note
            }))}
}


export function setActiveNote(id) {
    return {
        type: SET_ACTIVE_NOTE, payload: id
    }
}

export function changeNote(noteState, activeNote) {
    let newStaet = noteState.map(note => {
        if (note.id === activeNote.id) {
            note.name = activeNote.name
            note.content = activeNote.content
        }
        return note
    })
    return {
        type: CHANGE_NOTE, payload: newStaet
    }
}

export function setToken(token) {
    return {
        type: SET_TOKEN, payload: token
    }
}