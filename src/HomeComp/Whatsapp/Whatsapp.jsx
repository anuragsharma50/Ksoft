import React from 'react';
import WhatsappIcon from '../../icons/whatsapp.png';
import './whatsapp.style.css';

const openWhatsapp = () => {
    window.location.assign('https://wa.me/919990826002');
}

function Whatsapp() {
    return (
        <div onClick={() => openWhatsapp()} className='whatsapp-redirect-container'>
            <img src={WhatsappIcon} alt="whatsapp" className="whatsapp-redirect" />
        </div>
    )
}

export default Whatsapp
