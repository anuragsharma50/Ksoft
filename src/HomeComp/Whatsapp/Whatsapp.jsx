import React from 'react';
import WhatsappIcon from '../../icons/whatsapp.png';
import './whatsapp.style.css';
import { useMediaQuery } from 'react-responsive'
 


const openWhatsapp = () => {
    window.location.assign('https://web.whatsapp.com/send?phone=919990826002');
}

const openWhatsappMobile = () => {
    window.location.assign('https://wa.me/919990826002');
}

function Whatsapp() {
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
    })

    return (
        <div>
        {
            isDesktopOrLaptop ? <div onClick={() => openWhatsapp()} className='whatsapp-redirect-container'>
            <img src={WhatsappIcon} alt="whatsapp" className="whatsapp-redirect" />
            </div> 
            :  <div onClick={() => openWhatsappMobile()} className='whatsapp-redirect-container'>
            <img src={WhatsappIcon} alt="whatsapp" className="whatsapp-redirect" />
            </div> 
        }
        </div>
    )
}

export default Whatsapp
