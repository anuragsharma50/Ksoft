import React from 'react';
import './display.styles.css'
import Carousel from '../Carousel/Images';
import DisplayImg from '../../images/events/6m-event.jpeg'; 

function DisplayImages() {
    return (
        <div className='display-images'>
            <Carousel />
            <img className='event' src={DisplayImg} alt="event"/>
        </div>
    )
}

export default DisplayImages
