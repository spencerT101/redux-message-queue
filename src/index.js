import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from "./reducers";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { ADD_MESSAGE } from './reducers/actionTypes';

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
 const unsubscribe= store.subscribe(() =>{
    console.log("Store changed!", store.getState());
  })
  console.log(store.getState());

  store.dispatch({
    type: ADD_MESSAGE,
    payload:{ 
      message:"hello"
    }
  
  })

  console.log(store.getState())

  // store.dispatch({
  //   type: "REMOVE_"
  // })


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
