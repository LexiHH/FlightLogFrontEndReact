import React from 'react';
import './Designs.css';
import './NavBar.css';
import RecordBar from './RecordBar';

function Flights() {
    return (
        <div className = 'record'>
            <div className = 'labels'>
            ID
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Description
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Flight Date
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Flight Length
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Callsign
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Passengers
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Solo or Dual
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Landings
            </div>
           <input type = 'text' className = 'textbox'/>
           <div className = 'labels'>
            Airfield
            </div>
           <input type = 'text' className = 'textbox'/>
           <div style = {{textAlign: 'center'}}>
            <RecordBar/>
            </div>
        </div>
    )
}

export default Flights;
