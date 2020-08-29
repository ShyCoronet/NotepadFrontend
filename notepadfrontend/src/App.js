import React from 'react';
import './index.css'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Notepad from './components/Notepad/Notepad';


function App() {
  
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route path='/notepad' component={Notepad}/>
          <Route path='/login' component={Login}/>
          <Route path='/registration' component={RegistrationForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
