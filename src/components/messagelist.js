import messageItem from "./messageItem";
import React from "react";
import { useSelector } from "react-redux";

const selectMessages = state => state.message

const messageList = () =>{

    const messages = useSelector(selectMessages)


  const renderedMessage = messages.map( message =>{
      return <messageItem key = {message.id} message = {message}/>
  })
  return <ul>{renderedMessage}</ul>
}

export default messageList;

