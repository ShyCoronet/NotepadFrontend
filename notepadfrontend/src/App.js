import React from 'react';
import './index.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Notepad from './components/Notepad/Notepad';


function App() {
  return (
    <div className='container'>
      <Switch>
          <Route path='/notepad'>
            <Notepad/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/registration'>
            <RegistrationForm/>
          </Route>
          <Redirect from='/' to='/notepad'/>
        </Switch>
    </div>
  );
}

export default App;
