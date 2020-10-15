import React,{useState} from 'react';
import './toggler.styles.css';

function Toggler({name,contentHeading,content,show,img,listName,listContent}) {

    const [open, setOpen] = useState(show)

    const change = () => {
        setOpen(!open)
    }

    let bgcolor = '#ffffff';

    if(open){
        bgcolor = '#3f3e3e';
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
                { typeof(content) === 'string' ? <h3 className="toggle-content">{content}</h3> : <h3 className="toggle-content">{content.map((line,index) => <p key={index}>{line}</p>)}</h3>}
                <div className='toggle-list'>
                    { listName && <h2 className='toggle-list-name'>{listName}</h2> }
                    { listContent && <ul className='toggle-list-content'>{listContent.map((content,index) => <li key={index}>{content}</li>)}</ul> }
                </div>
                </div>
            }  
        </div>
    )
}

export default Toggler
