import { useContext } from 'react';
import { AppContext } from '../App';
import { Box, Grow, Paper } from '@mui/material';
import TaskId from './TaskId';
import TaskText from './TaskText';
import DeleteTaskButton from './DeleteTaskButton';

const TaskContainer = ({ item, index }) => {
  const [state, setState] = useContext(AppContext);

  const { done } = item;

  const taskContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    padding: 1,
    paddingLeft: 2,
    paddingRight: 2,
    transition: 'background-color 0.3s',
    backgroundColor: done ? 'rgba(0,0,0,0.2)' : '#fff',
    '&:hover': {
      backgroundColor: done ? 'rgba(0,0,0,0.3)' : 'rgba(25,118,210,0.2)',
      cursor: 'pointer',
    },
  };

  return (
    <Grow in appear timeout={100 * (index + 1)}>
      <Box sx={{ display: 'flex' }}>
        <Paper
          onClick={() => {
            const todoArray = state.todoList;
            todoArray[index].done = !todoArray[index].done;
            setState((s) => ({ ...s, todoList: todoArray }));
          }}
          variant="outlined"
          sx={taskContainerStyle}
        >
          <TaskId index={index} done={done} />
          <TaskText item={item} />
        </Paper>
        <DeleteTaskButton index={index} />
      </Box>
    </Grow>
  );
};

export default TaskContainer;
