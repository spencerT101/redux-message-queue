import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";
import message from './reducers/messages';

function App() {

  const messages = useSelector(state => state);
  const dispatch = useDispatch();

  const eachMessage = message.map((eachMessage, index) => {
    return <messageItem eachMessage={eachMessage}   key={index} />
});

const messageItem =({eachMessage}) =>{



  return (
    <div className="App">
      <h1>Message Impossible</h1>
      <ul>{eachMessage}</ul>
      <h3>{eachMessage.message}</h3>

    
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

}}

export default App;
