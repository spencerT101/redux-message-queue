import * as actions from "./actionTypes";

const initialState = {
    messages:[]
}

export default function message (state = initialState, action) {
    switch (action.type){
        case actions.ADD_MESSAGE:
            return Object.assign({}, state, {messages:[
                ...state.messages,
                {
                    id: action.id,
                    message: action.message
                }
            ]});
            
        case actions.REMOVE_MESSAGE:
            let newArray =state.messages;
             
            let x = newArray.filter(message => message.id !== action.id);
            return Object.assign({}, state, {messages:x});
        
        default:
            return state;
    }
};

