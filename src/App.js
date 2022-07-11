import React from 'react';
import './App.css';
import {createTheme, ThemeProvider, Typography} from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: 'Raleway',
    },
  });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Typography>
            App
        </Typography>
    </ThemeProvider>
  )
}

export default App