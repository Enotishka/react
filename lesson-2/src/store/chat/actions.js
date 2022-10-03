export const ADD_CHAT = "CHAT::ADD_CHAT";
export const REMOVE_CHAT = "CHAT::REMOVE_CHAT";
export const ADD_MESSAGE = "CHAT::ADD_MESSAGE";

export const addChat = (chatName) => ({
  type: ADD_CHAT,
  value: chatName,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  value: chatId,
});

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  value: { chatId, message },
});
