import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";
import message from './reducers/messages';
import messageList from './components/messagelist';

function App() {

  const messages = useSelector(state => state);
  const dispatch = useDispatch();

  const eachMessage = message.map((eachMessage, index) => {
    return <messageItem eachMessage={eachMessage}   key={index} />
});





  return (
    <div className="App">
      <h1>Message Impossible</h1>
      <messageList message = {message}/>

    
      <form >
      <textarea
            type="text"
            name="message"
            placeholder="message"
            required
          
          />
          
    
      <button onClick={() => dispatch(addMessage())} >Submit</button>
      </form>
    </div>
  );

}

export default App;
