import React from 'react';
import './footer.style.css';
import Logo from '../../images/logo.jpg';
import Phone from '../../icons/phone-white.png';
import Mail from '../../icons/mail-white.png';
import Address from '../../icons/address-white.png';
import FB from '../../icons/fb-white.png';
import Twitter from '../../icons/twitter-white.png';
import Linkedin from '../../icons/linkedin-white.png';

import BottomFooter from '../BottomFooter/BottomFooter';

function Footer() {
    return (
        <div>
        <div className='footer'>
            <div className='footer-about'>
                <h3>About us</h3>
                <img className='footer-image' src={Logo} alt="Logo"/>
                <p>KSOFT has specialization in 3 important domains namely: DEVELOPMENT, CONSULTANCY and TRAINING,. 
                The company provides specialized training in 100+ leading technologies like Python, , Data Science,
                Cloud, AWS, Robotics, LINUX and many more.</p>

                <div className='footer-about-icons'>
                    <img className='footer-fb' src={FB} alt="facebook"/>
                    <img className='footer-twitter' src={Twitter} alt="twitter"/>
                    <img className='footer-linkedin' src={Linkedin} alt="linkedin"/>
                </div>

            </div>

            <div className='footer-pages'>
                <h3>Pages</h3>
                <p>Home</p>
                <p>Courses</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>

            <div className='footer-contact'>
                <h3>Contact us</h3>
                <div className='footer-contact-details'>
                    <div className='footer-contact-icons'>
                    <img className='footer-address' src={Address} alt="address"/>
                    <img className='footer-phone' src={Phone} alt="phone"/>
                    <img className='footer-mail' src={Mail} alt="email"/>
                    </div>

                    <div className='footer-contact-data'>
                    <p>Head Office : D - Block, Sector -2, Noida</p> 
                    <p>Registered Office : C - Block, ZETA-1, Greater Noida</p>
                    <p>+91 9990 82 6002</p>
                    <p>info@ksoftindia.com</p>
                    </div>
                </div>
            </div>

        </div>

    <BottomFooter/>
    </div>
    )
}

export default Footer
