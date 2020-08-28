import React from 'react';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';
import five from '../../images/5.jpg';
import six from '../../images/6.jpg';
import seven from '../../images/7.jpg';
import eight from '../../images/8.jpg';
import nine from '../../images/9.jpg';
import './images.styles.css';
import { Carousel } from 'react-responsive-carousel';

function Images() {

    const tooglesGroupId = 'Toggles';
    const getConfigurableProps = () => ({
        infiniteLoop: ('infiniteLoop', true, tooglesGroupId)
    })

    return (
        <Carousel autoPlay className='imageholder' {...getConfigurableProps()}>
            <div>
                <img src={one} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={two} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={three} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={four} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={five} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={six} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={seven} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={eight} alt="Ksoft" className='images'/>
            </div>
            <div>
                <img src={nine} alt="Ksoft" className='images'/>
            </div>            
        </Carousel>
    )
}

export default Images
