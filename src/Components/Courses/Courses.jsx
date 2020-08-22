import React,{useState} from 'react';
import './courses.styles.css';
import ImageMap from '../imageMap/ImageMap';
import Data from '../Data/imageData';

function Courses() {

    const [data, setData] = useState(Data)

    return (
        <div className='course-container'>
            <h2 className='courses-head'>Our Featured Courses</h2>
            <div className='courses-heading'>
                <button className='coursename'>Industrial Training</button>
                <button className='coursename'>Software Development</button>
                <button className='coursename'>Analytics Program</button>
                <button className='coursename'>Cloud Computing</button>
                <button className='coursename'>BFSI</button>
                <button className='coursename'>ECE</button>
                <button className='coursename'>Smart Professional Program</button>
            </div>

            <ImageMap imageArray={data} />

        </div>
    )
}

export default Courses
