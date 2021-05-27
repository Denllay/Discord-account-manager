import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { App } from './App';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { store } from './store';
import './popup.scss';

const mountNode = document.getElementById('root');
const main = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
ReactDOM.render(main, mountNode);
