import MessageItem from "./messageItem";
import { useSelector } from "react-redux";
import React from "react";

const selectMessage = state => state.messages;


const MessageList = () =>{

    const messages = useSelector(selectMessage);


  const renderedMessage = messages.map( message =>{
      return <MessageItem key = {message.id} message = {message.message}/>
  })
  return <ul>{renderedMessage}</ul>
}

export default MessageList;

