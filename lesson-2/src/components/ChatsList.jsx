import { PropTypes } from "prop-types";
import {
  List,
  ListItem,
  Box,
  ListItemText,
  ListItemButton,
} from "@mui/material";

export const ChatsList = ({ chats }) => (
  <Box>
    <List>
      {chats.map((c, i) => (
        <ListItem disablePadding key={i}>
          <ListItemButton>
            <ListItemText primary={c.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
