import React from 'react';
import './google-link.styles.css';

const openForm = () => {
    window.location.assign('https://forms.gle/YSVy3ENdksbPxT7A8');
}

const GoogleLink = ({setQuery}) => {  
    return (
        <div className='enquiry-form'>
            <div className='form-heading'>
                <h2>Enquiry Form</h2>
                <span className='close' onClick={() => setQuery()}> _ </span>
            </div>
            <div className='google-form-body'>
                <button onClick={() => openForm()} className='google-form-button'>Fill Enquiry Form here</button>
            </div>
        </div>
    )
}

export default GoogleLink
