import React, {useState} from 'react';
import './Designs.css';
import './NavBar.css';
import RecordBar from './RecordBar';

function updateField(fields, setFields, whichBox, whatsInBox) {
    const newFields = {...fields};
    newFields[whichBox] = whatsInBox;
    setFields(newFields);
}

function Flight({info, onModify}) {
    const [big, setBig] = useState(false);
    const [fields, setFields] = useState({ ...info });
    //{info} is the same as doing const info = props.info (object destructuring)
    return (
        <div className = 'record'>
            <div style = {{display: 'flex'}}>
                <input type = 'text' className = 'navigate' style = {{display: 'flex', width: '5%', borderRadius: '15px'}} value = {fields.idnumber} readOnly/>
                <div className = 'labels'>
                    Flight Date
                </div>
                <input type = 'text' className = 'textbox' value = {fields.flightdate || ''} onChange = {(event) => updateField(fields, setFields, 'flightdate', event.target.value)}/>
            </div>
            <div className = 'labels'>
                Description
            </div>
            <input type = 'text' className = 'textbox' value = {fields.description || ''} onChange = {(event) => updateField(fields, setFields, 'description', event.target.value)}/>
            <div className={big ? 'big' : 'small'}>
                <div className = 'labels'>
                    Flight Length
                </div>
                <input type = 'text' className = 'textbox' value = {fields.flighttime || ''} onChange = {(event) => updateField(fields, setFields, 'flighttime', event.target.value)}/>
                <div className = 'labels'>
                    Callsign
                </div>
                <input type = 'text' className = 'textbox' value = {fields.callsign || ''} onChange = {(event) => updateField(fields, setFields, 'callsign', event.target.value)}/>
                <div className = 'labels'>
                    Passengers
                </div>
                <input type = 'text' className = 'textbox' value = {fields.passengers || ''} onChange = {(event) => updateField(fields, setFields, 'passengers', event.target.value)}/>
                <div className = 'labels'>
                    Solo or Dual
                </div>
                <input type = 'text' className = 'textbox' value = {fields.soloordual || ''} onChange = {(event) => updateField(fields, setFields, 'soloordual', event.target.value)}/>
                <div className = 'labels'>
                    Landings
                </div>
                <input type = 'text' className = 'textbox' value = {fields.landings || ''} onChange = {(event) => updateField(fields, setFields, 'landings', event.target.value)}/>
                <div className = 'labels'>
                    Airfield
                </div>
                <input type = 'text' className = 'textbox' value = {fields.airfield || ''} onChange = {(event) => updateField(fields, setFields, 'airfield', event.target.value)}/>
            </div>
            <div style = {{margin: '10px'}}>
                <RecordBar specificFlightFields={fields} onModify={onModify}/>
            </div>
            <div style = {{textAlign: 'center'}}>
                <div className={big ? 'collapseButton' : 'expandButton'} onClick = {() => setBig(!big)}> ^ </div>
            </div>
        </div>
    )
}

export default Flight;
