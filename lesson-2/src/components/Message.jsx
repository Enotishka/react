import { PropTypes } from "prop-types";
import { Box, Button, Typography } from "@mui/material";

export const Message = ({ author, text, id, onRemoveMessage }) => (
  <Box sx={{ p: "10px", bgcolor: "#DDF4FF", borderRadius: "10px" }}>
    <Box sx={{ display: "flex" }}>
      <Typography variant="h5">{author}</Typography>
      <Button onClick={() => onRemoveMessage(id)}>X</Button>
    </Box>
    <Typography variant="body1">{text}</Typography>
  </Box>
);

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};
