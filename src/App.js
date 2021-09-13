import './App.css';
import {addMessage} from "./actions/messageActions";
import MessageList from './components/messagelist';
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
