const messages = (state = [], action) => {
    switch (action.type){
        case "ADD_MESSAGE":
            return [
                ...state,
                {
                    id:action.id,
                    message: action, message
                }
            ];
        case "REMOVE_MESSAGE":
            return state.filter(message => message.id !==action.payload.id);
        
        default:
            return state;
    }
};

export default messages;