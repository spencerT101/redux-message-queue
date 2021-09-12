import * as actions from "./actionTypes";

let newMessage = 1

const message = (state = [], action) => {
    switch (action.type){
        case actions.ADD_MESSAGE:
            return [
                ...state,
                {
                    id:newMessage++,
                    message: action.payload.message
                }
            ];
        case actions.REMOVE_MESSAGE:
            return state.filter(message => message.id !==action.payload.id);
        
        default:
            return state;
    }
};

export default message;