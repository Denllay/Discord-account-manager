import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './popup.scss';
import { theme } from './theme';

const mountNode = document.getElementById('root');
const main = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
ReactDOM.render(main, mountNode);
