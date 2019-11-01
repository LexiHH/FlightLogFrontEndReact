import React, { useEffect, useState } from 'react';
import './Designs.css';
import axios from 'axios';
import Flight from './Flight';
import './NavBar.css';

const { hostname } = window.location;

async function fetchData(setAllFlights) {
    const response = await axios.get(`http://${hostname}:9001/showAllFlight`);
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
    const response = await axios.get(`http://${hostname}:9001/filterAirfield/${airfield}`);
    //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    setAllFlights(response.data);
}

function onFilterCancel(fetchData, setAllFlights, setShowFilter, showFilter, setAirfield) {
    fetchData(setAllFlights);
    setShowFilter(!showFilter);
    setAirfield('');
}

function onSumCancel(fetchData, setAllFlights, setShowSum, showSum, setHours, setLandings, setFromDate, setToDate, setSoloOrDual) {
    fetchData(setAllFlights);
    setShowSum(!showSum);
    setHours();
    setLandings();
    setFromDate('');
    setToDate('');
    setSoloOrDual('');
}

 async function sumAllLandingsDates(setLandings, setHours, soloOrDual, fromDate, toDate) {
    const landresponse = await axios.get(`http://${hostname}:9001/sumAllLandingsDates/${fromDate}/${toDate}`);
      //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    setLandings(landresponse.data);
    let sumresponse = null;
    if(!soloOrDual) {
        sumresponse = await axios.get(`http://${hostname}:9001/sumFlighttimeBetween/${fromDate}/${toDate}`)
    }
    else {
        sumresponse = await axios.get(`http://${hostname}:9001/sumAllFlighttimeSoloDates/${soloOrDual}/${fromDate}/${toDate}`);     
    }
    setHours(sumresponse.data);
}

function FlightLogPage() {
    const [allFlights, setAllFlights] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showSum, setShowSum] = useState(false);
    const [airfield, setAirfield] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [soloOrDual, setSoloOrDual] = useState('');
    const [hours, setHours] = useState();
    const [landings, setLandings] = useState();
    
    useEffect(() => {
        fetchData(setAllFlights);
    }, [] 
    )

    return (
        <div style={{padding: '0px 10px'}}>
            <header className="title">
                Flight Log
            </header>
            <div className = 'record' style={{padding: 'unset', textAlign: 'right', border: 'none', display: 'block', boxShadow: 'none', background: 'none'}}>
                <div className = 'primary-action' onClick= {() => setAllFlights([{}, ...allFlights])}>
                    Create
                </div>
                <div className = 'primary-action' onClick = {() => setShowFilter(!showFilter)}>
                    Filter
                </div>
                <div className = 'primary-action' onClick = {() => setShowSum(!showSum)}>
                    Sum
                </div>
                <div className = {showFilter ? 'showFilter' : 'hideFilter'}>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        Airfield
                    </div>
                    <input type = 'text' className = 'textbox' style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} value={airfield} onChange = {(event) => updateAirfield(setAirfield, event.target.value)}/>
                    <div style={{display: 'block', textAlign: 'right'}}>
                        <div className = 'filterButtons' onClick = {() => filterFlightAirfield(setAllFlights, airfield)}>
                            Filter
                        </div>
                        <div className = 'filterButtons' onClick = {() => onFilterCancel(fetchData, setAllFlights, setShowFilter, showFilter, setAirfield)}>
                            Cancel
                        </div>
                    </div>
                </div>
                <div className = {showSum ? 'showSum' : 'hideSum'}>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        From Date
                    </div>
                    <input type = 'text' className = 'textbox' style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} value={fromDate} onChange = {(event) => updateFromDate(setFromDate, event.target.value)}/>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        To Date
                    </div>
                    <input type = 'text' className = 'textbox' value={toDate} style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} onChange = {(event) => updateToDate(setToDate, event.target.value)}/>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        Solo or Dual
                    </div>
                    <input type = 'text' className = 'textbox' value={soloOrDual} style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} onChange = {(event) => updateSoloOrDual(setSoloOrDual, event.target.value)}/>
                    <div>
                        <div className = 'filterButtons' onClick = {() => sumAllLandingsDates(setLandings, setHours, soloOrDual, fromDate, toDate)}>
                            Sum
                        </div>
                        <div className = 'filterButtons' onClick = {() => onSumCancel(fetchData, setAllFlights, setShowSum, showSum, setHours, setLandings, setFromDate, setToDate, setSoloOrDual)}>
                            Cancel
                        </div>
                    </div>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        Hours
                    </div>
                    <input type = 'text' className = 'textbox' style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} value={hours || ''} readOnly/>
                    <div className = 'labels' style={{textAlign: 'left', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', paddingBottom: '5px'}}>
                        Landings
                    </div>
                    <input type = 'text' className = 'textbox' style={{borderWidth: '1px', color: 'hsl(197, 65%, 20%)', fontWeight: 'bold', borderColor: 'hsl(197, 65%, 20%)'}} value={landings || ''} readOnly/>
                </div>
            </div>
            {allFlights.map((item, index) => <Flight onModify={() => fetchData(setAllFlights)} info={item} key={item.idnumber ? item.idnumber : `blank-${index}`}/>)}
        </div>
    )
}

export default FlightLogPage;