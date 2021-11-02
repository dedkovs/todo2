import { useState, createContext } from 'react';
import { Box } from '@mui/material';
import TasksContainer from './components/TasksContainer';
import InputTaskContainer from './components/InputTaskContainer';

const appContainerStyle = {
  padding: { xs: 2, sm: 4 },
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 4,
  maxWidth: 600,
  minWidth: 320,
  margin: '0 auto',
};

export const AppContext = createContext();

const App = () => {
  const [state, setState] = useState({
    todoList: [],
    newTask: '',
  });

  const value = [state, setState];

  return (
    <AppContext.Provider value={value}>
      <Box sx={appContainerStyle}>
        <InputTaskContainer />
        <TasksContainer />
      </Box>
    </AppContext.Provider>
  );
};

export default App;
