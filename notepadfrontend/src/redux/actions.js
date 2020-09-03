import { FETCH_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, CHANGE_NOTE, SET_TOKEN, DELETE_NOTE } from './types'
import { fetchWithAuth } from '../AuthenticationFetch'

export function fetchNotes(history) {
    return async dispatch => {
        await fetchWithAuth('https://localhost:44321/api/notes', 
        {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'}
        }, history).then(response => response.json())
            .then(notes => dispatch({
                type: FETCH_NOTES, payload: notes
                }))
    }
}


export function createNote(history) {
    return async dispatch => {
        await fetchWithAuth('https://localhost:44321/api/note',
        {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
        }, history).then(response => response.json())
            .then(note => dispatch({
                type: ADD_NOTE, payload: note
            }))
    }
}

export function deleteNote(noteId, history) {
    return async dispatch => {
        await fetchWithAuth('https://localhost:44321/api/note', 
        {
            method: 'DELETE',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(noteId)
        }, history).then(response => response.json())
            .then(id => {
                dispatch({type: DELETE_NOTE, payload: id})
            })
    }
}

export function setActiveNote(id) {
    return {
        type: SET_ACTIVE_NOTE, payload: id
    }
}

export function changeNote(noteState, activeNote) {
    let newNotesState = noteState.map(note => {
        if (note.noteId === activeNote.noteId) {
            note.name = activeNote.name
            note.content = activeNote.content
        }
        return note
    })
    return {
        type: CHANGE_NOTE, payload: newNotesState
    }
}