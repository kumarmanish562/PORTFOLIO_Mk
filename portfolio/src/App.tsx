import React from 'react';
import "@mantine/core/styles.css";
import './App.css';
import HomePage from './Components/HomePage';
import { MantineProvider} from '@mantine/core';

const theme = {};

function App() {
  return (
    <MantineProvider theme={theme} >
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
