import React, { useEffect } from 'react';
import './index.css'
import NoteList from './components/NoteList/NoteList';
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton';
import SearchBar from './components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from './redux/actions';
import NoteEditor from './components/TextEditor/NoteEditor'


function App() {

  const dispatch = useDispatch()

  const activeNoteId = useSelector(state => state.notes.activeNoteId)

  const notes = useSelector(state => state.notes.notes)

  const activeNote = notes.find(note => note.id === activeNoteId)

  useEffect(() => {
    dispatch(fetchNotes())
  }, [])

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='title'>Notepad</h1>
      </div>
      <div className='main'>
        <div className='side-bar'>
          <CreateNoteButton/>
          <SearchBar/>
          <hr className="separator"></hr>
          <NoteList/>
        </div>
          {activeNoteId !== -1 ? <NoteEditor key={activeNote.id} activeNote={activeNote}/> : <div></div>}
      </div>
    </div>
  );
}

export default App;
