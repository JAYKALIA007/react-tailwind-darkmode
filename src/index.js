import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import Background from './Background';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <Background>
          <App />
        </Background>
    </ThemeProvider>
  </React.StrictMode>
  );