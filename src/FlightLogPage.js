import React, { useEffect, useState } from 'react';
import './Designs.css';
import axios from 'axios';
import Flights from './Flights';

function FlightLogPage() {
    const [allFlights, setAllFlights] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:9001/showAllFlight');
            setAllFlights(response.data);
        }
        fetchData();
    }, [] 
    )

    return (
        <div>
            <header className="title">
                Flight Log
            </header>
            {allFlights.map(item => <Flights info={item} key={item.idnumber}/>)};
        </div>
    );
}

export default FlightLogPage;
