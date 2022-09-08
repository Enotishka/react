import { PropTypes } from 'prop-types';
import { Box, Typography } from '@mui/material';

const Message = ({author, text}) => {
  return (
  <Box sx={{ p: '10px', bgcolor: '#DDF4FF', borderRadius: '10px'}}>
    <Typography variant="h5">{author}</Typography>
    <Typography variant="body1">{text}</Typography>
  </Box>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string
};

export { Message };

