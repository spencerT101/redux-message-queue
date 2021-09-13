import { ADD_MESSAGE, REMOVE_MESSAGE } from "../reducers/actionTypes";
import store from '../store/store';

let newMessage = 0

export const addMessage = (message) => {
    const id = ++newMessage

    store.dispatch(setMessage(id, message))
    setTimeout(() => {
        store.dispatch(removeMessage(id))
    }, 5000);
}


export const setMessage = (id, message) => {
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

