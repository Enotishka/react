import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { MessagesList } from "../components/MessagesList";
import { ChatsList } from "../components/ChatsList";

import { useDispatch, useSelector } from "react-redux";
import {
  addChat,
  addMessageWithReply,
  removeChat,
  removeMessage,
} from "../store/chat/slice";

export function ChatPage() {
  const { chatId } = useParams();
  const userName = useSelector(({ profile }) => profile.name);
  const chats = useSelector(({ chat }) =>
    Object.keys(chat).map((id) => ({ id, name: chat[id].name }))
  );
  const messages = useSelector(({ chat }) => chat[chatId]?.messages);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const inputRef = React.useRef();

  const handleSendButton = () => {
    dispatch(
      addMessageWithReply({
        chatId,
        message: {
          text: message,
          author: userName,
        },
      })
    );
    setMessage("");
    inputRef.current.focus();
  };

  const handleRemoveMessage = (id) => {
    dispatch(removeMessage({ chatId, messageId: id }));
  };

  const handleAddChat = (chatName) => {
    dispatch(addChat(chatName));
  };

  const handleRemoveChat = (chatId) => {
    dispatch(removeChat(chatId));
  };

  return (
    <>
      <Box sx={{ display: "flex", height: "100%", bgcolor: "#EEF3F5" }}>
        <Box sx={{ flexGrow: 0 }}>
          <ChatsList
            chats={chats}
            onAddChat={handleAddChat}
            onRemoveChat={handleRemoveChat}
          />
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            flexGrow: 1,
            bgcolor: "#B3D9EA",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {messages && (
              <MessagesList
                messages={messages}
                onRemoveMessage={handleRemoveMessage}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <TextField
              sx={{ flexGrow: 1, bgcolor: "#C8E3EF" }}
              inputRef={inputRef}
              autoFocus
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              variant="outlined"
            />
            <Button
              sx={{ flexGrow: 0 }}
              variant="contained"
              onClick={handleSendButton}
              disabled={!messages}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
