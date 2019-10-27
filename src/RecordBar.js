import React from 'react';
import axios from 'axios';
import './NavBar.css';


async function deleteFlight(specificFlightFields, onModify) {
    await axios.delete(`http://localhost:9001/deleteFlight/${specificFlightFields.idnumber}`);
    //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    onModify();
}

async function updateFlight(specificFlightFields, onModify) {
    await axios.put(`http://localhost:9001/changeFlight/${specificFlightFields.idnumber}/${specificFlightFields.picture}/${specificFlightFields.description}/${specificFlightFields.flighttime}/${specificFlightFields.flightdate}/${specificFlightFields.passengers}/${specificFlightFields.airfield}/${specificFlightFields.callsign}/${specificFlightFields.landings}/${specificFlightFields.soloordual}`);
    onModify();
}

async function createFlight(specificFlightFields, onModify) {
    await axios.post(`http://localhost:9001/saveFlight/${specificFlightFields.picture}/${specificFlightFields.description}/${specificFlightFields.flighttime}/${specificFlightFields.flightdate}/${specificFlightFields.passengers}/${specificFlightFields.airfield}/${specificFlightFields.callsign}/${specificFlightFields.landings}/${specificFlightFields.soloordual}`);
    onModify();
}

function RecordBar({specificFlightFields, onModify}) {
    let btninfo;
    if(!specificFlightFields.idnumber) {
        btninfo = [
            {
                label: 'Create',
                onClick: () => createFlight(specificFlightFields, onModify),
            },
            {
                label: 'Cancel',
                onClick: onModify,
            },
        ];
    }
    else {
        btninfo = [
            {
                label: 'Update',
                onClick: () => updateFlight(specificFlightFields, onModify),
            },
            {
                label: 'Delete',
                onClick: () => deleteFlight(specificFlightFields, onModify),
            },
        ];
    }
    //squirly brackets force it to read in javascript until it comes across react - then it will read in react again
    //<button> etc creates a button with the item label, item => passes each item of the btninfo array into
    //that button function to make the button, btninfo.map returns an array of these resulting labeled buttons
    return (
        <div style={{ borderRadius: '15px', display: 'flex', flexWrap: 'wrap' }}>
            {
                btninfo.map(item => <div className="navigate" key={item.label} style={{borderRadius:'15px', margin: '5px', flexGrow: '1'}} onClick = {item.onClick}>{item.label}</div>)
            }
        </div>
    )
}

export default RecordBar;
