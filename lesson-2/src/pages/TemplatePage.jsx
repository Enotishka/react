import { CssBaseline, Box, Container, List, ListItem } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { path: "/", caption: "Main" },
  { path: "/profile", caption: "Profile" },
  { path: "/chat", caption: "Chats" },
];

export const TemplatePage = () => (
  <>
    <CssBaseline />
    <Container>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
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
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              >
                {link.caption}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  </>
);
