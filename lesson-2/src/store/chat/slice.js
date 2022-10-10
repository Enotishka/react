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
      state[action.payload.chatId].messages.push(action.payload.message);
    },
  },
});

export const { addChat, removeChat, addMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
