import React,{useState,useEffect} from 'react';
import Data from '../../HomeComp/Data/imageData';
import './course.style.css'

function Course({match}) {

    const { params: { courseName } } = match;

    const [data] = useState(Data)
    const [index,setIndex] = useState(0)
    
    useEffect(() => {
        for(var i=0;i<data.length;i++){
            if(data[i].name === courseName){
                setIndex(i)   
            }
        }

        return () => {
            
        }
    }, [data,courseName])
    

    return (
        <div className='course'> 
            <h2 className='course-heading'>{data[index].name}</h2>
            <img className='course-specific-image' src={data[index].imgUrl} alt=""/>
            <div className='course-body'>
                <div className='course-body-content'>
                
                {
                    data[index].content && data[index].content.map((line,index) => <p className='course-body-content-p' key={index}>{line}</p>
                    )
                }
                </div>
                <div>
                    Hello
                </div>

            </div>
        </div>
    )
}

export default React.memo(Course)
