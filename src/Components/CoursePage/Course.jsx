import React,{useState,useEffect} from 'react';

import Data from '../../HomeComp/Data/imageData';

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
        <div>
            <h2>{data[index].name}</h2>
            <img src={data[index].imgUrl} alt=""/>
        </div>
    )
}

export default React.memo(Course)
