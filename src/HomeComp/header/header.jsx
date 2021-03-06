import React,{useState,useEffect} from 'react';
import logo from '../../images/logo.jpg';
import './header.styles.css';
import { useMediaQuery } from 'react-responsive'

import { Link } from 'react-router-dom';

import linkedin from '../../icons/linkedin.png';
import fb from '../../icons/fb.png';
import twitter from '../../icons/twitter.png';
import whatsapp from '../../icons/whatsapp.png';
import phone from '../../icons/phone.png';
import gmail from '../../icons/gmail.png';
import menuIcon from  '../../icons/menu.png';

import KSOFT from '../../images/Header/Header-image.jpg';
import Offer from '../../images/Header/diwali-offer.jpg';

function Header() {

    const [menu, setMenu] = useState(true)
    const [offer,setOffer] = useState(true)
    const [discount, setDiscount] = useState(0)
    const [offerClass, setOfferClass] = useState('header-offer  undo-offer-effect')
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        if(Math.random() > 0.5){
            setDiscount(50)
        }
        else{
            setDiscount(30)
        }

        if(isTabletOrMobile){
            setMenu(false)
        }
    }, [])

    const changeMenu = () => {
        setMenu(!menu)
    }

    const openWhatsapp = () => {
        window.location.assign('https://web.whatsapp.com/send?phone=919990826002');
    }

    const openForm = () => {
        window.open("https://forms.gle/YSVy3ENdksbPxT7A8", "_blank")
    }

    const offerEffect = () => {
        setOffer(!offer)
        setOfferClass('header-offer')
    }

    const undoOfferEffect = () => {
        setOffer(!offer)
        setOfferClass('header-offer undo-offer-effect')
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} alt="Ksoft" className='logo' />
            </Link>

            <div className='contacts'>
                <div className='contact'>
                <img src={phone} alt="phone" className='phone'/>
                <h2 className='heading-text'>Mobile No.</h2>
                <p className='heading-data'>+91 9990826002</p>
                </div>

                <div className='contact' onClick={() => openWhatsapp()}>
                <img src={whatsapp} alt="whatsapp" className='whatsapp' />
                <h2 className='heading-text'>Whatsapp</h2>
                <p className='heading-data'>+91 9990826002</p>
                </div>

                <div className='contact'>
                    <img src={gmail} alt="gmail" className='gmail'/>
                    <h2 className='heading-text'>Email</h2>
                    <p className='heading-data'>ksoft@gmail.com</p>
                </div>

                <div className='icons'>
                    <img src={linkedin} alt="linkedin" className='linkedin'/>
                    <img src={fb} alt="fb" className='fb'/>
                    <img src={twitter} alt="twitter" className='twitter'/>
                </div>
            </div>

            <div className='pvt-ltd'>
                <img className='header-image' src={KSOFT} alt="Ksoft Solutions"/>
            </div>

            <div className={offerClass}>
                { offer && <img className='offer-image' src={Offer} alt="Festival Offer" onClick={() => offerEffect()}/> }

                { !offer && 
                    <div className='offer-text-header'>
                        <button onClick={() => undoOfferEffect()} className='offer-close'>X</button>
                        <h3>Congratulation!!!</h3> 
                        <h5>You have Won Flat {discount}% off on all the Courses</h5> 
                        <h4 className='promo'>PromoCode - KSOFT{discount}</h4>
                        <button className='offer-button' onClick={() => openForm()}>Apply Now</button>
                    </div>
                }
            </div>

            <div className='headings'>
                <h2 onClick={() => changeMenu()}>
                <img src={menuIcon} alt="menu" className='menu'/>
                </h2>

                {   menu && 
                    <div className='text-headings'>
                        <Link to='/'>
                            <h2 className='text-heading'>Home</h2>
                        </Link>
                        <Link to='/about'>
                            <h2 className='text-heading'>About Us</h2>
                        </Link>
                        <Link to='/courses'>
                            <h2 className='text-heading'>Courses</h2>
                        </Link>
                        <Link to='/6 Month Live Project Training'>
                            <h2 className='text-heading'>Industrial Training</h2>
                        </Link>
                        <h2 className='text-heading'>Placement</h2>
                        <h2 className='text-heading'>Certificate</h2>
                        <Link to='/contact'>
                            <h2 className='text-heading'>Contact us</h2>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
