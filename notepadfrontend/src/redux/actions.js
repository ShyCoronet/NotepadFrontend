import {
    SET_ACTIVE_NOTE,
    REQUEST_FOR_DELETE_NOTE,
    REQUEST_NOTES,
    REQUEST_NOTE,
    REQUEST_FOR_UPDATE_NOTE,
    REQUEST_USER,
    SET_SORT_TYPE, SET_SEARCH_VALUE, SHOW_LOADER, HIDE_LOADER, DELETE_USER
} from './types'

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

export function getUser() {
    return {
        type: REQUEST_USER
    }
}

export function deleteUser() {
    return {
        type: DELETE_USER
    }
}

export function setSortType(sortType) {
    return {
        type: SET_SORT_TYPE, payload: sortType
    }
}

export function setSearchValue(searchValue) {
    return {
        type: SET_SEARCH_VALUE, payload: searchValue
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}