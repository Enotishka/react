import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  0: {
    name: "Default",
    messages: [],
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action) => {
      state[nanoid()] = {
        name: action.payload,
        messages: [],
      };
    },
    removeChat: (state, action) => {
      delete state[action.payload];
    },
    addMessage: (state, action) => {
      const message = { ...action.payload.message, id: nanoid() };
      state[action.payload.chatId].messages.push(message);
    },
    removeMessage: (state, action) => {
      const { messages } = state[action.payload.chatId];
      const index = messages.findIndex(
        (m) => m.id === action.payload.messageId
      );
      if (index !== -1) {
        messages.splice(index, 1);
      }
    },
  },
});

export const { addChat, removeChat, addMessage, removeMessage } =
  chatSlice.actions;
export const chatReducer = chatSlice.reducer;
