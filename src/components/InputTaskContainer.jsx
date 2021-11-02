import { useContext } from 'react';
import { AppContext } from '../App';
import { Box, OutlinedInput } from '@mui/material';
import AddTaskButton from './AddTaskButton';

const InputTaskContainer = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 4, sm: 2 },
      }}
      component="form"
      onSubmit={(e) => {
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
    >
      <OutlinedInput
        sx={{ width: '100%' }}
        autoFocus
        type={'text'}
        value={state.newTask}
        onChange={(e) => setState({ ...state, newTask: e.target.value })}
        placeholder="New task"
        endAdornment={<AddTaskButton />}
      />
    </Box>
  );
};

export default InputTaskContainer;
