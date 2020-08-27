import React from 'react';
import './imagemap.styles.css';

function ImageMap({imageArray}) {
    return (
        <div className='image-map'>
            {
                imageArray.map(({imgUrl,id}) => 
                    <div key={id} className='container'>
                        <img className='course-image' src={imgUrl} alt='course'/>
                        <div className='middle'>
                            <div className='text'>Read More</div>
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ImageMap
