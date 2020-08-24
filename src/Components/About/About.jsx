import React,{useState} from 'react';
import './about.styles.css';
import AboutData from '../Data/aboutData';
import Toggler from '../Toggler/Toggler';

function About() {

    const [aboutData] = useState(AboutData)

    return (
        <div className='about'>
            <h2 className="about-heading">About Us</h2>
            {
                aboutData.map(({id,...otherProps}) => {
                    return <Toggler key={id} {...otherProps} />
                })
            }
        </div>
    )
}

export default About
