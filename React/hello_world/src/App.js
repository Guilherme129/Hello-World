import logo from './logo.svg';
import './App.css';
import React from 'react';
import gatinho from './gatinho.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatinho} alt="Gatinho Feliz" />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
