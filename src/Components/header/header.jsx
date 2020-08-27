import React,{useState} from 'react';
import logo from '../../images/logo.jpg';
import './header.styles.css';

import linkedin from '../../icons/linkedin.png';
import fb from '../../icons/fb.png';
import twitter from '../../icons/twitter.png';
import whatsapp from '../../icons/whatsapp.png';
import phone from '../../icons/phone.png';
import gmail from '../../icons/gmail.png';
import menuIcon from  '../../icons/menu.png';

function Header() {

    const [menu, setMenu] = useState(true)

    const changeMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className='header'>
            <img src={logo} alt="Ksoft" className='logo'/>

            <div className='contacts'>
                <div className='contact'>
                <img src={phone} alt="phone" className='phone'/>
                <h2 className='heading-text'>Mobile No.</h2>
                <p className='heading-data'>+91 9990826002</p>
                </div>

                <div className='contact'>
                <img src={whatsapp} alt="whatsapp" className='whatsapp'/>
                <h2>Whatsapp</h2>
                <p>+91 9990826002</p>
                </div>

                <div className='contact'>
                
                <h2><img src={gmail} alt="gmail" className='gmail'/>Email</h2>
                <p>ksoft@gmail.com</p>
                </div>

                <div className='icons'>
                    <img src={linkedin} alt="linkedin" className='linkedin'/>
                    <img src={fb} alt="fb" className='fb'/>
                    <img src={twitter} alt="twitter" className='twitter'/>
                </div>
            </div>

            

            <div className='headings'>
                <h2 onClick={() => changeMenu()}>
                <img src={menuIcon} alt="menu" className='menu'/>
                </h2>

                {   menu && 
                    <div>
                    <h2 className='text-heading'>Home</h2>
                    <h2 className='text-heading'>About Us</h2>
                    <h2 className='text-heading'>Courses</h2>
                    <h2 className='text-heading'>Industrial Training</h2>
                    <h2 className='text-heading'>Placement</h2>
                    <h2 className='text-heading'>Student Reviews</h2>
                    <h2 className='text-heading'>Certificate</h2>
                    <h2 className='text-heading'>Contact us</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
