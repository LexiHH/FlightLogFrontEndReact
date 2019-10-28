import React, { useEffect, useState } from 'react';
import './Designs.css';
import axios from 'axios';
import Flight from './Flight';
import './NavBar.css';

async function fetchData(setAllFlights) {
    const response = await axios.get('http://localhost:9001/showAllFlight');
    setAllFlights(response.data);
}

function updateAirfield(setAirfield, whatsInBox) {
    setAirfield(whatsInBox);
}
function updateFromDate(setFromDate, whatsInBox) {
    setFromDate(whatsInBox);
}
function updateToDate(setToDate, whatsInBox) {
    setToDate(whatsInBox);
}
function updateSoloOrDual(setSoloOrDual, whatsInBox) {
    setSoloOrDual(whatsInBox);
}


async function filterFlightAirfield(setAllFlights, airfield) {
    const response = await axios.get(`http://localhost:9001/filterAirfield/${airfield}`);
    //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    setAllFlights(response.data);
}

function onFilterCancel(fetchData, setAllFlights, setShowFilter, showFilter) {
    fetchData(setAllFlights);
    setShowFilter(!showFilter);
}

function onSumCancel(fetchData, setAllFlights, setShowSum, showSum, setHours, setLandings) {
    fetchData(setAllFlights);
    setShowSum(!showSum);
    setHours();
    setLandings();
}

 async function sumAllLandingsDates(setLandings, setHours, soloOrDual, fromDate, toDate) {
    const landresponse = await axios.get(`http://localhost:9001/sumAllLandingsDates/${fromDate}/${toDate}`);
      //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    setLandings(landresponse.data);
    let sumresponse = null;
    if(soloOrDual === undefined || soloOrDual === "") {
        sumresponse = await axios.get(`http://localhost:9001/sumFlighttimeBetween/${fromDate}/${toDate}`)
    }
    else {
        sumresponse = await axios.get(`http://localhost:9001/sumAllFlighttimeSoloDates/${soloOrDual}/${fromDate}/${toDate}`);     
    }
    setHours(sumresponse.data);
}

function FlightLogPage() {
    const [allFlights, setAllFlights] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showSum, setShowSum] = useState(false);
    const [airfield, setAirfield] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [soloOrDual, setSoloOrDual] = useState();
    const [hours, setHours] = useState();
    const [landings, setLandings] = useState();
    
    useEffect(() => {
        fetchData(setAllFlights);
    }, [] 
    )

    return (
        <div>
            <header className="title">
                Flight Log
            </header>
            <div className = 'record' style={{padding: 'unset', textAlign: 'right', border: 'none', display: 'block'}}>
                <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px'}} onClick= {() => setAllFlights([{}, ...allFlights])}>
                    Create
                </div>
                <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px'}} onClick = {() => setShowFilter(!showFilter)}>
                    Filter
                </div>
                <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px'}} onClick = {() => setShowSum(!showSum)}>
                    Sum
                </div>
                <div className = {showFilter ? 'showFilter' : 'hideFilter'}>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        Airfield
                    </div>
                    <input type = 'text' className = 'textbox' onChange = {(event) => updateAirfield(setAirfield, event.target.value)}/>
                    <div>
                        <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px', textAlign: 'center'}} onClick = {() => filterFlightAirfield(setAllFlights, airfield)}>
                            Filter
                        </div>
                        <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px', textAlign: 'center'}} onClick = {() => onFilterCancel(fetchData, setAllFlights, setShowFilter, showFilter)}>
                            Cancel
                        </div>
                    </div>
                </div>
                <div className = {showSum ? 'showSum' : 'hideSum'}>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        From Date
                    </div>
                    <input type = 'text' className = 'textbox' onChange = {(event) => updateFromDate(setFromDate, event.target.value)}/>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        To Date
                    </div>
                    <input type = 'text' className = 'textbox'onChange = {(event) => updateToDate(setToDate, event.target.value)}/>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        Solo or Dual
                    </div>
                    <input type = 'text' className = 'textbox' onChange = {(event) => updateSoloOrDual(setSoloOrDual, event.target.value)}/>
                    <div>
                        <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px', textAlign: 'center'}} onClick = {() => sumAllLandingsDates(setLandings, setHours, soloOrDual, fromDate, toDate)}>
                            Sum
                        </div>
                        <div className = 'navigate' style={{borderRadius: '15px', margin: '5px', width: '50px', textAlign: 'center'}} onClick = {() => onSumCancel(fetchData, setAllFlights, setShowSum, showSum, setHours, setLandings)}>
                            Cancel
                        </div>
                    </div>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        Hours
                    </div>
                    <input type = 'text' className = 'textbox' value={hours || ''} readOnly/>
                    <div className = 'labels' style={{textAlign: 'left'}}>
                        Landings
                    </div>
                    <input type = 'text' className = 'textbox' value={landings || ''} readOnly/>
                </div>
            </div>
            {allFlights.map((item, index) => <Flight onModify={() => fetchData(setAllFlights)} info={item} key={item.idnumber ? item.idnumber : `blank-${index}`}/>)};
        </div>
    );
}

export default FlightLogPage;