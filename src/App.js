import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from './theme';
import { ResiftProvider } from 'resift';
import dataService from './dataService';
import { ThemeProvider } from '@material-ui/styles';

import MainPage from './pages/MainPage';

const useStyles = makeStyles({
  root: {},
});

function App() {
  return (
    <ResiftProvider dataService={dataService}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </ResiftProvider>
  );
}

export default App;
