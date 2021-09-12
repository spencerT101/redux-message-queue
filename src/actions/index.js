import { ADD_MESSAGE, REMOVE_MESSAGE } from "../reducers/actionTypes";

let newMessage = 0
export const addMessage = (message) => {
    const id = ++newMessage
    // setTimeout(() => {
    //     message.dispatch(removeMessage(id))}, 5000); 
   
    return{
        type: ADD_MESSAGE,
        id: ++newMessage,
        message},

        setTimeout(() => {
            message.dispatch(removeMessage(id))}, 5000); 
    };
    


export const removeMessage = id => {
    return{
        type: REMOVE_MESSAGE,
        payload: { id }

    };
};

