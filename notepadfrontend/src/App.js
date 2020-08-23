import React, { useEffect } from 'react';
import './index.css'
import NoteList from './components/NoteList/NoteList';
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton';
import SearchBar from './components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from './redux/actions';
import NoteEditor from './components/TextEditor/NoteEditor'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {

  const dispatch = useDispatch()

  const activeNoteId = useSelector(state => state.notes.activeNoteId)

  const notes = useSelector(state => state.notes.notes)

  const activeNote = notes.find(note => note.id === activeNoteId)

  const token = useSelector(state => state.notes.token)

  

  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
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
          </Route>
          <Route path='/login' component={Login}/>
          <Route path='/registration' component={RegistrationForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
