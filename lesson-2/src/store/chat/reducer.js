import { nanoid } from "nanoid";
import { ADD_CHAT, ADD_MESSAGE, REMOVE_CHAT } from "./actions";

const initialState = {
  0: {
    name: "Default",
    messages: [],
  },
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        [nanoid()]: {
          name: action.value,
          messages: [],
        },
      };
    case REMOVE_CHAT:
      const stateCopy = { ...state };
      delete stateCopy[action.value];
      return stateCopy;
    case ADD_MESSAGE:
      return {
        ...state,
        [action.value.chatId]: {
          ...state[action.value.chatId],
          messages: [
            ...state[action.value.chatId].messages,
            action.value.message,
          ],
        },
      };
    default:
      return state;
  }
};
