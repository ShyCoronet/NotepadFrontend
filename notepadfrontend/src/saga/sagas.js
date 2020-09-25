import { takeEvery, call, put, debounce } from 'redux-saga/effects'
import { ADD_NOTES, REQUEST_NOTES, ADD_NOTE, REQUEST_NOTE, 
DELETE_NOTE, REQUEST_FOR_DELETE_NOTE, UPDATE_NOTE, REQUEST_FOR_UPDATE_NOTE, 
ADD_USER, REQUEST_USER} from '../redux/types'
import { requestNotes } from '../api/NotesApi/requestNotes'
import { requestNote } from '../api/NotesApi/requestNote'
import { requestForDeleteNote } from '../api/NotesApi/requestForDeleteNote'
import { requestForUpdateNote } from '../api/NotesApi/requestForUpdateNote'
import { requestUser } from '../api/UserApi/requestUser'
import {hideLoader, showLoader} from "../redux/actions";

export function* sagaWatcher() {
   yield takeEvery(REQUEST_NOTES, getNotes)
   yield takeEvery(REQUEST_NOTE, getNote)
   yield takeEvery(REQUEST_FOR_DELETE_NOTE, deleteNote)
   yield debounce(500, REQUEST_FOR_UPDATE_NOTE, updateNote)
   yield takeEvery(REQUEST_USER, getUser)
}

function* getNotes() {
    yield put(showLoader())
    const payload = yield call(requestNotes) 
    yield put({type : ADD_NOTES, payload })
    yield put(hideLoader())
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

function* getUser() {
    try {
        const payload = yield call(requestUser)
        yield put({type: ADD_USER, payload})
    }
    catch(e) {
        console.log(e)
    }
}