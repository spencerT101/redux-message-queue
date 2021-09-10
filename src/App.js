import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";

function App() {

  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();




  return (
    <div className="App">
      <h1>Message Queue</h1>
      <h3>{messages}</h3>
      <button onClick={() => dispatch(addMessage('message'))}></button>
    </div>
  );
}

export default App;
