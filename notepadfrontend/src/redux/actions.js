import { FETCH_NOTES, ADD_NOTE, SET_ACTIVE_NOTE, CHANGE_NOTE} from './types'
import { EditorState, convertToRaw} from 'draft-js'

export function fetchNotes() {
    return async dispatch => {
        await fetch('https://localhost:44321/api/notes')
                .then(response => response.json())
                .then(notes => dispatch({
                    type: FETCH_NOTES, payload: notes
                }))
    }
}


export function createNote() {
    return async dispatch => {
        await fetch('https://localhost:44321/api/note',
        {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(
                {
                    name: 'Новая заметка',
                    creationTime: 'Только что',
                    content: {
                        contentState: convertToRaw(EditorState.createEmpty().getCurrentContent()),
                        selectionState: EditorState.createEmpty().getSelection()
                    }
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