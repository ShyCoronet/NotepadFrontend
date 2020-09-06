import React, { useEffect } from 'react'
import './style.css'
import CreateNoteButton from '../CreateNoteButton/CreateNoteButton'
import SearchBar from '../SearchBar/SearchBar'
import NoteEditor from '../TextEditor/NoteEditor'
import NoteList from '../NoteList/NoteList'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../../redux/actions'


export default function Notepad() {

    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    const activeNoteId = useSelector(state => state.notes.activeNoteId)
    const activeNote = notes.find(note => note.noteId === activeNoteId)


    useEffect(() => {
        dispatch(getNotes())
    }, [])
    
    return(
       <div className='notepad'>
           <div className='header'>
               <h1 className='title'>Notepad</h1>
            </div>
            <div className='main'>
                <div className='side-bar'>
                    <CreateNoteButton/>
                    <SearchBar/>
                    <hr className="separator"></hr>
                    <NoteList notes={notes}/>
                </div>
            {activeNote !== undefined
            ? <NoteEditor key={activeNote.noteId} 
            activeNote={activeNote}/> 
            : <div></div>}
        </div>
       </div>
    )
}