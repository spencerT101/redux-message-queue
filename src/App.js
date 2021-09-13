import logo from './logo.svg';
import './App.css';
import { useDispatch} from 'react-redux';
import {addMessage} from "./actions";
import {removeMessage} from "./actions";
import message from './reducers/messages';
import MessageList from './components/messagelist';
import { ADD_MESSAGE } from './reducers/actionTypes';

function App() {

  // const messages = useSelector(state => state);
 
   const dispatch = useDispatch();

//   const eachMessage = message.map((eachMessage, index) => {
//     return <messageItem eachMessage={eachMessage}   key={index} />
// });




return (
    <div className="App">
      <h1>Message Impossible</h1>
      <MessageList/>
     

    
      <form >
      <textarea
            type="text"
            name="message"
            placeholder="message"
            required
          
          />
          
  
     <button onClick={() => dispatch({type: ADD_MESSAGE})} >Submit</button> 
      </form>
    </div>
  );

}

export default App;
