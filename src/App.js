import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import './Designs.css';
import NavBar from './NavBar';
import FlightLogPage from './FlightLogPage';
import AirfieldLogPage from './AirfieldLogPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Redirect from='/' to='/flightlog' exact/>
          <Route path='/flightlog' exact>
            <FlightLogPage />
          </Route>
          <Route path='/airfieldlog' exact>
            <AirfieldLogPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
