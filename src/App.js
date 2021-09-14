import './App.css';
import MessageList from './components/messageList';
import MessageForm from './components/messageForm';

function App() {
  return (
    <div className="App">
        <h1 id="title">Message Impossible</h1>
        <div id ="the-mission">
          <h2>The Mission :</h2>
          <p>Type in a message and submit it!</p>
          <p>Watch the message self destruct in 5 seconds!</p>
          <p>Your mission, if you choose to accept it, is to write as many messages as you can...</p>
          <h3>All your messages will self destruct in 5 seconds!</h3>
        </div> 
        <div id = "top-layer">
          <MessageForm/>  
        </div>
        <div id = "middle-layer">
          <MessageList />
        </div>
    </div>
  );
}

export default App;
