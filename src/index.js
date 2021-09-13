import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import messageReducer from './reducers/messagesReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


export const store = createStore(messageReducer,
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



