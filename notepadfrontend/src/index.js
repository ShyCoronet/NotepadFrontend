import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import { Router, useHistory, Route, BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, compose(applyMiddleware(
  thunk
),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
