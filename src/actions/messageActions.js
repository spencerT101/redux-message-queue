import { ADD_MESSAGE, REMOVE_MESSAGE } from "../reducers/actionTypes";
import store from '../store/store';

let newMessage = 0

export const setMessage = (message) => {
  const id = ++newMessage

  store.dispatch(addMessage(id, message))
  setTimeout(() => {
    store.dispatch(removeMessage(id))
  }, 5000);
}

export const addMessage = (id, message) => {
  return {
    type: ADD_MESSAGE,
    id,
    message
  }
}

export const removeMessage = id => {
  return {
    type: REMOVE_MESSAGE,
    id
  };
};
