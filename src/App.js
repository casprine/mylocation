import React from 'react';
import { AppRoutes } from './routes';
import { BottomNavbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRoutes />
        <BottomNavbar />
      </header>
    </div>
  );
}

export default App;
