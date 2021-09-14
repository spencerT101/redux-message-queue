import './App.css';
import MessageList from './components/messagelist';
import MessageForm from './components/messageForm';




function App() {

  return (
    <div className="App">
      <h1 id="title">Message Impossible</h1>
      <div id = "top-layer">
      <MessageList />
      </div>
      <div id = "middle-layer">
      <MessageForm/>
      </div>
    </div>
  );

}

export default App;
