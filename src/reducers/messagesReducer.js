import * as actions from "./actionTypes";

const initialState = {
  messages: []
}

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: action.id,
            message: action.message
          }
        ]
      });

    case actions.REMOVE_MESSAGE:
      let newArray = state.messages;

      let filteredMessages = newArray.filter(message => message.id !== action.id);
      return Object.assign({}, state, { messages: filteredMessages });

    default:
      return state;
  }
};

