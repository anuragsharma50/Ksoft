import React,{useState,useEffect} from 'react';
import './enquirybox.styles.css';
import EnquiryIcon from '../../icons/enquiry.png';
import GoogleLink from '../GoogleLink/GoogleLink';

function EnquiryBox() {

  const [visiblequery,setVisiblequery] = useState(false)

  const setQuery = () => {
    setVisiblequery(!visiblequery)
}

useEffect(() => {
  setTimeout(() => setQuery(),5000)
  return () => {
    clearTimeout()
  }
}, [])

  return (
    <div>
      {
        visiblequery && <GoogleLink setQuery={setQuery}/>
      }
      {
        !visiblequery && <button className='enquiry-box' onClick={() => setQuery()}>
          <img src={EnquiryIcon} alt="icon" className='enquiry-icon'/>
          Enquiry</button>
      } 
    </div>
  );
}

export default EnquiryBox;