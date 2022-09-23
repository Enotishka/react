import { TextField, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { changeName, toggleProfile } from "../store/profile/actions";

export const ProfilePage = () => {
  const userNameStore = useSelector((store) => store.name);
  const visibleStore = useSelector((store) => store.visible);
  const [userName, setUserName] = useState(userNameStore);
  const [visible, setVisible] = useState(visibleStore);
  const dispatch = useDispatch();

  const handleUserNameChange = (newUserName) => {
    setUserName(newUserName);
    dispatch(changeName(newUserName));
  };

  const handleToggleProfile = () => {
    setVisible(!visible);
    dispatch(toggleProfile());
  };

  return (
    <>
      <h2>Profile page</h2>
      <Checkbox checked={visible} onChange={handleToggleProfile} />
      <TextField
        sx={{ bgcolor: "#C8E3EF" }}
        autoFocus
        onChange={(e) => handleUserNameChange(e.target.value)}
        value={userName}
        variant="outlined"
      />
    </>
  );
};
