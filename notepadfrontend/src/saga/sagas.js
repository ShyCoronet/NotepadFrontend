import { takeEvery, call, put, debounce } from 'redux-saga/effects'
import { ADD_NOTES, REQUEST_NOTES, ADD_NOTE, REQUEST_NOTE, DELETE_NOTE, REQUEST_FOR_DELETE_NOTE, UPDATE_NOTE, REQUEST_FOR_UPDATE_NOTE } from '../redux/types'
import { requestNotes } from '../services/api/NotesApi/requestNotes'
import { requestNote } from '../services/api/NotesApi/requestNote'
import { requestForDeleteNote } from '../services/api/NotesApi/requestForDeleteNote'
import { requestForUpdateNote } from '../services/api/NotesApi/requestForUpdateNote'

export function* sagaWatcher() {
   yield takeEvery(REQUEST_NOTES, getNotes)
   yield takeEvery(REQUEST_NOTE, getNote)
   yield takeEvery(REQUEST_FOR_DELETE_NOTE, deleteNote)
   yield debounce(500, REQUEST_FOR_UPDATE_NOTE, updateNote)
}

function* getNotes() {
    const payload = yield call(requestNotes) 
    yield put({type : ADD_NOTES, payload })
}

function* getNote() {
    const payload = yield call(requestNote)
    yield put({type: ADD_NOTE, payload})
}

function* deleteNote(action) {
    const payload = yield call(requestForDeleteNote, action.noteId)
    yield put({type: DELETE_NOTE, payload})
}

function* updateNote(action) {
    const payload = yield call(requestForUpdateNote, action.updatedNote)
    yield put({type: UPDATE_NOTE, payload})
}