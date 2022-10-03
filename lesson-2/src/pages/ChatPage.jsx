import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { MessagesList } from "../components/MessagesList";
import { ChatsList } from "../components/ChatsList";
import { Users } from "../constants/Users";
import { useDispatch, useSelector } from "react-redux";
import { addChat, addMessage, removeChat } from "../store/chat/actions";

let timer;
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

  const addMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));
    if (message.author === Users.botName) {
      return;
    }
    console.log(`timer: ${timer}`);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(
      () =>
        dispatch(
          addMessage(chatId, {
            text: "(-_-)",
            author: Users.botName,
          })
        ),
      5000
    );
  };

  const handleSendButton = () => {
    send({
      text: message,
      author: userName,
    });
    setMessage("");
    inputRef.current.focus();
  };

  const send = (message) => {
    dispatch(addMessageWithReply(chatId, message));
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
            {messages && <MessagesList messages={messages} />}
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
