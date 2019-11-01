import React, {useState} from 'react';
import './Designs.css';
import './NavBar.css';
import RecordBar from './RecordBar';

function updateField(fields, setFields, whichBox, whatsInBox) {
    const newFields = {...fields};
    newFields[whichBox] = whatsInBox;
    setFields(newFields);
}

function checkFlightdate(currentFlightDate, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(currentFlightDate.search(/\d{4}-\d{2}-\d{2}/)) {
        error = 'Date must be in format YYYY-MM-DD';
    }
    allErrors['flightdate'] = error;
    setErrors(allErrors);
}

function checkFlighttime(currentFlighttime, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(isNaN(currentFlighttime) || parseInt(currentFlighttime)>10000 || parseInt(currentFlighttime)<1) {
        error = 'Must be time in minutes between 1 and 10000';
    }
    allErrors['flighttime'] = error;
    setErrors(allErrors);
}

function checkCallsign(currentCallsign, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(currentCallsign.search(/G-[A-Z]{4}$/)) {
        error = 'Must be in format G- followed by three capital letters';
    }
    allErrors['callsign'] = error;
    setErrors(allErrors);
}

function checkPassengers(currentPassengers, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(isNaN(currentPassengers) || parseInt(currentPassengers)>1000 || parseInt(currentPassengers)<0) {
        error = 'Number of Passengers must be a number between 0 and 1000';
    }
    allErrors['passengers'] = error;
    setErrors(allErrors);
}

function checkSoloOrDual(currentSoloOrDual, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(currentSoloOrDual !== "Solo" && currentSoloOrDual !== "Dual") {
        error = 'Must be either Solo or Dual (case sensitive)';
    }
    allErrors['soloordual'] = error;
    setErrors(allErrors);
}

function checkLandings(currentLandings, errors, setErrors) {
    const allErrors = {...errors};
    let error = '';
    if(isNaN(currentLandings) || parseInt(currentLandings)>1000 || parseInt(currentLandings)<0) {
        error = 'Number of Landings must be a number between 0 and 1000';
    }
    allErrors['landings'] = error;
    setErrors(allErrors);
}

function Flight({info, onModify}) {
    const [errors, setErrors] = useState({
        flightdate: '',
        description: '',
        flighttime: '',
        callsign: '',
        passengers: '',
        soloordual: '',
        landings: '',
        airfield: '',
    })
    const [big, setBig] = useState(false);
    const [fields, setFields] = useState({ ...info });
    //{info} is the same as doing const info = props.info (object destructuring)
    return (
        <div className = 'record'>
            <div className='idnumber'>{fields.idnumber}</div>
            <div>
                <span className = 'labels'>
                        Flight Date
                </span>
                <input type = 'text' className = 'textbox' style = {{border: 'none', width: '300px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.flightdate} readOnly/>
            </div>
            <input type = 'text' className = 'textbox' value = {fields.flightdate || ''} onBlur={() => checkFlightdate(fields.flightdate, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'flightdate', event.target.value)}/>
            <div>
                <span className = 'labels'>
                    Description
                </span>
                <input type = 'text' className = 'textbox' style = {{border: 'none', background: 'none'}} value={errors.description} readOnly/>
            </div>
            <input type = 'text' className = 'textbox' value = {fields.description || ''} onChange = {(event) => updateField(fields, setFields, 'description', event.target.value)}/>
            <div className={big ? 'big' : 'small'}>
                <div>
                    <span className = 'labels'>
                        Flight Length (mins)
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', width: '400px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.flighttime} readOnly/>
                </div>
                <input type = 'text' className = 'textbox' value = {fields.flighttime || ''} onBlur={() => checkFlighttime(fields.flighttime, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'flighttime', event.target.value)}/>
                <div>    
                    <span className = 'labels'>
                        Callsign
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', width: '450px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.callsign} readOnly/>
                </div>
                <input type = 'text' className = 'textbox' value = {fields.callsign || ''} onBlur={() => checkCallsign(fields.callsign, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'callsign', event.target.value)}/>
                <div>    
                    <span className = 'labels'>
                        Passengers
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', width: '450px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.passengers} readOnly/>
                </div>
                <input type = 'text' className = 'textbox' value = {fields.passengers || ''} onBlur={() => checkPassengers(fields.passengers, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'passengers', event.target.value)}/>
                <div>    
                    <span className = 'labels'>
                        Solo or Dual
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', width: '450px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.soloordual} readOnly/>
                </div>
                <input type = 'text' className = 'textbox' value = {fields.soloordual || ''} onBlur={() => checkSoloOrDual(fields.soloordual, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'soloordual', event.target.value)}/>
                <div>    
                    <span className = 'labels'>
                        Landings
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', width: '450px', color: 'rgb(139,34,34)', background: 'none'}} value={errors.landings} readOnly/>
                </div>
                <input type = 'text' className = 'textbox' value = {fields.landings || ''} onBlur={() => checkLandings(fields.landings, errors, setErrors)} onChange = {(event) => updateField(fields, setFields, 'landings', event.target.value)}/>
                <div>    
                    <span className = 'labels'>
                        Airfield
                    </span>
                    <input type = 'text' className = 'textbox' style = {{border: 'none', background: 'none'}} value={errors.airfield} readOnly/>
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
