import React, { useEffect, useState } from 'react';
import './Designs.css';
import axios from 'axios';
import Airfield from './Airfield';
import './NavBar.css';

const { location: { hostname } } = window;

async function fetchData(setAllAirfields) {
    const response = await axios.get(`http://${hostname}:9001/showAllAirfield`);
    setAllAirfields(response.data);
}

function AirfieldLogPage() {
    const [allAirfields, setAllAirfields] = useState([]);
    
    useEffect(() => {
        fetchData(setAllAirfields);
    }, [] 
    )

    return (
        <div>
            <header className="title">
                Airfield Log
            </header>
            <div className = 'record' style={{padding: 'unset', textAlign: 'right', border: 'none', display: 'block', boxShadow: 'none'}}>
                <div className = 'navigate' style={{borderRadius: '15px'}} onClick= {() => setAllAirfields([{}, ...allAirfields])}>
                    Create
                </div>
            </div>
            {allAirfields.map((item, index) => <Airfield onModify={() => fetchData(setAllAirfields)} info={item} key={item.idnumber ? item.idnumber : `blank-${index}`}/>)};
        </div>
    );
}

export default AirfieldLogPage;