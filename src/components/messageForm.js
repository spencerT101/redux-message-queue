import { addMessage } from "../actions/messageActions";
import { useState } from "react";
import "./messageForm.css"

const MessageForm = function () { 
  
  const [message, setMessage] = useState('');

const handleNewMessage = (event) => {
  if (!message.length) {
    alert("Please write a message")
    return;
  } else {
    event.preventDefault();
    addMessage(message)
  }
}

return (
<div>
<form id = "messageForm" >
<textarea
  type="text"
  name="message"
  placeholder="message"
  onChange={event => setMessage(event.target.value)}
  id = "text-box"
  />

 <button onClick={handleNewMessage} id = "button">Submit</button>
</form>
</div>
  
)}

export default MessageForm;