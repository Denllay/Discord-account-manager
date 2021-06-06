import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './popup.scss';

const mountNode = document.getElementById('root');
const main = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(main, mountNode);
