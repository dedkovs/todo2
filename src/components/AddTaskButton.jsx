import { useContext } from 'react';
import { AppContext } from '../App';
import { IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddTaskButton = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <InputAdornment position="end">
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          if (state.newTask.trim() !== '') {
            const newTask = { text: state.newTask, done: false };
            const newArray = [...state.todoList, newTask];
            setState((s) => ({
              ...s,
              todoList: newArray,
            }));
            setState((s) => ({ ...s, newTask: '' }));
          }
        }}
        edge="start"
      >
        <AddIcon />
      </IconButton>
    </InputAdornment>
  );
};

export default AddTaskButton;
