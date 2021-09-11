import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";

function App() {

  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();


  }


  return (
    <div className="App">
      <h1>Message Impossible</h1>
      <h3>{messages}</h3>
      <form >
      <textarea
            type="text"
            name="message"
            placeholder="message"
          
          />
          </form>
    
      <button onClick={() => dispatch(addMessage())} >Submit</button>
    </div>
  );
}

export default App;
