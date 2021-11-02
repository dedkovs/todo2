import { Typography } from '@mui/material';

const TaskText = ({ item }) => {
  const { text, done } = item;

  const textStyle = {
    wordBreak: 'break-word',
    paddingLeft: 2,
    textDecoration: done ? 'line-through' : 'none',
  };

  return <Typography sx={textStyle}>{text}</Typography>;
};

export default TaskText;
