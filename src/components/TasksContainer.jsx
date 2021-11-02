import { useContext } from 'react';
import { AppContext } from '../App';
import { Box } from '@mui/material';
import TaskContainer from './TaskContainer';

const tasksContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const TasksContainer = () => {
  const [state] = useContext(AppContext);

  return (
    <Box sx={tasksContainerStyle}>
      {state.todoList.map((item, index) => (
        <TaskContainer key={index} item={item} index={index} />
      ))}
    </Box>
  );
};

export default TasksContainer;
