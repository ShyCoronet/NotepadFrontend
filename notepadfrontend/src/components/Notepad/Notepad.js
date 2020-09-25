import React, { useEffect } from 'react'
import './style.css'
import CreateNoteButton from '../CreateNoteButton/CreateNoteButton'
import SearchBar from '../SearchBar/SearchBar'
import NoteEditor from '../NoteEditor/NoteEditor'
import NoteList from '../NoteList/NoteList'
import { useDispatch, useSelector } from 'react-redux'
import {getNotes, getUser} from '../../redux/actions'
import SortBar from "../SortBar/SortBar";
import {getComparer} from "../../utils/noteCompares";
import Loader from "../Loader/Loader";
import LogoutButton from "../LogoutButton/LogoutButton";


export default function Notepad() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)

    const sortType = useSelector(state => state.notes.noteSortPredicate)
    const searchValue = useSelector(state => state.notes.searchBarValue)
    const noteComparer = getComparer(sortType)

    const loading = useSelector(state => state.app.loading)

    const notes = useSelector(state => state.notes.notes)
    const filteredAndSortedNotes = searchValue !== null ? notes.filter(note =>
            note.name.toLowerCase().includes(searchValue)).sort(noteComparer)
        : notes.sort(noteComparer)

    const activeNoteId = useSelector(state => state.notes.activeNoteId)
    const activeNote = notes.find(note => note.noteId === activeNoteId)



    useEffect(() => {
        dispatch(getUser())
        dispatch(getNotes())
    }, [])

    return(
       <div className='notepad'>
           <div className='header'>
               <h1 className='title'>Notepad</h1>
               <div className='right-menu-container'>
                   <label className='user-login'>{user.login}</label>
                   <LogoutButton/>
               </div>
            </div>
            <div className='main'>
                <div className='side-bar'>
                    <CreateNoteButton/>
                    <SearchBar/>
                    <SortBar/>
                    <hr className="separator"/>
                    {loading ? <Loader/>
                    :<NoteList notes={filteredAndSortedNotes}/>}
                </div>
            {activeNote !== undefined
            ? <NoteEditor key={activeNote.noteId} 
            activeNote={activeNote}/> 
            : <div/>}
        </div>
       </div>
    )
}