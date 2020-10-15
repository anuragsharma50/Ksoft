import React from 'react';
import one from '../../images/Carousel/1.jpg';
import two from '../../images/Carousel/2.jpg';
import three from '../../images/Carousel/3.jpg';
import four from '../../images/Carousel/4.jpg';
import five from '../../images/Carousel/5.jpg';
import six from '../../images/Carousel/6.jpg';
import seven from '../../images/Carousel/7.jpg';
import eight from '../../images/Carousel/8.jpg';
import nine from '../../images/Carousel/9.jpg';
import ten from '../../images/courses/Python-school.jpeg'
import './images.styles.css';
import { Carousel } from 'react-responsive-carousel';

function Images() {
    
    const getConfigurableProps = () => ({
        infiniteLoop: ('infiniteLoop', true, 'Toggles')
    })

    return (
        <Carousel autoPlay className='imageholder' {...getConfigurableProps()}>
                <img src={one} alt="Ksoft" className='images'/>
                <img src={two} alt="Ksoft" className='images'/>
                <img src={three} alt="Ksoft" className='images'/>
                <img src={four} alt="Ksoft" className='images'/>
                <img src={five} alt="Ksoft" className='images'/>
                <img src={six} alt="Ksoft" className='images'/>
                <img src={seven} alt="Ksoft" className='images'/>
                <img src={eight} alt="Ksoft" className='images'/>
                <img src={nine} alt="Ksoft" className='images'/>    
                <img src={ten} alt="Ksoft" className='images'/>    
        </Carousel>
    )
}

export default Images
