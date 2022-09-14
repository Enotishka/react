import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { MessagesList } from "../components/MessagesList";
import { ChatsList } from "../components/ChatsList";
import { Users } from "../constants/Users";

export function ChatPage() {
  const { chatId } = useParams();
  const [chatsList, setChatsList] = useState([
    {
      id: "0",
      name: "Default",
    },
  ]);
  const [message, setMessage] = useState("");
  const [messagesData, setMessagesData] = useState({
    0: [],
  });
  const inputRef = React.useRef();

  const handleSendButton = () => {
    send({
      text: message,
      author: Users.userName,
    });
    setMessage("");
    inputRef.current.focus();
  };

  const send = (message) => {
    setMessagesData({
      ...messagesData,
      [chatId]: [...messagesData[chatId], message],
    });
  };

  const handleAddChat = (chatName) => {
    const id = nanoid();
    setChatsList([
      ...chatsList,
      {
        id,
        name: chatName,
      },
    ]);
    setMessagesData({
      ...messagesData,
      [id]: [],
    });
  };

  const handleRemoveChat = (chatId) => {
    setChatsList(chatsList.filter((chat) => chat.id !== chatId));
    const messagesDataCopy = { ...messagesData };
    delete messagesDataCopy[chatId];
    setMessagesData(messagesDataCopy);
  };

  useEffect(() => {
    const messagesList = messagesData[chatId];
    if (!messagesList || messagesList.length === 0) {
      return;
    }
    const lastMessage = messagesList[messagesList.length - 1];
    if (lastMessage.author === Users.botName) {
      return;
    }
    setTimeout(
      () =>
        send({
          text: "(-_-)",
          author: Users.botName,
        }),
      1500
    );
  }, [messagesData]);

  return (
    <>
      <Box sx={{ display: "flex", height: "100%", bgcolor: "#EEF3F5" }}>
        <Box sx={{ flexGrow: 0 }}>
          <ChatsList
            chats={chatsList}
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
            {messagesData[chatId] && (
              <MessagesList messages={messagesData[chatId]} />
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
              disabled={!messagesData[chatId]}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
