let newMessage = 1;

export const addMessage = (message) => {
    return{
        type: "ADD_MESSAGE",
        id: newMessage++,
        message
    };
};

export const removeMessage = id => {
    return{
        type: "REMOVE_MESSAGE"
        payload: { id }

    };
};

