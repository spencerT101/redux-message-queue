import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";

function App() {

  const messages = useSelector(state => state.message);
  const dispatch = useDispatch();



  return (
    <div className="App">
      <h1>Message Impossible</h1>
      <h3>{messages.message}</h3>
    
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
