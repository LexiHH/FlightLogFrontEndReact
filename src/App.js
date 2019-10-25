import React from 'react';
import logo from './logo.svg';
import './Designs.css';
import NavBar from './NavBar';
import axios from 'axios';
import Flights from './Flights';

function App() {
  // const response = axios.get('https:localhost:9001/showAllFlight')
  return (
      <div>
        <NavBar />
        <header className="title">
          Flight Log
        </header>
        <Flights />
      </div>
  );
}

export default App;
