import React, {useState} from 'react';
import axios from 'axios';
import './NavBar.css';
import DeleteConfirmation from './DeleteConfirmation';
import './DeleteConfirmation.css';

const { location: { hostname } } = window; 

async function deleteAirfield(specificAirfieldFields, onModify) {
    await axios.delete(`http://${hostname}:9001/deleteAirfield/${specificAirfieldFields.idnumber}`);
    //These are back ticks ` not ' - back ticks tell it that it's a string we can pass things into
    onModify();
}

async function updateAirfield(specificAirfieldFields, onModify) {
    await axios.put(`http://${hostname}:9001/changeAirfield/${specificAirfieldFields.idnumber}/${specificAirfieldFields.picture}/${specificAirfieldFields.description}/${specificAirfieldFields.tips}/${specificAirfieldFields.pros}/${specificAirfieldFields.cons}/${specificAirfieldFields.landingfee}`);
    onModify();
}

async function createAirfield(specificAirfieldFields, onModify) {
    await axios.post(`http://${hostname}:9001/saveAirfield/${specificAirfieldFields.picture}/${specificAirfieldFields.description}/${specificAirfieldFields.tips}/${specificAirfieldFields.pros}/${specificAirfieldFields.cons}/${specificAirfieldFields.landingfee}`);
    onModify();
}

function RecordBar({specificAirfieldFields, onModify}) {
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    let btninfo;
    if(!specificAirfieldFields.idnumber) {
        btninfo = [
            {
                label: 'Create',
                onClick: () => createAirfield(specificAirfieldFields, onModify),
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
                onClick: () => updateAirfield(specificAirfieldFields, onModify),
            },
            {
                label: 'Delete',
                onClick: () => setShowConfirmBox(true),
            },
        ];
    }
    //squirly brackets force it to read in javascript until it comes across react - then it will read in react again
    //<button> etc creates a button with the item label, item => passes each item of the btninfo array into
    //that button function to make the button, btninfo.map returns an array of these resulting labeled buttons
    return (
        <div>
            <div style={{ borderRadius: '15px', display: 'flex', flexWrap: 'wrap' }}>
                {
                    btninfo.map(item => <div className="navigate" key={item.label} style={{borderRadius:'15px', margin: '5px', flexGrow: '1'}} onClick = {item.onClick}>{item.label}</div>)
                }
            </div>
            {showConfirmBox ? <DeleteConfirmation deleteit={() => deleteAirfield(specificAirfieldFields, onModify)} cancelit={() => setShowConfirmBox(false)}/> : null}
        </div>
    )
}

export default RecordBar;
