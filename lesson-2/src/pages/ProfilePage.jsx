import { TextField, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { changeName, toggleProfile } from "../store/profile/slice";

export const ProfilePage = () => {
  const userName = useSelector(({ profile }) => profile.name);
  const visible = useSelector(({ profile }) => profile.visible);
  const dispatch = useDispatch();

  const handleUserNameChange = (newUserName) => {
    dispatch(changeName(newUserName));
  };

  const handleToggleProfile = () => {
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
