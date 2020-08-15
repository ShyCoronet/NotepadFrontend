import React from 'react'
import './style.css'
import Note from '../Note/Note'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNote } from '../../redux/actions'

const NoteList = () => {

    const notes = useSelector(state => state.notes.notes)
    const activeNoteId = useSelector(state => state.notes.activeNoteId)
    const dispatch = useDispatch()
    
    return(
        <ul className='note-list'>
            {notes.map(note => <Note key={note.id} id={note.id} note={note}
            actived={() => dispatch(setActiveNote(note.id))}
            addedClass={activeNoteId === note.id ? ' active': ''}/>)}
        </ul>
    )
} 

export default NoteList