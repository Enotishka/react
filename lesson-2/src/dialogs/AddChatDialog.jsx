import { useState } from "react";
import { Button, TextField, Dialog, DialogTitle } from "@mui/material";

export const AddChatDialog = ({ onAdd, open, onClose }) => {
  const [chatName, setChatName] = useState("");

  const handleAddButton = () => {
    onAdd(chatName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add chat</DialogTitle>
      <TextField
        onChange={(e) => setChatName(e.target.value)}
        value={chatName}
        variant="outlined"
      />
      <Button onClick={handleAddButton}>Add</Button>
    </Dialog>
  );
};
