import { SET_ACTIVE_NOTE, REQUEST_FOR_DELETE_NOTE, REQUEST_NOTES, REQUEST_NOTE, REQUEST_FOR_UPDATE_NOTE } from './types'

export function getNotes() {
    return {
        type: REQUEST_NOTES
    }
}

export function addNote() {
    return {
        type: REQUEST_NOTE
    }
}

export function deleteNote(noteId) {
    return {
        type: REQUEST_FOR_DELETE_NOTE, noteId
    }
}

export function setActiveNote(id) {
    return {
        type: SET_ACTIVE_NOTE, payload: id
    }
}

export function updateNote(updatedNote) {
    return {
        type: REQUEST_FOR_UPDATE_NOTE, updatedNote
    }
}