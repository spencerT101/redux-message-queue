import logo from './logo.svg';
import './App.css';
import { useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";
import * as message from './reducers/messages';
import MessageList from './components/messagelist';
import { ADD_MESSAGE } from './reducers/actionTypes';
import { useState } from 'react';

// import { ADD_MESSAGE } from './reducers/actionTypes';

function App() {

  const [message, setMessage] = useState('');
   const handleNewMessage = (event) => {

     event.preventDefault();
      addMessage(message)
    }


return (
    <div className="App">
      <h1>Message Impossible</h1>
      <MessageList/>
     

    
      <form >
      <textarea
            type="text"
            name="message"
            placeholder="message"
            onChange = {event => setMessage(event.target.value)}
            required
          
          />
          
  
     <button onClick={handleNewMessage} >Submit</button> 
      </form>
    </div>
  );

}

export default App;
