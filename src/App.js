import './App.css';
import { addMessage } from "./actions/messageActions";
import MessageList from './components/messagelist';
import { useState } from 'react';



function App() {

  const [message, setMessage] = useState('');

  const handleNewMessage = (event) => {
    if (!message.length) {
      alert("Please write a message")
      return;
    } else {
      event.preventDefault();
      addMessage(message)
    }
  }

  return (
    <div className="App">
      <h1>Message Impossible</h1>
      <MessageList />

      <form >
        <textarea
          type="text"
          name="message"
          placeholder="message"
          onChange={event => setMessage(event.target.value)}
          />

         <button onClick={handleNewMessage} >Submit</button>
      </form>
    </div>
  );

}

export default App;
