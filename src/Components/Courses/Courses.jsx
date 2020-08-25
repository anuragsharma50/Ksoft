import React,{useReducer} from 'react';
import './courses.styles.css';
import ImageMap from '../imageMap/ImageMap';
import Data from '../Data/imageData';

const initialState = {
    Data:Data.filter(({type}) => {
    return type === 'software development'
    }),
    bgColor: {soft:'#25b1b6',cloud:'#4789d4',net:'#4789d4',industrial:'#4789d4',analytics:'#4789d4',bfsi:'#4789d4',ece:'#4789d4'}
}
const reducer = (state,action) => {
    const completeData = Data
    switch(action){
        case 'software development':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'software development'
                }),
                bgColor:{soft:'#25b1b6'}
            }
        case 'cloud computing':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'cloud computing'
                }),
                bgColor:{cloud:'#25b1b6'}
            }
        case 'networking':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'networking'
                }),
                bgColor:{net:'#25b1b6'}
            }
        case 'industrial training':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'industrial training'
                }),
                bgColor:{industrial:'#25b1b6'}
            }
        case 'analytics program':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'analytics program'
                }),
                bgColor:{analytics:'#25b1b6'}
            }
        case 'bfsi':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'bfsi'
                }),
                bgColor:{bfsi:'#25b1b6'}
            }
        case 'ece':
            return {
                Data:completeData.filter(({type}) => {
                return type === 'ece'
                }),
                bgColor:{ece:'#25b1b6'}
            }
        default :
            return state
    }
}

function Courses() {
    const[data,dispatch] = useReducer(reducer,initialState)

    return (
        <div className='course-container'>
            <h2 className='courses-head'>Our Featured Courses</h2>
            <div className='courses-heading'>

                <button className='coursename' 
                onClick={() => dispatch('software development')}
                style={{backgroundColor:data.bgColor.soft}}
                >Software Development</button>

                <button className='coursename' 
                onClick={() => dispatch('industrial training')}
                style={{backgroundColor:data.bgColor.industrial}}
                >Industrial Training</button>

                <button className='coursename' 
                onClick={() => dispatch('analytics program')}
                style={{backgroundColor:data.bgColor.analytics}}
                >Analytics Program</button>

                <button className='coursename' 
                onClick={() => dispatch('cloud computing')}
                style={{backgroundColor:data.bgColor.cloud}}
                >Cloud Computing</button>

                <button className='coursename' 
                onClick={() => dispatch('bfsi')}
                style={{backgroundColor:data.bgColor.bfsi}}
                >BFSI</button>

                <button className='coursename' 
                onClick={() => dispatch('ece')}
                style={{backgroundColor:data.bgColor.ece}}
                >ECE</button>
                
                <button className='coursename' 
                onClick={() => dispatch('networking')}
                style={{backgroundColor:data.bgColor.net}}
                >Networking</button>
            </div>

            <ImageMap imageArray={data.Data} />

        </div>
    )
}

export default Courses
