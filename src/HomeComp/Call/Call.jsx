import React from 'react';
import './call.styles.css';
import phone from '../../icons/phone.png';

function Call() {
    return (
        <div className='phonecontainer'>
            <img src={phone} alt="phone" className='phoneIcon'/>
            <a className='call' href='tel:+919990826002'>Call us</a>
        </div>
    )
}

export default Call
