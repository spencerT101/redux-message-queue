import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import message from './reducers/messages';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { ADD_MESSAGE, REMOVE_MESSAGE } from './reducers/actionTypes';

export const store = createStore(message,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
 const unsubscribe= store.subscribe(() =>{
    console.log("Store changed!", store.getState());
  })





  // unsubscribe();




ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

