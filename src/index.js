import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    palette: {
      primary: {
        main: "#013e87",
      },
      secondary: {
        main: "#2e74c9",
      }
    }
  }
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);