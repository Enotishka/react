import {
  CssBaseline,
  Box,
  Container,
  List,
  ListItem,
  Button,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../store/profile/slice";

const links = [
  { path: "/", caption: "Main" },
  { path: "/profile", caption: "Profile" },
  { path: "/chat", caption: "Chats" },
  { path: "/articles", caption: "Articles" },
];

export const TemplatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.profile.auth);
  const handleLoginButton = () => {
    navigate("/signin");
  };
  const handleLogoutButton = () => {
    dispatch(auth(false));
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <List
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {links.map((link, index) => (
                <ListItem key={index} sx={{ width: "auto" }}>
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "blue",
                    })}
                  >
                    {link.caption}
                  </NavLink>
                </ListItem>
              ))}
            </List>
            {!isAuth ? (
              <Button variant="contained" onClick={handleLoginButton}>
                Login
              </Button>
            ) : (
              <Button variant="contained" onClick={handleLogoutButton}>
                Logout
              </Button>
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
};
