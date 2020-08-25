import React from 'react';
import './imagemap.styles.css';

function ImageMap({imageArray}) {
    return (
        <div className='image-map'>
            {
                imageArray.map(({imgUrl,id}) => 
                    <img key={id} className='course-image' src={imgUrl} alt='course'/>
                ) 
            }
        </div>
    )
}

export default ImageMap
