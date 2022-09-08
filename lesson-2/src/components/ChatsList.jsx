import { PropTypes } from 'prop-types';
import { List, ListItem, Box, ListItemText, ListItemButton } from "@mui/material";

const ChatsList = ({chats}) => {
  return (
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
};

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

export { ChatsList };