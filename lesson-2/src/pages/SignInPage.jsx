import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../store/profile/slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const isAuth = useSelector((state) => state.profile.auth);
  useEffect(() => {
    if (isAuth) {
      navigate(-1);
    }
  });

  const handleSubmitButton = () => {
    if (login === "gb" && password === "gb") {
      dispatch(auth(true));
      setError(false);
      navigate(-1);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Container maxWidth="xs">
        <h2>Sign in</h2>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            sx={{ bgcolor: "#C8E3EF" }}
            label="Login"
            autoFocus
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            variant="outlined"
          />
          <TextField
            sx={{ bgcolor: "#C8E3EF" }}
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="outlined"
          />
          <Button variant="contained" onClick={handleSubmitButton}>
            Login
          </Button>
        </Box>
        {error && (
          <Typography sx={{ color: "red", mt: "20px" }}>
            ERROR: Invalid login or password!
          </Typography>
        )}
      </Container>
    </>
  );
};
