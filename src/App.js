import React from 'react';
import logo from './logo.svg';
import { AppRoutes } from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
