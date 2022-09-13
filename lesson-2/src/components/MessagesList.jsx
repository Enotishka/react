import { PropTypes } from "prop-types";
import { Box } from "@mui/material";
import { Message } from "../components/Message";

export const MessagesList = ({ messages }) => (
  <Box
    sx={{ p: "10px", display: "flex", flexDirection: "column", gap: "10px" }}
  >
    {messages.map((m, i) => (
      <Message author={m.author} text={m.text} key={i} />
    ))}
  </Box>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
