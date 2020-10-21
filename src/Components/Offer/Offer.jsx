import React from 'react';
import './offer.styles.css';

const openForm = () => {
    window.location.assign('https://forms.gle/YSVy3ENdksbPxT7A8');
}

function Offer() {
    return (
        <div className='offer'>
            <div className='animate'>
            <h1 className='animate-h1'>Congratulation!!!!</h1>
            </div>
            <div className='offer-text'>
                <h2>You have won Flat 50% off on all the Courses</h2>
                <button className='offer-button' onClick={() => openForm()}>Apply Now</button>
            </div>
        </div>
    )
}

export default Offer
