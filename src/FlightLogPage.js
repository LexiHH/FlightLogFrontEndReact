import React, { useEffect, useState } from 'react';
import './Designs.css';
import axios from 'axios';
import Flight from './Flight';
import './NavBar.css';

async function fetchData(setAllFlights) {
    const response = await axios.get('http://localhost:9001/showAllFlight');
    setAllFlights(response.data);
}

function FlightLogPage() {
    const [allFlights, setAllFlights] = useState([]);
    
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
                <div className = 'navigate' style={{borderRadius: '15px'}} onClick= {() => setAllFlights([{}, ...allFlights])}>
                    Create
                </div>
            </div>
            {allFlights.map((item, index) => <Flight onModify={() => fetchData(setAllFlights)} info={item} key={item.idnumber ? item.idnumber : `blank-${index}`}/>)};
        </div>
    );
}

export default FlightLogPage;