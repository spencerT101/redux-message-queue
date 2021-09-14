import './App.css';
import MessageList from './components/messagelist';
import MessageForm from './components/messageForm';




function App() {

  return (
    <div className="App">
      <h1 id="title">Message Impossible</h1>
      <MessageList />
      <MessageForm/>
    </div>
  );

}

export default App;
