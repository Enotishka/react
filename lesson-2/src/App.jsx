import React, { useState, useEffect } from "react";
import { CssBaseline, Container, TextField, Button, Box } from "@mui/material";
import { MessagesList } from "./components/MessagesList";
import { ChatsList } from "./components/ChatsList";
import { users } from "./constants/users";

export function App() {
  const [chatsList, setChatsList] = useState([
    {
      id: 0,
      name: "chat1",
    },
    {
      id: 1,
      name: "chat2",
    },
  ]);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const inputRef = React.useRef();

  const handleSendButton = () => {
    send({
      text: message,
      author: users.userName,
    });
    setMessage("");
    inputRef.current.focus();
  };

  const send = (message) => {
    setMessageList([...messageList, message]);
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author === users.botName) {
      return;
    }
    setTimeout(
      () =>
        send({
          text: "(-_-)",
          author: users.botName,
        }),
      1500
    );
  }, [messageList]);

  return (
    <>
      <CssBaseline />
      <Container sx={{ maxWidth: "xs" }}>
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#EEF3F5" }}>
          <Box sx={{ flexGrow: 0 }}>
            <ChatsList chats={chatsList} />
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
              <MessagesList messages={messageList} />
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
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
