import React from 'react';
import './NavBar.css';
import './Designs.css';
import './DeleteConfirmation.css';

function DeleteConfirmation({deleteit, cancelit}) {
    return (
        <div className='ontopofpage'>
            <div className='record' style={{backgroundColor: 'white', opacity:'1'}}>
                <div style={{margin:'10px'}}>
                    Are you sure?
                </div>
                <div>
                    <div className='navigate' style={{borderRadius: '15px'}} onClick={deleteit}>
                        Delete
                    </div>
                    <div className='navigate' style={{borderRadius: '15px'}} onClick={cancelit}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DeleteConfirmation;