import React from 'react';
import './NavBar.css';

function RecordBar() {
    const btninfo = [
        {
            label: 'Edit',
            link: '/edit',
        },
        {
            label: 'Delete',
            link: '/delete',
        },
    ];
    //squirly brackets force it to read in javascript until it comes across react - then it will read in react again
    //<button> etc creates a button with the item label, item => passes each item of the btninfo array into
    //that button function to make the button, btninfo.map returns an array of these resulting labeled buttons
    return (
        <div style={{ borderRadius: '15px', display: 'flex', flexWrap: 'wrap' }}>
            {
                btninfo.map(item => <button className="navigate" key={item.label} style={{borderRadius:'15px', margin: '5px', flexGrow: '1'}}>{item.label}</button>)
            }
        </div>
    )
}

export default RecordBar;
