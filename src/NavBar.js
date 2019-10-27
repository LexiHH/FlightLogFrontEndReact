import React from 'react';
import './NavBar.css';

function NavBar() {
    const btninfo = [
        {
            label: 'Flight Log',
            link: '/flightlog',
        },
        {
            label: 'Airfield Log',
            link: '/airfieldlog',
        },
    ];
    //squirly brackets force it to read in javascript until it comes across react - then it will read in react again
    //<button> etc creates a button with the item label, (item) => creates an anonymous function that passes each item of the btninfo array
    //as an argument into that button function to make the button, btninfo.map returns an array of these resulting labeled buttons.
    //Because the body of the function is all on one line, it is imlicitly implied that it is returned
    return (
        <div style={{ backgroundColor: 'rgba(9,16,62,1)', position: 'fixed', top: 0, width: '100%'}}>
            {
                btninfo.map((item) => <div className="navigate" key={item.label} >{item.label}</div>)
            }

        

        </div>
    )
}

export default NavBar;
