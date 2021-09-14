import { addMessage } from "../actions/messageActions";
import { useState } from "react";

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
  />

 <button onClick={handleNewMessage} >Submit</button>
</form>
</div>
  
)}

export default MessageForm;