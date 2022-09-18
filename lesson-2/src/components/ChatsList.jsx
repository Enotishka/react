import { useState } from "react";
import { PropTypes } from "prop-types";
import { List, ListItem, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AddChatDialog } from "../dialogs/AddChatDialog";

export const ChatsList = ({ chats, onAddChat, onRemoveChat }) => {
  const [addChatDialogOpen, setAddChatDialogOpen] = useState(false);

  const handleAddButton = () => {
    setAddChatDialogOpen(true);
  };

  const handleAddChatDialogClose = () => {
    setAddChatDialogOpen(false);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleAddButton}>
        Add chat
      </Button>
      <AddChatDialog
        onAdd={onAddChat}
        onClose={handleAddChatDialogClose}
        open={addChatDialogOpen}
      />
      <List>
        {chats.map((c, i) => (
          <ListItem disablePadding key={i}>
            <Link to={`/chat/${c.id}`}>{c.name}</Link>
            <Button onClick={() => onRemoveChat(c.id)}>X</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
