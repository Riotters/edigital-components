import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { eDigital } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isDarkTheme = false;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={isDarkTheme ? eDigital.dark : eDigital.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
