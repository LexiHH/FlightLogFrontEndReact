import React from 'react';
import './Designs.css';
import './NavBar.css';
import RecordBar from './RecordBar';

function Flights({info}) {
    //{info} is the same as doing const info = props.info (object destructuring)
    return (
        <div className = 'record'>
            <div className = 'labels'>
            ID
            </div>
           <input type = 'text' className = 'textbox' id = 'ID' value = {info.idnumber}/>
           <div className = 'labels'>
            Description
            </div>
           <input type = 'text' className = 'textbox' id = 'Description' value = {info.description}/>
           <div className = 'labels'>
            Flight Date
            </div>
           <input type = 'text' className = 'textbox' id = 'FlightDate' value = {info.flightdate}/>
           <div className = 'labels'>
            Flight Length
            </div>
           <input type = 'text' className = 'textbox' id = 'FlightLength' value = {info.flighttime}/>
           <div className = 'labels'>
            Callsign
            </div>
           <input type = 'text' className = 'textbox' id = 'Callsign' value = {info.callsign}/>
           <div className = 'labels'>
            Passengers
            </div>
           <input type = 'text' className = 'textbox' id = 'Passengers' value = {info.passengers}/>
           <div className = 'labels'>
            Solo or Dual
            </div>
           <input type = 'text' className = 'textbox' id = 'SolororDual' value = {info.soloordual}/>
           <div className = 'labels'>
            Landings
            </div>
           <input type = 'text' className = 'textbox' id = 'Landings' value = {info.landings}/>
           <div className = 'labels'>
            Airfield
            </div>
           <input type = 'text' className = 'textbox' id = 'Airfield' value = {info.airfield}/>
           <div style = {{textAlign: 'center', margin: '10px'}}>
            <RecordBar/>
            </div>
        </div>
    )
}

export default Flights;
