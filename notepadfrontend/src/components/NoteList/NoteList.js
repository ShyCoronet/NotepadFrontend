import React from 'react'
import './style.css'
import Note from '../Note/Note'
import { setActiveNote } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


export default function NoteList({notes}) {

    const dispatch = useDispatch()
    const activeNoteId = useSelector(state => state.notes.activeNoteId)

    return(
        <ul className='note-list'>
            {notes.map(note => <Note key={note.noteId} id={note.noteId} note={note}
            actived={() => dispatch(setActiveNote(note.noteId))}
            addedClass={activeNoteId === note.noteId ? ' active': ''}/>)}
        </ul>
    )
}