import React, {useState} from 'react';
import './Designs.css';
import './NavBar.css';
import AirfieldRecordBar from './AirfieldRecordBar';

function updateField(fields, setFields, whichBox, whatsInBox) {
    const newFields = {...fields};
    newFields[whichBox] = whatsInBox;
    setFields(newFields);
}

function Airfield({info, onModify}) {
    const [big, setBig] = useState(false);
    const [fields, setFields] = useState({ ...info });
    //{info} is the same as doing const info = props.info (object destructuring)
    return (
        <div className = 'record'>
            <div className = 'labels'>
                ID
            </div>
            <input type = 'text' className = 'textbox' value = {fields.idnumber} readOnly/>
            <div className = 'labels'>
                Description
            </div>
            <input type = 'text' className = 'textbox' value = {fields.description || ''} onChange = {(event) => updateField(fields, setFields, 'description', event.target.value)}/>
            <div className={big ? 'big' : 'small'}>
                <div className = 'labels'>
                    Tips
                </div>
                <input type = 'text' className = 'textbox' value = {fields.tips || ''} onChange = {(event) => updateField(fields, setFields, 'tips', event.target.value)}/>
                <div className = 'labels'>
                    Pros
                </div>
                <input type = 'text' className = 'textbox' value = {fields.pros || ''} onChange = {(event) => updateField(fields, setFields, 'pros', event.target.value)}/>
                <div className = 'labels'>
                    Cons
                </div>
                <input type = 'text' className = 'textbox' value = {fields.cons || ''} onChange = {(event) => updateField(fields, setFields, 'cons', event.target.value)}/>
                <div className = 'labels'>
                    Landing Fee
                </div>
                <input type = 'text' className = 'textbox' value = {fields.landingfee || ''} onChange = {(event) => updateField(fields, setFields, 'landingfee', event.target.value)}/>
            </div>
            <div style = {{margin: '10px'}}>
                <AirfieldRecordBar specificAirfieldFields={fields} onModify={onModify}/>
            </div>
            <div style = {{textAlign: 'center'}}>
                <div className={big ? 'collapseButton' : 'expandButton'} onClick = {() => setBig(!big)}> ^ </div>
            </div>
        </div>
    )
}

export default Airfield;