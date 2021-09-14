import { setMessage } from "../actions/messageActions";
import { useState } from "react";
import "./messageForm.css"
import Button from '@material-ui/core/Button';


const MessageForm = function () { 
  
  const [message, updateMessage] = useState('');

const handleNewMessage = (event) => {
  if (!message.length) {
    alert("Did you think it would be that easy agent? Write a message to complete your mission!")
    return;
  } else {
    event.preventDefault();
    setMessage(message)
  }
}

return (
    <div>
        <form>
            <input
                alt="message box"
                type="text"
                name="message"
                placeholder="message"
                onChange={event => updateMessage(event.target.value)}
                id = "text-box"
            />
            <Button variant="contained" onClick={handleNewMessage} id = "button">Submit</Button>
        </form>
    </div>  
)}

export default MessageForm;