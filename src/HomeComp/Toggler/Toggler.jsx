import React,{useState} from 'react';
import './toggler.styles.css';

function Toggler({name,contentHeading,content,show,img}) {

    const [open, setOpen] = useState(show)

    const change = () => {
        setOpen(!open)
    }

    let bgcolor = '#ffffff';

    if(open){
        bgcolor = 'rgb(214, 210, 210)';
    }

    return (
        <div className='toggler'>
            <h2 className='toggler-main-heading' style={{backgroundColor:bgcolor}}>{name}
            {
                open && <div className='toggler-icon' onClick={() => change()} style={{bottom:38}}>_</div>
            }
            {
                !open && <div className='toggler-icon' onClick={() => change()}>+</div>
            }
            </h2>

            {
                open && 
                <div>
                <img className='about-image' src={img} alt="{name}"/>
                <h2 className="toggle-content-heading">{contentHeading}</h2>
                <h3 className="toggle-content">{content}</h3>
                </div>
            }  
        </div>
    )
}

export default Toggler
