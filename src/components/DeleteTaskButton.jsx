import { useContext } from 'react';
import { AppContext } from '../App';
import { Box, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const deleteButtonContainerStyle = {
  display: 'flex',
  paddingLeft: 1,
  alignItems: 'center',
};

const DeleteTaskButton = ({ index }) => {
  const [state, setState] = useContext(AppContext);

  return (
    <Box sx={deleteButtonContainerStyle}>
      <IconButton
        onMouseDown={(e) => {
          if (e.button !== 1 && e.button !== 2) {
            const newArray = [
              ...state.todoList.slice(0, index),
              ...state.todoList.slice(index + 1),
            ];
            setState((s) => ({ ...s, todoList: newArray }));
          }
        }}
      >
        <HighlightOffIcon />
      </IconButton>
    </Box>
  );
};

export default DeleteTaskButton;
