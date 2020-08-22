import React from 'react';
import './mail.css';
import gmail from '../../icons/gmail.png';

function Mail() {
    return (
        <div className='mailcontainer'>
            <img src={gmail} alt="gmail" className='mailIcon'/>
            <a className='mail' href='mailto:abc@gmail.com'>Message</a>
        </div>
    )
}

export default Mail
