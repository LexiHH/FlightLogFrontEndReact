import React from 'react';
import './NavBar.css';
import './Designs.css';
import './DeleteConfirmation.css';

function DeleteConfirmation({deleteit, cancelit}) {
    return (
        <div className='ontopofpage'>
            <div className='record' style={{backgroundColor: 'white', opacity:'1'}}>
                <div style={{margin:'10px', fontFamily:"'Courier New', 'monospace'", color:'rgb(9,16,62)'}}>
                    Are you sure you want to delete?
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <div className='record-button' style={{borderRadius: '15px', flexGrow:'1', margin:'5px'}} onClick={deleteit}>
                        Delete
                    </div>
                    <div className='record-button' style={{borderRadius: '15px', flexGrow:'1', margin:'5px'}} onClick={cancelit}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DeleteConfirmation;