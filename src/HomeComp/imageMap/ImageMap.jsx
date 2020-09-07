import React from 'react';
import './imagemap.styles.css';
import { Link } from 'react-router-dom';

function ImageMap({imageArray}) {
    return (
        <div className='image-map'>
            {
                imageArray.map(({imgUrl,id,name}) => 
                    <div key={id} className='container'>
                        <img className='course-image' src={imgUrl} alt='course'/>
                        <div className='middle'>
                            <Link to={`/${name}`}>
                                <div className='read-more'>Read More</div>
                            </Link>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ImageMap
