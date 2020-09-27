import React from 'react';
import './contact-us.styles.css';
import Phone from '../../icons/phone.png';
import Mail from '../../icons/gmail.png';
import Address from '../../icons/address.png';
import Whatsapp from '../../icons/whatsapp.png';

function ContactUs() {
    return (
        <div className='contact-us'>
            <h2 className='course-heading'>
                Contact us
            </h2>
            <div className='contact-details'>
                <img className='contact-icon' src={Address} alt="address"/>
                <p>Head Office : D - Block, Sector -2, Noida Registered Office : C - Block, ZETA-1, Greater Noida</p> 
                    <div className='contact-grid'>
                        <div>
                            <img className='contact-icon' src={Phone} alt="phone"/>
                            <p>+91 9990 82 6002</p>
                        </div>
                        
                        <div>
                            <img className='contact-icon' src={Mail} alt="email"/>
                            <p>info@ksoftindia.com</p>
                        </div>

                        <div>
                            <img className='contact-icon' src={Whatsapp} alt="whatsapp"/>
                            <p>+91 9990 82 6002</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ContactUs
