import React from 'react';
import './index.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Notepad from './components/Notepad/Notepad';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';


function App() {
  
  return (
    <div className='container'>
      <Switch>
          <PrivateRoute path='/notepad' component={Notepad}/>
          <Route path='/login' component={Login}/>
          <Route path='/registration' component={SignUp}/>
          <Redirect from='/' to='/notepad'/>
        </Switch>
    </div>
  );
}

export default App;
